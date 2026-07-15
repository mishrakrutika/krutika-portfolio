/**
 * NotFound — 404 page matching Digital Blueprint theme
 * Design: Dark charcoal, teal accent, terminal aesthetic
 */
import { Terminal, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        {/* Terminal header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        <Terminal size={48} className="text-[oklch(0.78_0.15_165)] mx-auto mb-6" />

        <pre className="font-mono text-sm text-[oklch(0.55_0.015_250)] mb-4">
          <span className="text-[oklch(0.78_0.15_165)]">$ </span>cat 404.log
        </pre>

        <h1 className="font-display font-bold text-6xl text-white mb-2">
          <span className="text-[oklch(0.78_0.15_165)]">4</span>0<span className="text-[oklch(0.78_0.15_165)]">4</span>
        </h1>
        <p className="font-mono text-sm text-[oklch(0.65_0.02_250)] mb-4">
          Error: Page not found in the system.
        </p>
        <p className="text-sm text-[oklch(0.55_0.015_250)] mb-8">
          The route you're looking for doesn't exist. It may have been moved, deleted, or never compiled.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[oklch(0.78_0.15_165)] text-[oklch(0.12_0.015_250)] font-medium text-sm hover:bg-[oklch(0.72_0.14_165)] transition-all duration-200 active:scale-95"
        >
          <Home size={16} />
          Return Home
        </a>

        <pre className="font-mono text-xs text-[oklch(0.45_0.015_250)] mt-8">
          <span className="text-[oklch(0.55_0.015_250)]">&gt;</span> Process exited with code <span className="text-[oklch(0.78_0.15_165)]">404</span>
        </pre>
      </div>
    </div>
  );
}
