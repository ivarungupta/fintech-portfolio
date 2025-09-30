import { Linkedin, Mail, MapPin, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Varun Gupta"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-glow mx-auto"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-accent animate-pulse" />
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                Finance × Technology
              </span>
              <Sparkles className="h-6 w-6 text-accent animate-pulse" />
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Varun Gupta
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Quantitative Researcher & Software Engineer
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              B.Tech CS Student at BIT Mesra | Building ML-driven quant frameworks & developer tools | 
              Wells Fargo • 2Cents Capital • Amazon MLSS Scholar
            </p>
          </div>

          {/* Achievements Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-foreground">🏆 Amazon HackOn S5 Top 25</span>
            </div>
            <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-foreground">⚡ 4% Alpha vs S&P 500</span>
            </div>
            <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-foreground">🎓 Goldman Sachs VIS</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <MapPin className="h-5 w-5" />
            <span>Hyderabad, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 shadow-elegant text-lg px-8">
              <Linkedin className="h-5 w-5 mr-2" />
              Connect on LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 text-lg px-8">
              <Mail className="h-5 w-5 mr-2" />
              Get in Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
