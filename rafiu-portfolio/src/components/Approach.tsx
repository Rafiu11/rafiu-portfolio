import React from "react";
import { creativePrinciples } from "../data/portfolioData";

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 md:py-32 border-t border-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E32B3C] font-semibold mb-3">
              <span>05. Philosophy</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A09C9A]">Engineering Mindset</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EFEB] tracking-tight">
              CREATIVE APPROACH
            </h2>
          </div>
          <p className="text-sm text-[#A09C9A] max-w-md leading-relaxed">
            Principles that guide how I structure code, craft interfaces, solve engineering
            bottlenecks, and design software experiences.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creativePrinciples.map((principle) => (
            <div
              key={principle.number}
              className="p-8 bg-[#111111] border border-[#222222] hover:border-[#383838] rounded-2xl flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="font-display text-4xl text-[#777777] group-hover:text-[#E32B3C] transition-colors mb-6">
                  {principle.number}
                </div>
                <h3 className="text-lg font-bold text-[#F2EFEB] mb-3 group-hover:text-white transition-colors">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A09C9A] leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1b1b1b] flex items-center justify-between text-[11px] text-[#777777]">
                <span>Standard</span>
                <span className="text-[#E32B3C] font-mono">0{principle.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
