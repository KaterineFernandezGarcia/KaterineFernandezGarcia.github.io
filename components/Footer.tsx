import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Katerine Fernandez Garcia
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
