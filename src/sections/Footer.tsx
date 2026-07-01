import { portfolioConfig } from "@/config/portfolioConfig";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const { personal, social } = portfolioConfig;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border/50 py-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-mono font-bold text-xl tracking-tighter text-foreground mb-2">
              &lt;AHMED /&gt;
            </div>
            <p className="text-muted-foreground text-sm">
              {personal.name} • {personal.title}
            </p>
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href={`mailto:${social.email}`} className="hover:text-foreground transition-colors">Email</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <p>Designed with intentionality. Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}
