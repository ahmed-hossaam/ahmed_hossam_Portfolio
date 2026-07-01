import { Section } from "@/components/ui/section";
import { portfolioConfig } from "@/config/portfolioConfig";
import { IconRenderer } from "@/components/IconRenderer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";

export function Skills() {
  const { skills } = portfolioConfig;

  return (
    <Section id="skills" className="bg-secondary/10">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          Technical Arsenal
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Tools of the <span className="text-gradient">Trade</span>.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.categories.map((category, idx) => (
          <motion.div
            key={category.title}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col"
          >
            <motion.h3 
              variants={fadeIn}
              className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-border/50 pb-4"
            >
              <span className="text-primary font-mono text-sm">0{idx + 1}.</span>
              {category.title}
            </motion.h3>
            
            <div className="flex flex-col gap-3">
              {category.items.map((item) => (
                <motion.div 
                  key={item.name}
                  variants={fadeIn}
                  className="group relative flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background hover:border-primary/50 transition-colors duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300 z-10">
                    <IconRenderer name={item.icon} size={20} />
                  </div>
                  
                  <div className="flex flex-col z-10">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-xs text-muted-foreground">Production Ready</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
