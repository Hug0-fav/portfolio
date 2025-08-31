"use client";

import Link from "next/link";

export default function Body() {
  return (
    <main className="bg-[#0d0d0d] text-gray-200 px-8 py-16 max-w-5xl mx-auto mt-20">
      {/* Hero Section */}
      <section className="mb-15 text-left">
        <h1 className="text-4xl font-bold mb-2">Hey, I’m Favour 👋</h1>
        <p className="text-lg text-gray-400 mb-4">
          Frontend Developer | React & Next.js Enthusiast
        </p>
        <p className="text-gray-400 mb-4 max-w-2xl">
          I design and build modern, responsive web applications with a focus on
          clean UI, seamless user experience, and scalable solutions. Passionate
          about creating digital products that are both beautiful and
          functional.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="px-5 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition"
          >
            Read My Blog
          </Link>
          <Link
            href="https://github.com/yourgithub"
            target="_blank"
            className="px-5 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition"
          >
            View GitHub
          </Link>
          {/* <Link
            href="/resume.pdf"
            target="_blank"
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Download Resume
          </Link> */}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-8 text-gray-300">
          <div>
            <h3 className="font-medium text-lg">
              Freelance Web Developer{" "}
              <span className="text-sm text-gray-500">(2023 – Present)</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl">
              Developed multiple client-facing applications and personal
              projects using React, Next.js, and Supabase. Delivered clean,
              responsive interfaces optimized for performance across devices.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">
              E-commerce Platform{" "}
              <span className="text-sm text-gray-500">(Portfolio Project)</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl">
              Built a full-stack online store with authentication,
              Stripe/Paystack integration, and an admin dashboard. Implemented
              secure checkout, product management, and order history features.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">
              Ask a Nurse
              <span className="text-sm text-gray-500">(Client Project)</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl">
              Developed a custom blogging platform for a client, featuring
              Supabase authentication, a comment system, and like/dislike
              functionality. Implemented a fully responsive design and ensured
              seamless real-time updates for posts, comments, and user
              interactions to enhance engagement.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">
              Graphic Designer Portfolio{" "}
              <span className="text-sm text-gray-500">(Client Project)</span>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-400">
          {/* Frontend */}
          <div>
            <h4 className="font-medium text-gray-200 mb-2">Frontend</h4>
            <ul className="space-y-1 text-sm">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Styled-Components</li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h4 className="font-medium text-gray-200 mb-2">Backend</h4>
            <ul className="space-y-1 text-sm">
              <li>Supabase</li>
              <li>API Integration</li>
              <li className="italic text-gray-500">
                Learning: Node.js & Express.js
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-medium text-gray-200 mb-2">Tools</h4>
            <ul className="space-y-1 text-sm">
              <li>Git & Version Control</li>
              <li>Deployment (Vercel)</li>
              <li className="italic text-gray-500">
                Learning: Stripe / Paystack
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
