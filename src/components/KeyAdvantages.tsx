
import { Calendar, Clock, Users, Sun, BellRing, Target } from "lucide-react";
import DroneIconNew from "./DroneIconNew";

const advantages = [{
  icon: Calendar,
  title: "Early-Stage Swarm of Three Drones",
  description: "Eventually scaling to 20+ drones for future events"
}, {
  icon: Clock,
  title: "Uninterrupted Aerial Vigilance",
  description: "Real-time security incident detection around the clock"
}, {
  icon: Users,
  title: "Effortless Control",
  description: "A single operator manages the entire swarm"
}, {
  icon: BellRing,
  title: "Direct Notification of Relevant Staff",
  description: "Faster communication for a faster response"
}, {
  icon: Target,
  title: "Target Tracking",
  description: "Once an intruder is identified, a single drone follows them until security intervenes"
}];

const KeyAdvantages = () => {
  return <section id="key-advantages" className="bg-secondary/50 relative overflow-hidden py-[20px]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">First Prototype Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1 rounded-full bg-sturnus-teal/10 p-2 flex-shrink-0">
                    <advantage.icon className="h-5 w-5 text-sturnus-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
              <img 
                src="/lovable-uploads/f9f800dc-af9f-48cf-bc06-3a429b7aa3eb.png" 
                alt="Drone Swarm Security Illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default KeyAdvantages;
