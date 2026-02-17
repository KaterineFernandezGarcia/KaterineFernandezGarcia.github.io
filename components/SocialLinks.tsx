import { Youtube, Github, Linkedin } from "lucide-react";

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com/@placeholder", icon: Youtube },
  { label: "GitHub", href: "https://github.com/placeholder", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/placeholder", icon: Linkedin },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-accent transition-colors"
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
