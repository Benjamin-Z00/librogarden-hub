import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_BASE_URL || "https://librogarden.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/assessments/interest-profiler` },
    { url: `${base}/assessments/big-five` },
    { url: `${base}/bridges/mbti` },
    { url: `${base}/bridges/cliftonstrengths` },
  ];
}