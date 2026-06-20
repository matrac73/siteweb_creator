"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled || open ? "bg-chalk/92 shadow-sm backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            "font-serif text-3xl font-semibold transition",
            scrolled || open ? "text-ink" : "text-chalk"
          )}
        >
          Essences d'Art
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition",
                  scrolled ? "text-ink hover:bg-ink/5" : "text-chalk hover:bg-chalk/10"
                )}
              >
                {item.label}
                {"children" in item ? <ChevronDown className="h-4 w-4" aria-hidden="true" /> : null}
              </Link>
              {"children" in item ? (
                <div className="invisible absolute left-0 top-full w-64 translate-y-3 rounded-lg bg-chalk p-3 text-ink opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block rounded-md px-3 py-2 text-sm hover:bg-ink/5">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" size="sm" variant={scrolled ? "primary" : "secondary"} className={scrolled ? "" : "border-chalk/35 bg-chalk/10 text-chalk hover:bg-chalk hover:text-ink"}>
            Contact
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "rounded-full p-3 transition lg:hidden",
            scrolled || open ? "bg-ink/5 text-ink" : "bg-chalk/10 text-chalk"
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-ink/10 bg-chalk px-4 py-6 lg:hidden">
          <nav className="mx-auto grid max-w-2xl gap-2" aria-label="Navigation mobile">
            {navigation.map((item) => (
              <div key={item.href} className="border-b border-ink/10 py-3">
                <Link href={item.href} onClick={() => setOpen(false)} className="block font-serif text-3xl text-ink">
                  {item.label}
                </Link>
                {"children" in item ? (
                  <div className="mt-3 grid gap-2 pl-2">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="text-base text-ink/70">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <ButtonLink href="/contact" onClick={() => setOpen(false)} className="mt-4">
              Discuter de mon projet
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
