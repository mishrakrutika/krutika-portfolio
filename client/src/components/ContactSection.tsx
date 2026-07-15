/**
 * ContactSection — Get in touch form and contact info
 * Design: Digital Blueprint — dark, teal accent, clean form layout
 * Enhancement: /> terminal labels, glow-border cards, stronger CTA
 */
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare } from "lucide-react";
import { FadeInSection } from "@/pages/Home";

export function ContactSection() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mishrakrutika03@gmail.com");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_165/0.2)] to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[oklch(0.78_0.15_165/0.03)] blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-[oklch(0.78_0.15_165)]">
              <span className="text-[oklch(0.55_0.015_250)]">/&gt; </span>contact.tsx
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-[oklch(0.65_0.02_250)] text-base max-w-xl mb-4">
            I'm actively looking for internship opportunities. Whether you're a recruiter,
            a team looking for a frontend intern, or just want to connect — I'd love to hear from you.
          </p>
          <div className="w-12 h-1 rounded-full bg-[oklch(0.78_0.15_165)] mb-12" />
        </FadeInSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <FadeInSection className="lg:col-span-2 space-y-6">
            {/* Email card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-xl bg-[oklch(0.16_0.018_250)] border border-[oklch(0.25_0.02_250)] glow-border glow-border-hover cursor-pointer group"
              onClick={handleCopyEmail}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[oklch(0.78_0.15_165/0.1)] text-[oklch(0.78_0.15_165)] group-hover:bg-[oklch(0.78_0.15_165/0.2)] transition-colors">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-[oklch(0.55_0.015_250)] uppercase">Email</span>
                  <p className="text-white font-medium mt-0.5">mishrakrutika03@gmail.com</p>
                </div>
              </div>
              <p className="text-xs text-[oklch(0.55_0.015_250)] mt-3">
                Click to copy email address
              </p>
            </motion.div>

            {/* Quick response note */}
            <div className="p-5 rounded-xl bg-[oklch(0.78_0.15_165/0.05)] border border-[oklch(0.78_0.15_165/0.15)] glow-border glow-border-hover transition-all duration-300">
              <div className="flex items-start gap-3">
                <MessageSquare size={18} className="text-[oklch(0.78_0.15_165)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-[oklch(0.7_0.01_250)] leading-relaxed">
                    I typically respond within 24 hours. Feel free to reach out regarding
                    internship opportunities, project collaborations, or just to say hello.
                  </p>
                </div>
              </div>
            </div>

            {/* Availability status */}
            <div className="p-5 rounded-xl bg-[oklch(0.16_0.018_250)] border border-[oklch(0.25_0.02_250)] glow-border glow-border-hover transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse-glow" />
                <span className="text-sm font-medium text-white">Available for Internships</span>
              </div>
              <p className="text-xs text-[oklch(0.65_0.02_250)]">
                Actively seeking frontend development internship roles. Open to remote and on-site positions.
              </p>
            </div>
          </FadeInSection>

          {/* Contact form */}
          <FadeInSection className="lg:col-span-3" delay={0.15}>
            <div className="p-6 sm:p-8 rounded-xl bg-[oklch(0.16_0.018_250)] border border-[oklch(0.25_0.02_250)] glow-border glow-border-hover transition-all duration-300">
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-xs text-[oklch(0.55_0.015_250)]">/&gt;</span>
                <h3 className="font-display font-semibold text-xl text-white">
                  Send a Message
                </h3>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const subject = formData.get("subject");
                  const message = formData.get("message");
                  window.open(
                    `mailto:mishrakrutika03@gmail.com?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(String(message))}`,
                    "_blank"
                  );
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-[oklch(0.55_0.015_250)] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-[oklch(0.2_0.02_250)] border border-[oklch(0.25_0.02_250)] text-white text-sm placeholder-[oklch(0.45_0.015_250)] focus:border-[oklch(0.78_0.15_165)] focus:ring-1 focus:ring-[oklch(0.78_0.15_165/0.3)] outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[oklch(0.55_0.015_250)] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-[oklch(0.2_0.02_250)] border border-[oklch(0.25_0.02_250)] text-white text-sm placeholder-[oklch(0.45_0.015_250)] focus:border-[oklch(0.78_0.15_165)] focus:ring-1 focus:ring-[oklch(0.78_0.15_165/0.3)] outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[oklch(0.55_0.015_250)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Internship Opportunity"
                    className="w-full px-4 py-3 rounded-lg bg-[oklch(0.2_0.02_250)] border border-[oklch(0.25_0.02_250)] text-white text-sm placeholder-[oklch(0.45_0.015_250)] focus:border-[oklch(0.78_0.15_165)] focus:ring-1 focus:ring-[oklch(0.78_0.15_165/0.3)] outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[oklch(0.55_0.015_250)] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about the opportunity or just say hi..."
                    className="w-full px-4 py-3 rounded-lg bg-[oklch(0.2_0.02_250)] border border-[oklch(0.25_0.02_250)] text-white text-sm placeholder-[oklch(0.45_0.015_250)] focus:border-[oklch(0.78_0.15_165)] focus:ring-1 focus:ring-[oklch(0.78_0.15_165/0.3)] outline-none transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[oklch(0.78_0.15_165)] text-[oklch(0.12_0.015_250)] font-medium text-sm hover:bg-[oklch(0.72_0.14_165)] transition-all duration-200 active:scale-95"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
