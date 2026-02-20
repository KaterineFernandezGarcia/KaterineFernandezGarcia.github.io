import Link from "next/link";
import {
  Youtube,
  Github,
  Linkedin,
  ArrowRight,
  Briefcase,
  BookOpen,
  BarChart3,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "Project & Ops Manager",
    detail: "Content, YouTube, cross-functional teams",
  },
  {
    icon: BarChart3,
    label: "Process Optimization",
    detail: "SOPs, automation, 40% error reduction",
  },
  {
    icon: Zap,
    label: "System Implementation",
    detail: "CRM, dashboards, workflow automation",
  },
  {
    icon: BookOpen,
    label: "UT Austin",
    detail: "Economics, Data Analysis & Systems Thinking",
  },
];

const stats = [
  { value: "200+", label: "Client accounts managed" },
  { value: "40%", label: "Error reduction achieved" },
  { value: "10+", label: "Hours saved weekly via automation" },
  { value: "50+", label: "Videos optimized for growth" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section — dark background */}
      <section className="bg-surface-dark relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
              Project &amp; Operations Manager
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Katerine<br />
              <span className="gradient-text">Fern&aacute;ndez Garcia</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
              I turn complex operations into streamlined systems. From content
              production pipelines to cross-department workflows, I optimize
              processes, implement tools, and lead teams to deliver results.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/projects/"
                className="group px-7 py-3.5 bg-accent text-white rounded-lg hover:bg-accent-hover transition-all font-medium flex items-center gap-2"
              >
                View My Work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/resume/"
                className="px-7 py-3.5 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all font-medium"
              >
                View Resume
              </Link>
              <Link
                href="/writing/"
                className="px-7 py-3.5 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all font-medium"
              >
                Read My Writing
              </Link>
            </div>

            {/* Social links inline */}
            <div className="flex gap-6">
              <a
                href="https://www.youtube.com/@CapyQuokka-kitsune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-red-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={22} />
              </a>
              <a
                href="https://github.com/KatyLycoris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/katerine-fernandez-garcia-36892a212"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-surface border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold stat-number">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 dot-pattern">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            What I Bring
          </h2>
          <p className="text-slate-500 mb-12 max-w-xl">
            Combining operational expertise with technical know-how to drive
            real results.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="card-glow bg-white rounded-xl p-6 border border-slate-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center mb-4">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.label}
                  </h3>
                  <p className="text-sm text-slate-500">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Whether it&apos;s a project, dance booking, podcast, or collaboration —
            let&apos;s connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="px-7 py-3.5 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium"
            >
              Get in Touch
            </Link>
            <Link
              href="/resume/"
              className="px-7 py-3.5 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors font-medium"
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
