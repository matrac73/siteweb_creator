import { ButtonLink } from "@/components/ui/button";

export function CTASection({
  title = "Ouvrons ensemble la porte d'un interieur qui vous ressemble.",
  text = "Parlez-nous de vos envies, de vos contraintes et du lieu que vous souhaitez transformer. Nous vous repondrons avec une approche claire, humaine et mesuree.",
  cta = "Prendre contact",
  href = "/contact"
}: {
  title?: string;
  text?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="bg-pine px-4 py-20 text-chalk sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.6fr] lg:items-end">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-sand">Votre projet</p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-chalk/75">{text}</p>
        </div>
        <div className="lg:text-right">
          <ButtonLink href={href} variant="secondary" className="border-chalk/25 bg-chalk text-ink hover:bg-sand">
            {cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
