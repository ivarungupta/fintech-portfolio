import { Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
              Varun Gupta
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 max-w-2xl">
              B.Tech CS Student | Finance Enthusiast | Quantitative Researcher
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
              Wells Fargo | Prev: 2Cents Capital, Omifco, Precap | Amazon HackOn (S5) Top 25 FC (~0.04%) | 
              Goldman Sachs VIS Participant | McKinsey Forward Fellow | Amazon MLSS Scholar (~3%)
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8 text-primary-foreground/80">
              <MapPin className="h-5 w-5" />
              <span>Hyderabad, Telangana, India</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Mail className="h-5 w-5 mr-2" />
                Contact
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl"></div>
              <img
                src={profilePhoto}
                alt="Varun Gupta"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary-foreground/20 shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
