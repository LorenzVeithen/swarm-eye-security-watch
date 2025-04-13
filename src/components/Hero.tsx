
import { Plane, Shield, Eye, Lock } from "lucide-react";
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
          poster="/placeholder.svg" // Placeholder image while video loads
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
              Advanced <span className="gradient-text">Drone Swarm</span> Security Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Intelligent monitoring and rapid response using cutting-edge drone swarm technology for unmatched site security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:lavv2@cam.ac.uk?subject=STURNUS%20Chat%20Request&body=I'm%20interested%20in%20learning%20more%20about%20STURNUS%20drone%20security%20solutions."
                className="inline-block"
              >
                <Button size="lg" className="bg-security-600 hover:bg-security-500 text-white w-full">
                  Request a Chat
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-security-500 text-security-400 hover:bg-security-500/10"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <div className="flex items-center bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Eye className="h-4 w-4 text-security-400 mr-2" />
                <span className="text-sm">24/7 Monitoring</span>
              </div>
              <div className="flex items-center bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Lock className="h-4 w-4 text-security-400 mr-2" />
                <span className="text-sm">Rapid Response</span>
              </div>
              <div className="flex items-center bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-security-400 mr-2" />
                <span className="text-sm">AI-Powered</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <div className="absolute w-32 h-32 bg-security-800/50 backdrop-blur-sm rounded-full flex items-center justify-center z-20">
                <div className="absolute inset-0 border-2 border-security-400/30 rounded-full animate-pulse"></div>
                <Plane className="h-16 w-16 text-security-400" />
              </div>

              <div className="absolute w-64 h-64 rounded-full border border-security-700/30 animate-[spin_20s_linear_infinite]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-security-800/50 backdrop-blur-sm p-2 rounded-full">
                  <Plane className="h-6 w-6 text-security-500" />
                </div>
              </div>

              <div className="absolute w-80 h-80 rounded-full border border-security-700/20 animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-security-800/50 backdrop-blur-sm p-2 rounded-full">
                  <Plane className="h-6 w-6 text-security-500" />
                </div>
              </div>

              <div className="absolute w-96 h-96 rounded-full border border-security-700/10 animate-[spin_40s_linear_infinite]">
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-security-800/50 backdrop-blur-sm p-2 rounded-full">
                  <Plane className="h-6 w-6 text-security-500" />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[radial-gradient(circle,rgba(33,150,243,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
