import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary/90 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold gradient-text">STURNUS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-sm hover:text-sturnus-green transition-colors">How It Works</a>
          <a href="#about" className="text-sm hover:text-sturnus-teal transition-colors">About</a>
          <a href="#contact" className="text-sm hover:text-sturnus-teal transition-colors">Contact</a>
          <a href="/blog" className="text-sm hover:text-sturnus-teal transition-colors">Blog</a>
          <a href="/careers" className="text-sm hover:text-sturnus-teal transition-colors">Careers</a>
          <Button size="sm" className="bg-sturnus-teal hover:bg-sturnus-teal/90">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-sm py-2 hover:text-sturnus-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#about" 
              className="text-sm py-2 hover:text-sturnus-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-sm py-2 hover:text-sturnus-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="/blog" 
              className="text-sm py-2 hover:text-sturnus-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="/careers" 
              className="text-sm py-2 hover:text-sturnus-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </a>
            <Button className="w-full bg-sturnus-teal hover:bg-sturnus-teal/90">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
