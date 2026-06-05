"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: (i * 47) % 1800,
  y: (i * 31) % 1000,
  duration: 8 + (i % 8),
}));

export default function Particles() {
  return (
    <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/50"
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            y: [particle.y, particle.y - 120],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}