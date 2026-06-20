import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { teaCategories } from "@/data/teaCategories";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Palais des Thes a Albertville",
  description:
    "Essences d'Art est revendeur Palais des Thes a Albertville : thes verts, noirs, blancs, matcha, Pu Erh, rooibos, mate, infusions et oolong.",
  path: "/palais-des-thes",
  keywords: ["Palais des Thes Albertville", "the Albertville", "infusions Albertville"]
});

export default function PalaisDesThesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Palais des Thes", href: "/palais-des-thes" }])} />
      <Hero
        compact
        eyebrow="Art de vivre"
        title="Palais des Thes"
        subtitle="Une selection en boutique pour prolonger l'experience des matieres, du calme et du geste juste."
        image="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=2200&q=86"
        alt="Tasses de the et feuilles seches sur une table en bois"
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
      />
      <Breadcrumbs items={[{ label: "Palais des Thes", href: "/palais-des-thes" }]} />
      <Section
        eyebrow="Revendeur Palais des Thes"
        title="Ralentir, savourer, habiter le moment"
        intro="Boire un the n'est pas seulement un moment de degustation : c'est une maniere de ralentir, de savourer et de creer une harmonie avec ce qui nous entoure."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teaCategories.map((category) => (
            <Link key={category.slug} href={category.href} className="group rounded-lg border border-ink/10 bg-chalk p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <h2 className="font-serif text-3xl text-ink">{category.name}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/68">{category.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-pine">
                Decouvrir en boutique <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection title="Une envie precise ou une question sur la selection ?" cta="Nous contacter" />
    </>
  );
}
