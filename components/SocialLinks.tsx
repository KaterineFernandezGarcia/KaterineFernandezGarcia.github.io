import { Youtube, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CapyQuokka-kitsune",
    icon: Youtube,
  },
  {
    label: "GitHub",
    href: "https://github.com/KatyLycoris",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/katerine-fernandez-garcia-36892a212",
    icon: Linkedin,
  },
];

export default function SocialLinks({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const colors =
    variant === "dark"
      ? "text-slate-400 hover:text-accent"
      : "text-slate-500 hover:text-accent";

  return (
    <div className={`flex gap-5 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors ${colors}`}
            aria-label={link.label}
          >
            <Icon size={20} />
            <span className="text-sm font-medium">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}
