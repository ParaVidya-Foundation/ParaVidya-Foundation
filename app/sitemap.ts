import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const routes = ["", "/workshop", "/sadhna", "/karamkand", "/yoga", "/donation", "/gallery", "/about-us"]
  return routes.map((r) => ({
    url: `${base}${r || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }))
}
