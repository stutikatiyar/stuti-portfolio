export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid grid-cols-3 gap-6">

        <div className="p-8 border border-white/10 rounded-3xl">
          <h3 className="text-4xl text-cyan-400">
            9.35
          </h3>
          <p className="text-slate-400">
            CGPA
          </p>
        </div>

        <div className="p-8 border border-white/10 rounded-3xl">
          <h3 className="text-4xl text-cyan-400">
            300+
          </h3>
          <p className="text-slate-400">
            LeetCode
          </p>
        </div>

        <div className="p-8 border border-white/10 rounded-3xl">
          <h3 className="text-4xl text-cyan-400">
            5+
          </h3>
          <p className="text-slate-400">
            Projects
          </p>
        </div>

      </div>

    </section>
  );
}