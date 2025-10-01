import { Linkedin, Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social links */}
          <div className="flex items-center space-x-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ivarung/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ivarungupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>

            {/* Email */}
            <a
              href="mailto:ivarungupta7@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Footer text */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Varun Gupta. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Let's connect and discuss all things finance, tech, and markets!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
