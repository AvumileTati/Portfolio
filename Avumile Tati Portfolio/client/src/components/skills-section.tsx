import { useEffect, useRef, useState } from "react";
import { Code, Server, Smartphone, BarChart3, Cloud, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Skill } from "@/lib/types";

const skills: Skill[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Crafting modern, responsive websites",
    proficiency: 90,
    icon: "code",
    category: "frontend"
  },
  {
    id: "backend", 
    name: "Backend Development",
    description: "Building efficient APIs & databases",
    proficiency: 85,
    icon: "server",
    category: "backend"
  },
  {
    id: "mobile",
    name: "Mobile App Development", 
    description: "Creating apps for learning & accessibility",
    proficiency: 80,
    icon: "smartphone",
    category: "mobile"
  },
  {
    id: "data",
    name: "Data Analysis",
    description: "Extracting insights from complex data",
    proficiency: 75,
    icon: "chart",
    category: "tools"
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    description: "Deploying and managing web solutions", 
    proficiency: 82,
    icon: "cloud",
    category: "cloud"
  },
  {
    id: "design",
    name: "UI/UX Design",
    description: "Creating user-centered design solutions",
    proficiency: 88,
    icon: "palette",
    category: "design"
  }
];

const techStack = [
  { name: "TypeScript", icon: "TS", color: "text-blue-500 bg-blue-500/20", tech: true },
  { name: "React", icon: "⚛️", color: "text-cyan-400 bg-cyan-400/20", tech: false },
  { name: "Node.js", icon: "JS", color: "text-green-500 bg-green-500/20", tech: true },
  { name: "PostgreSQL", icon: "🐘", color: "text-blue-600 bg-blue-600/20", tech: false },
  { name: "AWS", icon: "☁️", color: "text-orange-500 bg-orange-500/20", tech: false },
  { name: "Docker", icon: "🐳", color: "text-blue-400 bg-blue-400/20", tech: false },
  { name: "Python", icon: "🐍", color: "text-yellow-500 bg-yellow-500/20", tech: false },
  { name: "Git", icon: "Git", color: "text-red-500 bg-red-500/20", tech: true }
];

const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case "code": return <Code className="w-6 h-6" />;
    case "server": return <Server className="w-6 h-6" />;
    case "smartphone": return <Smartphone className="w-6 h-6" />;
    case "chart": return <BarChart3 className="w-6 h-6" />;
    case "cloud": return <Cloud className="w-6 h-6" />;
    case "palette": return <Palette className="w-6 h-6" />;
    default: return <Code className="w-6 h-6" />;
  }
};

const getSkillColor = (category: string) => {
  switch (category) {
    case "frontend": return "text-accent-blue bg-accent-blue/20";
    case "backend": return "text-accent-cyan bg-accent-cyan/20";
    case "mobile": return "text-accent-purple bg-accent-purple/20";
    case "design": return "text-accent-purple bg-accent-purple/20";
    case "cloud": return "text-accent-cyan bg-accent-cyan/20";
    case "tools": return "text-accent-blue bg-accent-blue/20";
    default: return "text-accent-blue bg-accent-blue/20";
  }
};

const getGradientClass = (category: string) => {
  switch (category) {
    case "frontend": return "from-accent-blue to-accent-cyan";
    case "backend": return "from-accent-cyan to-accent-purple";
    case "mobile": return "from-accent-purple to-accent-blue";
    case "design": return "from-accent-purple to-accent-blue";
    case "cloud": return "from-accent-cyan to-accent-purple";
    case "tools": return "from-accent-blue to-accent-cyan";
    default: return "from-accent-blue to-accent-cyan";
  }
};

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" data-testid="skills-title">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto" data-testid="skills-subtitle">
            Full Stack Developer who loves to explore tech
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill) => (
            <Card 
              key={skill.id}
              className="bg-dark-800/50 border-dark-600 hover:border-accent-blue/50 transition-all duration-300 hover:transform hover:scale-105"
              data-testid={`skill-card-${skill.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getSkillColor(skill.category)}`}>
                    {getSkillIcon(skill.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <p className="text-slate-400 mb-4 text-sm">{skill.description}</p>
                <div className="w-full bg-dark-600 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${getGradientClass(skill.category)} h-2 rounded-full transition-all duration-1500 ease-out`}
                    style={{ 
                      width: isVisible ? `${skill.proficiency}%` : '0%'
                    }}
                    data-testid={`skill-bar-${skill.id}`}
                  ></div>
                </div>
                <span className="text-sm text-slate-500 mt-1" data-testid={`skill-percentage-${skill.id}`}>
                  {skill.proficiency}%
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Tech Stack */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-white mb-8" data-testid="tech-stack-title">Tech Stack & Tools</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {techStack.map((tech) => (
            <div 
              key={tech.name}
              className="bg-dark-700/30 border border-dark-600 rounded-lg p-4 text-center hover:border-accent-blue/50 transition-all duration-300 hover:transform hover:scale-105 group"
              data-testid={`tech-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <div className={`${tech.color} rounded-lg p-2 mb-2 mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}>
                {tech.tech ? (
                  <span className="text-sm font-bold font-mono">{tech.icon}</span>
                ) : (
                  <span className="text-2xl">{tech.icon}</span>
                )}
              </div>
              <p className="text-slate-300 text-xs font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
