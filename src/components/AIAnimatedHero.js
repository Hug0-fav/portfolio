"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function AIAnimatedHero() {
  const phrases = [
    "console.log('Hello, world!');",
    "React + Next.js + Tailwind CSS",
    "Building clean, scalable web applications...",
    "Frontend first. Backend capable.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mt-16 p-5 md:p-6 bg-[#111111]/80 backdrop-blur-sm rounded-xl max-w-3xl mx-auto border border-white/5 border-l-4 border-l-cyan-500 shadow-lg"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
      </div>

      <p className="text-gray-400 text-base md:text-lg font-mono min-h-[48px] text-left">
        <span className="text-cyan-400 mr-2">&gt;</span>

        <Typewriter
          words={phrases}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1400}
        />
      </p>
    </motion.div>
  );
}
