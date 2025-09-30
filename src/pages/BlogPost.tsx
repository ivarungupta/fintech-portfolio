import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-8 hover:bg-accent/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>

            <div className="mb-8">
              <Badge className="bg-primary text-primary-foreground mb-4">
                {blog.category}
              </Badge>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                {blog.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-elegant">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-foreground space-y-6">
                {blog.content}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Button
                onClick={() => navigate("/#blog")}
                className="bg-gradient-accent hover:opacity-90"
              >
                Read More Articles
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
