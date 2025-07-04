import { Shield, Zap, Navigation, Users, Database, Eye, Lock, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const features = [];

const KeyFeatures = () => {
  return (
    <section id="features" className="py-12 bg-sturnus-dark/90 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM1QUE3OEUiIGZpbGwtb3BhY2l0eT0iLjAzIiBkPSJNMzAgMGg2MHY2MEgzMHoiLz48cGF0aCBmaWxsPSIjNUFBNzhFIiBmaWxsLW9wYWNpdHk9Ii4wMyIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto relative z-10 py-[10px] px-[5px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Application to Site Security</h2>
          <p className="text-muted-foreground">
            STURNUS is first developing their technology for site security applications, allowing a rapid identification of intruders by day and night.
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

        <div className="mt-8 relative overflow-hidden rounded-lg max-w-4xl mx-auto">
          <img
            src="/lovable-uploads/4f10630f-539a-4cfa-a47e-414c020b0e8b.png"
            alt="Drone swarm coordination visualization showing multiple drones working together across Cambridge University campus"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
