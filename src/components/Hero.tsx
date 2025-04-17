
import { Button } from "@/components/ui/button";

// Custom drone icon component
const DroneIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 595 595"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <path d="M297.5,156.25c-15.61,0-28.125,12.515-28.125,28.125S281.89,212.5,297.5,212.5S325.625,199.985,325.625,184.375 S313.11,156.25,297.5,156.25z M297.5,198.958c-8.058,0-14.583-6.526-14.583-14.583s6.526-14.583,14.583-14.583 s14.583,6.526,14.583,14.583S305.558,198.958,297.5,198.958z"/>
    <path d="M453.958,198.958h-28.125c-7.753,0-14.062-6.31-14.062-14.062v-28.125c0-7.753,6.31-14.062,14.062-14.062h28.125 c7.753,0,14.062,6.31,14.062,14.062v28.125C468.021,192.648,461.711,198.958,453.958,198.958z M425.833,184.375h28.125v-28.125 h-28.125V184.375z"/>
    <path d="M169.167,198.958h-28.125c-7.753,0-14.062-6.31-14.062-14.062v-28.125c0-7.753,6.31-14.062,14.062-14.062h28.125 c7.753,0,14.062,6.31,14.062,14.062v28.125C183.229,192.648,176.919,198.958,169.167,198.958z M141.042,184.375h28.125v-28.125 h-28.125V184.375z"/>
    <path d="M500.104,368.938L456.75,325.584c-3.232-3.231-3.232-8.473,0-11.704s8.473-3.231,11.704,0l0,0l43.354,43.354 c3.231,3.231,3.231,8.473,0,11.704C508.577,372.169,503.335,372.169,500.104,368.938z"/>
    <path d="M456.75,380.642c-4.572,0-8.281-3.708-8.281-8.281c0-4.572,3.708-8.281,8.281-8.281c4.572,0,8.281,3.708,8.281,8.281 C465.031,376.934,461.322,380.642,456.75,380.642z"/>
    <path d="M94.896,368.938L51.542,325.584c-3.232-3.231-3.232-8.473,0-11.704s8.473-3.231,11.704,0l0,0l43.354,43.354 c3.231,3.231,3.231,8.473,0,11.704C103.369,372.169,98.127,372.169,94.896,368.938z"/>
    <path d="M138.25,380.642c-4.572,0-8.281-3.708-8.281-8.281c0-4.572,3.708-8.281,8.281-8.281c4.572,0,8.281,3.708,8.281,8.281 C146.531,376.934,142.822,380.642,138.25,380.642z"/>
    <path d="M358.396,236.146h-121.5c-3.048,0-5.859-1.667-7.321-4.339s-1.667-5.97-0.12-8.585l60.75-121.5 c1.547-3.111,4.742-5.078,8.225-5.078s6.678,1.967,8.225,5.078l60.75,121.5c1.546,2.615,1.341,5.913-0.121,8.585 S361.444,236.146,358.396,236.146z M246.563,219.062h101.874l-50.937-101.874L246.563,219.062z"/>
    <path d="M332.438,495.833c-3.483,0-6.678-1.967-8.225-5.078l-26.713-53.426c-1.546-2.615-1.341-5.913,0.121-8.585 s4.273-4.339,7.321-4.339h55.209c3.048,0,5.859,1.667,7.321,4.339s1.667,5.97,0.12,8.585l-26.929,53.857 c-1.547,3.111-4.742,5.078-8.225,5.078v0V495.833z M314.57,441.479l17.867,35.734l17.867-35.734H314.57z"/>
    <path d="M262.562,495.833c-3.483,0-6.678-1.967-8.225-5.078l-26.929-53.857c-1.546-2.615-1.341-5.913,0.121-8.585 s4.273-4.339,7.321-4.339h55.209c3.048,0,5.859,1.667,7.321,4.339s1.667,5.97,0.12,8.585l-26.713,53.426 c-1.547,3.111-4.742,5.078-8.225,5.078L262.562,495.833z M244.695,441.479l17.867,35.734l17.867-35.734H244.695z"/>
    <path d="M369.771,318.542H225.521c-15.61,0-28.125,12.515-28.125,28.125s12.515,28.125,28.125,28.125h144.25 c15.61,0,28.125-12.515,28.125-28.125S385.382,318.542,369.771,318.542z M369.771,361.25H225.521 c-8.058,0-14.583-6.526-14.583-14.583s6.526-14.583,14.583-14.583h144.25c8.058,0,14.583,6.526,14.583,14.583 S377.829,361.25,369.771,361.25z"/>
    <path d="M323.625,424.896h-52.25c-7.753,0-14.062-6.31-14.062-14.062v-7.753c0-4.572,3.708-8.281,8.281-8.281h63.813 c4.572,0,8.281,3.708,8.281,8.281v7.753C337.688,418.586,331.378,424.896,323.625,424.896z M271.375,410.833h52.25v-2.312h-52.25 V410.833z"/>
  </svg>
);

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
                <DroneIcon className="h-10 w-10 text-sturnus-teal" />
              </div>

              {/* First orbit - 3 drones */}
              <div className="absolute w-40 h-40 rounded-full border border-sturnus-teal/30 animate-[spin_15s_linear_infinite]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <DroneIcon className="h-4 w-4 text-sturnus-teal" />
                </div>
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <DroneIcon className="h-4 w-4 text-sturnus-teal" />
                </div>
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <DroneIcon className="h-4 w-4 text-sturnus-teal" />
                </div>
              </div>

              {/* Second orbit - 3 drones */}
              <div className="absolute w-64 h-64 rounded-full border border-sturnus-green/20 animate-[spin_25s_linear_infinite_reverse]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <DroneIcon className="h-4 w-4 text-sturnus-green" />
                </div>
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <DroneIcon className="h-4 w-4 text-sturnus-green" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <DroneIcon className="h-4 w-4 text-sturnus-green" />
                </div>
              </div>

              {/* Third orbit - 4 drones */}
              <div className="absolute w-96 h-96 rounded-full border border-sturnus-yellow/10 animate-[spin_35s_linear_infinite]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <DroneIcon className="h-4 w-4 text-sturnus-yellow" />
                </div>
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <DroneIcon className="h-4 w-4 text-sturnus-yellow" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <DroneIcon className="h-4 w-4 text-sturnus-yellow" />
                </div>
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full">
                  <DroneIcon className="h-4 w-4 text-sturnus-yellow" />
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
