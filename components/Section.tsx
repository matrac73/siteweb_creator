import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className,
  id
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-4 py-20 sm:px-6 lg:px-8 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-fuchsia">{eyebrow}</p>
            ) : null}
            {title ? (
              <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
            ) : null}
            {intro ? <p className="mt-5 text-lg leading-8 text-ink/70">{intro}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
