import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ui/button";
import { getService, services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.shortTitle} sur mesure a Albertville`,
    description: service.description,
    path: service.href,
    keywords: [`${service.shortTitle.toLowerCase()} Albertville`, `${service.shortTitle.toLowerCase()} sur mesure Albertville`]
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Architecture interieure", href: "/architecture-interieure" },
          { name: service.shortTitle, href: service.href }
        ])}
      />
      <Hero
        compact
        eyebrow={service.eyebrow}
        title={service.title}
        subtitle={service.description}
        image={service.image}
        alt={service.alt}
        primaryCta={{ label: service.cta, href: "/contact" }}
        secondaryCta={{ label: "Voir les realisations", href: "/realisations" }}
      />
      <Breadcrumbs
        items={[
          { label: "Architecture interieure", href: "/architecture-interieure" },
          { label: service.shortTitle, href: service.href }
        ]}
      />
      <Section eyebrow="Sur mesure" title={service.title} intro={service.intro}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="grid gap-4">
            {service.highlights.map((item) => (
              <div key={item} className="rounded-lg border border-ink/10 bg-chalk p-5">
                <p className="font-serif text-2xl text-ink">{item}</p>
              </div>
            ))}
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-lg shadow-soft">
            <Image src={service.image} alt={service.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>
      <Section className="bg-chalk" eyebrow="Galerie" title={`Inspiration ${service.shortTitle.toLowerCase()}`}>
        <div className="grid gap-5 md:grid-cols-3">
          {[service.image, "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=82", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=82"].map((image, index) => (
            <div key={image} className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
              <Image
                src={image}
                alt={`${service.shortTitle} sur mesure Essences d'Art ${index + 1}`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-9">
          <ButtonLink href="/contact">{service.cta}</ButtonLink>
        </div>
      </Section>
      <CTASection title="Vous imaginez un espace a votre mesure ?" cta={service.cta} />
    </>
  );
}
