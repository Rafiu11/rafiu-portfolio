import React from "react";
import { ArrowDown, ArrowUpRight, MessageSquare, Github } from "lucide-react";
import { portfolioOwner } from "../data/portfolioData";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:py-32 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E32B3C]/7 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-20 my-auto">
        {/* Top Eyebrow / Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#A09C9A] mb-6">
          <span className="text-[#E32B3C] font-semibold">{portfolioOwner.displayName}</span>
          <span aria-hidden="true">·</span>
          <span>{portfolioOwner.university.split(",")[0]}</span>
          <span aria-hidden="true">·</span>
          <span>{portfolioOwner.location}</span>
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Massive Display Triad */}
            <div className="space-y-1 mb-6">
              {portfolioOwner.heroHeadline.map((phrase, idx) => (
                <div key={idx} className="overflow-hidden leading-none">
                  <h1 className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight text-[#F2EFEB] hover:text-[#E32B3C] transition-colors duration-300">
                    {phrase}
                  </h1>
                </div>
              ))}
            </div>

            {/* Tagline & Subtitles */}
            <p className="text-xl sm:text-2xl font-light text-[#F2EFEB] mb-4 max-w-xl text-balance">
              {portfolioOwner.tagline}
            </p>

            <p className="text-sm md:text-base text-[#A09C9A] leading-relaxed max-w-xl mb-8">
              {portfolioOwner.shortIntro}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollTo("work")}
                className="px-6 py-3.5 bg-[#E32B3C] hover:bg-[#c92433] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center gap-2 shadow-lg hover:shadow-[#E32B3C]/20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="px-6 py-3.5 bg-[#141414] hover:bg-[#1c1c1c] text-[#F2EFEB] border border-[#272727] hover:border-[#383838] text-xs font-semibold uppercase tracking-wider rounded-md transition-all flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E32B3C]"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E32B3C]" />
              </button>

              <a
                href={portfolioOwner.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Direct message on WhatsApp"
                className="p-3.5 bg-[#141414] hover:bg-[#1c1c1c] text-[#A09C9A] hover:text-[#25D366] border border-[#272727] hover:border-[#383838] rounded-md transition-colors"
                title="WhatsApp Quick Contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={portfolioOwner.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub Profile"
                className="p-3.5 bg-[#141414] hover:bg-[#1c1c1c] text-[#A09C9A] hover:text-[#F2EFEB] border border-[#272727] hover:border-[#383838] rounded-md transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Layered Editorial Portrait */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[420px]">
              {/* Decorative Frame Elements */}
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 border border-[#262626] rounded-2xl pointer-events-none transform translate-x-2 translate-y-2 -z-10"
              />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#111111] border border-[#262626] shadow-2xl group">
                <img
                  src={portfolioOwner.heroPortrait}
                  alt="Md All Rafiu Biswash - Official Portrait"
                  className="w-full h-auto aspect-[3/4] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle Bottom Scrim for Plaque Readability */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090909]/90 to-transparent pointer-events-none"
                />

                {/* Discreet Bottom Portrait Plaque */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0c0c0c]/90 backdrop-blur-md rounded-lg border border-[#222222] flex items-center justify-between">
                  <div className="truncate">
                    <p className="text-xs font-semibold text-[#F2EFEB] truncate">
                      {portfolioOwner.fullName}
                    </p>
                    <p className="text-[11px] text-[#A09C9A] truncate">
                      {portfolioOwner.degree.replace(" (Currently Studying)", "")}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E32B3C] shrink-0 ml-2">
                    DIU
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Key Metrics Strip Below Split (As mandated by Portfolio Constitution) */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-[#1c1c1c]">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#A09C9A]">University</div>
            <div className="text-sm font-semibold text-[#F2EFEB] mt-0.5">Daffodil Int. University</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#A09C9A]">Academic Focus</div>
            <div className="text-sm font-semibold text-[#F2EFEB] mt-0.5">B.Sc. Software Engineering</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#A09C9A]">Core Stack</div>
            <div className="text-sm font-semibold text-[#F2EFEB] mt-0.5">React · TypeScript · Node</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#A09C9A]">Availability</div>
            <div className="text-sm font-semibold text-[#E32B3C] mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E32B3C]" />
              <span>Open to Collaboration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-6 flex justify-between items-center text-xs text-[#A09C9A]">
        <span className="hidden sm:inline">Crafted with precision & modern web technologies</span>
        <button
          type="button"
          onClick={() => scrollTo("work")}
          className="flex items-center gap-2 hover:text-[#F2EFEB] transition-colors ml-auto sm:ml-0"
        >
          <span>Scroll down</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
