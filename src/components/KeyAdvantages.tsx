
import { Shield, Zap, Navigation, Users, Database, Eye, Lock, Cpu } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Comprehensive Protection",
    description: "Our swarm technology provides unprecedented coverage for monitoring and securing critical infrastructure."
  },
  {
    icon: Zap,
    title: "Real-time Response",
    description: "Instant detection and rapid response to security threats through coordinated drone swarm action."
  },
  {
    icon: Navigation,
    title: "Autonomous Navigation",
    description: "Advanced AI algorithms enable drones to navigate complex environments without human guidance."
  },
  {
    icon: Users,
    title: "Single-Operator Control",
    description: "One operator can manage hundreds of drones simultaneously through our intuitive control interface."
  },
  {
    icon: Database,
    title: "Data Aggregation",
    description: "Seamless collection and analysis of multi-sensor data across the entire swarm."
  },
  {
    icon: Eye,
    title: "Enhanced Surveillance",
    description: "Cover large areas with persistent monitoring capabilities without fatigue or distraction."
  },
  {
    icon: Lock,
    title: "Secure Communications",
    description: "Encrypted mesh network ensures reliable and secure communications between swarm units."
  },
  {
    icon: Cpu,
    title: "Edge Processing",
    description: "On-board AI processing reduces latency and enables operation in low-bandwidth environments."
  }
];

const KeyAdvantages = () => {
  return (
    <section id="key-advantages" className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Key Advantages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1 rounded-full bg-sturnus-teal/10 p-2 flex-shrink-0">
                    <advantage.icon className="h-5 w-5 text-sturnus-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <div className="relative aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/placeholder.svg"
                >
                  <source src="/drone-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Fallback in case video doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-sturnus-dark/50 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="mb-2 text-sturnus-teal text-lg font-bold">Drone Swarm Technology</div>
                    <p className="text-sm text-gray-300">Coordinated autonomous drone operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAdvantages;
