import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllWritings, getWritingBySlug } from "@/lib/writing";
import markdownToHtml from "@/lib/markdownToHtml";
import styles from "@/styles/writing.module.css";

type Params = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const writings = getAllWritings();
  return writings.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const { slug } = await props.params;
  try {
    const piece = getWritingBySlug(slug);
    return {
      title: piece.title,
      description: piece.summary,
    };
  } catch {
    return {};
  }
}

export default async function WritingPiecePage(props: Params) {
  const { slug } = await props.params;

  let piece;
  try {
    piece = getWritingBySlug(slug);
  } catch {
    notFound();
  }

  const htmlContent = await markdownToHtml(piece.content);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-10">
        <span className="text-sm font-medium uppercase tracking-wider text-indigo-400">
          {piece.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
          {piece.title}
        </h1>
        <time className="text-slate-400">
          {new Date(piece.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {piece.tags && piece.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {piece.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
}
