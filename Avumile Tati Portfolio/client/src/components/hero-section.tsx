import { ChevronDown, Mail, Download, Github, Linkedin, Terminal, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import TerminalAnimation from "./terminal-animation";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full Stack Developer", "Software Engineer", "Tech Innovator", "Problem Solver"];
  
  useEffect(() => {
    const typeRole = () => {
      const role = roles[currentRole];
      let i = 0;
      const typeInterval = setInterval(() => {
        setTypedText(role.slice(0, i));
        i++;
        if (i > role.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            const deleteInterval = setInterval(() => {
              setTypedText(role.slice(0, i));
              i--;
              if (i === 0) {
                clearInterval(deleteInterval);
                setCurrentRole((prev) => (prev + 1) % roles.length);
              }
            }, 50);
          }, 2000);
        }
      }, 100);
    };
    
    typeRole();
  }, [currentRole]);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-testid="hero-section">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Profile Image */}
            <div className="relative flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <div className="w-40 h-40 rounded-full border-4 border-accent-blue/50 p-1 animate-glow bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20">
                  <img 
                    src="/attached_assets/generated_images/Professional_tech_developer_headshot_302a12ea.png" 
                    alt="Avumile Tati - Full Stack Developer" 
                    className="w-full h-full rounded-full object-cover shadow-2xl"
                    data-testid="profile-image"
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-dark-800 rounded-full animate-pulse"></div>
                {/* Floating elements around image */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-blue rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent-cyan rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -left-4 w-2 h-2 bg-accent-purple rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-accent-cyan text-lg font-medium">
                <Terminal className="w-5 h-5" />
                <span data-testid="intro-text">console.log("Hello World!");</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold gradient-text" data-testid="hero-title">
                Avumile Tati
              </h1>
              <div className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed" data-testid="hero-subtitle">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Code2 className="w-6 h-6 text-accent-blue" />
                  <span className="text-accent-blue font-mono">{typedText}</span>
                  <span className="animate-pulse text-accent-cyan">|</span>
                </div>
                <p className="text-lg">
                  <span className="text-accent-blue">ICT Graduate</span> • 
                  <span className="text-accent-cyan"> Software Engineer</span> • 
                  <span className="text-accent-purple"> Tech Innovator</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
              <Button
                onClick={() => handleScrollToSection("#contact")}
                className="btn-gradient px-8 py-4 font-semibold text-white hover:shadow-lg hover:shadow-accent-blue/25 transform hover:-translate-y-1 transition-all duration-300"
                data-testid="button-hire-me"
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
              <Button
                variant="outline"
                asChild
                className="px-8 py-4 border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                data-testid="button-view-cv"
              >
                <a href="https://drive.google.com/file/d/13sC683Uc-ZKKbptjM3nQeHUAtEDCl39v/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  View CV
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-6">
              <a 
                href="https://github.com/avumiletati" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                data-testid="link-github"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/avumiletati" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent-blue transition-colors duration-300 transform hover:scale-110"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:tatiavumile@gmail.com"
                className="text-slate-400 hover:text-accent-cyan transition-colors duration-300 transform hover:scale-110"
                data-testid="link-email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Terminal Animation */}
          <div className="hidden lg:block animate-slide-up">
            <TerminalAnimation />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => handleScrollToSection("#about")}
          className="text-slate-400 hover:text-accent-blue transition-colors"
          data-testid="scroll-indicator"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
