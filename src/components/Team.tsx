import { User, Briefcase, Award, Code, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
const Team = () => {
  return <section id="team" className="bg-secondary/20 py-[20px]">
      <div className="container mx-auto px-[5px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto py-[20px]">
            Sturnus is a startup from the University of Cambridge, building at the forefront of event security
            innovation by bringing deep expertise in aerospace engineering, AI, and autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* CEO Card */}
          <Card className="bg-secondary/40 backdrop-blur-sm border border-accent/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-16 w-16 mr-4 border-2 border-sturnus-teal">
                    <AvatarFallback className="bg-sturnus-teal/20 text-sturnus-teal">LC</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">Lorenz</h3>
                    <p className="text-sturnus-teal">CEO</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Aerospace engineer, Cambridge graduate student, and an experienced
                  leader including projects in collaboration with DLR, ESA, NASA, and CERN.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 text-sturnus-teal mr-2" />
                    <span className="text-sm">University of Cambridge</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 text-sturnus-green mr-2" />
                    <span className="text-sm">Aerospace Engineering</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-sturnus-yellow mr-2" />
                    <span className="text-sm">Projects with DLR, ESA, NASA, CERN</span>
                  </div>
                </div>
              </div>
              
              <div className="h-2 bg-gradient-to-r from-sturnus-teal to-sturnus-yellow"></div>
            </CardContent>
          </Card>

          {/* CTO Card */}
          <Card className="bg-secondary/40 backdrop-blur-sm border border-accent/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-16 w-16 mr-4 border-2 border-sturnus-green">
                    <AvatarFallback className="bg-sturnus-green/20 text-sturnus-green">KJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">Kai</h3>
                    <p className="text-sturnus-green">CTO</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Cambridge Postdoctoral researcher with 10+ years of experience in distributed
                  decision-making, automation, and multiagent systems.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 text-sturnus-teal mr-2" />
                    <span className="text-sm">Cambridge Postdoctoral Researcher</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="h-4 w-4 text-sturnus-green mr-2" />
                    <span className="text-sm">Distributed Systems Expert</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-sturnus-yellow mr-2" />
                    <span className="text-sm">10+ Years Experience</span>
                  </div>
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