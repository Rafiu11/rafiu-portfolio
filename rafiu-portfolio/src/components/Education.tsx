import React from "react";
import { BookOpen, Check } from "lucide-react";
import { educationMilestones } from "../data/portfolioData";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E32B3C] font-semibold mb-3">
              <span>04. Academic Foundation</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A09C9A]">Continuous Growth</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EFEB] tracking-tight">
              EDUCATION & LEARNING
            </h2>
          </div>
          <p className="text-sm text-[#A09C9A] max-w-md leading-relaxed">
            Pairing structured university computer science coursework with self-driven
            engineering experiments and modern web best practices.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="bg-[#111111] border border-[#222222] hover:border-[#333333] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors group"
            >
              <div>
                {/* Status / Period */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="text-[#E32B3C] font-semibold uppercase tracking-wider">
                    {milestone.period}
                  </span>
                  <span className="text-[#777777] font-mono text-[11px]">
                    Phase 0{idx + 1}
                  </span>
                </div>

                {/* Degree / Title */}
                <h3 className="font-display text-2xl text-[#F2EFEB] group-hover:text-[#E32B3C] transition-colors mb-1">
                  {milestone.title}
                </h3>
                <div className="text-xs text-[#A09C9A] font-medium mb-4">
                  {milestone.institution}
                </div>

                {/* Narrative */}
                <p className="text-sm text-[#A09C9A] leading-relaxed mb-6">
                  {milestone.description}
                </p>
              </div>

              {/* Topics Explored */}
              <div className="pt-6 border-t border-[#1a1a1a]">
                <div className="text-[11px] uppercase tracking-wider text-[#777777] font-semibold mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#E32B3C]" />
                  <span>Key Competencies</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {milestone.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-[#D4CFC9]">
                      <Check className="w-3.5 h-3.5 text-[#E32B3C] shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
