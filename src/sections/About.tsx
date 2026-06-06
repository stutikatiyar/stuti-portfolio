"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32 scroll-mt-24"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="text-cyan-400 uppercase tracking-widest mb-4">
          My Story
        </p>

        <h2 className="text-5xl md:text-7xl font-bold text-white">
          The Journey{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Behind The Vision
          </span>
        </h2>

        <p className="max-w-3xl mx-auto text-slate-400 mt-6 text-lg">
          From exploring Artificial Intelligence and Full Stack Development
          to building real-world projects like DermaLens and VigilXi,
          my journey has been driven by curiosity, innovation and
          solving practical problems through technology.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* Left Side */}
        <Timeline />

        {/* Right Side */}
        <div className="space-y-6">

          {/* About Me */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-white text-2xl font-semibold mb-4">
              About Me
            </h3>

            <p className="text-slate-400 leading-relaxed">
              AIML undergraduate with experience in Full Stack Development,
              Computer Vision and AI-powered applications
              Built VigilXi, an intelligent surveillance platform, DermaLens,
              an AI image enhancement framework, and a full-stack management
              platform for a real automobile service business.

            </p>

            <p className="text-slate-400 leading-relaxed mt-4">
              
              Passionate about building practical products that combine
              Artificial Intelligence with scalable software systems.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <h4 className="text-cyan-400 text-3xl font-bold">
                1
              </h4>

              <p className="text-slate-400 text-sm">
                Patent Filed
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <h4 className="text-purple-400 text-3xl font-bold">
                7+
              </h4>

              <p className="text-slate-400 text-sm">
                Projects Built
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <h4 className="text-cyan-400 text-3xl font-bold">
                70+
              </h4>

              <p className="text-slate-400 text-sm">
                Student Coordinated
              </p>
            </div>
             <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <h4 className="text-cyan-400 text-3xl font-bold">
                1
              </h4>
               <p className="text-slate-400 text-sm">
                   Freelance Client
              </p>
              </div>
          </div>
          

          {/* Opportunities */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-white text-xl font-semibold mb-4">
              Open For
            </h3>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full border border-cyan-400/20 text-cyan-400">
                Internships
              </span>

              <span className="px-4 py-2 rounded-full border border-purple-400/20 text-purple-400">
                AI/ML
              </span>

              <span className="px-4 py-2 rounded-full border border-cyan-400/20 text-cyan-400">
                Full Stack
              </span>
            </div>
          </div>

          {/* Learning */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-white text-xl font-semibold mb-4">
              Currently Learning
            </h3>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full border border-white/10 text-slate-300">
                Next.js
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 text-slate-300">
                Computer Vision
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 text-slate-300">
                System Design
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 text-slate-300">
                DSA
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 text-slate-300">
                Machine Learning
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}