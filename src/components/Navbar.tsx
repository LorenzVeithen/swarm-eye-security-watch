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

  // Handle scroll to section after navigation is complete
  useEffect(() => {
    // Check if the URL has a hash
    if (location.hash) {
      // Get the element id from the hash
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      
      // If the element exists, scroll to it with an offset
      if (element) {
        setTimeout(() => {
          const navbarHeight = 0; // No offset - align directly at top
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100); // Small delay to ensure DOM is ready
      }
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    // If we're not on the home page, navigate to home page with hash
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    
    // If we're already on the home page
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 0; // No offset - align directly at top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without reloading the page
      window.history.pushState(null, '', `/#${id}`);
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
            onClick={() => scrollToSection('about')} 
            className="text-sm hover:text-sturnus-teal transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-sm hover:text-sturnus-green transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('key-advantages')} 
            className="text-sm hover:text-sturnus-teal transition-colors"
          >
            Advantages
          </button>
          <Link to="/teams" className="text-sm hover:text-sturnus-yellow transition-colors">
            Team
          </Link>
          <Link to="/contact" className="text-sm hover:text-sturnus-teal transition-colors">
            Contact
          </Link>
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
              onClick={() => scrollToSection('about')} 
              className="text-sm py-2 hover:text-sturnus-teal transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-sm py-2 hover:text-sturnus-green transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('key-advantages')} 
              className="text-sm py-2 hover:text-sturnus-teal transition-colors"
            >
              Advantages
            </button>
            <Link 
              to="/teams" 
              className="text-sm py-2 hover:text-sturnus-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="text-sm py-2 hover:text-sturnus-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
