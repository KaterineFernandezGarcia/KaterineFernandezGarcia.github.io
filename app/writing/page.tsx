import type { Metadata } from "next";
import { getAllWritings } from "@/lib/writing";
import WritingCard from "@/components/WritingCard";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles, research, and letters by Katerine Fernandez Garcia.",
};

export default function WritingPage() {
  const writings = getAllWritings();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Writing</h1>
      <p className="text-slate-600 mb-10">
        Articles, research papers, and letters on topics I care about.
      </p>
      <div className="space-y-8">
        {writings.map((piece) => (
          <WritingCard key={piece.slug} {...piece} />
        ))}
      </div>
      {writings.length === 0 && (
        <p className="text-slate-500 italic">
          No writings published yet. Check back soon.
        </p>
      )}
    </section>
  );
}
