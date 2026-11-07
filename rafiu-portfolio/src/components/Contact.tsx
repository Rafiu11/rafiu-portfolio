import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Github,
  Instagram,
  Copy,
  Check,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { portfolioOwner } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendMethod, setSendMethod] = useState<"email" | "whatsapp">("email");

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (sendMethod === "whatsapp") {
      const text = encodeURIComponent(
        `Hi Rafiu,\n\nName: ${name || "Anonymous"}\nEmail: ${senderEmail || "Not provided"}\nSubject: ${subject || "General Inquiry"}\n\nMessage:\n${message}`
      );
      window.open(`https://wa.me/8801329577408?text=${text}`, "_blank");
    } else {
      const mailSubject = encodeURIComponent(subject || `Project Inquiry from ${name || "Portfolio Visitor"}`);
      const mailBody = encodeURIComponent(
        `Hi Rafiu,\n\n${message}\n\nFrom: ${name || "A collaborator"}\nContact Email: ${senderEmail || "N/A"}`
      );
      window.location.href = `mailto:${portfolioOwner.contact.email}?subject=${mailSubject}&body=${mailBody}`;
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E32B3C] font-semibold mb-3">
            <span>06. Get In Touch</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A09C9A]">Collaboration & Opportunities</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#F2EFEB] tracking-tight max-w-4xl text-balance">
            HAVE AN IDEA? <br />
            <span className="text-[#E32B3C]">LET'S BUILD SOMETHING GREAT.</span>
          </h2>
          <p className="text-sm md:text-base text-[#A09C9A] mt-4 max-w-xl leading-relaxed">
            I'm always open to discussing new projects, collaborative software engineering,
            creative web experiments, or potential opportunities.
          </p>
        </div>

        {/* 2-Column Split: Direct Channels & Composed Dispatcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs uppercase tracking-widest text-[#777777] font-semibold">
              Verified Direct Channels
            </h3>

            {/* Email Card */}
            <div className="p-6 bg-[#111111] border border-[#222222] rounded-2xl space-y-3 group hover:border-[#383838] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#A09C9A]">
                  <Mail className="w-4 h-4 text-[#E32B3C]" />
                  <span className="uppercase tracking-wider">Official Email</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(portfolioOwner.contact.email, "email")}
                  className="inline-flex items-center gap-1 text-[11px] text-[#A09C9A] hover:text-[#F2EFEB] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-[#25D366]" />
                      <span className="text-[#25D366]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${portfolioOwner.contact.email}`}
                className="text-base sm:text-lg font-mono text-[#F2EFEB] hover:text-[#E32B3C] transition-colors block break-all font-medium"
              >
                {portfolioOwner.contact.email}
              </a>
              <p className="text-[11px] text-[#777777]">
                Direct email for project inquiries, collaborations, and opportunities.
              </p>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 bg-[#111111] border border-[#222222] rounded-2xl space-y-3 group hover:border-[#383838] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#A09C9A]">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span className="uppercase tracking-wider">WhatsApp</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(portfolioOwner.contact.whatsapp, "phone")}
                  className="inline-flex items-center gap-1 text-[11px] text-[#A09C9A] hover:text-[#F2EFEB] transition-colors"
                  title="Copy number to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-[#25D366]" />
                      <span className="text-[#25D366]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={portfolioOwner.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-base sm:text-lg font-mono text-[#F2EFEB] hover:text-[#25D366] transition-colors flex items-center justify-between font-medium"
              >
                <span>{portfolioOwner.contact.whatsapp}</span>
                <ArrowUpRight className="w-4 h-4 text-[#A09C9A]" />
              </a>
              <p className="text-[11px] text-[#777777]">
                Direct message for quick discussion, projects, or questions.
              </p>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={portfolioOwner.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                className="p-5 bg-[#111111] border border-[#222222] hover:border-[#383838] rounded-xl flex items-center justify-between text-xs text-[#F2EFEB] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-[#A09C9A] group-hover:text-white" />
                  <span className="font-semibold">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#777777] group-hover:text-white" />
              </a>

              <a
                href={portfolioOwner.contact.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="p-5 bg-[#111111] border border-[#222222] hover:border-[#383838] rounded-xl flex items-center justify-between text-xs text-[#F2EFEB] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-[#A09C9A] group-hover:text-[#E32B3C]" />
                  <span className="font-semibold">Instagram</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#777777] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Dispatcher Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#111111] border border-[#222222] rounded-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1c1c1c]">
                <div>
                  <h3 className="text-base font-bold text-[#F2EFEB]">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-[#A09C9A] mt-0.5">
                    Pre-fills your message and launches your preferred client instantly.
                  </p>
                </div>

                {/* Dispatch Method Tabs */}
                <div className="flex items-center gap-1 p-1 bg-[#181818] rounded-lg border border-[#282828] text-xs">
                  <button
                    type="button"
                    onClick={() => setSendMethod("email")}
                    className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                      sendMethod === "email"
                        ? "bg-[#E32B3C] text-white"
                        : "text-[#A09C9A] hover:text-[#F2EFEB]"
                    }`}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setSendMethod("whatsapp")}
                    className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                      sendMethod === "whatsapp"
                        ? "bg-[#25D366] text-black font-semibold"
                        : "text-[#A09C9A] hover:text-[#F2EFEB]"
                    }`}
                  >
                    WhatsApp
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-[#A09C9A] mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Rahman"
                      className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] rounded-lg text-xs text-[#F2EFEB] placeholder-[#666666] focus:outline-none focus:border-[#E32B3C] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-[#A09C9A] mb-1.5 font-medium">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] rounded-lg text-xs text-[#F2EFEB] placeholder-[#666666] focus:outline-none focus:border-[#E32B3C] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider text-[#A09C9A] mb-1.5 font-medium">
                    Subject / Project Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Full-Stack Web Collaboration / Opportunity"
                    className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] rounded-lg text-xs text-[#F2EFEB] placeholder-[#666666] focus:outline-none focus:border-[#E32B3C] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-[#A09C9A] mb-1.5 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a brief overview of your idea, timeline, or question..."
                    className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] rounded-lg text-xs text-[#F2EFEB] placeholder-[#666666] focus:outline-none focus:border-[#E32B3C] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#777777]">
                    Dispatches directly via {sendMethod === "email" ? "default email app" : "WhatsApp Web / Mobile"}
                  </span>

                  <button
                    type="submit"
                    className={`px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                      sendMethod === "email"
                        ? "bg-[#E32B3C] hover:bg-[#c92433] text-white hover:shadow-[#E32B3C]/20"
                        : "bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold"
                    }`}
                  >
                    <span>Launch {sendMethod === "email" ? "Email" : "WhatsApp"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
