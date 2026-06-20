export type Service = {
  slug: "sauna" | "cuisine" | "dressing" | "salle-de-bain";
  title: string;
  shortTitle: string;
  href: string;
  eyebrow: string;
  description: string;
  intro: string;
  cta: string;
  image: string;
  alt: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "sauna",
    title: "Nos saunas",
    shortTitle: "Sauna",
    href: "/architecture-interieure/sauna",
    eyebrow: "Bien-etre",
    description: "Un espace de chaleur, de calme et de deconnexion integre avec elegance a votre interieur.",
    intro:
      "Le sauna est souvent associe a la detente, au relachement et a un moment privilegie de deconnexion. Nous imaginons des espaces chaleureux, precis et sensoriels, inspires par la tradition finlandaise et adaptes a votre lieu de vie.",
    cta: "Imaginer mon espace bien-etre",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=82",
    alt: "Sauna contemporain en bois avec lumiere douce",
    highlights: ["Relaxation", "Confort thermique", "Bois et lumiere", "Integration sur mesure"]
  },
  {
    slug: "cuisine",
    title: "Votre cuisine sur mesure",
    shortTitle: "Cuisine",
    href: "/architecture-interieure/cuisine",
    eyebrow: "Convivialite",
    description: "Une cuisine soignee aux petits oignons, pensee pour cuisiner, recevoir et circuler naturellement.",
    intro:
      "La cuisine est un lieu de gestes, de rencontres et de quotidien. Nous travaillons l'ergonomie, les rangements, les matieres et la circulation pour composer une cuisine moderne, vintage ou tres personnelle, toujours ajustee a votre maniere de vivre.",
    cta: "Concevoir ma cuisine",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=82",
    alt: "Cuisine sur mesure lumineuse avec plan de travail en bois",
    highlights: ["Ergonomie", "Rangements", "Materiaux durables", "Signature personnelle"]
  },
  {
    slug: "dressing",
    title: "Votre dressing sur mesure",
    shortTitle: "Dressing",
    href: "/architecture-interieure/dressing",
    eyebrow: "Rangement",
    description: "Ne perdez plus d'espace ni de temps grace a un rangement dessine autour de vos usages.",
    intro:
      "Ouvert, ferme, discret ou scenographie, le dressing optimise chaque volume disponible. Chambre, entree ou piece dediee : nous concevons des rangements lisibles, solides et agreables a utiliser chaque jour.",
    cta: "Optimiser mon espace",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=82",
    alt: "Dressing sur mesure en bois clair avec penderies et etageres",
    highlights: ["Optimisation", "Finitions bois", "Dressing ouvert ou ferme", "Usage quotidien"]
  },
  {
    slug: "salle-de-bain",
    title: "Votre salle de bain sur mesure",
    shortTitle: "Salle de bain",
    href: "/architecture-interieure/salle-de-bain",
    eyebrow: "Confort",
    description: "Votre confort est le mot cle : une salle de bain belle, pratique et durable.",
    intro:
      "Nous dessinons des salles de bain qui conjuguent esthetique et praticite. Lumieres, matieres resistantes, rangements et circulation sont traites avec soin, y compris dans les petites surfaces ou les ambiances spa.",
    cta: "Creer ma salle de bain",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=82",
    alt: "Salle de bain contemporaine avec bois, pierre et lumiere naturelle",
    highlights: ["Lumiere", "Petites surfaces", "Ambiance spa", "Confort quotidien"]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
