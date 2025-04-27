
import { User, Briefcase, Award, Code, GraduationCap, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Team = () => {
  return <section id="team" className="bg-secondary/20 py-[20px]">
      <div className="container mx-auto px-[5px] py-[20px]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto py-[20px]">
            STURNUS is a startup from the University of Cambridge, building at the forefront of site security
            innovation by bringing deep expertise in aerospace engineering, AI, robotics, and autonomous systems.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
          <AspectRatio ratio={16/9}>
            <img 
              src="/lovable-uploads/a0cf3b2d-477e-4229-a17c-112385a6a5da.png"
              alt="STURNUS founders at Cambridge University"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Card className="bg-secondary/40 backdrop-blur-sm border border-accent/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Lorenz Veithen</h3>
                    <p className="text-sturnus-teal">CEO</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Postgraduate student with 6+ years of experience in the aerospace industry, leading teams in the development of deep space and Earth orbit missions.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 text-sturnus-teal mr-2" />
                    <span className="text-sm">University of Cambridge, TU Delft</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 text-sturnus-green mr-2" />
                    <span className="text-sm">Aerospace Engineer</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-sturnus-yellow mr-2" />
                    <span className="text-sm">Previously worked on projects with DLR, ESA, NASA, and CERN</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open('https://www.linkedin.com/in/lorenz-veithen/', '_blank')}
                  >
                    <Linkedin className="mr-2" /> LinkedIn
                  </Button>
                </div>
              </div>
              
              <div className="h-2 bg-gradient-to-r from-sturnus-teal to-sturnus-yellow"></div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/40 backdrop-blur-sm border border-accent/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Kai-Fung Chu</h3>
                    <p className="text-sturnus-green">CTO</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Postdoctoral researcher with 10+ years of experience in distributed
                  decision-making, automation, and multiagent systems.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 text-sturnus-teal mr-2" />
                    <span className="text-sm">University of Cambridge, University of Hong Kong</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="h-4 w-4 text-sturnus-green mr-2" />
                    <span className="text-sm">Distributed Systems Expert</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-sturnus-yellow mr-2" />
                    <span className="text-sm">Raised £250K for reasearch and published 27 articles with 450+ citations</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open('https://www.linkedin.com/in/kai-fung-chu-87917315a/', '_blank')}
                  >
                    <Linkedin className="mr-2" /> LinkedIn
                  </Button>
                </div>
              </div>
              
              <div className="h-2 bg-gradient-to-r from-sturnus-green to-sturnus-yellow"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};

export default Team;

