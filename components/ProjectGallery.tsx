"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectGallery({
  initialCategory,
  showFilters = true
}: {
  initialCategory?: ProjectCategory;
  showFilters?: boolean;
}) {
  const [active, setActive] = useState<"Toutes" | ProjectCategory>(initialCategory ?? "Toutes");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visibleProjects = useMemo(() => {
    return projects.filter((project) => active === "Toutes" || project.category === active);
  }, [active]);

  const selected = projects.find((project) => project.id === selectedId);

  return (
    <>
      {showFilters ? (
        <div className="mb-8 flex flex-wrap gap-2" role="list" aria-label="Filtres des realisations">
          {projectCategories.map((category) => (
            <Button
              key={category}
              type="button"
              size="sm"
              variant={active === category ? "primary" : "secondary"}
              onClick={() => setActive(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      ) : null}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visibleProjects.map((project, index) => (
          <button
            type="button"
            key={project.id}
            aria-label={`Ouvrir la realisation ${project.title}`}
            onClick={() => setSelectedId(project.id)}
            className="group mb-5 block w-full overflow-hidden rounded-lg bg-chalk text-left shadow-soft"
          >
            <div className={cn("relative overflow-hidden", index % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]")}>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/68 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute bottom-0 p-5 text-chalk">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand">{project.category}</p>
                <h3 className="mt-2 font-serif text-2xl">{project.title}</h3>
              </div>
            </div>
            <p className="p-5 text-sm leading-7 text-ink/70">{project.shortDescription}</p>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={selected.title}>
          <div className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-lg bg-chalk">
            <button
              type="button"
              aria-label="Fermer la realisation"
              onClick={() => setSelectedId(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-chalk p-3 text-ink shadow-soft"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative aspect-[4/3] min-h-[320px] lg:min-h-[620px]">
                <Image src={selected.image} alt={selected.alt} fill sizes="90vw" className="object-cover" />
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia">{selected.category}</p>
                <h3 className="mt-3 font-serif text-4xl text-ink">{selected.title}</h3>
                <p className="mt-5 text-base leading-8 text-ink/70">{selected.shortDescription}</p>
                {selected.location ? <p className="mt-6 text-sm text-ink/55">Lieu : {selected.location}</p> : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
