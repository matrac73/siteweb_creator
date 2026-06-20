import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ButtonLink } from "@/components/ui/button";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Architecture interieure a Albertville",
  description:
    "Conception, amenagement et agencement interieur sur mesure a Albertville : volumes, lumieres, matieres, mobilier, contraintes techniques et budget.",
  path: "/architecture-interieure",
  keywords: ["architecte interieur Albertville", "agencement interieur Albertville", "amenagement interieur Albertville"]
});

export default function ArchitecturePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Architecture interieure", href: "/architecture-interieure" }])} />
      <Hero
        compact
        eyebrow="Conception et agencement"
        title="Architecture interieure"
        subtitle="Des espaces fonctionnels, esthetiques et confortables, concus autour de votre maniere de vivre."
        image="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2200&q=86"
        alt="Interieur haut de gamme avec bois, canape et lumiere naturelle"
        primaryCta={{ label: "Discuter de mon projet", href: "/contact" }}
        secondaryCta={{ label: "Decouvrir nos univers", href: "#univers" }}
      />
      <Breadcrumbs items={[{ label: "Architecture interieure", href: "/architecture-interieure" }]} />
      <Section
        eyebrow="Approche"
        title="Un interieur a votre image"
        intro="L'Essence de l'Art ne se definit pas : nos creations seront a votre image, car vous etes unique."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="grid gap-6 text-lg leading-8 text-ink/72">
            <p>
              Nous concevons, amenageons et agencons des espaces interieurs fonctionnels, esthetiques et confortables.
              Chaque decision part de l'ecoute du besoin : vos habitudes, vos contraintes, vos envies, votre budget.
            </p>
            <p>
              Nous jouons avec les volumes, la lumiere, les matieres et les equipements pour creer un interieur qui vous ressemble.
              L'accompagnement s'adresse aux particuliers comme aux professionnels, avec une attention constante portee a la faisabilite.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Ecoute du besoin", "Choix des matieres", "Couleurs et lumiere", "Mobilier et equipements", "Contraintes techniques", "Suivi du budget"].map((item) => (
                <div key={item} className="rounded-md border border-ink/10 bg-chalk p-4 text-sm font-semibold text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82"
              alt="Detail d'un interieur en bois avec mobilier contemporain"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      <Section id="univers" className="bg-chalk" eyebrow="Univers" title="Quatre expertises pour composer votre lieu">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <Section eyebrow="De A a Z" title="Un cadre clair pour avancer sereinement">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Comprendre", "Visite, dialogue, releve des contraintes et clarification de vos attentes."],
            ["Concevoir", "Intentions, materiaux, couleurs, volumes, mobilier et arbitrages budgetaires."],
            ["Realiser", "Coordination des choix, suivi du projet et attention aux finitions."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg bg-chalk p-7 shadow-soft">
              <h3 className="font-serif text-3xl text-ink">{title}</h3>
              <p className="mt-4 text-base leading-7 text-ink/68">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-9">
          <ButtonLink href="/contact">Discuter de mon projet</ButtonLink>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
