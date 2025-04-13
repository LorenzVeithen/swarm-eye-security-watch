
import { CheckCircle, Award, Users, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About SwarmEye Security</h2>
            <p className="text-muted-foreground mb-6">
              SwarmEye Security is a leading provider of advanced drone-based security solutions. Founded by experts in robotics, artificial intelligence, and security operations, we're revolutionizing how sites are protected.
            </p>
            <p className="text-muted-foreground mb-8">
              Our proprietary swarm technology enables multiple drones to work in concert, creating an intelligent security net that can monitor, detect, and respond to threats with unprecedented efficiency and reliability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <div className="mr-4">
                  <CheckCircle className="h-6 w-6 text-sturnus-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Military-Grade Technology</h3>
                  <p className="text-sm text-muted-foreground">Utilizing systems developed for defense applications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <CheckCircle className="h-6 w-6 text-sturnus-teal" />
                </div>
                <div>
                  <h3 className="font-medium">AI-Powered Analytics</h3>
                  <p className="text-sm text-muted-foreground">Advanced threat detection with minimal false alarms</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <CheckCircle className="h-6 w-6 text-sturnus-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Rapid Deployment</h3>
                  <p className="text-sm text-muted-foreground">Operational within hours, not days or weeks</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <CheckCircle className="h-6 w-6 text-sturnus-teal" />
                </div>
                <div>
                  <h3 className="font-medium">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">Dedicated team for continuous monitoring</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-secondary/40 backdrop-blur-sm border border-accent/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-sturnus-teal/10 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-sturnus-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Industry Leading Expertise</h4>
                    <p className="text-muted-foreground">
                      Our team combines decades of experience in security, robotics, and artificial intelligence.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-sturnus-green/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-sturnus-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Trusted By Industry Leaders</h4>
                    <p className="text-muted-foreground">
                      Securing events, industrial sites, and critical infrastructure for top companies worldwide.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-sturnus-yellow/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-sturnus-yellow" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Comprehensive Security</h4>
                    <p className="text-muted-foreground">
                      Beyond surveillance—our systems actively respond to and neutralize security threats.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-sturnus-teal/30 rounded-tr-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-sturnus-yellow/30 rounded-bl-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
