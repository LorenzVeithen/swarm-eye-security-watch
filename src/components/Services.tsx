
import { Radar, Target, Map, Users, Camera, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const serviceItems = [
  {
    icon: Radar,
    title: "Perimeter Monitoring",
    description: "Continuous surveillance of site boundaries with intelligent motion detection to identify potential threats."
  },
  {
    icon: Target,
    title: "Intruder Tracking",
    description: "Automated tracking of unauthorized personnel with real-time location data and behavioral analysis."
  },
  {
    icon: Map,
    title: "Aerial Mapping",
    description: "Comprehensive site mapping and regular updates to identify changes in the environment."
  },
  {
    icon: Users,
    title: "Crowd Management",
    description: "Monitor crowds at events for safety concerns, congestion, and potential security risks."
  },
  {
    icon: Camera,
    title: "Video Surveillance",
    description: "High-definition video capture with night vision capabilities and cloud-based storage."
  },
  {
    icon: Bell,
    title: "Alert System",
    description: "Immediate notifications to security personnel and automated response protocols."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Security Solutions</h2>
          <p className="text-muted-foreground">
            We provide comprehensive drone-based security services using advanced swarm technology for various scenarios and environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="bg-card-gradient border border-accent/60 hover:border-sturnus-teal/40 transition-all duration-300 overflow-hidden group">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-sturnus-teal/10 flex items-center justify-center mb-4 group-hover:bg-sturnus-teal/20 transition-colors">
                  <service.icon className="h-6 w-6 text-sturnus-teal" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
