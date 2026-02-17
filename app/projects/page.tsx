import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and work by Katerine Fernandez Garcia.",
};

const projects = [
  {
    title: "YouTube Channel",
    description:
      "Videos about topics I care about. Subscribe to follow along with my journey.",
    href: "https://youtube.com/@placeholder",
    type: "YouTube" as const,
  },
  {
    title: "GitHub Repositories",
    description: "Open source projects, code samples, and experiments.",
    href: "https://github.com/placeholder",
    type: "GitHub" as const,
  },
  {
    title: "LinkedIn Profile",
    description: "Professional experience, connections, and career updates.",
    href: "https://linkedin.com/in/placeholder",
    type: "LinkedIn" as const,
  },
  {
    title: "Other Project",
    description:
      "Description of another project or endeavor. Replace with your actual project details.",
    href: "#",
    type: "Other" as const,
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Projects</h1>
      <p className="text-slate-600 mb-10 max-w-2xl">
        A collection of my work, channels, and projects across the web.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
