import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, imageGallerySchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Nos realisations",
  description:
    "Portfolio Essences d'Art a Albertville : cuisines, salles de bain, dressings, terrasses et agencements sur mesure.",
  path: "/realisations",
  keywords: ["realisations architecture interieure Albertville", "cuisine sur mesure Albertville", "dressing sur mesure Albertville"]
});

export default function RealisationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Nos realisations", href: "/realisations" }])} />
      <JsonLd data={imageGallerySchema(projects)} />
      <Hero
        compact
        eyebrow="Portfolio"
        title="Nos realisations"
        subtitle="Des interieurs penses sur mesure, entre fonctionnalite, esthetique et art de vivre."
        image="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=86"
        alt="Interieur contemporain avec bois, grandes ouvertures et mobilier elegant"
        primaryCta={{ label: "Discuter de mon projet", href: "/contact" }}
      />
      <Breadcrumbs items={[{ label: "Nos realisations", href: "/realisations" }]} />
      <Section eyebrow="Galerie" title="Explorer les projets">
        <ProjectGallery />
      </Section>
      <CTASection title="Vous avez un projet similaire ? Parlons-en." cta="Prendre contact" />
    </>
  );
}
