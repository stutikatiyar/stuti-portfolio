export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <p className="text-cyan-400 uppercase tracking-widest mb-4">
        Contact
      </p>

      <h2 className="text-5xl font-bold text-white mb-6">
        Let us Build Something
      </h2>

      <p className="text-slate-400 max-w-xl mb-10">
        Interested in AI, Full Stack Development or
        collaboration opportunities? Feel free to connect.
      </p>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <p className="text-slate-300 mb-4">
          Email
        </p>

        <a
          href="mailto:yourmail@gmail.com"
          className="text-cyan-400 text-xl"
        >
          stutikatiyarof@gmail.com
        </a>

      </div>
    </section>
  );
}