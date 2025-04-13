
import { Check, Plane, Network, Cpu, Users } from "lucide-react";

const steps = [
  {
    title: "Swarm Integration",
    description: "Our software connects to various drone models, creating a unified swarm regardless of hardware specifications.",
    icon: Plane
  },
  {
    title: "Coordination",
    description: "Advanced algorithms enable drones to communicate and coordinate their actions as a collective intelligence.",
    icon: Network
  },
  {
    title: "Task Allocation",
    description: "The system dynamically assigns roles to each drone based on capabilities, position, and mission requirements.",
    icon: Cpu
  },
  {
    title: "Single-Operator Control",
    description: "One operator manages the entire swarm through an intuitive interface, setting objectives rather than micromanaging.",
    icon: Users
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-sturnus-dark/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM1QUE3OEUiIGZpbGwtb3BhY2l0eT0iLjAzIiBkPSJNMzAgMGg2MHY2MEgzMHoiLz48cGF0aCBmaWxsPSIjNUFBNzhFIiBmaWxsLW9wYWNpdHk9Ii4wMyIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How STURNUS Works</h2>
          <p className="text-muted-foreground">
            Our hardware-agnostic platform transforms individual drones into an intelligent, coordinated swarm that operates with unprecedented efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%_-_12px)] w-full h-[2px] bg-gradient-to-r from-sturnus-teal to-transparent z-0"></div>
              )}
              
              <div className="bg-secondary/40 backdrop-blur-sm border border-accent/20 rounded-lg p-6 relative z-10 h-full transition-transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 rounded-full bg-sturnus-teal/10 flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-sturnus-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                <div className="w-8 h-8 rounded-full bg-sturnus-green flex items-center justify-center absolute -top-4 -left-4">
                  <span className="text-white font-medium">{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-secondary/30 backdrop-blur-sm border border-accent/20 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Key Advantages of Our Swarm Technology</h3>
              <ul className="space-y-3">
                {[
                  "Hardware-agnostic software compatible with various drone models",
                  "Intelligent coordination between multi-species of drones",
                  "Single operator can control thousands of drones simultaneously",
                  "Real-time adaptation to changing environments and conditions",
                  "Significantly reduced operational costs compared to conventional approaches"
                ].map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-sturnus-teal" />
                    </div>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="relative h-64 rounded-lg bg-black/50 overflow-hidden">
                {/* Simulated drone swarm visualization */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black opacity-50"></div>
                <div className="absolute top-0 left-0 w-full p-2 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-sturnus-teal animate-pulse mr-2"></div>
                    <span className="text-xs font-mono">SWARM ACTIVE</span>
                  </div>
                  <span className="text-xs font-mono">DRONES: 238 • ACTIVE: 236</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-2">
                  <div className="text-xs font-mono flex justify-between">
                    <span>MISSION: AGRICULTURAL SURVEY</span>
                    <span>EFFICIENCY: 94%</span>
                  </div>
                </div>
                
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_19px,rgba(90,170,142,0.1)_20px),repeating-linear-gradient(90deg,transparent,transparent_19px,rgba(90,170,142,0.1)_20px)]"></div>
                
                {/* Simulated drone indicators */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} 
                       className="absolute w-2 h-2 rounded-full bg-sturnus-teal/80" 
                       style={{ 
                         left: `${Math.random() * 80 + 10}%`, 
                         top: `${Math.random() * 80 + 10}%`,
                         opacity: Math.random() * 0.5 + 0.5
                       }}>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
