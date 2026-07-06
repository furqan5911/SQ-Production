import type { MetadataRoute } from "next";
import { SITE_URL, PROJECTS, SERVICE_ALBUM_CARDS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/projects", "/blogs", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = SERVICE_ALBUM_CARDS.map((card) => ({
    url: `${SITE_URL}/services/${card.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = PROJECTS.filter((p) => !p.slug.startsWith("placeholder")).map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
