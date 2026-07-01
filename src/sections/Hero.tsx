import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolioConfig";
import { fadeIn, staggerContainer, floatAnimation } from "@/animations/variants";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const { personal, social } = portfolioConfig;

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border-[1px] border-border/20 rounded-full" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border-[1px] border-border/30 rounded-full dashed-border" />
        
        {/* Animated grid background */}
        <div className="absolute inset-0" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn} className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Internship
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-6">
              <span className="block text-muted-foreground/50 text-2xl md:text-3xl lg:text-4xl mb-2 font-mono tracking-normal">Hello, I'm</span>
              {personal.name}
              <span className="block text-gradient mt-2">{personal.title}</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {personal.headline}
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-10 cursor-pointer">
              <Button size="lg" className="h-12 px-8 font-semibold group rounded-none rounded-tr-xl rounded-bl-xl hover:rounded-xl transition-all duration-300 cursor-pointer" onClick={scrollToContact}>
                Hire Me <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform " />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 font-semibold bg-background/50 backdrop-blur-md rounded-none rounded-tl-xl rounded-br-xl hover:rounded-xl transition-all duration-300 cursor-pointer">
                <Download className="mr-2 h-4 w-4 cursor-pointer" /> Download CV
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex items-center gap-6 text-muted-foreground">
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:-translate-y-1 transition-all duration-300">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={`mailto:${social.email}`} className="hover:text-foreground hover:-translate-y-1 transition-all duration-300">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div animate={floatAnimation} className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl rounded-full" />
              <div className="absolute -inset-4 border border-border/40 rounded-full animate-spin-slow [animation-duration:15s]" />
              <div className="absolute -inset-8 border border-border/20 rounded-full animate-spin-slow [animation-duration:20s] [animation-direction:reverse]" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel border border-border/50 p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-secondary/50 rounded-xl overflow-hidden">
                  <img 
                    src={personal.profileImage} 
                    alt={personal.name}
                  className="w-full h-full object-cover object-top transition-all duration-500"/>
                </div>
              </div>
              
              {/* Floating skill tags */}
              <motion.div 
                className="absolute -right-8 top-12 px-4 py-2 glass-panel rounded-lg font-mono text-sm font-semibold border-primary/20 text-primary shadow-[0_0_15px_rgba(var(--primary),0.2)]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                React.js
              </motion.div>
              <motion.div 
                className="absolute -left-12 bottom-24 px-4 py-2 glass-panel rounded-lg font-mono text-sm font-semibold border-accent/20 text-accent shadow-[0_0_15px_rgba(var(--accent),0.2)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                Laravel
              </motion.div>
              <motion.div 
                className="absolute right-4 -bottom-6 px-4 py-2 glass-panel rounded-lg font-mono text-sm font-semibold border-border/50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                Node.js
              </motion.div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
          animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
