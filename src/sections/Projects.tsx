import { useState } from "react";
import { Section } from "@/components/ui/section";
import { portfolioConfig } from "@/config/portfolioConfig";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  const { projects } = portfolioConfig;
  const [filter, setFilter] = useState("All");

  const allTechs = Array.from(
    new Set(projects.flatMap(p => p.techStack))
  ).slice(0, 5); // Limit filters to top 5

  const filters = ["All", ...allTechs];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.techStack.includes(filter));

  return (
    <Section id="projects" className="bg-background">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            Featured Work
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl"
          >
            Case studies of <span className="text-gradient">complex problems</span> solved.
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === f 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-background text-muted-foreground border-border/50 hover:border-primary/50"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-24"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border/50 bg-secondary/50 glass-panel">
                  {/* Abstract placeholder instead of real image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary flex flex-col items-center justify-center p-8 text-center group-hover:scale-105 transition-transform duration-700">
                     <div className="text-6xl mb-4 opacity-50 font-mono font-bold tracking-tighter mix-blend-overlay">
                       {project.title.substring(0, 2).toUpperCase()}
                     </div>
                     <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 font-mono">The Problem</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2 font-mono">The Solution</h4>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3 font-mono">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <Button variant="default" asChild className="gap-2">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      View Live Demo <ExternalLink size={16} />
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="gap-2">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
