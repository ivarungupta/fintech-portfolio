import { Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

export function Hero(): JSX.Element {
  return (
    <section
      className="relative overflow-hidden bg-background flex flex-col justify-center
                 min-h-[68vh] md:min-h-[72vh] lg:min-h-[75vh]"
    >
      {/* smaller top gap under fixed navbar */}
      <div className="pt-20 md:pt-24 lg:pt-28" />

      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="pointer-events-none absolute -top-10 left-10 w-56 h-56 md:w-64 md:h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-72 h-72 md:w-80 md:h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Avatar */}
          <div className="mb-1 md:mb-1">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-50" />
              <img
                src={profilePhoto}
                alt="Varun Gupta"
                className="relative rounded-full object-cover border-4 border-background shadow-glow mx-auto
                           w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="mb-4 md:mb-5">
            <h1
              className="font-display font-bold mb-1 text-[clamp(2rem,5vw,3.5rem)] flex justify-center items-center gap-2"
            >
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Hi, I'm Varun
              </span>
              <span
                role="img"
                aria-label="wave"
                className="inline-block animate-wave text-4xl"
              >
                👋
              </span>
            </h1>

            <p
              className="font-semibold text-foreground mb-2
                         text-[clamp(1.25rem,2.2vw,1.75rem)]"
            >
              Aspiring Finance Professional
            </p>

            <p
              className="text-muted-foreground max-w-3xl mx-auto leading-relaxed
                         text-[clamp(0.95rem,1.4vw,1.125rem)]"
            >
              Wells Fargo (Incoming) | CFA L1 Candidate | Prev: 2Cents Capital, Omifco, Precap, VL
            </p>
          </div>

          {/* Achievements */}
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-5">
            <div className="px-3.5 py-1.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="text-[0.85rem] font-medium text-foreground">
                🏆 Amazon HackOn S5 Top 25
              </span>
            </div>
            <div className="px-3.5 py-1.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="text-[0.85rem] font-medium text-foreground">
                ⚡ 4% Alpha vs S&amp;P 500
              </span>
            </div>
            <div className="px-3.5 py-1.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="text-[0.85rem] font-medium text-foreground">
                🎓 Goldman Sachs VIS
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-5 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-[0.95rem]">Hyderabad, India</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent hover:opacity-90 shadow-elegant
                         text-[0.95rem] md:text-base px-6 md:px-7 py-5 md:py-6"
            >
              <a
                href="https://www.linkedin.com/in/ivarung/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Varun's LinkedIn profile"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary/20 hover:bg-primary/5
                         text-[0.95rem] md:text-base px-6 md:px-7 py-5 md:py-6"
            >
              <a
                href="mailto:ivarungupta7@gmail.com"
                aria-label="Email Varun at ivarungupta7@gmail.com"
              >
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-5 w-5 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* smaller bottom spacer */}
      <div className="pb-4 md:pb-6" />
    </section>
  );
}
