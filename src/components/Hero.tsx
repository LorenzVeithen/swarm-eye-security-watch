
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full">
          <img
            src="/lovable-uploads/458539cb-4183-4d2c-83a3-1c68f849e914.png"
            alt="Starling murmuration over water"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex items-center justify-center">
          <div className="w-full md:w-2/3 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span className="gradient-text">Drone Swarm</span> Technology for Site Security
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enabling multi-species aerial drones to work together as an intelligent swarm, controlled by a single operator.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="mailto:lavv2@cam.ac.uk?subject=STURNUS%20Chat%20Request&body=I'm%20interested%20in%20learning%20more%20about%20STURNUS%20drone%20swarm%20technology."
                className="inline-block"
              >
                <Button size="lg" className="bg-sturnus-teal hover:bg-sturnus-teal/90 text-white">
                  Request a Chat
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
