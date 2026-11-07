import React from "react";
import { ArrowUp, Github, Instagram, Mail, MessageSquare } from "lucide-react";
import { portfolioOwner } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#070707] py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#181818] items-start">
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-3xl tracking-tight text-[#F2EFEB]">
                RAFIU
              </span>
              <span className="text-[#E32B3C] text-3xl font-black">.</span>
            </div>
            <p className="text-xs text-[#A09C9A] max-w-sm leading-relaxed">
              {portfolioOwner.tagline}
            </p>
            <p className="text-[11px] text-[#777777]">
              {portfolioOwner.degree} · {portfolioOwner.university.split(",")[0]}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#777777] font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#A09C9A]">
              <li>
                <a href="#hero" className="hover:text-[#F2EFEB] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#F2EFEB] transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F2EFEB] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F2EFEB] transition-colors">
                  Skills & Technologies
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#F2EFEB] transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F2EFEB] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="md:col-span-4 space-y-4 md:text-right">
            <div className="text-xs uppercase tracking-widest text-[#777777] font-semibold md:text-right">
              Direct Links
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <a
                href={portfolioOwner.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="p-2.5 bg-[#121212] border border-[#222222] hover:border-[#383838] text-[#A09C9A] hover:text-[#F2EFEB] rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioOwner.contact.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram profile"
                className="p-2.5 bg-[#121212] border border-[#222222] hover:border-[#383838] text-[#A09C9A] hover:text-[#E32B3C] rounded-lg transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={portfolioOwner.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                className="p-2.5 bg-[#121212] border border-[#222222] hover:border-[#383838] text-[#A09C9A] hover:text-[#25D366] rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioOwner.contact.email}`}
                aria-label="Email"
                className="p-2.5 bg-[#121212] border border-[#222222] hover:border-[#383838] text-[#A09C9A] hover:text-[#F2EFEB] rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#121212] hover:bg-[#1a1a1a] text-[#A09C9A] hover:text-[#F2EFEB] border border-[#222222] rounded-md text-xs transition-colors cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#E32B3C]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Micro Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <div>
            &copy; {currentYear} {portfolioOwner.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Software Engineering Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
