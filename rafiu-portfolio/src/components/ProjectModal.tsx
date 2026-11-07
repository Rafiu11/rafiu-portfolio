import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Lock body scroll while modal is active
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative bg-[#111111] border border-[#262626] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-[#F2EFEB]">
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#111111]/95 backdrop-blur-md px-6 py-4 border-b border-[#222222] flex items-center justify-between z-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#A09C9A]">
            <span className="text-[#E32B3C] font-semibold">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Case Study</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 text-[#A09C9A] hover:text-[#F2EFEB] hover:bg-[#1a1a1a] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E32B3C]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Title & Action Links */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1f1f1f]">
            <div>
              <h2
                id="modal-project-title"
                className="font-display text-3xl sm:text-4xl text-[#F2EFEB] tracking-wide"
              >
                {project.title}
              </h2>
              <p className="text-sm text-[#A09C9A] mt-2 max-w-2xl leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2.5 bg-[#E32B3C] hover:bg-[#c92433] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2.5 bg-[#1b1b1b] hover:bg-[#252525] text-[#F2EFEB] border border-[#2d2d2d] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2"
              >
                <span>GitHub Repo</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Project Screenshot / Showcase View */}
          <div className="rounded-xl overflow-hidden border border-[#242424] bg-[#0c0c0c] shadow-lg">
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              className="w-full h-auto object-cover max-h-[460px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Detailed Narrative */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#A09C9A] font-semibold mb-3">
              Project Architecture & Vision
            </h3>
            <p className="text-sm sm:text-base text-[#D4CFC9] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features Grid */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#A09C9A] font-semibold mb-4">
              Verified Technical Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#161616] border border-[#222222] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#E32B3C] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#E1DCD6] leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#A09C9A] font-semibold mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[#181818] border border-[#282828] text-[#F2EFEB] rounded-md font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer Bar */}
          <div className="pt-6 border-t border-[#1f1f1f] flex items-center justify-between">
            <span className="text-xs text-[#A09C9A]">
              Built by Md All Rafiu Biswash
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#F2EFEB] hover:bg-[#1a1a1a] rounded-md border border-[#2a2a2a] transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
