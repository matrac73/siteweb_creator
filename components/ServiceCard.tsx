import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { type Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <a href={service.href} className="group block overflow-hidden rounded-lg bg-chalk shadow-soft">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-chalk">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sand">{service.eyebrow}</p>
          <h3 className="mt-2 font-serif text-3xl">{service.shortTitle}</h3>
        </div>
      </div>
      <div className="flex items-start justify-between gap-5 p-6">
        <p className="text-sm leading-7 text-ink/70">{service.description}</p>
        <span className="rounded-full bg-pine p-2 text-chalk transition group-hover:bg-fuchsia">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
