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

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    bio: string;
    avatar?: string;
  };
  achievements: Achievement[];
  skills: Skill[];
  socialLinks: SocialLink[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Your Name",
    role: "Software Engineer",
    bio: "モダンなWeb技術を活用して、ユーザー体験を向上させるアプリケーションを開発しています。",
  },
  achievements: [
    {
      title: "個人プロジェクト",
      description: "Next.jsとTypeScriptで構築したポートフォリオサイト",
      type: "project",
    },
    {
      title: "オープンソース",
      description: "GitHubで複数のOSSプロジェクトに貢献",
      type: "achievement",
    },
    {
      title: "公開サービス",
      description: "ReactとNode.jsで構築したWebアプリケーション",
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
