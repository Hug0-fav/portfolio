"use client";

import Link from "next/link";

export default function Body() {
  return (
    <main className="bg-[#0d0d0d] text-gray-200 px-8 py-16 max-w-5xl mx-auto mt-20">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold mb-4">Hey, I’m Favour 👋</h1>
        <p className="text-lg text-gray-400 mb-6 max-w-2xl">
          Frontend Developer | React & Next.js Enthusiast
          <br />I design and build modern, responsive web applications with a
          focus on clean UI, seamless user experience, and scalable solutions.
          Passionate about creating digital products that are both beautiful and
          functional.
        </p>

        <div className="flex gap-4">
          <Link
            href="/blog"
            className="px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition"
          >
            Read My Blog
          </Link>
          <Link
            href="https://github.com/yourgithub"
            target="_blank"
            className="px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition"
          >
            View GitHub
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>

        <div className="space-y-8 text-gray-300">
          <div>
            <h3 className="font-medium">
              Freelance Web Developer (2023 – Present)
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl">
              Developed multiple client-facing applications and personal
              projects using React, Next.js, and Supabase. Delivered clean,
              responsive interfaces optimized for performance across devices.
            </p>
          </div>

          <div>
            <h3 className="font-medium">
              E-commerce Platform (Portfolio Project)
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl">
              Built a full-stack online store with authentication,
              Stripe/Paystack integration, and an admin dashboard. Implemented
              secure checkout, product management, and order history features.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Personal Blog (Jennie’s Blog)</h3>
            <p className="text-gray-400 text-sm max-w-2xl">
              Developed a modern blogging platform with Supabase authentication,
              comment system, and like/dislike functionality. Implemented
              responsive design, dark/light mode, and real-time updates for user
              interactions.
            </p>
          </div>

          <div>
            <h3 className="font-medium">
              Graphic Designer Portfolio (Client Project)
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl">
              Created a portfolio website with Supabase for content management.
              Enabled admin-only uploads for categorized images, ensuring easy
              management and a professional showcase for creative works.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-400">
          <ul className="space-y-2">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Styled-Components</li>
          </ul>
          <ul className="space-y-2">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Supabase</li>
            <li>API Integration</li>
          </ul>
          <ul className="space-y-2">
            <li>Git & Version Control</li>
            <li>Stripe/Paystack</li>
            <li>Deployment (Vercel)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
