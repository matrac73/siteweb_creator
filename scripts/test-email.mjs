// Test isolé de l'envoi d'email SMTP (Gmail) — node scripts/test-email.mjs
import { readFileSync } from "node:fs";
import nodemailer from "nodemailer";

// Charge .env.local sans dépendance externe
function loadEnv(path) {
  try {
    for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !line.trim().startsWith("#")) process.env[m[1]] ??= m[2];
    }
  } catch {}
}
loadEnv(".env.local");

const { SMTP_USER, SMTP_PASSWORD } = process.env;
console.log("SMTP_USER:", SMTP_USER || "(manquant)");
console.log("SMTP_PASSWORD:", SMTP_PASSWORD ? `défini (${SMTP_PASSWORD.length} car.)` : "(manquant)");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
});

console.log("\n→ Vérification de la connexion SMTP...");
await transporter.verify();
console.log("✅ Connexion + authentification OK");

console.log("\n→ Envoi d'un email de test...");
const info = await transporter.sendMail({
  from: `"Essences d'Art – Test" <${SMTP_USER}>`,
  to: ["mathieu.ract@adagiapartners.com"],
  subject: "[TEST] Vérification du formulaire de contact",
  html: "<p>Ceci est un email de test envoyé depuis <strong>scripts/test-email.mjs</strong>. Si tu le reçois, la configuration SMTP fonctionne. ✅</p>",
});
console.log("✅ Email envoyé — id:", info.messageId);
console.log("   Vérifie la boîte mathieu.ract@adagiapartners.com");
