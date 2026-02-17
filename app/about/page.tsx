import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Katerine Fernandez Garcia.",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">About Me</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600 leading-relaxed">
          Hello! I&apos;m Katerine Fernandez Garcia. This is my personal website
          where I share my work, ideas, and journey.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          [Replace this placeholder text with your actual bio — your background,
          education, interests, and what drives you.]
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          What I Do
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          [Describe your professional focus, areas of interest, current
          projects, or fields of study.]
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          You can find me on{" "}
          <a
            href="https://github.com/placeholder"
            className="text-accent hover:text-accent-hover underline underline-offset-2"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href="https://linkedin.com/in/placeholder"
            className="text-accent hover:text-accent-hover underline underline-offset-2"
          >
            LinkedIn
          </a>
          , and{" "}
          <a
            href="https://youtube.com/@placeholder"
            className="text-accent hover:text-accent-hover underline underline-offset-2"
          >
            YouTube
          </a>
          .
        </p>
      </div>
    </section>
  );
}
