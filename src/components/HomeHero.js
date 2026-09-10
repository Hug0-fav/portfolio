"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AIAnimatedHero from "./AIAnimatedHero";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "Synlo MVP",
    role: "Frontend Lead",
    period: "MVP Project",
    tech: ["Next.js", "React", "Tailwind CSS"],
    description:
      "Led frontend development for a collaborative MVP, helping structure the frontend architecture, build reusable components, integrate APIs, and deliver responsive user experiences.",
  },
  {
    title: "School Management SaaS",
    role: "Backend Development",
    period: "Personal Project",
    tech: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Paystack"],
    description:
      "Built a multi-tenant school management backend with role-based access control, school isolation, academic sessions, attendance, assessments, fees, invoices, and payment processing.",
  },
  {
    title: "E-Commerce Platform",
    role: "Full-Stack Project",
    period: "Client Project",
    tech: ["Next.js", "React", "Supabase", "Paystack"],
    description:
      "Built an e-commerce platform with authentication, product management, cart functionality, checkout, order processing, and an admin dashboard.",
  },
  {
    title: "Ask a Nurse",
    role: "Frontend Development",
    period: "Client Project",
    tech: ["Next.js", "React", "Supabase"],
    description:
      "Developed a responsive content platform with authentication, admin-controlled publishing, real-time comments, and interactive engagement features.",
  },
  {
    title: "School Library REST API",
    role: "Backend Development",
    period: "Personal Project",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    description:
      "Developed a REST API for managing books, authors, students, library attendants, borrowing, returns, and overdue records.",
  },
  {
    title: "E-Commerce Backend",
    role: "Backend Development",
    period: "Personal Project",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "Paystack"],
    description:
      "Built a backend supporting authentication, products, carts, orders, admin operations, and Paystack payment integration.",
  },
];

const skills = {
  frontend: [
    "React",
    "Next.js",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Role-Based Access Control",
    "API Integration",
  ],
  databases: [
    "PostgreSQL",
    "Prisma ORM",
    "MongoDB",
    "Mongoose",
    "Supabase",
  ],
  tools: [
    "Git & GitHub",
    "Postman",
    "Vercel",
    "VS Code",
    "Paystack",
    "Joi",
  ],
};

export default function Body() {
  return (
    <main className="bg-[#0d0d0d] text-gray-200 overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#0d0d0d] to-[#111111] px-6 py-24 md:px-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-4xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="text-cyan-400 font-medium mb-5 tracking-wide"
            >
              Frontend Developer • React • Next.js
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-7 leading-[1.08] text-white"
            >
              I build modern web experiences that{" "}
              <span className="text-cyan-400">work.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
            >
              I&apos;m Favour, a frontend developer specializing in React and
              Next.js. I build clean, responsive interfaces and have backend
              development experience with Node.js, Express, databases, and
              real-world API integrations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/projects"
                className="px-7 py-3.5 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
              >
                View My Work
              </Link>

              <Link
                href="https://github.com/hugo-fav"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-gray-700 text-white font-medium rounded-lg hover:bg-white/5 hover:border-gray-500 transition-all"
              >
                GitHub
              </Link>
            </motion.div>
          </div>

          {/* AI Animated Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <AIAnimatedHero />
          </motion.div>
        </div>
      </section>

      {/* ================= SELECTED WORK ================= */}
      <section className="py-24 px-6 md:px-12 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-3">
              Selected Work
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Projects built to solve real problems.
            </h2>

            <p className="text-gray-400 leading-relaxed">
              A selection of frontend and backend projects showcasing how I
              approach interfaces, APIs, authentication, databases, and
              real-world application workflows.
            </p>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-24 px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-3">
              Skills & Tools
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              The tools I use to build.
            </h2>

            <p className="text-gray-400 leading-relaxed">
              My strongest area is frontend development, while my backend
              experience allows me to understand and build the systems behind
              the interfaces I create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillBlock
              title="Frontend"
              description="Building responsive, component-driven interfaces."
              items={skills.frontend}
            />

            <SkillBlock
              title="Backend"
              description="Building APIs, authentication systems, and application logic."
              items={skills.backend}
            />

            <SkillBlock
              title="Databases"
              description="Working with both SQL and NoSQL data systems."
              items={skills.databases}
            />

            <SkillBlock
              title="Tools & Integrations"
              description="Tools and services used throughout development."
              items={skills.tools}
            />
          </div>
        </div>
      </section>

      {/* ================= HOW I BUILD ================= */}
      <section className="py-24 px-6 md:px-12 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-3">
              My Approach
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              How I build
            </h2>

            <p className="text-gray-400 leading-relaxed">
              I focus on creating applications that are not only visually
              polished, but also structured to be maintained and extended.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ApproachCard
              number="01"
              title="Clean Architecture"
              description="I structure applications around reusable components, clear responsibilities, and maintainable code."
            />

            <ApproachCard
              number="02"
              title="Real-World Functionality"
              description="I go beyond static interfaces by implementing authentication, APIs, databases, dashboards, and application workflows."
            />

            <ApproachCard
              number="03"
              title="Continuous Improvement"
              description="I continuously improve my skills by building increasingly complex projects and learning better development practices."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-28 px-6 md:px-12 bg-[#0d0d0d] text-center">
        <div className="max-w-3xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4"
          >
            Explore More
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Want to see what I&apos;ve built?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 text-lg leading-relaxed mb-10"
          >
            Explore my projects to see the interfaces, systems, and
            applications I&apos;ve worked on.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="inline-flex px-8 py-4 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Explore Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ================= PROJECT CARD ================= */

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-cyan-400/20 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {project.title}
            </h3>

            <span className="text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/10 px-2.5 py-1 rounded-full">
              {project.role}
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-4">{project.period}</p>

          <p className="text-gray-400 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="text-xs text-gray-300 bg-[#0d0d0d] border border-gray-800 px-3 py-1.5 rounded-md"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ================= SKILL BLOCK ================= */

function SkillBlock({ title, description, items }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-7 hover:border-cyan-400/20 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      <p className="text-sm text-gray-500 mb-6">{description}</p>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm text-gray-300 bg-[#0d0d0d] border border-gray-800 px-3 py-2 rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ================= APPROACH CARD ================= */

function ApproachCard({ number, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-7 hover:border-cyan-400/20 transition-all duration-300"
    >
      <span className="text-cyan-400 text-sm font-semibold">{number}</span>

      <h3 className="text-xl font-semibold text-white mt-5 mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </motion.div>
  );
}