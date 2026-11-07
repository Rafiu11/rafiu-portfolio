import React, { useState, useMemo } from "react";
import { ExternalLink, Github, Search, Layers, ArrowUpRight } from "lucide-react";
import { featuredProjects, Project } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "Full-Stack Web Development", "Healthcare Web Application"];

  const filteredProjects = useMemo(() => {
    return featuredProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q)) ||
        project.features.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="work" className="py-24 md:py-32 border-t border-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E32B3C] font-semibold mb-3">
              <span>01. Selected Works</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A09C9A]">Real Deployments</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EFEB] tracking-tight">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-sm text-[#A09C9A] max-w-md leading-relaxed">
            Real web applications built with modern frameworks, focusing on authentic
            problem-solving, responsive design, and intuitive user experiences.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-12 pb-6 border-b border-[#1c1c1c]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121212] rounded-lg border border-[#222222]">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-[#E32B3C] text-white shadow-sm font-semibold"
                      : "text-[#A09C9A] hover:text-[#F2EFEB]"
                  }`}
                >
                  {cat === "All" ? "All Projects" : cat.replace(" Web Development", "").replace(" Web Application", "")}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09C9A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by technology or keyword..."
              aria-label="Search projects"
              className="w-full pl-9 pr-4 py-2 bg-[#121212] border border-[#222222] rounded-lg text-xs text-[#F2EFEB] placeholder-[#666666] focus:outline-none focus:border-[#E32B3C] transition-colors"
            />
          </div>
        </div>

        {/* Projects List / Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center border border-[#1f1f1f] rounded-2xl bg-[#121212]">
            <Layers className="w-8 h-8 text-[#A09C9A] mx-auto mb-3 opacity-60" />
            <p className="text-sm text-[#F2EFEB] font-medium">No projects matched your criteria.</p>
            <p className="text-xs text-[#A09C9A] mt-1">Try resetting the search or category filter.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#E32B3C] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-16 lg:space-y-24">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="group relative bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden hover:border-[#383838] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Column: Visual Preview */}
                  <div className="lg:col-span-7 relative overflow-hidden bg-[#0c0c0c] border-b lg:border-b-0 lg:border-r border-[#222222]">
                    <div
                      className="cursor-pointer overflow-hidden aspect-video relative"
                      onClick={() => setActiveProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} live interface preview`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"
                      />

                      {/* Floating Inspection Prompt */}
                      <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#090909]/80 backdrop-blur-md text-[#F2EFEB] text-xs font-medium rounded-md border border-[#2b2b2b] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Click to view details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#E32B3C]" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project Context & Metadata */}
                  <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      {/* Meta Kicker */}
                      <div className="flex items-center justify-between text-xs text-[#A09C9A] mb-3">
                        <span className="text-[#E32B3C] font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="font-mono text-[11px] text-[#777777]">
                          0{idx + 1} // 0{featuredProjects.length}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => setActiveProject(project)}
                        className="font-display text-2xl sm:text-3xl text-[#F2EFEB] tracking-wide hover:text-[#E32B3C] transition-colors cursor-pointer mb-3"
                      >
                        {project.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-sm text-[#A09C9A] leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Technology Stack tags */}
                      <div className="mb-8">
                        <div className="text-[11px] uppercase tracking-wider text-[#777777] mb-2 font-semibold">
                          Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-[#181818] border border-[#262626] text-[#E1DCD6] rounded text-[11px] font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-6 border-t border-[#1c1c1c] flex flex-wrap items-center gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-4 py-2 bg-[#E32B3C] hover:bg-[#c92433] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Visit Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-4 py-2 bg-[#181818] hover:bg-[#222222] text-[#F2EFEB] border border-[#2b2b2b] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-1.5"
                      >
                        <span>View GitHub</span>
                        <Github className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="ml-auto text-xs text-[#A09C9A] hover:text-[#F2EFEB] uppercase tracking-wider font-semibold transition-colors py-2"
                      >
                        Details &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
