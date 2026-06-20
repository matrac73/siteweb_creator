import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ivory px-4 py-24 text-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-fuchsia">Page introuvable</p>
        <h1 className="mt-4 font-serif text-6xl text-ink">Cette page n'existe pas</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-ink/70">
          Revenez a l'accueil ou prenez contact avec Essences d'Art pour poursuivre votre visite.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/">Accueil</ButtonLink>
          <Link href="/contact" className="inline-flex min-h-11 items-center rounded-full px-5 py-3 text-sm font-semibold text-pine">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
