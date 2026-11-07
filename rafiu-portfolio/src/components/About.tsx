import React from "react";
import { Sparkles, MapPin, GraduationCap, Compass, Laptop } from "lucide-react";
import { portfolioOwner } from "../data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E32B3C] font-semibold mb-3">
            <span>02. Background</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A09C9A]">Engineering Mindset</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EFEB] tracking-tight">
            ABOUT ME
          </h2>
        </div>

        {/* 2-Column Split: Editorial Bio & Quick Fact Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Authentic Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl font-light text-[#F2EFEB] leading-snug">
              Software Engineering student passionate about turning imaginative ideas into
              practical, resilient digital products.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#A09C9A] leading-relaxed">
              {portfolioOwner.aboutMe.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Handwritten / Script Personal Motto */}
            <div className="pt-4 pb-2">
              <div className="p-5 rounded-xl bg-[#121212] border border-[#222222] relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-24 h-24 bg-[#E32B3C]/5 rounded-full blur-2xl pointer-events-none"
                />
                <div className="text-[11px] uppercase tracking-wider text-[#E32B3C] font-semibold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E32B3C]" />
                  <span>Personal Motto</span>
                </div>
                <blockquote className="font-accent text-2xl sm:text-3xl text-[#F2EFEB] tracking-wide mt-1">
                  "{portfolioOwner.motto}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Overview & Core Foundations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#1c1c1c]">
                <img
                  src={portfolioOwner.heroPortrait}
                  alt={portfolioOwner.fullName}
                  className="w-12 h-12 rounded-full object-cover object-top border border-[#2b2b2b]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[#F2EFEB] font-semibold">
                    {portfolioOwner.fullName}
                  </h3>
                  <span className="text-[11px] text-[#A09C9A] block">
                    B.Sc. in Software Engineering · DIU
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#E32B3C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A09C9A] block">University & Degree</span>
                    <span className="text-[#F2EFEB] font-medium text-sm">
                      Daffodil International University
                    </span>
                    <span className="text-[#888888] block text-[11px] mt-0.5">
                      B.Sc. in Software Engineering (Currently Studying)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#1a1a1a]">
                  <MapPin className="w-4 h-4 text-[#E32B3C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A09C9A] block">Location</span>
                    <span className="text-[#F2EFEB] font-medium text-sm">Bangladesh</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#1a1a1a]">
                  <Laptop className="w-4 h-4 text-[#E32B3C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A09C9A] block">Primary Focus</span>
                    <span className="text-[#F2EFEB] font-medium text-sm">
                      Front-End & Full-Stack Web Development
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#1a1a1a]">
                  <Compass className="w-4 h-4 text-[#E32B3C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A09C9A] block">Current Availability</span>
                    <span className="text-[#F2EFEB] font-medium text-sm">
                      {portfolioOwner.availability}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Focus Card */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#222222]">
              <h4 className="text-xs uppercase tracking-widest text-[#A09C9A] font-semibold mb-3">
                Learning Mindset
              </h4>
              <p className="text-xs text-[#A09C9A] leading-relaxed">
                Rather than treating software as isolated code syntax, I build systems with clean
                modularity, continuous learning loops, and real peer utility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
