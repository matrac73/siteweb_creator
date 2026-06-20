import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero({
  eyebrow,
  title,
  subtitle,
  text,
  image,
  alt,
  primaryCta,
  secondaryCta,
  compact = false
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  text?: string;
  image: string;
  alt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden", compact ? "min-h-[68vh]" : "min-h-[92vh]")}>
      <Image
        src={image}
        alt={alt}
        fill
        priority={!compact}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/82 via-ink/48 to-ink/16" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ivory to-transparent" />
      <div className="relative mx-auto flex min-h-[inherit] max-w-7xl items-center px-4 pb-28 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-chalk">
          {eyebrow ? (
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-sand">{eyebrow}</p>
          ) : null}
          <h1 className="font-serif text-6xl leading-[0.92] sm:text-7xl lg:text-8xl">{title}</h1>
          {subtitle ? <p className="mt-6 text-xl font-medium leading-8 text-chalk/95 sm:text-2xl">{subtitle}</p> : null}
          {text ? <p className="mt-5 max-w-2xl text-base leading-8 text-chalk/78 sm:text-lg">{text}</p> : null}
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink> : null}
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary" className="border-chalk/35 bg-chalk/10 text-chalk hover:bg-chalk hover:text-ink">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
