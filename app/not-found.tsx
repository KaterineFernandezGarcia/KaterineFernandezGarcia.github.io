import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-6xl font-bold text-slate-300 mb-4">404</h1>
      <p className="text-xl text-slate-600 mb-8">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
      >
        Go Home
      </Link>
    </section>
  );
}
