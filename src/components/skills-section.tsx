import { portfolioData } from "@/data/portfolio";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  business: "Business",
  design: "Design",
  ai: "AI / AIツール",
  other: "Other",
};

const levelColors = {
  beginner: "from-gray-400 to-gray-500",
  intermediate: "from-blue-400 to-blue-500",
  advanced: "from-purple-400 via-pink-400 to-purple-500",
};

export default function SkillsSection() {
  const { skills } = portfolioData;

  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  return (
    <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          スキル
        </h3>

        <div className="space-y-6">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-white mb-3">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h4>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${levelColors[skill.level]} opacity-0 transition-opacity duration-200 group-hover:opacity-10`}
                    />
                    <span className="relative z-10 text-sm font-medium text-white">
                      {skill.name}
                    </span>
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${levelColors[skill.level]} transition-all duration-200 group-hover:w-full`}
                      style={{
                        width: skill.level === "advanced" ? "100%" : skill.level === "intermediate" ? "66%" : "33%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

