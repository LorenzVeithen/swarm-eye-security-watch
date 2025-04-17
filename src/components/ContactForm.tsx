
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Type for the subscriber data
type Subscriber = {
  id: string;
  email: string;
  name: string;
  createdAt: string;
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Generate a unique ID for the subscriber
    const subscriberId = crypto.randomUUID();
    
    // Create the subscriber object
    const newSubscriber: Subscriber = {
      id: subscriberId,
      email: formData.email,
      name: formData.name,
      createdAt: new Date().toISOString()
    };
    
    // Get existing subscribers from localStorage or initialize empty array
    const existingSubscribersJson = localStorage.getItem('subscribers');
    const existingSubscribers: Subscriber[] = existingSubscribersJson 
      ? JSON.parse(existingSubscribersJson) 
      : [];
    
    // Check if email already exists
    const emailExists = existingSubscribers.some(
      subscriber => subscriber.email.toLowerCase() === formData.email.toLowerCase()
    );
    
    if (emailExists) {
      setIsSubmitting(false);
      toast({
        title: "Already Subscribed",
        description: "This email is already subscribed to our mailing list.",
        variant: "destructive"
      });
      return;
    }
    
    // Add new subscriber to the array
    const updatedSubscribers = [...existingSubscribers, newSubscriber];
    
    // Save to localStorage
    localStorage.setItem('subscribers', JSON.stringify(updatedSubscribers));
    
    // Log the subscriber data for integration with other systems
    console.log('New subscriber added:', newSubscriber);
    console.log('All subscribers:', updatedSubscribers);
    
    // Show success UI
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our mailing list!",
      });
      
      // Reset form after showing success UI
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: ""
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-sturnus-dark/90 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Updates</h2>
          <p className="text-muted-foreground">
            Stay informed about our latest developments and drone technology advancements.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-secondary/40 backdrop-blur-sm border border-accent/20 rounded-lg p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-sturnus-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-sturnus-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Subscription Confirmed!</h3>
              <p className="text-muted-foreground">
                Thank you for subscribing to our mailing list. You'll be the first to know about our updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary/60 border-accent/40"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary/60 border-accent/40"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-sturnus-teal hover:bg-sturnus-teal/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : "Subscribe Now"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
