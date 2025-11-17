import Script from "next/script";
import { portfolioData } from "@/data/portfolio";

const siteUrl = "https://masaki-kitsugi.com";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.role,
    description: portfolioData.personal.bio,
    url: siteUrl,
    sameAs: portfolioData.socialLinks.map((link) => link.url),
    knowsAbout: portfolioData.skills.map((skill) => skill.name),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${portfolioData.personal.name} - Portfolio`,
    url: siteUrl,
    description: portfolioData.personal.bio,
    author: {
      "@type": "Person",
      name: portfolioData.personal.name,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(personSchema)}
      </Script>
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(websiteSchema)}
      </Script>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </>
  );
}

