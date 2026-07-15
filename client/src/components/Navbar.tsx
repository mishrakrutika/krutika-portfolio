/**
 * Navbar — Floating top navigation with blur backdrop
 * Design: Digital Blueprint — dark, teal accent, minimal
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ activeSection, sections }: { activeSection: string; sections: string[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.12_0.015_250)]/90 backdrop-blur-xl border-b border-[oklch(0.78_0.15_165/0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 group"
          >
            <img
              src="/manus-storage/brand-logo_7362a442.png"
              alt="KM"
              className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden sm:block font-display font-bold text-lg tracking-tight text-white">
              Krutika<span className="text-[oklch(0.78_0.15_165)]">Mishra</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md font-mono ${
                  activeSection === item.id
                    ? "text-[oklch(0.78_0.15_165)]"
                    : "text-[oklch(0.55_0.015_250)] hover:text-white"
                }`}
              >
                {activeSection === item.id && <span className="text-[oklch(0.55_0.015_250)] mr-1">/&gt;</span>}
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[oklch(0.78_0.15_165)] rounded-full"
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="ml-3 px-4 py-2 text-sm font-medium rounded-lg bg-[oklch(0.78_0.15_165)] text-[oklch(0.12_0.015_250)] hover:bg-[oklch(0.72_0.14_165)] transition-all duration-200 active:scale-95 font-mono"
            >
              Hire Me
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[oklch(0.55_0.015_250)] hover:text-white transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-[oklch(0.14_0.015_250)] border-b border-[oklch(0.78_0.15_165/0.1)] overflow-hidden"
          >
            <div className="container px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors font-mono ${
                    activeSection === item.id
                      ? "text-[oklch(0.78_0.15_165)] bg-[oklch(0.78_0.15_165/0.1)]"
                      : "text-[oklch(0.55_0.015_250)] hover:text-white hover:bg-[oklch(0.2_0.02_250)]"
                  }`}
                >
                  {activeSection === item.id && <span className="mr-1">/&gt;</span>}
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
