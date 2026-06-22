export type Transformation = {
  id: string;
  title: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

// Remplacer beforeImage par les vraies photos "avant" (téléchargées depuis Instagram ou prises sur chantier)
// Remplacer afterImage par les vraies photos "après" du projet terminé
export const transformations: Transformation[] = [
  {
    id: "cuisine-transformation",
    title: "Cuisine familiale — Albertville",
    description: "D'un espace fonctionnel mais sans identité vers une cuisine chaleureuse en bois clair et lumière naturelle.",
    beforeImage: "https://images.unsplash.com/photo-1613668816690-546c6fa9ad42?auto=format&fit=crop&w=1300&q=82",
    afterImage: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1300&q=82",
    beforeAlt: "Cuisine avant rénovation",
    afterAlt: "Cuisine après rénovation — bois clair et lumière naturelle",
  },
  {
    id: "salle-de-bain-transformation",
    title: "Salle de bain minérale",
    description: "Une pièce vieillissante transformée en espace épuré, avec douche italienne et matières douces.",
    beforeImage: "https://images.unsplash.com/photo-1632800617918-2cb4eda203d1?auto=format&fit=crop&w=1300&q=82",
    afterImage: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1300&q=82",
    beforeAlt: "Salle de bain avant rénovation",
    afterAlt: "Salle de bain après rénovation — ambiance minérale",
  },
];
