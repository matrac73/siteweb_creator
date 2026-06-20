import type { Metadata } from "next";
import { businessInfo } from "@/data/businessInfo";

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? productionUrl ?? "https://essencesdart-albertville.fr";

type SeoArgs = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og-image.svg",
  keywords = []
}: SeoArgs): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = title.includes("Essences d'Art")
    ? title
    : `${title} | Essences d'Art Albertville`;

  return {
    metadataBase: new URL(siteUrl),
    applicationName: "Essences d'Art",
    title: fullTitle,
    description,
    keywords: [
      "Essences d'Art Albertville",
      "architecte interieur Albertville",
      "architecture interieure Albertville",
      "agencement interieur Albertville",
      ...keywords
    ],
    alternates: {
      canonical: url
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    creator: businessInfo.name,
    publisher: businessInfo.name,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Essences d'Art",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${businessInfo.name} a Albertville`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image]
    }
  };
}

export const SITE_URL = siteUrl;
