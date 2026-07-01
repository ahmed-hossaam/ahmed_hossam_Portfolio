import { Section } from "@/components/ui/section";
import { portfolioConfig } from "@/config/portfolioConfig";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Quote } from "lucide-react";

export function Testimonials() {
  const { testimonials } = portfolioConfig;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <Section id="testimonials" className="bg-background">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Words from <span className="text-gradient">Others</span>.
        </motion.h2>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {testimonials.map((testimonial, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeIn}
            className="glass-panel p-8 rounded-2xl relative"
          >
            <Quote className="absolute top-6 right-6 text-primary/20 w-12 h-12" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 relative z-10 italic">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-lg">
                {testimonial.author.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground">{testimonial.author}</span>
                <span className="text-sm text-primary font-mono">{testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
