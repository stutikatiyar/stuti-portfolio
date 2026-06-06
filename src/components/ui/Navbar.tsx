export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <h1 className="text-white font-bold text-xl">
          Stuti Katiyar
        </h1>

        <div className="flex gap-8">
            <section id="about">
          <a
            href="#about"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            About
          </a>
          </section>
           <section id="projects">
          <a
            href="#projects"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            
            Projects
          </a>
          </section>
          <section id="contact">
          <a
            href="#contact"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Contact
          </a>
          </section>
        </div>

      </div>
    </nav>
  );
}