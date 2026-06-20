import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import { navigation } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-16 text-chalk sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Link href="/" className="font-serif text-4xl">
            Essences d'Art
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-chalk/70">{businessInfo.baseline}</p>
          <div className="mt-8 grid gap-3 text-sm text-chalk/78">
            <a href={businessInfo.phoneHref} className="flex items-center gap-3 hover:text-chalk">
              <Phone className="h-4 w-4" /> {businessInfo.phone}
            </a>
            <a href={businessInfo.mailHref} className="flex items-center gap-3 hover:text-chalk">
              <Mail className="h-4 w-4" /> {businessInfo.email}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4" /> {businessInfo.address.street}, {businessInfo.address.postalCode} {businessInfo.address.city}
            </p>
            <a href={businessInfo.instagram} className="flex items-center gap-3 hover:text-chalk">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {navigation.slice(1, 4).map((item) => (
            <div key={item.href}>
              <Link href={item.href} className="font-semibold">
                {item.label}
              </Link>
              {"children" in item ? (
                <div className="mt-4 grid gap-2">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="text-sm text-chalk/65 hover:text-chalk">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div>
            <p className="font-semibold">Informations</p>
            <div className="mt-4 grid gap-2 text-sm text-chalk/65">
              <Link href="/revue-de-presse" className="hover:text-chalk">
                Revue de presse
              </Link>
              <Link href="/contact" className="hover:text-chalk">
                Contact
              </Link>
              <span>Mentions legales a completer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-chalk/10 pt-8 text-sm text-chalk/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Essences d'Art. Tous droits reserves.</p>
        <ButtonLink href="/contact" variant="secondary" className="w-fit border-chalk/25 bg-chalk text-ink hover:bg-sand">
          Prendre contact
        </ButtonLink>
      </div>
    </footer>
  );
}
