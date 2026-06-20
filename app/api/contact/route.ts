import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  projectType: z.string().min(1),
  budget: z.string().optional(),
  message: z.string().min(20),
});

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "inconnu"
  );
}

interface GeoData {
  country: string;
  regionName: string;
  city: string;
  lat: number;
  lon: number;
  isp: string;
  timezone: string;
}

async function getGeolocation(ip: string): Promise<GeoData | null> {
  const privateRanges = ["::1", "127.0.0.1", "localhost"];
  const isPrivate =
    privateRanges.includes(ip) ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(ip);

  if (isPrivate) return null;

  try {
    const res = await fetch(
      `http://ip-api.com/json/${ip}?lang=fr&fields=status,country,regionName,city,lat,lon,isp,timezone`,
      { signal: AbortSignal.timeout(3000) }
    );
    const data = (await res.json()) as { status: string } & GeoData;
    return data.status === "success" ? data : null;
  } catch {
    return null;
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(
  data: z.infer<typeof schema>,
  ip: string,
  geo: GeoData | null,
  userAgent: string | null
): string {
  const geoBlock = geo
    ? `${escapeHtml(geo.city)}, ${escapeHtml(geo.regionName)}, ${escapeHtml(geo.country)}<br>
       Coordonnées : ${geo.lat}, ${geo.lon}<br>
       Fuseau horaire : ${escapeHtml(geo.timezone)}<br>
       Fournisseur (FAI) : ${escapeHtml(geo.isp)}`
    : "Non disponible (IP locale ou service indisponible)";

  const rows = [
    ["Prénom", escapeHtml(data.firstName)],
    ["Nom", escapeHtml(data.lastName)],
    ["Email", `<a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>`],
    ["Téléphone", escapeHtml(data.phone)],
    ["Type de projet", escapeHtml(data.projectType)],
    ["Budget indicatif", data.budget ? escapeHtml(data.budget) : "<em>Non renseigné</em>"],
    ["Message", escapeHtml(data.message).replace(/\n/g, "<br>")],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 14px;background:#f9f7f4;font-weight:600;white-space:nowrap;border-bottom:1px solid #e5e2dc;width:170px">${label}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e2dc">${value}</td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><title>Nouvelle demande – Essences d'Art</title></head>
<body style="margin:0;padding:0;background:#f3f1ed;font-family:Georgia,serif">
  <div style="max-width:620px;margin:32px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08)">
    <div style="background:#2d4a3e;padding:28px 32px">
      <h1 style="margin:0;color:#f3f1ed;font-size:22px;letter-spacing:.5px">Essences d'Art — Nouvelle demande de contact</h1>
    </div>
    <div style="padding:28px 32px">
      <table style="width:100%;border-collapse:collapse;font-size:15px;color:#1a1a1a">
        ${tableRows}
      </table>

      <div style="margin-top:28px;padding:20px;background:#f9f7f4;border-radius:6px;border-left:4px solid #2d4a3e">
        <h2 style="margin:0 0 12px;font-size:15px;color:#2d4a3e;text-transform:uppercase;letter-spacing:.5px">Localisation de l'envoi</h2>
        <p style="margin:0 0 6px;font-size:13px;color:#555"><strong>Adresse IP :</strong> ${escapeHtml(ip)}</p>
        <p style="margin:0 0 6px;font-size:13px;color:#555"><strong>Localisation :</strong> ${geoBlock}</p>
        ${userAgent ? `<p style="margin:8px 0 0;font-size:12px;color:#888;word-break:break-all"><strong>Navigateur :</strong> ${escapeHtml(userAgent)}</p>` : ""}
      </div>
    </div>
    <div style="padding:16px 32px;background:#f9f7f4;border-top:1px solid #e5e2dc">
      <p style="margin:0;font-size:12px;color:#888">Ce message a été envoyé depuis le formulaire de contact du site Essences d'Art Albertville.</p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Données invalides." }, { status: 400 });
    }

    const data = parsed.data;
    const ip = getClientIp(req);
    const userAgent = req.headers.get("user-agent");

    const geo = await getGeolocation(ip);

    const html = buildHtml(data, ip, geo, userAgent);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Essences d'Art – Contact" <${process.env.SMTP_USER}>`,
      to: ["mathieu.ract@gmail.com", "frederique.morlat@gmail.com"],
      replyTo: data.email,
      subject: `[Contact] ${data.firstName} ${data.lastName} — ${data.projectType}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Email send error:", err);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
