interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  type: "YouTube" | "GitHub" | "LinkedIn" | "Other";
}

const typeColors: Record<ProjectCardProps["type"], string> = {
  YouTube: "bg-red-50 text-red-700 border-red-200",
  GitHub: "bg-slate-100 text-slate-700 border-slate-300",
  LinkedIn: "bg-blue-50 text-blue-700 border-blue-200",
  Other: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export default function ProjectCard({ title, description, href, type }: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 border border-slate-200 rounded-xl hover:shadow-md hover:border-slate-300 transition-all"
    >
      <span
        className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mb-3 ${typeColors[type]}`}
      >
        {type}
      </span>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </a>
  );
}
