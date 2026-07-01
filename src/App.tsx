import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Highlights } from "@/sections/Highlights";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { GithubRepos } from "@/sections/GithubRepos";
import { Experience } from "@/sections/Experience";
import { LearningJourney } from "@/sections/LearningJourney";
import { CurrentFocus } from "@/sections/CurrentFocus";
// import { Testimonials } from "@/sections/Testimonials";
import { HiringCTA } from "@/sections/HiringCTA";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { portfolioConfig } from "@/config/portfolioConfig";
import { useEffect } from "react";

function PortfolioApp() {
  // Update document title
  useEffect(() => {
    document.title = `${portfolioConfig.personal.name} | ${portfolioConfig.personal.title}`;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Projects />
        <GithubRepos />
        <Experience />
        <LearningJourney />
        <CurrentFocus />
        {/* <Testimonials /> */}
        <HiringCTA />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

export default App;
