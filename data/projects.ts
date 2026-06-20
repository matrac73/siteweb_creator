export type ProjectCategory = "Cuisine" | "Salle de bain" | "Dressing" | "Terrasse" | "Et bien plus";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  alt: string;
  shortDescription: string;
  year?: string;
  location?: string;
};

export const projectCategories: Array<"Toutes" | ProjectCategory> = [
  "Toutes",
  "Cuisine",
  "Salle de bain",
  "Dressing",
  "Terrasse",
  "Et bien plus"
];

export const projects: Project[] = [
  {
    id: "cuisine-bois-lumiere",
    title: "Cuisine bois et lumiere",
    category: "Cuisine",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1300&q=82",
    alt: "Cuisine contemporaine en bois clair baignee de lumiere naturelle",
    shortDescription: "Une cuisine familiale fluide, chaleureuse et precise dans ses rangements.",
    location: "Albertville"
  },
  {
    id: "cuisine-noyer",
    title: "Cuisine noyer et pierre",
    category: "Cuisine",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1300&q=82",
    alt: "Cuisine sur mesure avec facades en noyer et plan mineral",
    shortDescription: "Des matieres profondes pour un espace de vie convivial et elegant."
  },
  {
    id: "bain-mineral",
    title: "Salle de bain minerale",
    category: "Salle de bain",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1300&q=82",
    alt: "Salle de bain contemporaine avec douche italienne et teintes minerales",
    shortDescription: "Une ambiance calme, facile a vivre et adaptee aux gestes du quotidien."
  },
  {
    id: "bain-spa",
    title: "Ambiance spa prive",
    category: "Salle de bain",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1300&q=82",
    alt: "Salle de bain premium avec baignoire, bois et lumiere douce",
    shortDescription: "Un lieu intime qui privilegie la lumiere, les matieres et le confort."
  },
  {
    id: "dressing-suite",
    title: "Dressing de suite parentale",
    category: "Dressing",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1300&q=82",
    alt: "Dressing sur mesure integre dans une suite parentale contemporaine",
    shortDescription: "Un rangement lisible et discret, dessine pour simplifier le quotidien."
  },
  {
    id: "dressing-entree",
    title: "Rangement d'entree",
    category: "Dressing",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1300&q=82",
    alt: "Agencement d'entree avec placards sur mesure en bois",
    shortDescription: "Un volume technique transforme en espace net et accueillant."
  },
  {
    id: "terrasse-bois",
    title: "Terrasse bois et paysage",
    category: "Terrasse",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1300&q=82",
    alt: "Terrasse en bois avec mobilier exterieur et vue degagee",
    shortDescription: "Une transition douce entre interieur, jardin et moments de partage."
  },
  {
    id: "bibliotheque-sur-mesure",
    title: "Bibliotheque sur mesure",
    category: "Et bien plus",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1300&q=82",
    alt: "Bibliotheque sur mesure dans un salon chaleureux",
    shortDescription: "Un agencement mural qui structure la piece sans l'alourdir."
  },
  {
    id: "salon-matiere",
    title: "Salon matieres naturelles",
    category: "Et bien plus",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1300&q=82",
    alt: "Salon contemporain aux matieres naturelles et tons doux",
    shortDescription: "Un interieur compose autour des volumes, de la lumiere et des usages."
  }
];

export const projectSlugByCategory: Record<ProjectCategory, string> = {
  Cuisine: "cuisine",
  "Salle de bain": "salle-de-bain",
  Dressing: "dressing",
  Terrasse: "terrasse",
  "Et bien plus": "et-bien-plus"
};

export const categoryBySlug: Record<string, ProjectCategory> = {
  cuisine: "Cuisine",
  "salle-de-bain": "Salle de bain",
  dressing: "Dressing",
  terrasse: "Terrasse",
  "et-bien-plus": "Et bien plus"
};
