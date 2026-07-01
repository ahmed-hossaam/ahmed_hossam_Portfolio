import { Section } from "@/components/ui/section";
import { portfolioConfig } from "@/config/portfolioConfig";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Target, BookOpen, Hammer, Compass } from "lucide-react";

export function CurrentFocus() {
  const { currentFocus } = portfolioConfig;

  return (
    <Section id="current-focus" className="bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border/50 text-foreground text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Live Radar
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Current <span className="text-gradient">Focus</span>.
        </motion.h2>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
      >
        <motion.div variants={fadeIn} className="glass-panel p-8 rounded-2xl flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-primary" />
            <h3 className="text-xl font-bold font-mono">Currently Learning</h3>
          </div>
          <ul className="space-y-4">
            {currentFocus.currentlyLearning.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-1 text-sm">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeIn} className="glass-panel p-8 rounded-2xl flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Hammer className="text-accent" />
            <h3 className="text-xl font-bold font-mono">Currently Building</h3>
          </div>
          <ul className="space-y-4">
            {currentFocus.currentlyBuilding.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-accent mt-1 text-sm">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeIn} className="glass-panel p-8 rounded-2xl flex flex-col md:col-span-2">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-foreground" />
                <h3 className="text-xl font-bold font-mono">Career Goals</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {currentFocus.careerGoals}
              </p>
            </div>
            
            <div className="w-px bg-border/50 hidden md:block" />
            <div className="h-px w-full bg-border/50 md:hidden" />
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="text-foreground" />
                <h3 className="text-xl font-bold font-mono">Exploring</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentFocus.technologiesExplored.map((item, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-lg bg-background border border-border/50 text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
