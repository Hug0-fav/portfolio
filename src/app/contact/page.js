"use client";

import { Mail, Github, Twitter, Linkedin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#0d0d0d] text-gray-100">
      <section className="max-w-xl w-full text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-indigo-400 mb-6">
          Let’s Talk
        </h1>

        {/* Lead text */}
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          If you have an idea, a question, or just want to connect, I’m always
          open to meaningful conversations. Reach out through any of the
          channels below.
        </p>

        {/* Contact Card */}
        <div className="rounded-2xl border border-gray-700 bg-[#111] p-8 space-y-6">
          {/* Email */}
          <a
            href="mailto:favourugochukwu548@gmail.com"
            className="flex items-center justify-center gap-3 text-gray-300 hover:text-indigo-400 transition"
          >
            <Mail className="w-5 h-5" />
            <span>favourugochukwu548@gmail.com</span>
          </a>

          {/* Phone */}
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Phone className="w-5 h-5" />
            <span>+234 810 888 7075</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-700" />

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Hug0-fav"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://twitter.com/FavoHugo"
              target="_blank"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/favour-ugochukwu-77ba69358/"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
