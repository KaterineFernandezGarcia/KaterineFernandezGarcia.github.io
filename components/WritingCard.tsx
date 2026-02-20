import Link from "next/link";
import { WritingCategory } from "@/interfaces/writing";

interface WritingCardProps {
  slug: string;
  title: string;
  date: string;
  category: WritingCategory;
  summary: string;
}

const categoryLabels: Record<WritingCategory, string> = {
  article: "Article",
  research: "Research",
  letter: "Letter",
  recommendation: "Recommended",
};

export default function WritingCard({ slug, title, date, category, summary }: WritingCardProps) {
  return (
    <article className="group border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-colors">
      <Link href={`/writing/${slug}/`} className="block">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-medium uppercase tracking-wider text-indigo-400">
            {categoryLabels[category]}
          </span>
          <span className="text-slate-600">|</span>
          <time className="text-sm text-slate-400">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h2 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors mb-2">
          {title}
        </h2>
        <p className="text-slate-400 leading-relaxed">{summary}</p>
      </Link>
    </article>
  );
}
