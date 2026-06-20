import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Revue de presse",
  description: "Articles et parutions presse consacres a Essences d'Art a Albertville. Contenu presse a completer.",
  path: "/revue-de-presse"
});

const pressItems = [
  {
    title: "Contenu presse a completer",
    media: "Media a renseigner",
    date: "Date a renseigner",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=82"
  }
];

export default function PressPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Revue de presse", href: "/revue-de-presse" }])} />
      <Hero
        compact
        eyebrow="Presse"
        title="Ils parlent de nous"
        subtitle="Un espace sobre pour rassembler les articles, parutions et mentions presse d'Essences d'Art."
        image="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=2200&q=86"
        alt="Journaux et revues poses sur une table claire"
      />
      <Breadcrumbs items={[{ label: "Revue de presse", href: "/revue-de-presse" }]} />
      <Section eyebrow="A completer" title="Revue de presse">
        <div className="grid gap-6 md:grid-cols-2">
          {pressItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-lg bg-chalk shadow-soft">
              <div className="relative aspect-[16/10]">
                <Image src={item.image} alt="Placeholder editorial pour revue de presse" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia">{item.media}</p>
                <h2 className="mt-3 font-serif text-3xl text-ink">{item.title}</h2>
                <p className="mt-3 text-sm text-ink/60">{item.date}</p>
                <p className="mt-5 text-base leading-7 text-ink/70">
                  Cette page est prete a recevoir les informations presse exactes sans inventer de citation ni de reference.
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CTASection title="Vous souhaitez echanger avec Essences d'Art ?" cta="Prendre contact" />
    </>
  );
}
