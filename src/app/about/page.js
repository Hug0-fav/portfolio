"use client";

import { ArrowRight, Palette, Sparkles, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-16 bg-background text-foreground">
      {/* Intro */}
      <section className="max-w-4xl px-6 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
          Behind My Projects
        </h2>
        <p className="text-lg md:text-xl text-white leading-relaxed">
          I don’t just build interfaces, I build experiences. For me, code is a
          craft — a way to shape ideas into tools that people can actually feel
          and use. My goal is always simple: clarity, purpose, and meaning in
          every line I write.
        </p>
      </section>

      {/* What drives my work */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-10">
          What Drives My Work
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Creativity */}
          <div className="shadow-md rounded-xl p-6 border-l-4 border-indigo-500">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
              Creativity as Craft
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Creativity is more than expression—it’s how I approach every
              challenge. I treat each project like a living canvas, where code
              and design merge into meaningful experiences. It’s not about
              decoration, but about finding beauty in function and purpose.
            </p>
          </div>

          {/* Simplicity */}
          <div className="shadow-md rounded-xl p-6 border-l-4 border-green-500">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Simplicity & Clarity
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              In a world that often feels cluttered, I value simplicity. To me,
              simplicity isn’t emptiness—it’s guidance, calm, and focus. I aim
              to remove what distracts, so what matters can speak clearly,
              quietly, and confidently.
            </p>
          </div>

          {/* Impact */}
          <div className="shadow-md rounded-xl p-6 border-l-4 border-purple-500">
            <h3 className="text-2xl font-semibold text-purple-700 mb-3">
              Impact & Connection
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Technology, at its heart, is a bridge. What I build isn’t just
              tools— it’s connections between people, ideas, and possibilities.
              Impact is not measured in trends, but in how deeply something
              serves and lasts.
            </p>
          </div>
        </div>

        <div className="mt-8 text-right">
          <Link
            href="/projects"
            className="inline-flex items-center text-indigo-600 font-medium group hover:text-indigo-800"
          >
            Explore my projects
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </section>
  );
}
