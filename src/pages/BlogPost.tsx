
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// This would typically come from a database
const blogPosts = [
  {
    id: 1,
    title: "Revolutionizing Drone Control Through Swarm Intelligence",
    excerpt: "Exploring how our hardware-agnostic approach is changing the way we think about drone operations.",
    content: `
      <p>In the rapidly evolving landscape of drone technology, STURNUS is pioneering an approach that fundamentally changes how we think about drone operations. Traditional drone control systems typically establish a one-to-one relationship between operators and drones, limiting scalability and efficiency. Our hardware-agnostic swarm control system breaks this paradigm by enabling a single operator to manage multiple drones simultaneously.</p>
      
      <p>At the core of our innovation is an intelligent software layer that abstracts away the hardware complexities of different drone models. This means that our system can work with various drone types, regardless of manufacturer or specifications. Operators no longer need to be experts on specific drone models; instead, they can focus on the mission objectives.</p>
      
      <p>The swarm intelligence built into our system allows drones to communicate with each other and make collective decisions based on their environment and mission parameters. This distributed intelligence makes the swarm more resilient to failures and more adaptable to changing conditions. If one drone encounters issues, the others can compensate, ensuring mission continuity.</p>
      
      <p>Through rigorous testing and refinement, we've demonstrated that our approach not only increases operational capacity but also enhances security outcomes. The ability to cover more ground with fewer human resources translates to more comprehensive surveillance and faster response times to security incidents.</p>
      
      <p>As we continue to develop our technology, we're excited about the potential applications beyond security. The principles of swarm intelligence and hardware-agnostic control systems have implications for industries ranging from agriculture to infrastructure inspection. The future of drone operations is not just about better drones—it's about smarter systems that maximize the potential of existing hardware.</p>
    `,
    date: "2025-04-14",
    author: "STURNUS Team",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Journey to Single-Operator Drone Swarms",
    excerpt: "A deep dive into the technical challenges and breakthroughs in developing our swarm control system.",
    content: `
      <p>Developing a system that allows a single operator to control multiple drones simultaneously presented us with numerous technical challenges. In this post, we'll take you through our journey of overcoming these obstacles to create a robust, scalable swarm control system.</p>
      
      <p>The first major hurdle was establishing reliable communication between drones. Different manufacturers use varying protocols and frequencies, making interoperability difficult. Our solution was to design a middleware layer that translates between these protocols, enabling seamless communication regardless of the drone's make or model.</p>
      
      <p>Another significant challenge was developing algorithms that could handle the complexity of coordinating multiple drones in real-time. Traditional pathfinding algorithms weren't sufficient for our needs; we needed solutions that could account for the dynamics of multiple moving objects while avoiding collisions and optimizing coverage. Through extensive research and testing, we developed proprietary algorithms that efficiently manage swarm behavior while maintaining safety and effectiveness.</p>
      
      <p>Creating an intuitive user interface was perhaps one of our most underestimated challenges. Controlling multiple drones can quickly become overwhelming for a single operator. We conducted numerous user testing sessions to refine our interface, focusing on simplicity and clarity. The result is a control system that allows operators to manage complex missions without cognitive overload.</p>
      
      <p>Battery management across multiple drones required innovative solutions as well. Our system continuously monitors battery levels and autonomously rotates drones in and out of service for recharging, ensuring uninterrupted coverage during extended operations.</p>
      
      <p>Looking back on our development journey, each challenge we faced ultimately led to a more robust and versatile system. We're proud of what we've accomplished and excited about the future improvements on our roadmap. As we continue to refine our technology, we remain committed to pushing the boundaries of what's possible with drone swarm technology.</p>
    `,
    date: "2025-04-10",
    author: "STURNUS Team",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Future of Autonomous Drone Operations",
    excerpt: "Examining the potential impact of swarm technology on various industries and applications.",
    content: `
      <p>As we develop our drone swarm technology, we're constantly exploring the broader implications and future applications of autonomous drone operations. While our current focus is on security applications, the potential extends far beyond this single domain.</p>
      
      <p>The core capabilities we're building—hardware-agnostic control, swarm coordination, and single-operator efficiency—create a foundation for innovation across multiple industries. In agriculture, drone swarms could monitor crop health, apply precise treatments, and optimize resource usage at unprecedented scales. For infrastructure inspection, swarms could dramatically reduce the time required to assess bridges, power lines, and other critical structures, identifying potential issues before they become critical failures.</p>
      
      <p>Perhaps most exciting is the potential in emergency response scenarios. Drone swarms could be deployed immediately following natural disasters to assess damage, locate survivors, and guide rescue teams. The ability to quickly survey large areas could save precious time when it matters most.</p>
      
      <p>We're also seeing promising research in the fields of environmental monitoring and conservation. Drone swarms could track wildlife populations, monitor deforestation, or detect pollution sources with greater efficiency than current methods allow.</p>
      
      <p>The future of autonomous drone operations isn't just about doing what we already do more efficiently—it's about enabling entirely new approaches to longstanding challenges. As regulatory frameworks evolve to accommodate these technologies, we anticipate a rapid expansion of applications and use cases.</p>
      
      <p>At STURNUS, we're focused on building the foundational technologies that will make this future possible. By solving the complex challenges of swarm coordination and control today, we're helping to shape a tomorrow where autonomous drone operations are an integral part of how we address our most pressing challenges.</p>
    `,
    date: "2025-04-05",
    author: "STURNUS Team",
    readTime: "6 min read"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id.toString() === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button 
              onClick={() => navigate('/blog')}
              className="bg-sturnus-teal hover:bg-sturnus-teal/90"
            >
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            className="mb-8" 
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          
          <article>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
