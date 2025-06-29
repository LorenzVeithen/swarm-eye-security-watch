
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KeyAdvantages from "@/components/KeyAdvantages";
import KeyFeatures from "@/components/KeyFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        
        {/* Drone Swarm Visualization */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <img
                src="/lovable-uploads/4f10630f-539a-4cfa-a47e-414c020b0e8b.png"
                alt="Drone swarm coordination visualization showing multiple drones working together across Cambridge University campus"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        
        <KeyFeatures />
        <KeyAdvantages />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
