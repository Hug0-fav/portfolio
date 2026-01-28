"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#0d0d0d] text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid gap-12 md:grid-cols-3">
        {/* Brand / Intro */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-cyan-400">Ugochukwu Favour</h2>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            Let’s build something great together.
          </p>
          <div className="flex mt-4 space-x-4">
            <Link
              href="https://github.com/Hug0-fav"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://twitter.com/FavoHugo"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/favour-ugochukwu-77ba69358/"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {["Home", "Projects", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Need advice or have a question? Let me know—I’d be happy to help!
          </p>
          <Link
            href="mailto:favourugochukwu548@gmail.com"
            className="flex items-center gap-2 mt-3 hover:text-cyan-400 transition"
          >
            <Mail size={18} />
            <span className="text-gray-400 text-sm md:text-base">
              favourugochukwu548@gmail.com
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-t border-gray-800 py-4 text-center text-xs md:text-sm text-gray-500"
      >
        &copy; {new Date().getFullYear()} Ugochukwu Chidubem Favour. All rights
        reserved.
      </motion.div>
    </footer>
  );
}
