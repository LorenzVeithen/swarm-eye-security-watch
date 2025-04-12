
import { Check, Plane, Radar, Shield, AlertCircle } from "lucide-react";

const steps = [
  {
    title: "Deployment",
    description: "Our drones are deployed in a coordinated swarm pattern, creating an extensive coverage network.",
    icon: Plane
  },
  {
    title: "Detection",
    description: "AI-powered computer vision systems identify anomalies and potential security threats in real-time.",
    icon: Radar
  },
  {
    title: "Response",
    description: "Drones autonomously respond to threats, tracking movements while alerting security personnel.",
    icon: AlertCircle
  },
  {
    title: "Resolution",
    description: "Security threats are contained and resolved with coordinated action between drones and ground teams.",
    icon: Shield
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-security-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxNTY1QzAiIGZpbGwtb3BhY2l0eT0iLjAzIiBkPSJNMzAgMGg2MHY2MEgzMHoiLz48cGF0aCBmaWxsPSIjMTU2NUMwIiBmaWxsLW9wYWNpdHk9Ii4wMyIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How SwarmEye Works</h2>
          <p className="text-muted-foreground">
            Our drone swarm technology creates an intelligent security network that operates autonomously to detect and respond to threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%_-_12px)] w-full h-[2px] bg-gradient-to-r from-security-500 to-transparent z-0"></div>
              )}
              
              <div className="bg-secondary/40 backdrop-blur-sm border border-accent/20 rounded-lg p-6 relative z-10 h-full transition-transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 rounded-full bg-security-500/10 flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-security-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                <div className="w-8 h-8 rounded-full bg-security-600 flex items-center justify-center absolute -top-4 -left-4">
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
                  "Continuous 360° surveillance with no blind spots",
                  "Intelligent tracking that follows threats autonomously",
                  "Redundant coverage ensures no single point of failure",
                  "Rapid deployment in emergency situations",
                  "AI-powered threat detection with minimal false alarms"
                ].map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-security-500" />
                    </div>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="relative h-64 rounded-lg bg-black/50 overflow-hidden">
                {/* Simulated drone camera feed */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black opacity-50"></div>
                <div className="absolute top-0 left-0 w-full p-2 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse mr-2"></div>
                    <span className="text-xs font-mono">LIVE</span>
                  </div>
                  <span className="text-xs font-mono">DRONE-01 • THERMAL</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-2">
                  <div className="text-xs font-mono flex justify-between">
                    <span>LAT: 51.507351</span>
                    <span>LONG: -0.127758</span>
                  </div>
                </div>
                
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_19px,rgba(33,150,243,0.1)_20px),repeating-linear-gradient(90deg,transparent,transparent_19px,rgba(33,150,243,0.1)_20px)]"></div>
                
                {/* Simulated person detection */}
                <div className="absolute left-[40%] top-[30%] w-16 h-24 border-2 border-red-500 animate-pulse">
                  <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs font-mono px-1">
                    INTRUDER
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

export default HowItWorks;
