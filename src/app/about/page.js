"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-slate-100 mb-4">
          Hey, I&apos;m Favor 👋
        </h1>

        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-slate-300">
          <Image
            src="/fiverr.jpg"
            alt="My profile photo"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-xl mx-auto">
          I&apos;m Favor, a frontend developer with long-term ambitions in
          full-stack innovation. My journey began with pure curiosity—tinkering
          with HTML and CSS, making the web just a little more beautiful one div
          at a time. Over time, that curiosity turned into a serious passion and
          a commitment to solving real-world problems with clean, intuitive
          interfaces.
        </p>

        <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-xl mx-auto">
          These days, I&apos;m building with tools like React, Next.js,
          Supabase, and Tailwind CSS—crafting experiences that are not only
          functional but also fun. I&apos;m especially proud of learning how to
          use the GitHub API (late to the party, I know 😅), which now powers a
          dynamic portfolio that updates itself like a personal assistant.
        </p>

        <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-xl mx-auto">
          I&apos;m not just coding for today—I&apos;m building a career around
          meaningful creation. Whether it&apos;s collaborating with teams,
          launching solo projects, or mentoring others, I see development as
          both a craft and a long game. Always learning. Always iterating.
        </p>

        <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-xl mx-auto italic">
          Off the screen, I&apos;m often thinking about what to build next or
          helping other creatives bring their digital ideas to life. Clean code,
          delightful UIs, and long-term impact—those are my goals.
        </p>

        <Link
          href="mailto:favourugochukwu548@gmail.com"
          className="inline-block bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Hire Me
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold text-slate-200 mb-4 text-center">
          Tools & Tech I Work With
        </h2>
        <ul className="flex flex-wrap gap-4 justify-center text-sm text-slate-600">
          <li className="bg-slate-100 px-3 py-1 rounded-md">React</li>
          <li className="bg-slate-100 px-3 py-1 rounded-md">Next.js</li>
          <li className="bg-slate-100 px-3 py-1 rounded-md">Supabase</li>
          <li className="bg-slate-100 px-3 py-1 rounded-md">
            Styled-Components
          </li>
          <li className="bg-slate-100 px-3 py-1 rounded-md">Tailwind CSS</li>
          <li className="bg-slate-100 px-3 py-1 rounded-md">Express.js</li>
          <li className="bg-slate-100 px-3 py-1 rounded-md">Node.js</li>
        </ul>
      </section>
    </main>
  );
}
