"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/writing/", label: "Writing" },
  { href: "/resume/", label: "Resume" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-surface-dark/95 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          K<span className="gradient-text">F</span>G
        </Link>

        <ul className="hidden sm:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                    ? "text-accent"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="sm:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="sm:hidden bg-surface-dark border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                      ? "text-accent"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
