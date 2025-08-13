import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, GitBranch, Star, Users, Activity } from "lucide-react";

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalCommits: number;
  languagesUsed: string[];
  topRepos: Array<{
    name: string;
    description: string;
    stars: number;
    language: string;
    url: string;
  }>;
}

// Mock data - in a real app, you'd fetch from GitHub API
const mockGitHubStats: GitHubStats = {
  totalRepos: 25,
  totalStars: 47,
  totalCommits: 1250,
  languagesUsed: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  topRepos: [
    {
      name: "ddt-solutions",
      description: "Professional IT services website with modern stack",
      stars: 12,
      language: "TypeScript",
      url: "https://github.com/avumiletati/ddt-solutions"
    },
    {
      name: "portfolio-v2",
      description: "Modern portfolio website built with React & TypeScript",
      stars: 8,
      language: "TypeScript", 
      url: "https://github.com/avumiletati/portfolio-v2"
    },
    {
      name: "task-manager-app",
      description: "Collaborative task management with real-time features",
      stars: 15,
      language: "JavaScript",
      url: "https://github.com/avumiletati/task-manager"
    },
    {
      name: "weather-mobile-app",
      description: "Cross-platform weather app with offline functionality",
      stars: 6,
      language: "TypeScript",
      url: "https://github.com/avumiletati/weather-app"
    }
  ]
};

const getLanguageColor = (language: string) => {
  const colors = {
    "TypeScript": "bg-blue-500/20 text-blue-400",
    "JavaScript": "bg-yellow-500/20 text-yellow-400",
    "Python": "bg-green-500/20 text-green-400",
    "Java": "bg-orange-500/20 text-orange-400",
    "SQL": "bg-purple-500/20 text-purple-400"
  };
  return colors[language as keyof typeof colors] || "bg-gray-500/20 text-gray-400";
};

export default function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setStats(mockGitHubStats);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-20 bg-dark-800/50" data-testid="github-activity-loading">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-blue mx-auto"></div>
            <p className="text-slate-400 mt-4">Loading GitHub activity...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!stats) return null;

  return (
    <section className="py-20 bg-dark-800/50" data-testid="github-activity-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" data-testid="github-title">
            GitHub Activity
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto" data-testid="github-subtitle">
            Open source contributions and development activity
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-dark-700/50 border-dark-600 text-center" data-testid="stat-repos">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Github className="w-6 h-6 text-accent-blue" />
              </div>
              <div className="text-2xl font-bold text-white">{stats.totalRepos}</div>
              <div className="text-slate-400 text-sm">Repositories</div>
            </CardContent>
          </Card>

          <Card className="bg-dark-700/50 border-dark-600 text-center" data-testid="stat-stars">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-accent-cyan" />
              </div>
              <div className="text-2xl font-bold text-white">{stats.totalStars}</div>
              <div className="text-slate-400 text-sm">Total Stars</div>
            </CardContent>
          </Card>

          <Card className="bg-dark-700/50 border-dark-600 text-center" data-testid="stat-commits">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <GitBranch className="w-6 h-6 text-accent-purple" />
              </div>
              <div className="text-2xl font-bold text-white">{stats.totalCommits}+</div>
              <div className="text-slate-400 text-sm">Commits</div>
            </CardContent>
          </Card>

          <Card className="bg-dark-700/50 border-dark-600 text-center" data-testid="stat-languages">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Activity className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">{stats.languagesUsed.length}</div>
              <div className="text-slate-400 text-sm">Languages</div>
            </CardContent>
          </Card>
        </div>

        {/* Top Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Languages Used</h3>
          <div className="flex justify-center flex-wrap gap-3">
            {stats.languagesUsed.map((language) => (
              <Badge 
                key={language}
                variant="secondary"
                className={`${getLanguageColor(language)} border-0 px-4 py-2`}
                data-testid={`language-${language.toLowerCase()}`}
              >
                {language}
              </Badge>
            ))}
          </div>
        </div>

        {/* Top Repositories */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Featured Repositories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {stats.topRepos.map((repo) => (
              <Card 
                key={repo.name}
                className="bg-dark-700/50 border-dark-600 hover:border-accent-blue/50 transition-colors duration-300 group"
                data-testid={`repo-${repo.name}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white group-hover:text-accent-blue transition-colors">
                      <a 
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Github className="w-5 h-5" />
                        <span>{repo.name}</span>
                      </a>
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{repo.stars}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm mb-4">{repo.description}</p>
                  <Badge 
                    variant="secondary"
                    className={`${getLanguageColor(repo.language)} border-0`}
                  >
                    {repo.language}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/avumiletati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-dark-600 border border-dark-500 rounded-lg text-slate-300 hover:border-accent-blue hover:text-white transition-all duration-300 transform hover:scale-105"
            data-testid="github-profile-link"
          >
            <Github className="w-5 h-5" />
            <span>View Full GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}