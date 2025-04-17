
import { Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg"
        >
          <source src="/drone-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Hardware-Agnostic <span className="gradient-text">Drone Swarm</span> Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Enabling thousands of drones to work together as an intelligent swarm, controlled by a single operator across multiple industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:lavv2@cam.ac.uk?subject=STURNUS%20Chat%20Request&body=I'm%20interested%20in%20learning%20more%20about%20STURNUS%20drone%20swarm%20technology."
                className="inline-block"
              >
                <Button size="lg" className="bg-sturnus-teal hover:bg-sturnus-teal/90 text-white w-full">
                  Request a Chat
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-sturnus-teal text-sturnus-teal hover:bg-sturnus-teal/10"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              {/* Central hub */}
              <div className="absolute w-20 h-20 bg-secondary/50 backdrop-blur-sm rounded-full flex items-center justify-center z-20">
                <div className="absolute inset-0 border-2 border-sturnus-teal/30 rounded-full animate-pulse"></div>
                <Cpu className="h-10 w-10 text-sturnus-teal" />
              </div>

              {/* First orbit - 3 drones */}
              <div className="absolute w-40 h-40 rounded-full border border-sturnus-teal/30 animate-[spin_15s_linear_infinite]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <Cpu className="h-4 w-4 text-sturnus-teal" />
                </div>
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <Cpu className="h-4 w-4 text-sturnus-teal" />
                </div>
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <Cpu className="h-4 w-4 text-sturnus-teal" />
                </div>
              </div>

              {/* Second orbit - 3 drones */}
              <div className="absolute w-64 h-64 rounded-full border border-sturnus-green/20 animate-[spin_25s_linear_infinite_reverse]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <Cpu className="h-4 w-4 text-sturnus-green" />
                </div>
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <Cpu className="h-4 w-4 text-sturnus-green" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <Cpu className="h-4 w-4 text-sturnus-green" />
                </div>
              </div>

              {/* Third orbit - 4 drones */}
              <div className="absolute w-96 h-96 rounded-full border border-sturnus-yellow/10 animate-[spin_35s_linear_infinite]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <Cpu className="h-4 w-4 text-sturnus-yellow" />
                </div>
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <Cpu className="h-4 w-4 text-sturnus-yellow" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <Cpu className="h-4 w-4 text-sturnus-yellow" />
                </div>
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <Cpu className="h-4 w-4 text-sturnus-yellow" />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[radial-gradient(circle,rgba(90,170,142,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
