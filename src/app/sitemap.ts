import type { MetadataRoute } from "next";

const baseUrl = "https://brownstonedredging.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${baseUrl}/`, lastModified: now, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: now, priority: 0.8 },
  ];
}
