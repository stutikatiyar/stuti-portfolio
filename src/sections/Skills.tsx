export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Heading */}
      <p className="text-purple-400 uppercase tracking-widest text-center mb-4">
        — TECH STACK
      </p>

      <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-6">
        Tools I&apos;m{" "}
        <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Working With
        </span>
      </h2>

      <p className="text-slate-400 text-center max-w-2xl mx-auto mb-20">
        Technologies I use to build AI systems, computer vision applications
        and full-stack web platforms.
      </p>

      {/* Orbit Section */}
      <div className="relative h-[450px] flex items-center justify-center mb-20">

        {/* Outer Ring */}
        <div className="absolute w-[380px] h-[380px] rounded-full border border-white/5" />

        {/* Inner Ring */}
        <div className="absolute w-[250px] h-[250px] rounded-full border border-purple-500/10" />

        {/* Center Circle */}
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.15)] flex items-center justify-center text-center z-10">
          <span className="text-white font-bold text-lg">
            AI + <br />
            FULL STACK
          </span>
        </div>

        {/* Orbit Skills */}
        <div className="absolute top-4 px-4 py-2 rounded-full border border-cyan-400/20 bg-slate-900 text-cyan-400 text-sm">
          Python
        </div>

        <div className="absolute right-20 top-24 px-4 py-2 rounded-full border border-purple-400/20 bg-slate-900 text-purple-400 text-sm">
          OpenCV
        </div>

        <div className="absolute right-10 bottom-24 px-4 py-2 rounded-full border border-cyan-400/20 bg-slate-900 text-cyan-400 text-sm">
          YOLOv8
        </div>

        <div className="absolute bottom-4 px-4 py-2 rounded-full border border-purple-400/20 bg-slate-900 text-purple-400 text-sm">
          PyTorch
        </div>

        <div className="absolute left-10 bottom-24 px-4 py-2 rounded-full border border-cyan-400/20 bg-slate-900 text-cyan-400 text-sm">
          React
        </div>

        <div className="absolute left-20 top-24 px-4 py-2 rounded-full border border-purple-400/20 bg-slate-900 text-purple-400 text-sm">
          Next.js
        </div>
      </div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* AI */}
        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8">
          <h3 className="text-cyan-400 text-xl font-semibold mb-5">
            AI & Computer Vision
          </h3>

          <div className="flex flex-wrap gap-2">
            {["Python", "OpenCV", "YOLOv8", "PyTorch", "NumPy", "Pandas"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 rounded-full border border-cyan-400/20 text-cyan-400 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="rounded-3xl border border-purple-400/20 bg-white/5 backdrop-blur-xl p-8">
          <h3 className="text-purple-400 text-xl font-semibold mb-5">
            Frontend
          </h3>

          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 rounded-full border border-purple-400/20 text-purple-400 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8">
          <h3 className="text-cyan-400 text-xl font-semibold mb-5">
            Backend
          </h3>

          <div className="flex flex-wrap gap-2">
            {["Node.js", "Express", "MongoDB", "FastAPI", "REST APIs"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 rounded-full border border-cyan-400/20 text-cyan-400 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ML */}
        <div className="rounded-3xl border border-purple-400/20 bg-white/5 backdrop-blur-xl p-8">
          <h3 className="text-purple-400 text-xl font-semibold mb-5">
            Machine Learning
          </h3>

          <div className="flex flex-wrap gap-2">
            {["CNN", "Image Processing", "Scikit-Learn", "Deep Learning"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 rounded-full border border-purple-400/20 text-purple-400 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8">
          <h3 className="text-cyan-400 text-xl font-semibold mb-5">
            Tools
          </h3>

          <div className="flex flex-wrap gap-2">
            {["Git", "GitHub", "VS Code", "Postman", "Linux"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 rounded-full border border-cyan-400/20 text-cyan-400 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="rounded-3xl border border-purple-400/20 bg-white/5 backdrop-blur-xl p-8">
          <h3 className="text-purple-400 text-xl font-semibold mb-5">
            Leadership
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              "Placement Coordinator",
              "Patent Filed",
              "Freelancing",
              "Team Collaboration",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 rounded-full border border-purple-400/20 text-purple-400 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}