
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
        
        {/* GUI Demo Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Drone Management Interface</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our intuitive control interface allows operators to manage multiple drones simultaneously, 
                  with real-time camera feeds, map coordination, and automated mission controls.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/9f539ca6-6a79-412b-bc5c-2733491237e1.png"
                  alt="Drone Manager GUI showing multi-drone coordination interface with camera views, map, and control options"
                  className="w-full h-auto"
                />
              </div>
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
