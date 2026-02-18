import type { Metadata } from "next";
import { MapPin, Briefcase, GraduationCap, Music, Globe } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Katerine Fernandez Garcia — Project & Operations Manager based in Austin, TX.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-surface-dark py-16 relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-50px] w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            About
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">
            Hi, I&apos;m Katerine
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Project &amp; Operations Manager based in Austin, TX. I&apos;m passionate about
            turning chaos into clarity through process optimization, system implementation,
            and cross-functional leadership.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main bio */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">My Story</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    With a background in Economics from the University of Texas at Austin
                    and hands-on experience across industries — from healthcare to solar
                    energy to digital media — I&apos;ve built a career around making
                    organizations run better.
                  </p>
                  <p>
                    I&apos;ve led SOP frameworks that cut administrative errors by 40%,
                    designed automation workflows that saved 10+ hours per week, and managed
                    content production pipelines for growing YouTube channels. Whether
                    it&apos;s implementing a CRM, building tracking dashboards, or
                    coordinating across departments, I thrive at the intersection of
                    operations and technology.
                  </p>
                  <p>
                    Outside of work, I&apos;m the founder of the CapyQuokka YouTube channel,
                    a Latin dance event coordinator and instructor in Austin, and I&apos;m
                    always exploring new ways to grow — both professionally and creatively.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Drives Me</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    I believe that great systems empower great people. When processes are
                    clear and tools are working, teams can focus on what they do best. My
                    goal is always to remove friction, increase visibility, and create
                    frameworks that scale.
                  </p>
                  <p>
                    I&apos;m also deeply interested in data-driven decision making, systems
                    thinking, and the role of AI and automation in modern operations. I write
                    about these topics in my articles and research pieces.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-surface rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">At a Glance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600">Austin, TX</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600">
                      Project &amp; Operations Manager
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GraduationCap size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600">
                      UT Austin — Economics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600">
                      Bilingual: English &amp; Spanish
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Music size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600">
                      Latin Dance Instructor
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Connect</h3>
                <SocialLinks className="flex-col" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
