
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold gradient-text">STURNUS</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/#how-it-works" className="text-sm hover:text-sturnus-green transition-colors">How It Works</Link>
          <Link to="/#about" className="text-sm hover:text-sturnus-teal transition-colors">About</Link>
          <Link to="/#contact" className="text-sm hover:text-sturnus-teal transition-colors">Contact</Link>
          <Link to="/blog" className="text-sm hover:text-sturnus-teal transition-colors">Blog</Link>
          {/* Careers link removed as requested */}
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
            <Link 
              to="/#how-it-works" 
              className="text-sm py-2 hover:text-sturnus-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/#about" 
              className="text-sm py-2 hover:text-sturnus-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/#contact" 
              className="text-sm py-2 hover:text-sturnus-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className="text-sm py-2 hover:text-sturnus-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            {/* Careers link removed */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
