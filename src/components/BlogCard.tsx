import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/data/blogs";
import { Link } from "react-router-dom";

interface BlogCardProps {
  blog: BlogPost;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link to={`/blog/${blog.id}`} className="block group">
      <Card className="overflow-hidden hover:shadow-hover transition-all duration-300 h-full bg-gradient-card">
        <div className="relative h-48 overflow-hidden">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground">
              {blog.category}
            </Badge>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {blog.excerpt}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
