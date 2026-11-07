import React, { useState } from "react";
import { Code2, Server, Lightbulb, GitBranch } from "lucide-react";
import { skillCategories } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [Code2, Server, Lightbulb, GitBranch];

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E32B3C] font-semibold mb-3">
              <span>03. Capabilities</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A09C9A]">Stack & Tooling</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EFEB] tracking-tight">
              SKILLS & TECHNOLOGIES
            </h2>
          </div>
          <p className="text-sm text-[#A09C9A] max-w-md leading-relaxed">
            Technologies and workflows verified through hands-on project engineering,
            collaborative academic work, and independent software development.
          </p>
        </div>

        {/* Category Tabs for Desktop & Mobile */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-[#121212] border border-[#222222] rounded-xl max-w-fit">
          {skillCategories.map((cat, idx) => {
            const Icon = icons[idx % icons.length];
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.title}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#E32B3C] text-white shadow-sm"
                    : "text-[#A09C9A] hover:text-[#F2EFEB]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div
              key={skill}
              className="p-5 bg-[#111111] border border-[#222222] hover:border-[#333333] rounded-xl transition-all group"
            >
              <div className="flex items-center justify-between text-xs text-[#777777] font-mono mb-2">
                <span>0{index + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E32B3C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-sm font-semibold text-[#F2EFEB] group-hover:text-[#E32B3C] transition-colors">
                {skill}
              </h4>
            </div>
          ))}
        </div>

        {/* Full Overview 4-Column Bento Breakdown */}
        <div className="pt-8 border-t border-[#1a1a1a]">
          <h3 className="text-xs uppercase tracking-widest text-[#777777] font-semibold mb-6">
            Comprehensive Technical Matrix
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={category.title}
                  className="p-6 bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl"
                >
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-[#F2EFEB] mb-4 pb-3 border-b border-[#1b1b1b]">
                    <Icon className="w-4 h-4 text-[#E32B3C]" />
                    <span>{category.title}</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#A09C9A]">
                    {category.skills.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#333333]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
