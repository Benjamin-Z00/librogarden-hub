import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_BASE_URL || "https://librogarden.com";
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${base}/sitemap.xml`, host: base };
}