import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://projexia.in";
  const now = new Date();

  const staticPages = [
    { url: "/", changeFrequency: "weekly" as const, priority: 1 },
    { url: "/features", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/pricing", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
    { url: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
    { url: "/cookies", changeFrequency: "yearly" as const, priority: 0.3 },
    { url: "/blog", changeFrequency: "daily" as const, priority: 0.9 },
  ];

  const featureSlugs = [
    "project-management",
    "client-portal",
    "time-tracking",
    "invoicing",
    "team-management",
    "communication",
    "reports",
    "security",
  ];

  const featurePages = featureSlugs.map((slug) => ({
    url: `${base}/features/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${base}${page.url}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...featurePages,
  ];
}
