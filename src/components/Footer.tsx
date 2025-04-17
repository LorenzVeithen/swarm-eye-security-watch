
import { Mail, MapPin, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="bg-secondary py-12 border-t border-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
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
          
          <div className="flex justify-end">
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-4 text-right">
                <li className="flex items-start justify-end">
                  <span className="text-sm text-muted-foreground mr-2">
                    info@swarmeye-security.com
                  </span>
                  <Mail className="h-5 w-5 text-security-500 shrink-0" />
                </li>
                <li className="flex items-start justify-end">
                  <span className="text-sm text-muted-foreground mr-2">
                    Cambridge, UK
                  </span>
                  <MapPin className="h-5 w-5 text-security-500 shrink-0" />
                </li>
              </ul>
            </div>
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
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
