import { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "glass-nav" : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
          >
            Dev Tiwari
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-slate-300 hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-slate-300 hover:text-blue-400 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-slate-300 hover:text-blue-400 transition-colors">
              Projects
            </button>
            <div className="flex items-center space-x-4 ml-6">
              <a 
                href="https://www.linkedin.com/in/dev-tiwari-99a047209/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                title="Connect professionally"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/dt-spec"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-300 hover:text-blue-400 transition-colors"
                title="Check out my code"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("about")} className="text-left text-slate-300 hover:text-blue-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("experience")} className="text-left text-slate-300 hover:text-blue-400 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-left text-slate-300 hover:text-blue-400 transition-colors">
                Projects
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/dev-tiwari-99a047209/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/dt-spec"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
