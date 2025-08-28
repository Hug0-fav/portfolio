"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectData from "./ProjectData";

export default function FeaturedProjects() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch("/api/github/repos");
      const data = await res.json();

      const enriched = data
        .filter((repo) =>
          ["store", "travel-list", "Fast-React-Pizza-Co"].includes(repo.name)
        )
        .map((repo) => {
          const match = ProjectData.find((p) => p.name === repo.name);
          return {
            ...repo,
            image: match?.image?.replace(/^public\//, "/") || null,
            live: match?.live || null,
          };
        });

      setFeatured(enriched);
    };

    fetchRepos();
  }, []);

  return (
    <section className="mt-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold text-slate-100 mb-6">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((repo) => (
          <div
            key={repo.id}
            className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white"
          >
            <div className="relative w-full h-32 bg-slate-100">
              {repo.image ? (
                <Image
                  src={repo.image}
                  alt={`${repo.name} screenshot`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                  No Screenshot
                </div>
              )}
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold text-slate-800 truncate">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {repo.name}
                </a>
              </h3>

              <p className="text-slate-600 text-xs mt-1 line-clamp-2">
                {repo.description || "No description available."}
              </p>

              {repo.live && (
                <a
                  href={repo.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 text-xs hover:underline"
                >
                  🌐 View Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-block bg-slate-800 text-white text-sm px-4 py-2 rounded-md hover:bg-slate-700 transition"
        >
          See All Projects →
        </Link>
      </div>
    </section>
  );
}
