
import { useEffect } from "react";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Teams = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Teams;
