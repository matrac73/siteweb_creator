export type TeaCategory = {
  slug: string;
  name: string;
  href: string;
  description: string;
  image: string;
  alt: string;
};

export const teaCategories: TeaCategory[] = [
  {
    slug: "the-vert",
    name: "The Vert",
    href: "/palais-des-thes/the-vert",
    description: "Des notes vegetales, fraiches ou grillees selon les origines, pour des degustations fines et lumineuses.",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=1200&q=82",
    alt: "Feuilles de the vert dans une tasse artisanale"
  },
  {
    slug: "the-noir",
    name: "The Noir",
    href: "/palais-des-thes/the-noir",
    description: "Des thes de caractere, ronds ou puissants, a decouvrir nature, parfumes ou en accord avec un moment gourmand.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=82",
    alt: "The noir infuse dans une tasse sombre"
  },
  {
    slug: "the-blanc",
    name: "The Blanc",
    href: "/palais-des-thes/the-blanc",
    description: "Une famille delicate, subtile et florale, appreciee pour sa douceur et sa grande finesse aromatique.",
    image: "https://images.unsplash.com/photo-1597481499666-130f8eb6c9f9?auto=format&fit=crop&w=1200&q=82",
    alt: "The blanc clair et feuilles seches"
  },
  {
    slug: "matcha",
    name: "Matcha",
    href: "/palais-des-thes/matcha",
    description: "Une poudre de the vert intense, preparee au fouet, pour un rituel precis et une couleur vibrante.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1200&q=82",
    alt: "Bol de matcha vert avec fouet en bambou"
  },
  {
    slug: "pu-erh",
    name: "Pu Erh",
    href: "/palais-des-thes/pu-erh",
    description: "Des thes sombres aux notes profondes, boisees et terriennes, pour une degustation singuliere.",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&w=1200&q=82",
    alt: "The sombre infuse avec feuilles compressees"
  },
  {
    slug: "rooibos",
    name: "Rooibos",
    href: "/palais-des-thes/rooibos",
    description: "Naturellement sans theine, le rooibos offre une tasse douce, ronde et chaleureuse a tout moment.",
    image: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&w=1200&q=82",
    alt: "Rooibos rouge dans une tasse claire"
  },
  {
    slug: "mate",
    name: "Mate",
    href: "/palais-des-thes/mate",
    description: "Une infusion de caractere, herbacee et tonique, issue d'une tradition de partage sud-americaine.",
    image: "https://images.unsplash.com/photo-1559749619-5f290507d5e6?auto=format&fit=crop&w=1200&q=82",
    alt: "Mate en calebasse avec bombilla argentee"
  },
  {
    slug: "infusions",
    name: "Infusions",
    href: "/palais-des-thes/infusions",
    description: "Plantes, fruits, fleurs et epices sans theine, pour des moments apaisants, gourmands ou rafraichissants selon les recettes.",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1200&q=82",
    alt: "Infusion de plantes, fruits et fleurs seches"
  },
  {
    slug: "oolong",
    name: "Oolong",
    href: "/palais-des-thes/oolong",
    description: "Entre the vert et the noir, les oolongs revelent des profils floraux, lactes ou boises d'une grande richesse.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=82",
    alt: "The oolong en feuilles entieres et tasse chaude"
  }
];

export function getTeaCategory(slug: string) {
  return teaCategories.find((category) => category.slug === slug);
}
