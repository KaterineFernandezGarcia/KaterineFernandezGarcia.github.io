import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  type: "YouTube" | "GitHub" | "LinkedIn" | "Other";
  icon: ReactNode;
}

const typeColors: Record<ProjectCardProps["type"], string> = {
  YouTube: "bg-red-500/10 text-red-400 border-red-500/20",
  GitHub: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  LinkedIn: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Other: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

const cardBg: Record<ProjectCardProps["type"], string> = {
  YouTube: "hover:border-red-500/30",
  GitHub: "hover:border-slate-400/30",
  LinkedIn: "hover:border-blue-500/30",
  Other: "hover:border-emerald-500/30",
};

export default function ProjectCard({
  title,
  description,
  href,
  type,
  icon,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-6 bg-surface-dark border border-white/10 rounded-xl card-glow ${cardBg[type]}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
          {icon}
        </div>
        <ExternalLink
          size={16}
          className="text-slate-600 group-hover:text-slate-400 transition-colors"
        />
      </div>
      <span
        className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mb-3 ${typeColors[type]}`}
      >
        {type}
      </span>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </a>
  );
}
