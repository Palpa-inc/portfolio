import { portfolioData } from "@/data/portfolio";
import type { Metadata } from "next";

const siteUrl = "https://masaki-kitsugi.com";
const siteName = `${portfolioData.personal.name} - Portfolio`;
const defaultTitle = `${portfolioData.personal.name} | ${portfolioData.personal.role}`;
const defaultDescription = portfolioData.personal.bio;

export function generateMetadata(): Metadata {
  const ogImage = `${siteUrl}/img/og-image.png`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${portfolioData.personal.name}`,
    },
    description: defaultDescription,
    keywords: [
      portfolioData.personal.name,
      portfolioData.personal.role,
      "Software Engineer",
      "Web Developer",
      "Portfolio",
      ...portfolioData.skills.map((skill) => skill.name),
    ],
    authors: [{ name: portfolioData.personal.name }],
    creator: portfolioData.personal.name,
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: siteUrl,
      siteName,
      title: defaultTitle,
      description: defaultDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${portfolioData.personal.name} - Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [ogImage],
      creator: "@palpa_kg",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/icon.jpg",
      apple: "/icon.jpg",
    },
  };
}

export const seoConfig = {
  siteUrl,
  siteName,
  defaultTitle,
  defaultDescription,
  ogImage: `${siteUrl}/img/og-image.png`,
};

