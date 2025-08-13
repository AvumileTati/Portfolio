import { Award, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Achievement } from "@/lib/types";

const achievements: Achievement[] = [
  {
    id: "samsung-innovation",
    title: "Samsung Innovation Program",
    description: "AI & Machine Learning certification with focus on practical applications and modern development practices",
    icon: "award",
    date: "2024"
  },
  {
    id: "fullstack-mastery",
    title: "Full Stack Development", 
    description: "Mastered end-to-end web development with React, Node.js, and cloud deployment strategies",
    icon: "code",
    date: "2023-2024"
  },
  {
    id: "production-deployments",
    title: "Production Applications",
    description: "Successfully deployed 10+ production applications serving real users and business needs",
    icon: "rocket",
    date: "2023-2024"
  },
  {
    id: "open-source",
    title: "Open Source Contributor",
    description: "Active contributor to open source projects and maintainer of developer tools and libraries",
    icon: "code",
    date: "2024"
  },
  {
    id: "tech-leadership",
    title: "Tech Community Leader",
    description: "Founder of Dynamic Duo Tech Solutions, empowering communities through technology education",
    icon: "award",
    date: "2023"
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning",
    description: "Always exploring cutting-edge technologies and best practices in software engineering",
    icon: "rocket",
    date: "Ongoing"
  }
];

const getAchievementIcon = (iconName: string) => {
  switch (iconName) {
    case "award": return <Award className="w-8 h-8" />;
    case "code": return <Code className="w-8 h-8" />;
    case "rocket": return <Rocket className="w-8 h-8" />;
    default: return <Award className="w-8 h-8" />;
  }
};

const getAchievementColor = (iconName: string) => {
  switch (iconName) {
    case "award": return "text-accent-blue bg-accent-blue/20";
    case "code": return "text-accent-cyan bg-accent-cyan/20";
    case "rocket": return "text-accent-purple bg-accent-purple/20";
    default: return "text-accent-blue bg-accent-blue/20";
  }
};

const getHoverColor = (iconName: string) => {
  switch (iconName) {
    case "award": return "hover:border-accent-blue/50";
    case "code": return "hover:border-accent-cyan/50"; 
    case "rocket": return "hover:border-accent-purple/50";
    default: return "hover:border-accent-blue/50";
  }
};

export default function AchievementsSection() {
  return (
    <section className="py-20" data-testid="achievements-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" data-testid="achievements-title">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id}
              className={`bg-dark-700/50 border-dark-600 ${getHoverColor(achievement.icon)} transition-all duration-300 hover:transform hover:-translate-y-2 group`}
              data-testid={`achievement-card-${achievement.id}`}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getAchievementColor(achievement.icon)} group-hover:scale-110 transition-transform duration-300`}>
                  {getAchievementIcon(achievement.icon)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2" data-testid={`achievement-title-${achievement.id}`}>
                  {achievement.title}
                </h3>
                {achievement.date && (
                  <div className="text-xs text-accent-blue mb-2 font-mono">{achievement.date}</div>
                )}
                <p className="text-slate-400 text-sm leading-relaxed" data-testid={`achievement-description-${achievement.id}`}>
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
