
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    // If we're not on the home page, navigate to home page first
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    
    // Otherwise, scroll to the section on the current page
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <button 
            onClick={() => scrollToSection('key-advantages')} 
            className="text-sm hover:text-sturnus-green transition-colors"
          >
            Advantages
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-sm hover:text-sturnus-teal transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-sm hover:text-sturnus-teal transition-colors"
          >
            Contact
          </button>
          <Link to="/blog" className="text-sm hover:text-sturnus-teal transition-colors">Blog</Link>
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
            <button 
              onClick={() => scrollToSection('key-advantages')} 
              className="text-sm py-2 hover:text-sturnus-green transition-colors"
            >
              Advantages
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm py-2 hover:text-sturnus-teal transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm py-2 hover:text-sturnus-yellow transition-colors"
            >
              Contact
            </button>
            <Link 
              to="/blog" 
              className="text-sm py-2 hover:text-sturnus-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
