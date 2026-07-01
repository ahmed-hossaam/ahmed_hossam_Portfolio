import { Section } from "@/components/ui/section";
import { portfolioConfig } from "@/config/portfolioConfig";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";

export function Experience() {
  const { experience } = portfolioConfig;

  return (
    <Section id="experience" className="bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            Work History
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Professional <span className="text-gradient">Experience</span>.
          </motion.h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative border-l border-border/50 ml-4 md:ml-8 pl-8 md:pl-12 py-4 space-y-16"
        >
          {experience.map((exp, idx) => (
            <motion.div key={idx} variants={fadeIn} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300 z-10" />
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-primary/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                <span className="text-sm font-mono text-primary font-medium px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                  {exp.duration}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>
              
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
