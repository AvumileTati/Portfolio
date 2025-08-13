import { GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-dark-800/50" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" data-testid="about-title">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed" data-testid="about-description-1">
              I'm a passionate Full Stack Developer with a background in ICT (Applications Development) and certifications in AI & Basic Coding from Samsung Innovation Program. I specialize in web development, app creation, and tech support, always looking to explore new technologies and build solutions that make an impact.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed" data-testid="about-description-2">
              My goal? To bridge the digital divide by empowering communities with tech education through my initiative, <span className="text-accent-cyan font-semibold">Dynamic Duo Tech Solutions</span>. Whether it's developing sleek websites, mobile applications, or training learners in rural areas, I'm all about creating opportunities through technology.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              <div className="text-center p-4 bg-dark-700/50 rounded-lg border border-dark-600 hover:border-accent-blue/50 transition-colors" data-testid="stat-projects">
                <div className="text-2xl font-bold text-accent-blue">10+</div>
                <div className="text-slate-400 text-sm">Projects</div>
              </div>
              <div className="text-center p-4 bg-dark-700/50 rounded-lg border border-dark-600 hover:border-accent-cyan/50 transition-colors" data-testid="stat-experience">
                <div className="text-2xl font-bold text-accent-cyan">2+</div>
                <div className="text-slate-400 text-sm">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-dark-700/50 rounded-lg border border-dark-600 hover:border-accent-purple/50 transition-colors" data-testid="stat-technologies">
                <div className="text-2xl font-bold text-accent-purple">15+</div>
                <div className="text-slate-400 text-sm">Technologies</div>
              </div>
              <div className="text-center p-4 bg-dark-700/50 rounded-lg border border-dark-600 hover:border-accent-blue/50 transition-colors" data-testid="stat-certifications">
                <div className="text-2xl font-bold text-accent-blue">3+</div>
                <div className="text-slate-400 text-sm">Certifications</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="bg-dark-700/50 border-dark-600 hover:border-accent-blue/50 transition-colors duration-300" data-testid="education-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="text-accent-blue w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Education</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-accent-blue" data-testid="education-ict">Diploma in ICT</h4>
                    <p className="text-slate-400">Applications Development</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-cyan" data-testid="education-samsung">Samsung Innovation Program</h4>
                    <p className="text-slate-400">AI & Basic Coding Certifications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Experience Card */}
            <Card className="bg-dark-700/50 border-dark-600 hover:border-accent-cyan/50 transition-colors duration-300" data-testid="experience-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <Briefcase className="text-accent-cyan w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Experience</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-accent-cyan" data-testid="experience-ddt">Dynamic Duo Tech Solutions</h4>
                    <p className="text-slate-400">Founder | IT Services & Support Provider</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-blue" data-testid="experience-prephones">Pre-phones Skills Project</h4>
                    <p className="text-slate-400">Web Development Skills Demonstration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
