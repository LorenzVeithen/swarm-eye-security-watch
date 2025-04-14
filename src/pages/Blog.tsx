
import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

// This would typically come from a database
const blogPosts = [
  {
    id: 1,
    title: "Revolutionizing Drone Control Through Swarm Intelligence",
    excerpt: "Exploring how our hardware-agnostic approach is changing the way we think about drone operations.",
    date: "2025-04-14",
    author: "STURNUS Team",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Journey to Single-Operator Drone Swarms",
    excerpt: "A deep dive into the technical challenges and breakthroughs in developing our swarm control system.",
    date: "2025-04-10",
    author: "STURNUS Team",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Future of Autonomous Drone Operations",
    excerpt: "Examining the potential impact of swarm technology on various industries and applications.",
    date: "2025-04-05",
    author: "STURNUS Team",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Latest Updates</h1>
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-4 text-muted-foreground mt-2">
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
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-block text-sturnus-teal hover:text-sturnus-teal/90 font-medium mt-4"
                  >
                    Read more →
                  </Link>
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

export default Blog;
