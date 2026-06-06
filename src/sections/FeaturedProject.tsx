export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <p className="text-cyan-400 uppercase tracking-widest mb-4">
        My Work
      </p>

      <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Featured Projects
      </h2>

      <p className="text-slate-400 mb-12 max-w-2xl">
        A collection of AI, Computer Vision and Full Stack
        projects focused on solving real-world problems.
      </p>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* VigilXi */}
        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8 cursor-pointer hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] transition-all duration-300">

          <div className="mb-6">
            <div className="w-full rounded-2xl border border-white/10 bg-slate-950 p-3">

              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="rounded-xl bg-slate-900 p-4">

                <div className="flex justify-between mb-6">
                  <div className="h-3 w-24 rounded-full bg-cyan-400/70" />
                  <div className="h-3 w-16 rounded-full bg-purple-400/70" />
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="h-16 rounded-xl bg-cyan-500/10 border border-cyan-400/20" />
                  <div className="h-16 rounded-xl bg-cyan-500/10 border border-cyan-400/20" />
                  <div className="h-16 rounded-xl bg-cyan-500/10 border border-cyan-400/20" />
                </div>

                <div className="space-y-3">
                  <div className="h-3 rounded-full bg-cyan-400/50 w-full" />
                  <div className="h-3 rounded-full bg-cyan-400/30 w-[80%]" />
                  <div className="h-3 rounded-full bg-cyan-400/20 w-[60%]" />
                </div>

              </div>
            </div>
          </div>

          <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
            CURRENT PROJECT
          </span>

          <h3 className="text-white text-2xl font-semibold mt-4">
            VigilXi
          </h3>

          <p className="text-slate-400 mt-4">
            AI-powered surveillance platform for real-time
            object detection, activity monitoring and
            intelligent threat alerts.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 rounded-full bg-white/5 text-cyan-400 text-sm">
              YOLOv8
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-cyan-400 text-sm">
              OpenCV
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-cyan-400 text-sm">
              FastAPI
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-cyan-400 text-sm">
              React
            </span>
          </div>

          <button className="mt-6 text-cyan-400 hover:text-cyan-300 transition">
            View Details →
          </button>
        </div>

        {/* DermaLens */}
        <div className="rounded-3xl border border-purple-400/20 bg-white/5 backdrop-blur-xl p-8 cursor-pointer hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] transition-all duration-300">

          <div className="mb-6">
            <div className="w-full rounded-2xl border border-white/10 bg-slate-950 p-3">

              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="rounded-xl bg-slate-900 p-4">

                <div className="h-24 rounded-xl bg-purple-500/10 border border-purple-400/20 mb-4" />

                <div className="grid grid-cols-2 gap-3">
                  <div className="h-16 rounded-xl bg-purple-500/10 border border-purple-400/20" />
                  <div className="h-16 rounded-xl bg-purple-500/10 border border-purple-400/20" />
                </div>

              </div>
            </div>
          </div>

          <h3 className="text-white text-2xl font-semibold">
            DermaLens
          </h3>

          <p className="text-slate-400 mt-4">
            AI-powered dermatology image enhancement
            framework focused on image quality improvement
            and confidence preservation.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 rounded-full bg-white/5 text-purple-400 text-sm">
              OpenCV
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-purple-400 text-sm">
              PyTorch
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-purple-400 text-sm">
              Computer Vision
            </span>
          </div>

          <button className="mt-6 text-purple-400 hover:text-purple-300 transition">
            View Details →
          </button>
        </div>

        {/* AutoSpares */}
        <div className="rounded-3xl border border-blue-400/20 bg-white/5 backdrop-blur-xl p-8 cursor-pointer hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(96,165,250,0.12)] transition-all duration-300">

          <div className="mb-6">
            <div className="w-full rounded-2xl border border-white/10 bg-slate-950 p-3">

              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="rounded-xl bg-slate-900 p-4">

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="h-14 rounded-xl bg-blue-500/10 border border-blue-400/20" />
                  <div className="h-14 rounded-xl bg-blue-500/10 border border-blue-400/20" />
                  <div className="h-14 rounded-xl bg-blue-500/10 border border-blue-400/20" />
                </div>

                <div className="h-24 rounded-xl bg-blue-500/10 border border-blue-400/20" />

              </div>
            </div>
          </div>

          <h3 className="text-white text-2xl font-semibold">
            AutoSpares
          </h3>

          <p className="text-slate-400 mt-4">
            Full-stack automobile management platform
            built for inventory, customer management
            and service workflows.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 rounded-full bg-white/5 text-blue-400 text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-blue-400 text-sm">
              Node.js
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-blue-400 text-sm">
              MongoDB
            </span>
          </div>

          <button className="mt-6 text-blue-400 hover:text-blue-300 transition">
            View Details →
          </button>
        </div>

      </div>
    </section>
  );
}