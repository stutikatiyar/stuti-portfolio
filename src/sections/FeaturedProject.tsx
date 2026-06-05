export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl text-white font-bold mb-10">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="rounded-3xl border border-white/10 p-8">
          <h3 className="text-white text-2xl">
            VigilXi
          </h3>
        </div>

        <div className="rounded-3xl border border-white/10 p-8">
          <h3 className="text-white text-2xl">
            DermaLens
          </h3>
        </div>

      </div>
    </section>
  );
}