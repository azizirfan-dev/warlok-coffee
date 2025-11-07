// src/lib/seo.ts
export type SEOOptions = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
};

export function createSEO({
  title,
  description = "Warlok Coffee — Kopi lokal dengan cita rasa khas nusantara.",
  image = "/og-default.jpg",
  url = "https://warlok.vercel.app",
  type = "website",
}: SEOOptions) {
  const fullTitle = `${title} | Warlok Coffee`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Warlok Coffee",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "id_ID",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

// 🟤 Default SEO fallback
export const defaultSEO = createSEO({
  title: "Warlok Coffee",
  description:
    "Dari tetangga untuk semua — Kopi lokal berkualitas dari barista terbaik nusantara.",
  image: "/og-default.jpg",
  url: "https://warlok.vercel.app",
  type: "website",
});
