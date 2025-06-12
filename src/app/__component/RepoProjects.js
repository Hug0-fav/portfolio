"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ProjectData from "./ProjectData";
import Spinner from "./Spinner";

export default function RepoProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // This component fetches GitHub repositories and displays them with optional screenshots and live links.
  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch("/api/github/repos");
      const data = await res.json();

      const enrichedRepos = data.map((repo) => {
        const match = ProjectData.find((p) => p.name === repo.name);
        return {
          ...repo,
          image: match?.image || null,
          live: match?.live || null,
        };
      });

      setRepos(enrichedRepos);
    };

    fetchRepos();
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="rounded-xl shadow-md border border-gray-200 bg-white transition hover:shadow-lg"
        >
          <div className="relative w-full h-48 bg-gray-100 overflow-hidden rounded-t-xl">
            {repo.image ? (
              <Image
                src={repo.image}
                alt={`${repo.name} screenshot`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                No Screenshot
              </div>
            )}
          </div>

          <div className="p-5">
            <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              {repo.description || "No description available."}
            </p>

            {repo.live && (
              <a
                href={repo.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
              >
                🌐 View Live Site
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
