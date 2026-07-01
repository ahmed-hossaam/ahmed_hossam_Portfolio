import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioConfig } from "@/config/portfolioConfig";
import { Section } from "@/components/ui/section";
import { Code2, Database, Award, GraduationCap } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
        }
      };

      animationFrame = window.requestAnimationFrame(step);
      return () => window.cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export function Highlights() {
  const { highlights } = portfolioConfig;

  const stats = [
    { label: "Projects Built", value: highlights.projectsBuilt, suffix: "+", icon: Code2 },
    { label: "Technologies", value: highlights.technologiesUsed, suffix: "+", icon: Database },
    { label: "Certifications", value: highlights.certificationsEarned, icon: Award },
    { label: "Graduation", value: highlights.graduationYear, icon: GraduationCap },
  ];

  return (
    <div className="w-full bg-secondary/30 border-y border-border/50 py-12 mt-6 relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="p-3 bg-background rounded-xl border border-border/50 mb-4 text-primary shadow-sm">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold tracking-tight mb-2 font-mono">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
