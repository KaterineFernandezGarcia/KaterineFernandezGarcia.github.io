import type { Metadata } from "next";
import { Youtube, Github, Linkedin, Music, Mic, Rocket } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and work by Katerine Fernandez Garcia.",
};

const projects = [
  {
    title: "CapyQuokka YouTube Channel",
    description:
      "Founder and creator of CapyQuokka — digital media content with creative growth strategies and community engagement.",
    href: "https://www.youtube.com/@CapyQuokka-kitsune",
    type: "YouTube" as const,
    icon: <Youtube size={24} className="text-red-400" />,
  },
  {
    title: "GitHub",
    description:
      "Code projects, experiments, and technical exploration in Python, JavaScript, and more.",
    href: "https://github.com/KatyLycoris",
    type: "GitHub" as const,
    icon: <Github size={24} className="text-slate-300" />,
  },
  {
    title: "LinkedIn",
    description:
      "Professional profile, career updates, and networking. Let's connect!",
    href: "https://www.linkedin.com/in/katerine-fernandez-garcia-36892a212",
    type: "LinkedIn" as const,
    icon: <Linkedin size={24} className="text-blue-400" />,
  },
  {
    title: "Latin Dance — Lessons, Events & Performances",
    description:
      "Coordinating Latin dance events, teaching lessons, and performing in the Austin community and at UT Austin.",
    href: "/contact/",
    type: "Other" as const,
    icon: <Music size={24} className="text-emerald-400" />,
  },
  {
    title: "Podcast — Coming Soon",
    description:
      "Stay tuned for upcoming podcast appearances and episodes covering operations, creativity, and more.",
    href: "#",
    type: "Other" as const,
    icon: <Mic size={24} className="text-amber-400" />,
  },
  // To add a new project, copy this template and fill in your details:
  // {
  //   title: "Your Project Name",
  //   description: "What it's about.",
  //   href: "https://link-to-project.com",
  //   type: "Other" as const,  // or "YouTube", "GitHub", "LinkedIn"
  //   icon: <Rocket size={24} className="text-purple-400" />,
  // },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Header section */}
      <section className="bg-surface-dark py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-slate-400 max-w-2xl">
            A collection of my professional work, creative channels, and
            community projects.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="bg-surface-darker py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
