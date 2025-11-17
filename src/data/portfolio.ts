export interface SocialLink {
  url: string;
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  url?: string;
  type: "service" | "achievement" | "project";
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level: "beginner" | "intermediate" | "advanced";
}

export interface Tagline {
  text: string;
  highlights: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    bio: string;
    taglines: Tagline[];
    avatar?: string;
  };
  achievements: Achievement[];
  skills: Skill[];
  socialLinks: SocialLink[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Masaki Kitsugi",
    role: "Engineer & Entrepreneur",
    bio: "I develop applications using modern web technologies to enhance user experience.",
    taglines: [
      {
        text: "Code. Create. Iterate.",
        highlights: [],
      },
      {
        text: "I build products that makes the world more beautiful and fun.",
        highlights: ["change the world"],
      },
    ],
  },
  achievements: [
    {
      title: "Personal Project",
      description: "Portfolio site built with Next.js and TypeScript",
      type: "project",
    },
    {
      title: "Open Source",
      description: "Contributed to multiple OSS projects on GitHub",
      type: "achievement",
    },
    {
      title: "Published Service",
      description: "Web application built with React and Node.js",
      url: "https://example.com",
      type: "service",
    },
  ],
  skills: [
    { name: "React", category: "frontend", level: "advanced" },
    { name: "Next.js", category: "frontend", level: "advanced" },
    { name: "TypeScript", category: "frontend", level: "advanced" },
    { name: "Tailwind CSS", category: "frontend", level: "advanced" },
    { name: "Node.js", category: "backend", level: "intermediate" },
    { name: "Python", category: "backend", level: "intermediate" },
    { name: "Git", category: "tools", level: "advanced" },
    { name: "Docker", category: "tools", level: "intermediate" },
  ],
  socialLinks: [
    {
      url: "https://github.com",
      icon: "github",
    },
    {
      url: "https://twitter.com",
      icon: "x",
    },
    // {
    //   name: "LinkedIn",
    //   url: "https://linkedin.com",
    //   icon: "linkedin",
    // },
  ],
};
