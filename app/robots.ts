import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/register", "/api/"],
    },
    sitemap: "https://projexia.in/sitemap.xml",
  };
}
