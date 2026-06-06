"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-cyan-400 mb-4"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl font-bold text-white"
            >
              Stuti Katiyar
            </motion.h1>

            <p className="text-slate-400 mt-6 text-xl">
              AI Engineer & Full Stack Developer
            </p>

            <p className="text-slate-500 mt-4 max-w-xl leading-relaxed">
              Building intelligent systems using Computer Vision,
              Machine Learning and scalable web technologies.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition">
                View Projects →
              </button>

              <button className="px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
                Resume ↓
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-10">
              <div>
                <h3 className="text-cyan-400 text-3xl font-bold">
                  9.35
                </h3>
                <p className="text-slate-400 text-sm">
                  CGPA
                </p>
              </div>

              <div>
                <h3 className="text-cyan-400 text-3xl font-bold">
                  1+
                </h3>
                <p className="text-slate-400 text-sm">
                  Patent
                </p>
              </div>

              <div>
                <h3 className="text-cyan-400 text-3xl font-bold">
                  250+
                </h3>
                <p className="text-slate-400 text-sm">
                  DSA Problems
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex justify-center">
            <div className="relative overflow-visible">

              {/* Glow Behind Laptop */}
             <div className="absolute inset-0 -z-10 bg-cyan-500/10 blur-[120px] scale-125" />

                            <div className="absolute z-20 -left-10 top-10 px-4 py-2 rounded-xl border border-cyan-400/20 bg-slate-900/80 backdrop-blur-xl text-cyan-300 text-sm">
                Next.js
              </div>

              <div className="absolute z-20 -right-10 top-24 px-4 py-2 rounded-xl border border-cyan-400/20 bg-slate-900/80 backdrop-blur-xl text-cyan-300 text-sm">
                AI Powered
              </div>

              <div className="absolute z-20 left-0 bottom-10 px-4 py-2 rounded-xl border border-cyan-400/20 bg-slate-900/80 backdrop-blur-xl text-cyan-300 text-sm">
                Full Stack
              </div>

              {/* Floating Laptop */}
              <motion.div
              className="relative z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-[520px] rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 shadow-[0_0_80px_rgba(34,211,238,0.12)] p-5">
                
                  {/* Browser Bar */}
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  {/* Fake Website */}
                  <div className="rounded-2xl bg-slate-950 border border-white/5 p-5">

                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-white font-semibold">
                        Loading Website...
                      </h3>

                      <span className="text-cyan-400 text-sm">
                        LIVE
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="rounded-xl bg-white/5 p-4">
                        <p className="text-slate-400 text-xs">
                          Users
                        </p>

                        <h4 className="text-white text-2xl font-bold">
                          12K
                        </h4>
                      </div>

                      <div className="rounded-xl bg-white/5 p-4">
                        <p className="text-slate-400 text-xs">
                          Accuracy
                        </p>

                        <h4 className="text-cyan-400 text-2xl font-bold">
                          95%
                        </h4>
                      </div>

                      <div className="rounded-xl bg-white/5 p-4">
                        <p className="text-slate-400 text-xs">
                          Models
                        </p>

                        <h4 className="text-white text-2xl font-bold">
                          8
                        </h4>
                      </div>
                    </div>

                    {/* Fake Graph */}
                    <div className="space-y-4">
                      <div className="h-3 rounded-full bg-cyan-500 w-[90%]" />
                      <div className="h-3 rounded-full bg-cyan-500/70 w-[70%]" />
                      <div className="h-3 rounded-full bg-cyan-500/40 w-[50%]" />
                      <div className="h-3 rounded-full bg-cyan-500/20 w-[80%]" />
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}