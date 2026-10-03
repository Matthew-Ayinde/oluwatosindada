import type { MetadataRoute } from "next";
import { person } from "@/lib/content";
import { siteDescription } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${person.name} — HR & People Management`,
    short_name: person.name,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f7f4",
    theme_color: "#0a1712",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
