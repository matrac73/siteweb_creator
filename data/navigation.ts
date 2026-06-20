export const navigation = [
  { label: "Accueil", href: "/" },
  {
    label: "Architecture interieure",
    href: "/architecture-interieure",
    children: [
      { label: "Sauna", href: "/architecture-interieure/sauna" },
      { label: "Cuisine", href: "/architecture-interieure/cuisine" },
      { label: "Dressing", href: "/architecture-interieure/dressing" },
      { label: "Salle de bain", href: "/architecture-interieure/salle-de-bain" }
    ]
  },
  {
    label: "Palais des Thes",
    href: "/palais-des-thes",
    children: [
      { label: "The Vert", href: "/palais-des-thes/the-vert" },
      { label: "The Noir", href: "/palais-des-thes/the-noir" },
      { label: "The Blanc", href: "/palais-des-thes/the-blanc" },
      { label: "Matcha", href: "/palais-des-thes/matcha" },
      { label: "Pu Erh", href: "/palais-des-thes/pu-erh" },
      { label: "Rooibos", href: "/palais-des-thes/rooibos" },
      { label: "Mate", href: "/palais-des-thes/mate" },
      { label: "Infusions", href: "/palais-des-thes/infusions" },
      { label: "Oolong", href: "/palais-des-thes/oolong" }
    ]
  },
  {
    label: "Nos realisations",
    href: "/realisations",
    children: [
      { label: "Cuisine", href: "/realisations/cuisine" },
      { label: "Salle de bain", href: "/realisations/salle-de-bain" },
      { label: "Dressing", href: "/realisations/dressing" },
      { label: "Terrasse", href: "/realisations/terrasse" },
      { label: "Et bien plus", href: "/realisations/et-bien-plus" }
    ]
  },
  { label: "Revue de presse", href: "/revue-de-presse" },
  { label: "Contact", href: "/contact" }
] as const;
