export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h3 className="text-white text-2xl font-bold mb-2">
          Stuti Katiyar
        </h3>

        <p className="text-cyan-400 mb-4">
          AI Engineer • Full Stack Developer
        </p>

        <p className="text-slate-400 max-w-xl mb-8">
          Building AI-powered products that solve
          real-world problems through Computer Vision,
          Machine Learning and scalable web technologies.
        </p>

        <div className="h-px bg-white/10 mb-6" />

        <div className="flex flex-col md:flex-row md:justify-between gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 Stuti Katiyar. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}