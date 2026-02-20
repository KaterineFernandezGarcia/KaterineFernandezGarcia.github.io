import type { Metadata } from "next";
import {
  Mail,
  Linkedin,
  Youtube,
  Music,
  Briefcase,
  Calendar,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Katerine Fernandez Garcia for projects, dance bookings, collaborations, and more.",
};

const contactOptions = [
  {
    icon: Briefcase,
    title: "Hire Me for a Project",
    description:
      "Looking for a Project Manager or Operations specialist? I'd love to hear about your needs.",
    cta: "Email Me",
    href: "mailto:katerinefernandezgarcia@gmail.com?subject=Project%20Inquiry",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Music,
    title: "Book Dance Lessons",
    description:
      "Want to learn Latin dance? Book private or group lessons with me and my dance partner in Austin, TX.",
    cta: "Book Lessons",
    href: "mailto:katerinefernandezgarcia@gmail.com?subject=Dance%20Lessons%20Inquiry",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Calendar,
    title: "Events & Performances",
    description:
      "Hire us for your event, party, or corporate function. Latin dance performances and entertainment.",
    cta: "Book for Events",
    href: "mailto:katerinefernandezgarcia@gmail.com?subject=Event%20Booking%20Inquiry",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Sparkles,
    title: "Collaborations & Podcasts",
    description:
      "Interested in collaborating on a podcast, video, article, or creative project? Let's talk.",
    cta: "Reach Out",
    href: "mailto:katerinefernandezgarcia@gmail.com?subject=Collaboration%20Inquiry",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-surface-dark py-16 relative overflow-hidden">
        <div className="absolute top-[-100px] left-[-50px] w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            Contact
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Whether you need a project manager, want to book dance lessons, or
            have a creative collaboration in mind — I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <a
                  key={option.title}
                  href={option.href}
                  className="group block p-6 border border-slate-200 rounded-xl card-glow"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${option.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon size={24} className={option.color} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {option.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-accent group-hover:underline">
                    {option.cta} &rarr;
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct contact info */}
      <section className="py-16 bg-surface dot-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Or Reach Me Directly
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:katerinefernandezgarcia@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-slate-200 card-glow"
            >
              <Mail size={20} className="text-accent" />
              <div>
                <p className="text-sm font-medium text-slate-900">Email</p>
                <p className="text-xs text-slate-500">
                  katerinefernandezgarcia@gmail.com
                </p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/katerine-fernandez-garcia-36892a212"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-slate-200 card-glow"
            >
              <Linkedin size={20} className="text-blue-500" />
              <div>
                <p className="text-sm font-medium text-slate-900">LinkedIn</p>
                <p className="text-xs text-slate-500">Connect with me</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/@CapyQuokka-kitsune"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-slate-200 card-glow"
            >
              <Youtube size={20} className="text-red-500" />
              <div>
                <p className="text-sm font-medium text-slate-900">YouTube</p>
                <p className="text-xs text-slate-500">CapyQuokka</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ-like section */}
      <section className="py-16 bg-surface-dark">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            What to Expect
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold stat-number mb-2">1</div>
              <h3 className="font-semibold text-white mb-1">Reach Out</h3>
              <p className="text-sm text-slate-400">
                Send me an email or message with details about what you need.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold stat-number mb-2">2</div>
              <h3 className="font-semibold text-white mb-1">We Chat</h3>
              <p className="text-sm text-slate-400">
                I&apos;ll respond within 24-48 hours to discuss your project or booking.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold stat-number mb-2">3</div>
              <h3 className="font-semibold text-white mb-1">Let&apos;s Go</h3>
              <p className="text-sm text-slate-400">
                We align on scope, timeline, and details — then get to work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
