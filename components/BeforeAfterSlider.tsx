"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Avant",
  afterAlt = "Après",
  title,
  description,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(40);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition(Math.max(3, Math.min(97, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div className={cn("overflow-hidden rounded-lg shadow-soft", className)}>
      {/* Slider zone */}
      <div
        ref={containerRef}
        className="relative cursor-ew-resize select-none"
        onMouseMove={(e) => { if (isDragging.current) updatePosition(e.clientX); }}
        onMouseUp={() => { isDragging.current = false; }}
        onMouseLeave={() => { isDragging.current = false; }}
        onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      >
        {/* After image (full background) */}
        <div className="relative aspect-[4/3]">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        {/* Before image clipped to left of slider */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="relative h-full w-full">
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute bottom-4 left-4 rounded bg-ink/75 px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-chalk backdrop-blur-sm">
          Avant
        </span>
        <span className="pointer-events-none absolute bottom-4 right-4 rounded bg-ink/75 px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-chalk backdrop-blur-sm">
          Après
        </span>

        {/* Divider line */}
        <div
          className="pointer-events-none absolute inset-y-0 w-[2px] -translate-x-1/2 bg-chalk/90 shadow-[0_0_8px_rgba(0,0,0,0.45)]"
          style={{ left: `${position}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${position}%` }}
          onMouseDown={(e) => { e.preventDefault(); isDragging.current = true; }}
        >
          <button
            type="button"
            aria-label="Glisser pour comparer avant et après"
            className="flex h-11 w-11 cursor-ew-resize touch-none items-center justify-center rounded-full bg-chalk shadow-[0_2px_16px_rgba(0,0,0,0.30)] ring-1 ring-chalk/20 transition hover:scale-110 active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M6 3.5L2.5 9L6 14.5M12 3.5L15.5 9L12 14.5"
                stroke="#1a1a1a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Caption */}
      {(title || description) && (
        <div className="bg-chalk px-6 py-5">
          {title && <h3 className="font-serif text-2xl text-ink">{title}</h3>}
          {description && <p className="mt-2 text-sm leading-7 text-ink/68">{description}</p>}
        </div>
      )}
    </div>
  );
}
