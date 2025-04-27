
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// This would typically come from a database
const blogPosts = [
  {
    id: 1,
    title: "What is Swarm-Intelligence?",
    excerpt: "Exploring the potential of a multi-agent world.",
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
