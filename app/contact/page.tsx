import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ui/button";
import { businessInfo } from "@/data/businessInfo";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact Essences d'Art Albertville",
  description:
    "Contactez Essences d'Art a Albertville pour un projet d'architecture interieure, cuisine, dressing, salle de bain, sauna ou une question Palais des Thes.",
  path: "/contact",
  keywords: ["contact Essences d'Art Albertville", "architecte interieur Albertville"]
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", href: "/contact" }])} />
      <Hero
        compact
        eyebrow="Contact"
        title="Parlons de votre projet"
        subtitle="Une idee, une contrainte, une envie de transformation : ecrivons ensemble la suite de votre interieur."
        image="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2200&q=86"
        alt="Salon contemporain lumineux avec bois et matieres naturelles"
        primaryCta={{ label: "Appeler", href: businessInfo.phoneHref }}
      />
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <Section eyebrow="Coordonnees" title="Essences d'Art">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            <div className="rounded-lg bg-pine p-8 text-chalk shadow-soft">
              <h2 className="font-serif text-4xl">Nous rencontrer</h2>
              <div className="mt-7 grid gap-4 text-chalk/78">
                <p className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0" />
                  <span>{businessInfo.address.street}, {businessInfo.address.postalCode} {businessInfo.address.city}</span>
                </p>
                <a href={businessInfo.mailHref} className="flex gap-3 hover:text-chalk">
                  <Mail className="mt-1 h-5 w-5 shrink-0" />
                  <span>{businessInfo.email}</span>
                </a>
                <a href={businessInfo.phoneHref} className="flex gap-3 hover:text-chalk">
                  <Phone className="mt-1 h-5 w-5 shrink-0" />
                  <span>{businessInfo.phone}</span>
                </a>
              </div>
              <ButtonLink href={businessInfo.phoneHref} className="mt-8 w-full sm:hidden">
                Appeler maintenant
              </ButtonLink>
            </div>
            <div className="rounded-lg border border-ink/10 bg-chalk p-8">
              <h2 className="font-serif text-3xl text-ink">Acces</h2>
              <p className="mt-4 text-base leading-7 text-ink/70">
                Situee a Albertville, la boutique accueille vos demandes d'architecture interieure et vos questions autour de la selection Palais des Thes.
                Les horaires sont a completer selon les informations confirmees.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
