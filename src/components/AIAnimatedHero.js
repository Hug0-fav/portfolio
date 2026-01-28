"use client";

// import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function AIAnimatedHero() {
  const phrases = [
    "console.log('Hello, world!');",
    "React + Next.js + TailwindCSS",
    "Building scalable, production-ready apps...",
    "const favouriteDev = true;",
  ];

  // const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,255,255,0.1)" }}
      className="mt-10 p-6 bg-[#111111] rounded-xl max-w-3xl mx-auto shadow-lg border-l-4 border-cyan-500"
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
    >
      <p className="text-gray-400 text-lg md:text-xl font-mono min-h-[48px]">
        <Typewriter
          words={phrases}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </p>

      {/* {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 mt-4 text-sm font-mono"
        >
          Fun fact: I love clean, scalable code.
        </motion.div>
      )} */}
    </motion.div>
  );
}
