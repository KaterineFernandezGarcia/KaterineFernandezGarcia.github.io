import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Katerine Fern&aacute;ndez Garcia
          </p>
          <p className="text-xs text-slate-600 mt-1">Austin, TX</p>
        </div>
        <SocialLinks variant="dark" />
      </div>
    </footer>
  );
}
