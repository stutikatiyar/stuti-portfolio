"use client";

import Timeline from "../components/Timeline";



export default function Journey() {
  return (
    <section
      id="journey"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <div className="text-center mb-20">
        <p className="text-cyan-400 text-sm mb-3">
          MY PATH
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Engineering Journey
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          A timeline of milestones, projects and achievements
          that shaped my journey as an AI Engineer.
        </p>
      </div>
      <Timeline />

      
    </section>
  );
}