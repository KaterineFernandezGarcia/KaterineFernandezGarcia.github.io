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
};

export default function WritingCard({ slug, title, date, category, summary }: WritingCardProps) {
  return (
    <article className="group">
      <Link href={`/writing/${slug}/`} className="block">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {categoryLabels[category]}
          </span>
          <span className="text-slate-300">|</span>
          <time className="text-sm text-slate-500">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h2 className="text-xl font-semibold text-slate-900 group-hover:text-accent transition-colors mb-2">
          {title}
        </h2>
        <p className="text-slate-600 leading-relaxed">{summary}</p>
      </Link>
    </article>
  );
}
