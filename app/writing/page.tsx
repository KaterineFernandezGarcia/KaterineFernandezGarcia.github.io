import type { Metadata } from "next";
import { getAllWritings } from "@/lib/writing";
import WritingCard from "@/components/WritingCard";

export const metadata: Metadata = {
  title: "Writing & Resources",
  description:
    "Articles, recommendations, and resources by Katerine Fernandez Garcia.",
};

export default function WritingPage() {
  const writings = getAllWritings();
  const myWritings = writings.filter((w) => w.category !== "recommendation");
  const recommendations = writings.filter((w) => w.category === "recommendation");

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-4">Writing & Resources</h1>
      <p className="text-slate-400 mb-12">
        My articles, research, and people & resources I recommend.
      </p>

      {/* My Writing Section */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          My Writing
        </h2>
        {myWritings.length > 0 ? (
          <div className="space-y-6">
            {myWritings.map((piece) => (
              <WritingCard key={piece.slug} {...piece} />
            ))}
          </div>
        ) : (
          <div className="border border-slate-700/50 rounded-xl p-8 text-center">
            <p className="text-slate-400 italic">
              New articles coming soon. Stay tuned!
            </p>
          </div>
        )}
      </div>

      {/* Recommended Section */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          Recommended
        </h2>
        {recommendations.length > 0 ? (
          <div className="space-y-6">
            {recommendations.map((piece) => (
              <WritingCard key={piece.slug} {...piece} />
            ))}
          </div>
        ) : (
          <div className="border border-slate-700/50 rounded-xl p-8 text-center">
            <p className="text-slate-400 italic">
              Coaches, creators, and resources I recommend — coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
