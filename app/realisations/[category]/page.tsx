import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Section } from "@/components/Section";
import { categoryBySlug, projects, projectSlugByCategory, type ProjectCategory } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, imageGallerySchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return Object.values(projectSlugByCategory).map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categoryBySlug[slug];
  if (!category) return {};

  return buildMetadata({
    title: `Realisations ${category.toLowerCase()} a Albertville`,
    description: `Selection de realisations ${category.toLowerCase()} par Essences d'Art a Albertville.`,
    path: `/realisations/${slug}`,
    keywords: [`${category.toLowerCase()} sur mesure Albertville`, "agencement interieur Albertville"]
  });
}

export default async function CategoryProjectsPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = categoryBySlug[slug] as ProjectCategory | undefined;
  if (!category) notFound();

  const filtered = projects.filter((project) => project.category === category);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Nos realisations", href: "/realisations" },
          { name: category, href: `/realisations/${slug}` }
        ])}
      />
      <JsonLd data={imageGallerySchema(filtered)} />
      <Hero
        compact
        eyebrow="Realisations"
        title={category}
        subtitle={`Une selection de projets ${category.toLowerCase()} concus avec exigence, confort et sens des usages.`}
        image={filtered[0]?.image ?? "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2200&q=86"}
        alt={filtered[0]?.alt ?? `Realisations ${category} Essences d'Art`}
        primaryCta={{ label: "Prendre contact", href: "/contact" }}
      />
      <Breadcrumbs
        items={[
          { label: "Nos realisations", href: "/realisations" },
          { label: category, href: `/realisations/${slug}` }
        ]}
      />
      <Section eyebrow="Galerie filtree" title={`Realisations ${category.toLowerCase()}`}>
        <ProjectGallery initialCategory={category} showFilters={false} />
      </Section>
      <CTASection title="Vous avez un projet similaire ? Parlons-en." cta="Prendre contact" />
    </>
  );
}
