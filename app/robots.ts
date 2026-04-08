import { MetadataRoute } from "next";

const URL = "https://eliasmartins.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/"],
    },
    sitemap: `${URL}/sitemap.xml`,
    host: URL,
  };
}
