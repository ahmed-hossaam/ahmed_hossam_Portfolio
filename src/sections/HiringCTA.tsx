import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HiringCTA() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="hiring" className="bg-primary text-primary-foreground py-32 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blur-2xl pointer-events-none" />
      
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
          Stop scrolling portfolios. Let's just talk about your project.
        </h2>
        
        <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Currently available for frontend internships, collaboration, and freelance opportunities. If you have a project that needs a precise, engineering-first approach, let's talk.
        </p>
        
        <Button 
          size="lg" 
          variant="secondary"
          onClick={scrollToContact}
          className="h-14 px-8 text-lg font-bold rounded-xl hover:scale-105 transition-transform duration-300 text-primary group"
        >
          Start a Conversation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </Section>
  );
}
