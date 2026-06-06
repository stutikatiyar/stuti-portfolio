"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <p className="text-purple-400 uppercase tracking-widest text-center mb-4">
        — LET&apos;S CONNECT
      </p>

      <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-6">
        Let&apos;s Build Something{" "}
        <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Together
        </span>
      </h2>

      <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
        I&apos;m actively looking for internships, freelance work and
        exciting opportunities in AI, Computer Vision and Full Stack
        Development.
      </p>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none"
            />

          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Internship / Freelance / Collaboration"
            required
            className="w-full mb-4 bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none"
          />

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            required
            className="w-full mb-6 bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </form>

        {/* Right Cards */}
        <div className="space-y-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-white font-semibold mb-2">
              Direct Email
            </h3>

            <p className="text-slate-400 text-sm mb-4">
              Preferred — I check this daily
            </p>

            <a
              href="mailto:stutikatiyarof@gmail.com"
              className="text-purple-400"
            >
              stutikatiyarof@gmail.com
            </a>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-white font-semibold mb-4">
              Open to Opportunities
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full border border-yellow-500/20 text-yellow-400 text-sm">
                Freelancing
              </span>

              <span className="px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-400 text-sm">
                Internship
              </span>

              <span className="px-3 py-1 rounded-full border border-purple-500/20 text-purple-400 text-sm">
                Full-time
              </span>
            </div>

            <p className="text-slate-400 text-sm">
              AIML undergraduate ready to contribute,
              learn and build impactful products.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-white font-semibold mb-2">
              GitHub
            </h3>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400"
            >
              View Profile →
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-white font-semibold mb-2">
              LinkedIn
            </h3>

            <a
              href="#"
              className="text-cyan-400"
            >
              Connect →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}