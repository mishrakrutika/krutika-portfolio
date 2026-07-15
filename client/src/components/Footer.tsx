/**
 * Footer — Simple closing section with branding
 * Design: Digital Blueprint — dark, teal accent
 */
import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_165/0.2)] to-transparent" />

      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: Branding */}
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/brand-logo_7362a442.png"
              alt="KM"
              className="w-7 h-7 opacity-60"
            />
            <div>
              <p className="text-sm text-white font-medium">Krutika Mishra</p>
              <p className="text-xs text-[oklch(0.55_0.015_250)] font-mono">frontend-developer</p>
            </div>
          </div>

          {/* Center: Built with */}
          <div className="flex items-center gap-1.5 text-xs text-[oklch(0.55_0.015_250)] font-mono">
            <Code2 size={14} />
            <span>Built with</span>
            <Heart size={14} className="text-[oklch(0.78_0.15_165)] fill-[oklch(0.78_0.15_165)]" />
            <span>React & Tailwind</span>
          </div>

          {/* Right: Quick link */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-[oklch(0.55_0.015_250)] hover:text-[oklch(0.78_0.15_165)] transition-colors duration-200 flex items-center gap-1 font-mono"
          >
            <span>$</span>
            <span>go_home</span>
            <motion.span
              animate={{ y: [-2, 0, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[oklch(0.78_0.15_165)]"
            >
              ↑
            </motion.span>
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[oklch(0.45_0.015_250)] font-mono">
            &copy; {new Date().getFullYear()} Krutika Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
