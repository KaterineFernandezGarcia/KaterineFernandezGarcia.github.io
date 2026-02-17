import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Katerine Fernandez Garcia.",
};

export default function ResumePage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Resume</h1>
        <a
          href="/resume/katerine-fernandez-garcia-resume.pdf"
          download
          className="px-4 py-2 text-sm font-medium border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-slate-700"
        >
          Download PDF
        </a>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          Experience
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h3 className="font-medium text-slate-900">Position Title</h3>
              <span className="text-sm text-slate-500">Start - Present</span>
            </div>
            <p className="text-slate-600">Company Name</p>
            <ul className="list-disc list-outside pl-5 mt-2 text-slate-600 text-sm space-y-1">
              <li>Key accomplishment or responsibility</li>
              <li>Another significant contribution</li>
              <li>Impact metrics or notable achievement</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h3 className="font-medium text-slate-900">Previous Position</h3>
              <span className="text-sm text-slate-500">Start - End</span>
            </div>
            <p className="text-slate-600">Previous Company</p>
            <ul className="list-disc list-outside pl-5 mt-2 text-slate-600 text-sm space-y-1">
              <li>Accomplishment or responsibility</li>
              <li>Another accomplishment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          Education
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-slate-900">Degree Name</h3>
            <p className="text-slate-600">University Name</p>
            <p className="text-sm text-slate-500">Year - Year</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Skill 1",
            "Skill 2",
            "Skill 3",
            "Skill 4",
            "Skill 5",
            "Skill 6",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Interests / Additional */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          Interests
        </h2>
        <p className="text-slate-600">
          [Replace with your interests, volunteer work, languages spoken, or
          other relevant information.]
        </p>
      </div>
    </section>
  );
}
