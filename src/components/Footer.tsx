
import { Shield, Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-security-500" />
              <span className="text-xl font-bold">STURNUS</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Advanced drone swarm security solutions for comprehensive site protection.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/sturn-us" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-security-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
                  Perimeter Security
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
                  Event Security
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
                  Industrial Site Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
                  Emergency Response
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
                  Infrastructure Protection
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-security-500 mr-2 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  info@swarmeye-security.com
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-security-500 mr-2 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Cambridge, UK
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sturnus Security. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-security-500 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
