import { portfolioData } from "@/data/portfolio";

export default function BioSection() {
  const { personal, achievements } = portfolioData;

  return (
    <div className="space-y-6">
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {personal.name}
          </h2>
          <p className="text-lg text-gray-300 font-medium">{personal.role}</p>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">{personal.bio}</p>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white mb-3">実績・サービス</h3>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group rounded-lg border border-white/5 bg-white/5 p-4 transition-all duration-200 hover:bg-white/10 hover:border-white/10"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
                {achievement.url && (
                  <a
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-blue-400 hover:text-blue-300 transition-colors"
                    aria-label={`${achievement.title}を開く`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

