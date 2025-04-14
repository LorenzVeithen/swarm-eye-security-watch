
import { Briefcase, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Software Engineer - Drone Control Systems",
    location: "Cambridge, UK",
    description: "Join our team to develop cutting-edge drone control systems using swarm intelligence technology. We're looking for experienced software engineers with a background in robotics or autonomous systems.",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Computer Vision Engineer",
    location: "Cambridge, UK",
    description: "Help us build advanced computer vision systems for drone navigation and obstacle avoidance. Experience with OpenCV, deep learning, and real-time processing required.",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Robotics Research Engineer",
    location: "Cambridge, UK",
    description: "Research and develop novel approaches to swarm robotics and multi-agent systems. PhD in Robotics, Computer Science, or related field preferred.",
    type: "Full-time",
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Help us revolutionize drone technology and shape the future of autonomous systems.
          </p>
          
          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-sturnus-teal" />
                    {job.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                    <span className="px-2 py-1 bg-secondary rounded-full text-xs">
                      {job.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="hover:bg-sturnus-teal hover:text-white transition-colors"
                    asChild
                  >
                    <a href={`mailto:careers@sturnus-security.com?subject=Application for ${job.title}`}>
                      Apply Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
