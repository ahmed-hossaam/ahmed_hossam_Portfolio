import { Section } from "@/components/ui/section";
import { portfolioConfig } from "@/config/portfolioConfig";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/animations/variants";

export function About() {  
  const { personal } = portfolioConfig;
  const { about } = portfolioConfig;

  return (
    <Section id="about" className="bg-background">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          className="w-full md:w-1/2 relative"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Abstract geometric composition instead of a photo */}
          <div className="aspect-[4/5] max-w-md mx-auto relative group z-10 flex flex-col h-full p-8 justify-between">
            <div className="absolute inset-0 bg-secondary/50 rounded-2xl border border-border/50 transform -rotate-3 transition-transform duration-500 group-hover:rotate-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl border border-border/50 transform rotate-3 transition-transform duration-500 group-hover:rotate-0 z-10 flex flex-col p-8 justify-between">
              <div className="flex-1 relative overflow-hidden rounded-xl">
                
  <img 
    src={personal.AboutImage} 
    alt={personal.name}
    className="absolute inset-0 w-full h-full object-cover object-top mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
  />
</div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-border/50 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]" />
                </div>
                <div className="h-2 w-full bg-border/50 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[92%]" />
                </div>
                <div className="h-2 w-3/4 bg-border/50 rounded-full overflow-hidden">
                  <div className="h-full bg-muted-foreground w-[75%]" />
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(circle,hsl(var(--primary)/0.3)_2px,transparent_2px)] bg-[size:8px_8px] z-20" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[radial-gradient(circle,hsl(var(--accent)/0.3)_2px,transparent_2px)] bg-[size:8px_8px]" />
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            About Me
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">From idea to deployed product — that's where I live</span>.
          </h2>
          
          <div className="space-y-4 text-muted-foreground text-lg mb-8 leading-relaxed">
            {about.story.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border/50">
            {about.details.map((detail, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-1 font-mono">
                  {detail.label}
                </span>
                <span className="text-foreground font-medium">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
