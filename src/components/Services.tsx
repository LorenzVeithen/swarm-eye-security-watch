
import { Radar, Target, Map, Users, Camera, Bell, Tractor, Package, Shield, PlaneTakeoff, Buildings, Microscope } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const serviceItems = [
  {
    icon: Shield,
    title: "Security & Surveillance",
    description: "Intelligent monitoring of sites with autonomous threat detection and response capabilities."
  },
  {
    icon: Tractor,
    title: "Agricultural Management",
    description: "Precision crop monitoring, automated irrigation analysis, and optimized resource distribution."
  },
  {
    icon: Package,
    title: "Delivery Networks",
    description: "Coordinated package delivery systems with dynamic route optimization and obstacle avoidance."
  },
  {
    icon: Buildings,
    title: "Urban Planning",
    description: "Comprehensive urban mapping and infrastructure assessment for smart city development."
  },
  {
    icon: PlaneTakeoff,
    title: "Search & Rescue",
    description: "Wide-area search operations with intelligent pattern recognition and coordination."
  },
  {
    icon: Microscope,
    title: "Research & Development",
    description: "Advanced platforms for testing swarm algorithms and multi-agent coordination systems."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Applications of Our Swarm Technology</h2>
          <p className="text-muted-foreground">
            Our hardware-agnostic drone swarm technology can revolutionize operations across multiple industries and use cases.
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
