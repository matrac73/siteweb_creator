import { businessInfo } from "@/data/businessInfo";
import { SITE_URL } from "@/lib/seo";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: businessInfo.name,
    image: `${SITE_URL}/og-image.svg`,
    url: SITE_URL,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      postalCode: businessInfo.address.postalCode,
      addressLocality: businessInfo.address.city,
      addressCountry: "FR"
    },
    areaServed: ["Albertville", "Savoie", "Tarentaise", "Beaufortain"],
    priceRange: "$$$",
    makesOffer: businessInfo.offers.map((offer) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: offer
      }
    }))
  };
}

export function breadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`
    }))
  };
}

export function imageGallerySchema(items: Array<{ title: string; image: string; alt: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Realisations Essences d'Art",
    associatedMedia: items.map((item) => ({
      "@type": "ImageObject",
      name: item.title,
      contentUrl: item.image,
      description: item.alt
    }))
  };
}
