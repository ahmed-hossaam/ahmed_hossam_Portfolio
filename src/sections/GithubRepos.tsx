import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { portfolioConfig } from "@/config/portfolioConfig";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/ahmed-hossaam/repos?sort=updated&per_page=6");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        // Sort by stars manually as GitHub API sort=stars sometimes is finicky
        const sortedData = data.sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count).slice(0, 6);
        setRepos(sortedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load repositories");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (error || (!loading && repos.length === 0)) {
    return null; // Hide section if failed or empty
  }

  return (
    <Section id="github" className="bg-background">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
          >
            <Github size={14} className="text-foreground" />
            Open Source
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl"
          >
            Featured <span className="text-gradient">Repositories</span>.
          </motion.h2>
        </div>
        
        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          href={portfolioConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
        >
          View all on GitHub <ExternalLink size={16} />
        </motion.a>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-48 rounded-2xl bg-secondary/30 animate-pulse border border-border/50" />
          ))}
        </div>
      ) : (
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repos.map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn}
              className="group flex flex-col h-full p-6 rounded-2xl border border-border/50 bg-secondary/10 hover:bg-secondary/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-background border border-border/50 text-foreground group-hover:text-primary transition-colors">
                  <Github size={20} />
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">{repo.name}</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
                {repo.description || "No description provided."}
              </p>
            </motion.a>
          ))}
        </motion.div>
      )}
    </Section>
  );
}
