import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ButtonLink } from "@/components/ui/button";
import { services } from "@/data/services";
import { teaCategories } from "@/data/teaCategories";
import { businessInfo } from "@/data/businessInfo";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Essences d'Art"
        subtitle="Architecture interieure, agencement sur mesure et art de vivre a Albertville"
        text="Nous imaginons des interieurs fonctionnels, elegants et uniques, penses autour de vos usages, de vos envies et de votre bien-etre."
        image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=86"
        alt="Interieur contemporain chaleureux avec bois, lumiere naturelle et mobilier sur mesure"
        primaryCta={{ label: "Discuter de mon projet", href: "/contact" }}
        secondaryCta={{ label: "Voir nos realisations", href: "/realisations" }}
      />

      <Section
        eyebrow="Architecture interieure"
        title="Des projets d'interieur geres de A a Z"
        intro="Nous concevons, amenageons et agencons des espaces fonctionnels, esthetiques et confortables. Volumes, lumiere, matieres, couleurs, mobilier, contraintes techniques et budget sont traites avec la meme exigence."
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=82"
              alt="Salon avec bibliotheque sur mesure, bois et matieres naturelles"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-6 text-lg leading-8 text-ink/72">
            <p>
              L'essence de l'art ne se definit pas : elle se revele dans un interieur qui vous ressemble.
              Chaque chantier est unique, parce que vos habitudes, vos envies et votre lieu le sont aussi.
            </p>
            <p>
              Depuis 1999, nous accompagnons particuliers et professionnels avec une approche personnalisee,
              sensible aux matieres et rigoureuse dans l'execution.
            </p>
            <ButtonLink href="/architecture-interieure" className="w-fit">
              Decouvrir l'architecture interieure
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section eyebrow="Nos univers" title="Sauna, cuisine, dressing, salle de bain">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="bg-chalk" eyebrow="Un metier, une passion" title="Des faiseurs de reves, et des professionnels rigoureux">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            "Nous partons de l'ecoute du besoin pour composer un projet coherent, beau et realisable.",
            "Nous choisissons les matieres, les couleurs et les equipements pour creer une atmosphere durable.",
            "Nous gardons le cap sur les usages, les contraintes techniques et le budget pour avancer avec clarte."
          ].map((text, index) => (
            <div key={text} className="rounded-lg border border-ink/10 bg-ivory p-7">
              <p className="font-serif text-5xl text-fuchsia">0{index + 1}</p>
              <p className="mt-5 text-base leading-8 text-ink/72">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Palais des Thes"
        title="Le the comme prolongement de l'art de vivre"
        intro="Boire un the n'est pas seulement un moment de degustation : c'est une maniere de ralentir, de savourer et de creer une harmonie avec ce qui nous entoure."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teaCategories.map((category) => (
            <Link key={category.slug} href={category.href} className="group overflow-hidden rounded-lg border border-ink/10 bg-chalk transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia">Selection boutique</span>
                <h3 className="mt-3 font-serif text-3xl text-ink">{category.name}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{category.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-pine">
                  Decouvrir <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Realisations"
        title="Des interieurs penses sur mesure"
        intro="Une selection de projets pour montrer l'esprit Essences d'Art : fonctionnalite, esthetique et art de vivre."
      >
        <ProjectGallery />
        <div className="mt-8">
          <ButtonLink href="/realisations">Explorer les realisations</ButtonLink>
        </div>
      </Section>

      <Section className="bg-chalk" eyebrow="Contact" title="Parlons de votre projet">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg bg-pine p-8 text-chalk">
            <h3 className="font-serif text-4xl">Essences d'Art</h3>
            <div className="mt-6 grid gap-3 text-chalk/78">
              <p>{businessInfo.address.street}</p>
              <p>{businessInfo.address.postalCode} {businessInfo.address.city}</p>
              <a href={businessInfo.mailHref}>{businessInfo.email}</a>
              <a href={businessInfo.phoneHref}>{businessInfo.phone}</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
