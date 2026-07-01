import { Section } from "@/components/ui/section";
import { portfolioConfig } from "@/config/portfolioConfig";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Award } from "lucide-react";

export function LearningJourney() {
  const { learningJourney } = portfolioConfig;

  return (
    <Section id="learning-journey" className="bg-background">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3"
        >
          <div className="sticky top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Continuous Growth
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Learning <span className="text-gradient">Journey</span>.
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Technology evolves rapidly. My approach to learning is systematic and relentless, focusing on deep foundational knowledge combined with modern framework mastery.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full md:w-2/3 flex flex-col gap-4"
        >
          {learningJourney.map((cert, idx) => (
            <motion.div 
              key={idx}
              variants={fadeIn}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-border/50 bg-secondary/20 hover:bg-secondary/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-background border border-border/50 text-accent group-hover:text-primary transition-colors">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider px-3 py-1 bg-background rounded-full border border-border/50 w-fit">
                {cert.date}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
