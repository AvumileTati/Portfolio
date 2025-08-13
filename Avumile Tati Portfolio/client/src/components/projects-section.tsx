import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: "ddt-solutions",
    title: "Dynamic Duo Tech Solutions",
    description: "Full-stack business website with modern UI/UX, responsive design, and integrated contact systems",
    image: "https://avumiletati.netlify.app/Images/Ddtsolutions.png",
    liveUrl: "https://ddtsolutions.co.za/",
    githubUrl: "https://github.com/avumiletati/ddt-solutions",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    category: "web"
  },
  {
    id: "portfolio-v2",
    title: "Modern Portfolio Website",
    description: "This current portfolio built with React, TypeScript, and modern web technologies",
    image: "https://avumiletati.netlify.app/Images/figma.png",
    liveUrl: "#",
    githubUrl: "https://github.com/avumiletati/portfolio-v2",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    category: "web"
  },
  {
    id: "srd-registration",
    title: "SRD Registration System", 
    description: "Government grant registration system with intuitive UX and accessibility features",
    image: "https://avumiletati.netlify.app/Images/figma.png",
    liveUrl: "https://www.figma.com/proto/g6lfoZvSpSPmxNIDKIij84/Untitled?node-id=0-1&t=PAjooG4pZz9oZ6ox-1",
    tags: ["Figma", "UI/UX", "Government", "Accessibility"],
    category: "design"
  },
  {
    id: "e-commerce-api",
    title: "E-Commerce REST API",
    description: "Scalable backend API with authentication, payment processing, and real-time notifications",
    image: "https://avumiletati.netlify.app/Images/graphic1.png",
    githubUrl: "https://github.com/avumiletati/ecommerce-api",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    category: "other"
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team collaboration features",
    image: "https://avumiletati.netlify.app/Images/graphic2.png",
    liveUrl: "https://task-manager-demo.netlify.app",
    githubUrl: "https://github.com/avumiletati/task-manager",
    tags: ["React", "Socket.io", "MongoDB", "Redux"],
    category: "web"
  },
  {
    id: "mobile-weather",
    title: "Weather Mobile App",
    description: "Cross-platform mobile app with location-based weather forecasts and offline functionality",
    image: "https://avumiletati.netlify.app/Images/prephone.png",
    githubUrl: "https://github.com/avumiletati/weather-app",
    tags: ["React Native", "TypeScript", "API Integration"],
    category: "mobile"
  }
];

const getTagColor = (tag: string) => {
  const colors = {
    // Technologies
    "React": "bg-cyan-500/20 text-cyan-400",
    "Node.js": "bg-green-500/20 text-green-400",
    "TypeScript": "bg-blue-500/20 text-blue-400",
    "JavaScript": "bg-yellow-500/20 text-yellow-400",
    "PostgreSQL": "bg-blue-600/20 text-blue-300",
    "MongoDB": "bg-green-600/20 text-green-400",
    "Express": "bg-gray-500/20 text-gray-300",
    "Tailwind": "bg-teal-500/20 text-teal-400",
    "Vite": "bg-purple-500/20 text-purple-400",
    "Socket.io": "bg-indigo-500/20 text-indigo-400",
    "Redux": "bg-purple-600/20 text-purple-400",
    "JWT": "bg-red-500/20 text-red-400",
    "React Native": "bg-cyan-600/20 text-cyan-300",
    
    // Categories
    "Figma": "bg-pink-500/20 text-pink-400",
    "UI/UX": "bg-accent-cyan/20 text-accent-cyan",
    "Government": "bg-accent-purple/20 text-accent-purple",
    "Accessibility": "bg-green-500/20 text-green-400",
    "API Integration": "bg-orange-500/20 text-orange-400",
    
    // Default fallbacks
    "Web Development": "bg-accent-blue/20 text-accent-blue",
    "Business": "bg-accent-cyan/20 text-accent-cyan"
  };
  return colors[tag as keyof typeof colors] || "bg-accent-blue/20 text-accent-blue";
};

export default function ProjectsSection() {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 bg-dark-800/50" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" data-testid="projects-title">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto" data-testid="projects-subtitle">
            Showcasing my latest work in web development, mobile apps, and UI/UX design
          </p>
        </div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="bg-dark-700/50 border-dark-600 overflow-hidden hover:border-accent-blue/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  data-testid={`project-image-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-accent-blue rounded-lg text-sm font-medium hover:bg-accent-blue/80 transition-colors flex items-center"
                          data-testid={`project-live-link-${project.id}`}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {project.category === 'design' ? 'View Project' : 'Live Demo'}
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-dark-600 border border-dark-500 rounded-lg text-sm font-medium hover:border-accent-cyan transition-colors flex items-center"
                          data-testid={`project-github-link-${project.id}`}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className={`${getTagColor(tag)} border-0 text-xs`}
                      data-testid={`project-tag-${project.id}-${tag.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button
            onClick={handleScrollToContact}
            className="btn-gradient px-8 py-4 font-semibold text-white hover:shadow-lg hover:shadow-accent-blue/25 transform hover:-translate-y-1 transition-all duration-300"
            data-testid="button-view-all-projects"
          >
            <FolderOpen className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
