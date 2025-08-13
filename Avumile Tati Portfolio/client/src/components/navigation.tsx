import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-700" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold gradient-text" data-testid="logo">
              Avumile Tati
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-slate-300 hover:text-accent-blue transition-colors duration-300"
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white"
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-lg" data-testid="mobile-menu">
          <div className="px-6 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-accent-blue transition-colors"
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
