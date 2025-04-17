
import { Calendar, Clock, Users, Sun, BellRing, Target } from "lucide-react";
import DroneIconNew from "./DroneIconNew";

const advantages = [
  {
    icon: Calendar,
    title: "Early-stage swarm of three drones",
    description: "Eventually scaling to 20+ drones for future events"
  },
  {
    icon: Clock,
    title: "Uninterrupted aerial vigilance",
    description: "Real-time security incident detection around the clock"
  },
  {
    icon: Users,
    title: "Effortless control",
    description: "A single operator manages the entire swarm"
  },
  {
    icon: Sun,
    title: "Day-and-night intrusion detection",
    description: "24/7 monitoring in all lighting conditions"
  },
  {
    icon: BellRing,
    title: "Direct notification of relevant staff",
    description: "Faster communication for a faster response"
  },
  {
    icon: Target,
    title: "Target tracking",
    description: "Once an intruder is identified, a single drone follows them until security intervenes"
  }
];

const KeyAdvantages = () => {
  return (
    <section id="key-advantages" className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center md:flex-row gap-8">
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
          
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
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
