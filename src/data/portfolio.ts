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

export interface Work {
  title: string;
  description: string;
  link?: string;
  img?: string;
  type: "service" | "achievement" | "project";
}

export interface Skill {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "tools"
    | "business"
    | "design"
    | "ai"
    | "other";
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
  works: Work[];
  skills: Skill[];
  socialLinks: SocialLink[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Masaki Kitsugi",
    role: "Engineer & Entrepreneur",
    bio: "Studied Economics at UCLA, where I developed a global perspective on business and technology. Started my journey at Deloitte, diving into system projects and consulting chaos. Then took a leap into the Web3 frontier, leading business development at a venture. Now? I'm independent, crafting and supporting web products for various companies—turning ideas into reality, one line of code at a time.",
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
  works: [
    {
      title: "Poker Learning Platform - POKER Q'z",
      description:
        "A poker learning app from the University of Tokyo. Master GTO (Game Theory Optimal) strategy through quiz-based learning. Features over +100K practical quizzes, Built-in AI assistance, and a comprehensive curriculum for players from beginners to advanced.",
      img: "/img/pokerqz.png",
      link: "https://pokerqz.com/ja",
      type: "service",
    },
    // {
    //   title: "Open Source",
    //   description: "Contributed to multiple OSS projects on GitHub",
    //   type: "achievement",
    // },
    // {
    //   title: "Published Service",
    //   description: "Web application built with React and Node.js",
    //   link: "https://example.com",
    //   type: "service",
    // },
  ],
  skills: [
    // Frontend
    { name: "React", category: "frontend", level: "advanced" },
    { name: "Next.js", category: "frontend", level: "advanced" },
    { name: "TypeScript", category: "frontend", level: "advanced" },
    { name: "Tailwind CSS", category: "frontend", level: "advanced" },
    {
      name: "PWA",
      category: "frontend",
      level: "intermediate",
    },

    // Backend
    { name: "Node.js", category: "backend", level: "intermediate" },
    { name: "Python", category: "backend", level: "intermediate" },
    { name: "PostgreSQL", category: "backend", level: "intermediate" },
    { name: "SQLite", category: "backend", level: "intermediate" },
    { name: "REST API", category: "backend", level: "advanced" },
    // Business
    { name: "BizDev", category: "business", level: "advanced" },
    { name: "PM/PdM", category: "business", level: "advanced" },
    { name: "Strategic Planning", category: "business", level: "advanced" },
    { name: "Consulting", category: "business", level: "advanced" },
    // Design
    { name: "Figma", category: "design", level: "advanced" },
    { name: "UI/UX Design", category: "design", level: "advanced" },
    // Tools
    { name: "Git", category: "tools", level: "advanced" },
    { name: "Docker", category: "tools", level: "intermediate" },
    {
      name: "ChatGPT/Codex",
      category: "ai",
      level: "advanced",
    },
    { name: "Claude", category: "ai", level: "advanced" },
    { name: "Gemini", category: "ai", level: "intermediate" },
    { name: "Agent Modeling", category: "ai", level: "intermediate" },
    { name: "Cursor", category: "ai", level: "advanced" },
    { name: "LangChain", category: "ai", level: "intermediate" },

    // Cloud
    { name: "AWS", category: "other", level: "intermediate" },
    { name: "Azure", category: "other", level: "intermediate" },
  ],
  socialLinks: [
    {
      url: "https://github.com/mkitsugi",
      icon: "github",
    },
    {
      url: "https://x.com/palpa_kg",
      icon: "x",
    },
    // {
    //   name: "LinkedIn",
    //   url: "https://linkedin.com",
    //   icon: "linkedin",
    // },
  ],
};
