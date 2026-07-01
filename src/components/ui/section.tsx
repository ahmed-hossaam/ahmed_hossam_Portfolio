import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { fadeIn } from "@/animations/variants";

interface SectionProps extends HTMLMotionProps<"section"> {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className, children, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        id={id}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className={cn("py-24 md:py-32 relative", className)}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {children}
        </div>
      </motion.section>
    );
  }
);

Section.displayName = "Section";
