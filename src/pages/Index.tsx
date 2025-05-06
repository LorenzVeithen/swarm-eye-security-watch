
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KeyAdvantages from "@/components/KeyAdvantages";
import KeyFeatures from "@/components/KeyFeatures";
import ContactForm from "@/components/ContactForm";
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
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
