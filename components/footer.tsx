"use client";

import { motion } from "framer-motion";
import { Github, GitCommitHorizontal, ShieldCheck } from "lucide-react";
import { AlignmentLogo } from "./logo";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "Services", href: "#services" },
      { label: "Labs", href: "#labs" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Verticals",
    links: [
      { label: "Healthcare", href: "#labs" },
      { label: "Wildlife & Conservation", href: "#labs" },
      { label: "Churches & Communities", href: "#labs" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com", external: true },
      {
        label: "getechsolutions@protonmail.com",
        href: "mailto:getechsolutions@protonmail.com",
        external: true,
      },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-meteorite/10 px-6 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <AlignmentLogo size={32} animated={false} />
              <span className="font-heading text-sm font-semibold tracking-[0.18em] text-platinum uppercase">
                GeTech <span className="text-meteorite">Solutions</span>
              </span>
            </div>
            <p className="max-w-xs text-sm text-meteorite">
              Engineering high-impact digital futures for startups, companies,
              visionaries, and communities.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-xs tracking-[0.22em] text-meteorite/60 uppercase">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-meteorite transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* System status bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-meteorite/10 bg-midnight/50 px-6 py-4 text-xs text-meteorite sm:flex-row">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-emerald-400/80" />
            <span className="flex items-center gap-2">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />
              All Systems Secure
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-meteorite/70">
            <GitCommitHorizontal size={14} />
            <span>main · v1.0.0 · deployed on Vercel</span>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Github size={14} />
            Source
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-meteorite/50">
          © {year} GeTech Solutions. All rights reserved. Precision-engineered
          with the Alignment.
        </p>
      </div>
    </footer>
  );
}
