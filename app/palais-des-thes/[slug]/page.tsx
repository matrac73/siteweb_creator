import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ui/button";
import { getTeaCategory, teaCategories } from "@/data/teaCategories";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teaCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getTeaCategory(slug);
  if (!category) return {};

  return buildMetadata({
    title: `${category.name} Palais des Thes a Albertville`,
    description: category.description,
    path: category.href,
    keywords: [`${category.name} Albertville`, "Palais des Thes Albertville"]
  });
}

export default async function TeaCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getTeaCategory(slug);
  if (!category) notFound();

  const isInfusion = category.slug === "infusions";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Palais des Thes", href: "/palais-des-thes" },
          { name: category.name, href: category.href }
        ])}
      />
      <Hero
        compact
        eyebrow="Palais des Thes"
        title={category.name}
        subtitle={category.description}
        image={category.image}
        alt={category.alt}
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
      />
      <Breadcrumbs
        items={[
          { label: "Palais des Thes", href: "/palais-des-thes" },
          { label: category.name, href: category.href }
        ]}
      />
      <Section eyebrow="A decouvrir en boutique" title={category.name}>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="grid gap-5 text-lg leading-8 text-ink/72">
            <p>{category.description}</p>
            {isInfusion ? (
              <p>
                Les infusions sont sans theine et reunissent plantes, fruits, fleurs et epices. Elles accompagnent
                volontiers tous les moments de la journee, avec des profils apaisants, gourmands ou rafraichissants
                selon les recettes, sans promesse medicale.
              </p>
            ) : (
              <p>
                La selection exacte peut evoluer au fil des arrivages et des saisons. Passez en boutique ou contactez-nous
                pour connaitre les references disponibles actuellement.
              </p>
            )}
            <div className="rounded-lg border border-ink/10 bg-chalk p-6">
              <h2 className="font-serif text-3xl text-ink">Structure extensible</h2>
              <p className="mt-3 text-base leading-7 text-ink/68">
                Cet espace est pret a accueillir plus tard des fiches produits, origines, conseils de preparation et notes de degustation.
              </p>
            </div>
            <ButtonLink href="/contact" className="w-fit">
              Nous contacter
            </ButtonLink>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
            <Image src={category.image} alt={category.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>
      <CTASection title="Envie de decouvrir notre selection Palais des Thes ?" cta="Prendre contact" />
    </>
  );
}
