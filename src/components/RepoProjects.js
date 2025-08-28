"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, Code } from "lucide-react";

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewFilter, setViewFilter] = useState("all"); // "all" or "forks"
  const [languageFilter, setLanguageFilter] = useState("all");

  const fetchRepos = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/github/repos");
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setRepos(data);
    } catch (err) {
      console.error("Error fetching repos:", err);
      setRepos([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const filteredRepos = repos
    .filter(
      (repo) => viewFilter === "all" || (viewFilter === "forks" && repo.fork)
    )
    .filter(
      (repo) =>
        languageFilter === "all" ||
        (repo.language && repo.language === languageFilter)
    )
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  const languages = [
    "all",
    ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean))),
  ];

  // Helper to truncate text
  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n) + "..." : str;

  return (
    <main className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center text-gray-100 px-6 md:px-20 py-16">
      <section className="max-w-5xl mx-auto">
        {/* Header with Refresh */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-500 mb-4 md:mb-0">
            Projects
          </h1>
          <button
            onClick={fetchRepos}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Refresh Data
          </button>
        </div>
        <p className="text-gray-300 mb-8">
          A collection of my work from GitHub, showcasing various technologies
          and solutions I&apos;ve built over time.
        </p>

        {/* Filter Section */}
        <div className="sticky top-16 bg-[url('/background.jpg')] z-10 flex flex-wrap items-center gap-6 mb-8 p-4 rounded-lg">
          {/* View Filter */}
          <div className="flex gap-4">
            <button
              onClick={() => setViewFilter("all")}
              className={`pb-1 ${
                viewFilter === "all"
                  ? "border-b-2 border-indigo-500"
                  : "border-b-2 border-transparent"
              } transition`}
            >
              All
            </button>
            <button
              onClick={() => setViewFilter("forks")}
              className={`pb-1 ${
                viewFilter === "forks"
                  ? "border-b-2 border-indigo-500"
                  : "border-b-2 border-transparent"
              } transition`}
            >
              Forks
            </button>
          </div>

          {/* Language Dropdown */}
          <div>
            <select
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
              className="px-2 py-1 rounded bg-gray-800 text-gray-100"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Repos Grid */}
        {loading ? (
          <p>Loading repositories...</p>
        ) : filteredRepos.length === 0 ? (
          <p>No repositories found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <div
                key={repo.id}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="text-indigo-400 font-semibold text-lg hover:underline"
                >
                  {repo.name}
                </a>
                <p className="text-gray-400 mt-2">
                  {truncate(repo.description, 100) ||
                    "No description available"}
                </p>
                <div className="flex flex-wrap gap-3 mt-4 text-sm">
                  {repo.language && (
                    <span className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded">
                      <Code className="w-4 h-4" /> {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded">
                    <Star className="w-4 h-4" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded">
                    <GitFork className="w-4 h-4" /> {repo.forks_count}
                  </span>
                </div>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    className="inline-block mt-2 px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                    View Live
                  </a>
                )}

                <p className="text-gray-500 text-xs mt-2">
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
