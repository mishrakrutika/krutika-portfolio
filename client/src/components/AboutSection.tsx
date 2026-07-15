/**
 * AboutSection — Bio, personality, and what drives Krutika
 * Design: Digital Blueprint — dark, teal accent, asymmetric layout
 * Enhancement: /> terminal section labels, stronger engineered card borders
 */
import { motion } from "framer-motion";
import { User, MapPin, Mail, GraduationCap } from "lucide-react";
import { FadeInSection } from "@/pages/Home";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_165/0.2)] to-transparent" />

      <div className="container max-w-7xl mx-auto">
        <FadeInSection>
          {/* Terminal-style section header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-[oklch(0.78_0.15_165)]">
              <span className="text-[oklch(0.55_0.015_250)]">/&gt; </span>about.json
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            About Me
          </h2>
          <div className="w-12 h-1 rounded-full bg-[oklch(0.78_0.15_165)] mb-12" />
        </FadeInSection>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Bio text */}
          <FadeInSection className="lg:col-span-3">
            <p className="text-[oklch(0.7_0.01_250)] text-base sm:text-lg leading-relaxed mb-6">
              I'm <strong className="text-white">Krutika Mishra</strong>, a final-year B.Tech student at{" "}
              <strong className="text-[oklch(0.78_0.15_165)]">Vikash Institute of Technology, Bargarh</strong>.
              I build user interfaces that are not just functional, but intuitive and delightful to use.
            </p>
            <p className="text-[oklch(0.7_0.01_250)] text-base sm:text-lg leading-relaxed mb-6">
              My frontend journey started with curiosity — how does code become a visual experience?
              I've since built a <strong className="text-white">Myntra clone</strong> — a full e-commerce shopping app
              powered by <strong className="text-white">ReactJS</strong> and <strong className="text-white">MongoDB</strong> — that taught me real-world
              application architecture, state management, and responsive design.
            </p>
            <p className="text-[oklch(0.7_0.01_250)] text-base sm:text-lg leading-relaxed">
              Now I'm actively seeking an <strong className="text-white">internship</strong> where I can contribute from day one,
              learn from experienced developers, and grow my frontend skills in a professional
              environment. I learn fast, I build things, and I'm ready to work.
            </p>

            {/* Info cards with enhanced borders */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                { icon: <GraduationCap size={20} />, label: "EDUCATION", value: "B.Tech Final Year" },
                { icon: <User size={20} />, label: "ROLE", value: "Frontend Developer" },
                { icon: <MapPin size={20} />, label: "LOCATION", value: "Bargarh, Odisha" },
                { icon: <Mail size={20} />, label: "EMAIL", value: "mishrakrutika03@gmail.com" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-[oklch(0.16_0.018_250)] border border-[oklch(0.25_0.02_250)] glow-border glow-border-hover transition-all duration-300"
                >
                  <div className="p-2 rounded-md bg-[oklch(0.78_0.15_165/0.1)] text-[oklch(0.78_0.15_165)] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[oklch(0.55_0.015_250)] uppercase">{item.label}</span>
                    <p className="text-sm text-white mt-0.5">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeInSection>

          {/* Right: Terminal card + goals */}
          <FadeInSection className="lg:col-span-2" delay={0.2}>
            <div className="space-y-6">
              {/* Terminal-style JSON card with stronger border */}
              <div className="p-6 rounded-xl bg-[oklch(0.14_0.015_250)] border border-[oklch(0.78_0.15_165/0.2)] glow-border glow-border-hover transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-[oklch(0.55_0.015_250)]">about.json</span>
                </div>
                <pre className="font-mono text-xs sm:text-sm text-[oklch(0.65_0.02_250)] leading-relaxed">
                  {`{`}
                  {"\n"}  {"name"}:{" "}
                  <span className="text-[oklch(0.78_0.15_165)]">"Krutika Mishra"</span>,
                  {"\n"}  {"role"}:{" "}
                  <span className="text-[oklch(0.78_0.15_165)]">"Frontend Developer"</span>,
                  {"\n"}  {"status"}:{" "}
                  <span className="text-green-400">"Seeking Internship"</span>,
                  {"\n"}  {"college"}:{" "}
                  <span className="text-[oklch(0.78_0.15_165)]">"Vikash Institute of Technology"</span>,
                  {"\n"}  {"year"}:{" "}
                  <span className="text-[oklch(0.78_0.15_165)]">"B.Tech Final Year"</span>,
                  {"\n"}  {"openToWork"}:{" "}
                  <span className="text-green-400">true</span>
                  {"\n"}{`}`}
                </pre>
              </div>

              {/* What I'm looking for */}
              <div className="p-6 rounded-xl bg-[oklch(0.16_0.018_250)] border border-[oklch(0.25_0.02_250)] glow-border glow-border-hover transition-all duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-[oklch(0.55_0.015_250)]">/&gt;</span>
                  <h3 className="font-display font-semibold text-base text-white">
                    What I'm Looking For
                  </h3>
                </div>
                <p className="text-sm text-[oklch(0.65_0.02_250)] leading-relaxed mb-4 mt-3">
                  An internship with real-world projects, mentorship from senior developers,
                  and the chance to work with modern frontend tech stacks.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Frontend Dev", "React Ecosystem", "UI/UX Practice", "Code Reviews", "Team Collaboration"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-md text-xs font-mono bg-[oklch(0.78_0.15_165/0.1)] text-[oklch(0.78_0.15_165)] border border-[oklch(0.78_0.15_165/0.15)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
