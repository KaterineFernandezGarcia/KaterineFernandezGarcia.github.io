import type { Metadata } from "next";
import { Download, MapPin, Mail, Briefcase, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Katerine Fernandez Garcia — Project & Operations Manager.",
};

const experiences = [
  {
    title: "Project Manager (Content & YouTube)",
    company: "Aquarium Store Depot",
    location: "Remote",
    period: "Aug 2023 - Present",
    bullets: [
      "Managed full content production lifecycle including editorial calendar, asset coordination, and performance tracking",
      "Led optimization initiative for 50+ videos using CTR analysis and title strategy to improve engagement",
      "Coordinated cross-functional collaboration to align deliverables with channel growth goals",
      "Built workflow documentation and tracking systems to reduce production bottlenecks",
    ],
  },
  {
    title: "Practice Management Assistant / Operations & Executive Support Coordinator",
    company: "LifeForce Medical Institute",
    location: "Remote",
    period: "July 2025 - Dec 2025",
    bullets: [
      "Led SOP framework and dashboard implementation across 3 departments, reducing administrative errors by 40%",
      "Designed automation workflows eliminating 10+ hours of weekly manual work and improving visibility by 60%",
      "Managed cross-department coordination for system rollouts and staff training",
    ],
  },
  {
    title: "Director of Operations",
    company: "Hive Roofing and Solar",
    location: "Austin, TX",
    period: "Sept 2024 - July 2025",
    bullets: [
      "Directed operational improvement initiatives through structured SOPs and optimized project tools",
      "Developed lien and accounts receivable tracking systems improving billing and compliance accuracy",
      "Oversaw CRM optimization and internal coordination across teams",
    ],
  },
  {
    title: "Customer Success Specialist (Bilingual)",
    company: "Restoration Builders Inc.",
    location: "Austin, TX",
    period: "June 2023 - June 2024",
    bullets: [
      "Managed 200+ client accounts maintaining 95% satisfaction and driving 20% increase in repeat business",
      "Created SOP training materials to standardize workflows and support onboarding",
    ],
  },
  {
    title: "Spanish Interpreter",
    company: "Akorbi (Bank of America)",
    location: "Remote",
    period: "Jan 2023 - May 2024",
    bullets: [
      "Delivered interpretation for 500+ financial service calls maintaining 99% accuracy under compliance protocols",
    ],
  },
];

const skillCategories = [
  {
    label: "Project & Operations",
    skills: ["Microsoft Office", "Excel (Advanced)", "Microsoft Project", "Asana", "AccuLynx"],
  },
  {
    label: "Data & Systems",
    skills: ["Salesforce CRM", "Power BI", "SQL"],
  },
  {
    label: "Automation & AI",
    skills: ["Workflow Automation", "AI-assisted Documentation", "ChatGPT"],
  },
  {
    label: "Technical",
    skills: ["Python", "JavaScript"],
  },
];

export default function ResumePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-surface-dark py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
                Resume
              </p>
              <h1 className="text-4xl font-bold text-white mb-2">
                Katerine Fern&aacute;ndez Garcia
              </h1>
              <p className="text-lg text-slate-400 italic">
                Project &amp; Operations Manager | Process Optimization | Cross-Functional Leadership
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} /> Austin, TX
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={14} /> katerinefernandezgarcia@gmail.com
                </span>
              </div>
            </div>
            <a
              href="/resume/katerine-fernandez-garcia-resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium text-sm shrink-0"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
              <Briefcase size={20} className="text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Experience</h2>
          </div>

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-white" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-900">{exp.title}</h3>
                    <p className="text-accent font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="text-sm text-slate-500 sm:text-right shrink-0">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-slate-600 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-slate-300"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-surface dot-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
              <GraduationCap size={20} className="text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Education</h2>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900">University of Texas at Austin</h3>
            <p className="text-slate-600 mt-1">
              Economics Coursework focused on Data Analysis and Systems Thinking
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional */}
      <section className="py-16 bg-surface-dark">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">
            Additional Experience &amp; Leadership
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-5 border border-white/10 rounded-xl bg-white/5">
              <h3 className="font-semibold text-white mb-2">CapyQuokka YouTube Channel</h3>
              <p className="text-slate-400 text-sm">
                Founder and creator — digital media growth strategies and creative content.
              </p>
            </div>
            <div className="p-5 border border-white/10 rounded-xl bg-white/5">
              <h3 className="font-semibold text-white mb-2">Latin Dance Coordinator &amp; Instructor</h3>
              <p className="text-slate-400 text-sm">
                Organized Austin community events and instructed at UT Austin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
