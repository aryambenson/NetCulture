import { fullSitemap } from "@/data/site";

export default function sitemap() {
  const base = "https://netculture.in";
  return fullSitemap
    .filter((item) => item.href !== "/admin")
    .map((item) => ({
      url: `${base}${item.href}`,
      lastModified: new Date(),
      changeFrequency: item.href === "/" ? "weekly" : "monthly",
      priority: item.href === "/" ? 1 : 0.78
    }));
}
