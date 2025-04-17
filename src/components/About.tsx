import { CheckCircle, Award, Users, Network, Code, Cpu } from "lucide-react";
const About = () => {
  return <section id="about" className="bg-background py-[20px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About STURNUS</h2>
            <p className="text-muted-foreground mb-6">
              STURNUS is a leading innovator in hardware-agnostic drone swarm technology. Founded by experts in robotics, artificial intelligence, and aerospace engineering from the University of Cambridge, we're revolutionizing how drone fleets operate.
            </p>
            <p className="text-muted-foreground mb-8">
              Today, 2.8 million drones are being used across industries ranging from agriculture and delivery to security and defense. However, the vast majority operate independently or in limited fleets rather than in large, intelligent swarms. At STURNUS, we're addressing this missed opportunity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <div className="mr-4">
                  <CheckCircle className="h-6 w-6 text-sturnus-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Hardware-Agnostic Platform</h3>
                  <p className="text-sm text-muted-foreground">Compatible with various drone models and manufacturers</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <CheckCircle className="h-6 w-6 text-sturnus-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Swarm Intelligence</h3>
                  <p className="text-sm text-muted-foreground">Dynamic adaptation to complex environments</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <CheckCircle className="h-6 w-6 text-sturnus-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Single-Operator Control</h3>
                  <p className="text-sm text-muted-foreground">Manage thousands of drones efficiently</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <CheckCircle className="h-6 w-6 text-sturnus-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Multi-Species Integration</h3>
                  <p className="text-sm text-muted-foreground">Coordinate different drone types in one system</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-secondary/40 backdrop-blur-sm border border-accent/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-sturnus-teal/10 p-3 rounded-lg">
                    <Network className="h-6 w-6 text-sturnus-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Swarm-Like Behavior</h4>
                    <p className="text-muted-foreground">
                      Enabling multi-species of drones to dynamically adapt to complex environments through sophisticated swarm intelligence.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-sturnus-green/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-sturnus-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Enhanced Efficiency</h4>
                    <p className="text-muted-foreground">
                      Dramatically improving cost-effectiveness by allowing a single operator to control thousands of coordinated drones.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-sturnus-yellow/10 p-3 rounded-lg">
                    <Cpu className="h-6 w-6 text-sturnus-yellow" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Industry Transformation</h4>
                    <p className="text-muted-foreground">
                      Revolutionizing how drones are used across industries - from agriculture and delivery to security and urban planning.
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
    </section>;
};
export default About;