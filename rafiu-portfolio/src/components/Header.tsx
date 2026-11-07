import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  motionEnabled: boolean;
  onToggleMotion: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  motionEnabled,
  onToggleMotion,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090909]/90 backdrop-blur-md border-b border-[#222222] py-3.5 shadow-2xl"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="group flex items-baseline gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E32B3C] rounded shrink-0"
        >
          <span className="font-display text-2xl md:text-3xl tracking-tight text-[#F2EFEB] transition-colors group-hover:text-[#E32B3C]">
            RAFIU
          </span>
          <span className="text-[#E32B3C] text-2xl font-black">.</span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-widest text-[#A09C9A] font-medium"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-1 transition-colors hover:text-[#F2EFEB] whitespace-nowrap shrink-0 ${
                  isActive ? "text-[#F2EFEB] font-semibold" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E32B3C] rounded-full transition-all"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Motion toggle + CTA + Mobile trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Swarm Motion Toggle */}
          <button
            type="button"
            onClick={onToggleMotion}
            aria-pressed={motionEnabled}
            title={motionEnabled ? "Disable interactive swarm particles" : "Enable interactive swarm particles"}
            className={`hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all border ${
              motionEnabled
                ? "bg-[#161616] border-[#E32B3C]/50 text-[#F2EFEB] hover:border-[#E32B3C]"
                : "bg-transparent border-[#262626] text-[#A09C9A] hover:text-[#F2EFEB] hover:border-[#3a3a3a]"
            }`}
          >
            <Sparkles
              className={`w-3.5 h-3.5 transition-transform ${
                motionEnabled ? "text-[#E32B3C] rotate-12" : "text-[#A09C9A]"
              }`}
            />
            <span className="whitespace-nowrap">
              Motion: <span className={motionEnabled ? "text-[#E32B3C] font-semibold" : ""}>{motionEnabled ? "ON" : "OFF"}</span>
            </span>
          </button>

          {/* Primary Action Button */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-[#E32B3C] hover:bg-[#c92433] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-lg text-[#F2EFEB] hover:bg-[#181818] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E32B3C]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-b border-[#222222] px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-wider font-medium text-[#A09C9A]">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`py-2 transition-colors flex items-center justify-between border-b border-[#1b1b1b] ${
                    isActive ? "text-[#E32B3C] font-bold" : "hover:text-[#F2EFEB]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E32B3C]" />}
                </a>
              );
            })}

            {/* Mobile Motion Toggle */}
            <div className="pt-3 flex items-center justify-between">
              <span className="text-xs text-[#A09C9A]">Interactive Particles</span>
              <button
                type="button"
                onClick={onToggleMotion}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${
                  motionEnabled
                    ? "bg-[#181818] border-[#E32B3C] text-[#F2EFEB]"
                    : "bg-[#111111] border-[#2a2a2a] text-[#A09C9A]"
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#E32B3C]" />
                <span>Motion: {motionEnabled ? "ON" : "OFF"}</span>
              </button>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#E32B3C] text-white text-xs font-semibold uppercase tracking-wider rounded-md"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
