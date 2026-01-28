"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AIAnimatedHero from "./AIAnimatedHero";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Body() {
  return (
    <main className="bg-[#0d0d0d] text-gray-200">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#0d0d0d] to-[#111111] py-32 px-6 md:px-12 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
        >
          I build <span className="text-cyan-400">scalable</span>,
          production-ready <br /> web applications
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          I’m Favour — a frontend developer specializing in React & Next.js. I
          create interfaces that are clean, responsive, and optimized for
          performance.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-md hover:bg-cyan-600 transition"
          >
            View Projects
          </Link>

          <Link
            href="https://github.com/yourgithub"
            target="_blank"
            className="px-8 py-3 border border-gray-600 rounded-md hover:bg-gray-800 transition"
          >
            GitHub
          </Link>
        </motion.div>

        {/* AI Animated Hero */}
        <AIAnimatedHero />
      </section>

      {/* EXPERIENCE & WORK */}
      <section className="py-20 px-6 md:px-12 bg-[#111111] relative">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-16 text-center text-white"
        >
          Experience & Work
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 md:left-10 top-0 bottom-0 w-1 bg-gray-700 opacity-30"></div>

          <div className="space-y-16 ml-10 md:ml-16">
            <ExperienceItem
              title="Freelance Frontend Developer"
              period="2023 — Present"
              tech={["React", "Next.js", "Tailwind", "Supabase"]}
              description="Delivered multiple responsive web applications for clients, transforming designs into polished, production-ready interfaces. Improved user engagement and performance by optimizing component structure and load times."
            />

            <ExperienceItem
              title="E-commerce Platform"
              period="Client Project"
              tech={["React", "Next.js", "Supabase", "Stripe / Paystack"]}
              description="Built a full-stack online store with secure authentication, checkout, and admin dashboard. Focused on scalability, clean UI, and real-world workflows for product management and order processing."
            />

            <ExperienceItem
              title="Ask a Nurse"
              period="Client Project"
              tech={["React", "Next.js", "Supabase"]}
              description="Developed a client blogging platform with authentication, real-time comments, and like/dislike system. Implemented a fully responsive design, ensuring seamless user experience and engagement."
            />

            <ExperienceItem
              title="Graphic Designer Portfolio"
              period="Client Project"
              tech={["React", "Next.js", "Supabase"]}
              description="Created a portfolio system with admin-only content management. Enabled categorized uploads, streamlined image management, and delivered a clean, professional showcase for creative works."
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#0d0d0d] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to see my work?
        </motion.h2>

        {/* <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          I build scalable, responsive, and production-ready web applications.
          Explore my projects and see how I turn designs into reliable digital
          experiences.
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/projects"
            className="px-10 py-4 bg-cyan-500 text-black font-semibold rounded-md hover:bg-cyan-600 transition text-lg"
          >
            View Projects
          </Link>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="py-28 px-6 md:px-12 bg-[#111111]">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-16 text-center text-white"
        >
          Skills & Tools
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <SkillBlock
            title="Frontend"
            items={["React", "Next.js", "Tailwind CSS", "Styled Components"]}
          />
          <SkillBlock
            title="Backend"
            items={[
              "Supabase",
              "API Integration",
              "Learning: Node.js & Express",
            ]}
          />
          <SkillBlock
            title="Tools"
            items={[
              "Git & Version Control",
              "Vercel Deployment",
              "Learning: Stripe / Paystack",
            ]}
          />
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */
function ExperienceItem({ title, period, description, tech = [] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-[#1a1a1a] p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
    >
      {/* Timeline Dot */}
      <span className="absolute -left-8 md:-left-10 top-8 w-4 h-4 bg-cyan-400 rounded-full border-2 border-gray-700"></span>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          {title}
        </h3>
        <span className="text-sm md:text-base text-gray-400 mt-2 md:mt-0">
          {period}
        </span>
      </div>

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tech.map((t) => (
            <span
              key={t}
              className="text-cyan-400 text-xs md:text-sm bg-[#0d0d0d] px-2 py-1 rounded-md border border-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function SkillBlock({ title, items }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
    >
      <h4 className="font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-2 text-sm md:text-base text-gray-300">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">•</span> {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
