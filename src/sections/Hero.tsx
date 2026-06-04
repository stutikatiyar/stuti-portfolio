import AIDashboard from "@/components/ui/AIDashboard";


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-cyan-400 mb-4">
            Hi, I&apos;m
          </p>

          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Stuti Katiyar
          </h1>

          <h2 className="text-2xl md:text-4xl text-slate-300 mb-6">
            AI Engineer & Full Stack Developer
          </h2>

          <p className="text-slate-400 text-lg mb-8 max-w-xl">
            Building intelligent systems using Computer Vision,
            Machine Learning and scalable web technologies.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-cyan-500">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-xl border border-slate-600">
              Resume
            </button>
          </div>
        </div>

        <div>
          <AIDashboard />
        </div>

      </div>
    </section>
  );
}