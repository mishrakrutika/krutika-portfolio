/**
 * SkillsSection — Technical skills with animated bars and badges
 * Design: Digital Blueprint — dark, teal accent, grid layout
 * Enhancement: /> terminal labels, glow-border cards, monospace tech tags
 */
import { motion } from "framer-motion";
import { Code2, Database, Globe, Cpu } from "lucide-react";
import { FadeInSection } from "@/pages/Home";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: <Code2 size={22} />,
    skills: [
      { name: "C++", level: 75, description: "Data structures, OOP concepts, STL" },
      { name: "Java", level: 70, description: "Core Java, OOP, collections framework" },
      { name: "C", level: 72, description: "Pointers, memory management, file I/O" },
      { name: "JavaScript", level: 80, description: "ES6+, DOM manipulation, async/await" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Globe size={22} />,
    skills: [
      { name: "ReactJS", level: 78, description: "Components, hooks, state management, routing" },
      { name: "HTML5", level: 90, description: "Semantic markup, forms, accessibility" },
      { name: "CSS3", level: 82, description: "Flexbox, Grid, animations, responsive design" },
    ],
  },
  {
    title: "Databases & Tools",
    icon: <Database size={22} />,
    skills: [
      { name: "MongoDB", level: 68, description: "CRUD operations, schemas, aggregation" },
      { name: "Git & GitHub", level: 75, description: "Version control, branching, collaboration" },
      { name: "VS Code", level: 85, description: "Extensions, debugging, terminal workflow" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_165/0.2)] to-transparent" />

      <div className="container max-w-7xl mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-[oklch(0.78_0.15_165)]">
              <span className="text-[oklch(0.55_0.015_250)]">/&gt; </span>tech-stack.md
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-[oklch(0.65_0.02_250)] text-base max-w-xl mb-4">
            The technologies and tools I work with daily to build modern web applications.
          </p>
          <div className="w-12 h-1 rounded-full bg-[oklch(0.78_0.15_165)] mb-12" />
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <FadeInSection key={category.title} delay={catIdx * 0.15}>
              <div className="h-full p-6 rounded-xl bg-[oklch(0.16_0.018_250)] border border-[oklch(0.25_0.02_250)] glow-border glow-border-hover transition-all duration-300">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-[oklch(0.78_0.15_165/0.1)] text-[oklch(0.78_0.15_165)]">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (catIdx * 3 + skillIdx) * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-white">{skill.name}</span>
                        <span className="text-xs font-mono text-[oklch(0.65_0.02_250)]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[oklch(0.22_0.015_250)] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: (catIdx * 3 + skillIdx) * 0.1, ease: [0.23, 1, 0.32, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-[oklch(0.78_0.15_165)] to-[oklch(0.65_0.12_180)]"
                        />
                      </div>
                      <p className="text-xs text-[oklch(0.55_0.015_250)] mt-1">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
