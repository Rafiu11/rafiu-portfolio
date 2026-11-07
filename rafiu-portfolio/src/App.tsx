import React, { useState, useEffect } from "react";
import { SwarmMotionCanvas } from "./components/SwarmMotionCanvas";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Approach } from "./components/Approach";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Check prefers-reduced-motion on mount
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMotionEnabled(false);
    }
  }, []);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for section spy
  useEffect(() => {
    const sectionIds = ["hero", "work", "about", "skills", "education", "approach", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090909] text-[#F2EFEB] selection:bg-[#E32B3C] selection:text-white font-sans">
      {/* Scroll Progress Bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 h-[2px] bg-[#E32B3C] z-50 transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Interactive Swarm Canvas */}
      <SwarmMotionCanvas enabled={motionEnabled} />

      {/* Primary Sticky Header */}
      <Header
        motionEnabled={motionEnabled}
        onToggleMotion={() => setMotionEnabled((prev) => !prev)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Education />
        <Approach />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
