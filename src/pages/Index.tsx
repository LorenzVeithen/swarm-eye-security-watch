
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
        <KeyFeatures />
        <KeyAdvantages />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
