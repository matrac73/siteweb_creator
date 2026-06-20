import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-4 pt-8 text-sm text-ink/60 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-pine">
            Accueil
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <Link href={item.href} className="hover:text-pine">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
