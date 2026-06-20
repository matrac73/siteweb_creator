import type { MetadataRoute } from "next";
import { navigation } from "@/data/navigation";
import { projectSlugByCategory } from "@/data/projects";
import { services } from "@/data/services";
import { teaCategories } from "@/data/teaCategories";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = navigation
    .flatMap((item) => [item.href, ...("children" in item ? item.children.map((child) => child.href) : [])])
    .filter((href, index, array) => array.indexOf(href) === index);

  const dynamicRoutes = [
    ...services.map((service) => service.href),
    ...teaCategories.map((category) => category.href),
    ...Object.values(projectSlugByCategory).map((slug) => `/realisations/${slug}`)
  ];

  return [...new Set([...staticRoutes, ...dynamicRoutes])].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}
