/**
 * HeroSection — Full-viewport intro with animated text, decorative code elements
 * Design: Digital Blueprint — dark, teal accent, asymmetric layout
 * Enhancement: Stronger engineered right side with code-block geometry, blueprint grid, cursor motifs
 */
import { motion } from "framer-motion";
import { ArrowDown, Code2, Terminal } from "lucide-react";
import { FadeInSection } from "@/pages/Home";

const CODE_SNIPPETS = [
  { code: "const developer = { name: 'Krutika', role: 'Frontend' };", color: "text-[oklch(0.78_0.15_165/0.12)]" },
  { code: "function buildAwesome() { return 'interfaces'; }", color: "text-[oklch(0.78_0.15_165/0.08)]" },
  { code: "import { Growth } from 'internship';", color: "text-[oklch(0.78_0.15_165/0.1)]" },
  { code: "git commit -m 'skills++'", color: "text-[oklch(0.78_0.15_165/0.08)]" },
];

function BlueprintPanel() {
  return (
    <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 pointer-events-none overflow-hidden">
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.78 0.15 165) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.78 0.15 165) 1px, transparent 1px),
            linear-gradient(oklch(0.78 0.15 165 / 0.5) 0.5px, transparent 0.5px),
            linear-gradient(90deg, oklch(0.78 0.15 165 / 0.5) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "60px 60px, 60px 60px, 12px 12px, 12px 12px",
        }}
      />

      {/* Axis lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.78_0.15_165/0.3)] via-[oklch(0.78_0.15_165/0.15)] to-transparent" />

      {/* Floating code blocks - more visible */}
      <div className="absolute inset-0 p-8">
        {CODE_SNIPPETS.map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs sm:text-sm whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            style={{
              top: `${12 + i * 15}%`,
              left: `${5 + (i % 2) * 35}%`,
            }}
          >
            <div className={`bg-[oklch(0.12_0.015_250/0.6)] backdrop-blur-sm border border-[oklch(0.78_0.15_165/0.15)] rounded-lg px-4 py-2.5 shadow-lg ${snippet.color}`}>
              <span className="text-[oklch(0.55_0.015_250)] mr-2">{i + 1}</span>
              {snippet.code}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bracket geometry decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute top-1/4 right-8 text-[oklch(0.78_0.15_165/0.1)] font-mono text-6xl lg:text-8xl leading-none"
      >
        {"{ }"}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-1/3 right-12 text-[oklch(0.78_0.15_165/0.08)] font-mono text-5xl lg:text-7xl leading-none"
      >
        {"< />"}
      </motion.div>

      {/* Blinking cursor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-1/4 right-16 flex items-center gap-1"
      >
        <span className="text-[oklch(0.78_0.15_165/0.3)] font-mono text-xs">~/krutika</span>
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-2 h-4 bg-[oklch(0.78_0.15_165/0.4)]"
        />
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.015_250)] via-[oklch(0.14_0.02_250)] to-[oklch(0.16_0.03_250)]" />

      {/* Blueprint panel on right */}
      <BlueprintPanel />

      {/* Radial glow behind content */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[oklch(0.78_0.15_165/0.04)] blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl lg:max-w-2xl">
          {/* Terminal-style section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="text-[oklch(0.78_0.15_165)] font-mono text-sm">
              <span className="text-[oklch(0.55_0.015_250)]">/$ </span>whoami
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
          >
            <span className="text-white">Hi, I'm </span>
            <br />
            <span className="text-gradient-teal">Krutika Mishra</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-[oklch(0.65_0.02_250)] max-w-xl leading-relaxed"
          >
            Building interfaces that work. Seeking opportunities that matter.
            B.Tech final year student crafting modern frontend experiences.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-6 py-3 rounded-lg bg-[oklch(0.78_0.15_165)] text-[oklch(0.12_0.015_250)] font-medium text-sm hover:bg-[oklch(0.72_0.14_165)] transition-all duration-200 active:scale-95 flex items-center gap-2"
            >
              <Code2 size={18} />
              See My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-lg border border-[oklch(0.78_0.15_165/0.3)] text-[oklch(0.78_0.15_165)] font-medium text-sm hover:bg-[oklch(0.78_0.15_165/0.1)] transition-all duration-200 active:scale-95"
            >
              Let's build together
            </button>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {["ReactJS", "JavaScript", "MongoDB", "C++", "Java", "CSS3"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-md text-xs font-mono text-[oklch(0.78_0.15_165)] border border-[oklch(0.78_0.15_165/0.2)] bg-[oklch(0.78_0.15_165/0.05)]"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-[oklch(0.55_0.015_250)] hover:text-[oklch(0.78_0.15_165)] transition-colors"
          >
            <span className="text-xs font-mono">scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
