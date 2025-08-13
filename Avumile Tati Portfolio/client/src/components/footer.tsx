import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://github.com/avumiletati",
      icon: <Github className="w-4 h-4" />,
      label: "GitHub",
      testId: "footer-github"
    },
    {
      href: "https://linkedin.com/in/avumiletati",
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn", 
      testId: "footer-linkedin"
    },
    {
      href: "mailto:tatiavumile@gmail.com",
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      testId: "footer-email"
    }
  ];

  return (
    <footer className="bg-dark-900/90 border-t border-dark-600 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Avumile Tati</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Full Stack Developer passionate about creating innovative tech solutions 
              and empowering communities through technology education.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.testId}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 bg-dark-700 border border-dark-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-accent-blue transition-all duration-300 transform hover:scale-105"
                  data-testid={link.testId}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-accent-blue transition-colors text-sm">About</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-accent-blue transition-colors text-sm">Skills</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-accent-blue transition-colors text-sm">Projects</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-accent-blue transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-dark-700 border border-dark-600 rounded-full text-xs text-slate-300 hover:border-accent-blue transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm" data-testid="footer-copyright">
              © {currentYear} Avumile Tati. All rights reserved.
            </div>
            <div className="text-slate-500 text-sm mt-4 md:mt-0" data-testid="footer-tagline">
              Built with passion for technology and innovation
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
