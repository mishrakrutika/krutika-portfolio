/**
 * EducationSection — Academic background and coursework
 * Design: Digital Blueprint — dark, teal accent, timeline layout
 * Enhancement: /> terminal labels, stronger glow-border cards
 */
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";
import { FadeInSection } from "@/pages/Home";

const EDUCATION_ITEMS = [
  {
    degree: "B.Tech — Bachelor of Technology",
    institution: "Vikash Institute of Technology, Bargarh",
    year: "2022 — 2026 (Final Year)",
    status: "Currently Pursuing",
    details: [
      "Specializing in Computer Science / related field",
      "Active participation in coding competitions and hackathons",
      "Focus on web development and software engineering",
    ],
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "Board of Secondary Education, Odisha",
    year: "Completed",
    status: "Completed",
    details: [
      "Science stream with Mathematics and Physics",
      "Foundation in logical reasoning and problem-solving",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_165/0.2)] to-transparent" />

      <div className="container max-w-7xl mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-[oklch(0.78_0.15_165)]">
              <span className="text-[oklch(0.55_0.015_250)]">/&gt; </span>education.yml
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Education
          </h2>
          <p className="text-[oklch(0.65_0.02_250)] text-base max-w-xl mb-4">
            My academic journey and the foundation that shaped my technical skills.
          </p>
          <div className="w-12 h-1 rounded-full bg-[oklch(0.78_0.15_165)] mb-12" />
        </FadeInSection>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.78_0.15_165)] via-[oklch(0.78_0.15_165/0.3)] to-transparent" />

          <div className="space-y-10">
            {EDUCATION_ITEMS.map((item, idx) => (
              <FadeInSection key={item.degree} delay={idx * 0.15}>
                <div className="relative pl-12 sm:pl-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.3 }}
                    className="absolute left-2.5 sm:left-6 top-1 w-3 h-3 rounded-full bg-[oklch(0.78_0.15_165)] ring-4 ring-[oklch(0.78_0.15_165/0.15)]"
                  />

                  <div className="p-6 rounded-xl bg-[oklch(0.16_0.018_250)] border border-[oklch(0.25_0.02_250)] glow-border glow-border-hover transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-lg text-white">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-[oklch(0.65_0.02_250)]">
                          <BookOpen size={14} />
                          <span className="text-sm">{item.institution}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[oklch(0.78_0.15_165/0.1)] border border-[oklch(0.78_0.15_165/0.15)]">
                        <Calendar size={14} className="text-[oklch(0.78_0.15_165)]" />
                        <span className="text-xs font-mono text-[oklch(0.78_0.15_165)]">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${
                          item.status === "Currently Pursuing"
                            ? "bg-[oklch(0.78_0.15_165/0.15)] text-[oklch(0.78_0.15_165)] border border-[oklch(0.78_0.15_165/0.2)]"
                            : "bg-[oklch(0.22_0.015_250)] text-[oklch(0.65_0.02_250)] border border-[oklch(0.25_0.02_250)]"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.status === "Currently Pursuing"
                              ? "bg-[oklch(0.78_0.15_165)] animate-pulse-glow"
                              : "bg-[oklch(0.65_0.02_250)]"
                          }`}
                        />
                        {item.status}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-2">
                      {item.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-[oklch(0.78_0.15_165)] mt-2 shrink-0" />
                          <span className="text-sm text-[oklch(0.65_0.02_250)]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Core subjects highlight */}
        <FadeInSection delay={0.3}>
          <div className="mt-12 p-6 rounded-xl bg-[oklch(0.16_0.018_250)] border border-[oklch(0.25_0.02_250)] glow-border glow-border-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={20} className="text-[oklch(0.78_0.15_165)]" />
              <div className="flex items-center gap-1">
                <span className="font-mono text-xs text-[oklch(0.55_0.015_250)]">/&gt;</span>
                <h3 className="font-display font-semibold text-base text-white">
                  Key Areas of Study
                </h3>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "Web Development",
                "Database Management Systems",
                "Operating Systems",
                "Computer Networks",
              ].map((subject) => (
                <div
                  key={subject}
                  className="px-3 py-2.5 rounded-md bg-[oklch(0.2_0.02_250)] border border-[oklch(0.25_0.02_250)] text-sm text-[oklch(0.7_0.01_250)] hover:border-[oklch(0.78_0.15_165/0.3)] transition-colors duration-300"
                >
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
