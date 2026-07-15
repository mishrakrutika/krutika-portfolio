/**
 * ProjectsSection — Showcase of Krutika's projects
 * Design: Digital Blueprint — dark, teal accent, card layout
 * Enhancement: /> terminal labels, stronger glow-border, more distinctive project card
 */
import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingBag, Code2 } from "lucide-react";
import { FadeInSection } from "@/pages/Home";

const PROJECTS = [
  {
    title: "Myntra Clone",
    subtitle: "E-Commerce Shopping Application",
    description:
      "A full-featured e-commerce web application inspired by Myntra — one of India's most popular fashion shopping platforms. Built with ReactJS for a dynamic, component-driven frontend and MongoDB for persistent data management. This project showcases my ability to architect complete web applications using modern technologies.",
    tech: ["ReactJS", "MongoDB", "JavaScript", "CSS3"],
    image: "/manus-storage/project-showcase_8b97bf67.png",
    liveUrl: "https://krutika-myntra-clone.vercel.app/",
    githubUrl: "#",
    icon: <ShoppingBag size={24} />,
    highlights: [
      "Product listing with filtering and search",
      "Shopping cart functionality",
      "Responsive design for all screen sizes",
      "MongoDB integration for data persistence",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_165/0.2)] to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[oklch(0.78_0.15_165/0.03)] blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-[oklch(0.78_0.15_165)]">
              <span className="text-[oklch(0.55_0.015_250)]">/&gt; </span>portfolio.md
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-[oklch(0.65_0.02_250)] text-base max-w-xl mb-4">
            Real-world applications I've built to practice and demonstrate my frontend skills.
          </p>
          <div className="w-12 h-1 rounded-full bg-[oklch(0.78_0.15_165)] mb-12" />
        </FadeInSection>

        <div className="space-y-10">
          {PROJECTS.map((project, idx) => (
            <FadeInSection key={project.title} delay={idx * 0.1}>
              <div className="group grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Project image */}
                <motion.div
                  className="relative rounded-xl overflow-hidden border border-[oklch(0.78_0.15_165/0.2)] glow-border glow-border-hover transition-all duration-500"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.015_250)] via-transparent to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-md bg-[oklch(0.12_0.015_250/0.8)] backdrop-blur-sm border border-[oklch(0.78_0.15_165/0.3)]">
                    <ShoppingBag size={14} className="text-[oklch(0.78_0.15_165)]" />
                    <span className="text-xs font-mono text-[oklch(0.78_0.15_165)]">Featured Project</span>
                  </div>

                  {/* Live link overlay */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-md bg-[oklch(0.78_0.15_165)] text-[oklch(0.12_0.015_250)] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[oklch(0.72_0.14_165)]"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </motion.div>

                {/* Project details */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[oklch(0.78_0.15_165)] font-medium text-sm mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-[oklch(0.7_0.01_250)] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.15_165)] shrink-0" />
                        <span className="text-sm text-[oklch(0.65_0.02_250)]">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-[oklch(0.78_0.15_165)] bg-[oklch(0.78_0.15_165/0.08)] border border-[oklch(0.78_0.15_165/0.15)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[oklch(0.78_0.15_165)] text-[oklch(0.12_0.015_250)] text-sm font-medium hover:bg-[oklch(0.72_0.14_165)] transition-all duration-200 active:scale-95"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[oklch(0.78_0.15_165/0.3)] text-[oklch(0.78_0.15_165)] text-sm font-medium hover:bg-[oklch(0.78_0.15_165/0.1)] transition-all duration-200 active:scale-95"
                    >
                      <Code2 size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
