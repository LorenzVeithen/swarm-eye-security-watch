
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Get in touch with our team or subscribe to our newsletter for the latest updates.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-secondary/40 backdrop-blur-sm border border-accent/20 rounded-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Mail className="h-6 w-6 text-sturnus-teal mr-3" />
                  <h2 className="text-2xl font-bold">Join Our Mission</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  We are always looking for talented individuals to join our mission of revolutionizing site security 
                  through autonomous drone technology. If you're passionate about aerospace engineering, AI, robotics, 
                  or autonomous systems, we'd love to hear from you.
                </p>
                <p className="text-muted-foreground">
                  For career opportunities and collaboration inquiries, please contact Lorenz at{" "}
                  <a 
                    href="mailto:lavv2@cam.ac.uk" 
                    className="text-sturnus-teal hover:text-sturnus-teal/80 transition-colors font-medium"
                  >
                    lavv2@cam.ac.uk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
