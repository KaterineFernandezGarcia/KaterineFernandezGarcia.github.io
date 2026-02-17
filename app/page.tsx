import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function HomePage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
          Katerine Fernandez Garcia
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
          Welcome to my personal corner of the internet. I share my projects,
          research, articles, and letters here. Feel free to explore my work or
          connect with me through the links below.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/projects/"
            className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            View Projects
          </Link>
          <Link
            href="/writing/"
            className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
          >
            Read My Writing
          </Link>
        </div>
        <div className="pt-6">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
