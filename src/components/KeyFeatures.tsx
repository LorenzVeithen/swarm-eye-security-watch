
import { Shield, Zap, Navigation, Users, Database, Eye, Lock, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
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

const KeyFeatures = () => {
  return (
    <section id="features" className="py-24 bg-sturnus-dark/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM1QUE3OEUiIGZpbGwtb3BhY2l0eT0iLjAzIiBkPSJNMzAgMGg2MHY2MEgzMHoiLz48cGF0aCBmaWxsPSIjNUFBNzhFIiBmaWxsLW9wYWNpdHk9Ii4wMyIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-muted-foreground">
            Our hardware-agnostic platform transforms individual drones into an intelligent, coordinated swarm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary/40 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-sturnus-teal/10 flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-sturnus-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-lg">
          <div className="aspect-video relative">
            <video 
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              muted
              loop
              playsInline
              poster="/placeholder.svg"
            >
              <source src="/drone-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h3 className="text-2xl font-bold mb-2">Drone Swarm Technology</h3>
              <p className="text-gray-200 mb-4 max-w-2xl">
                Watch how our coordinated drone swarm provides unmatched security coverage for critical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
