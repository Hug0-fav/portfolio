"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, Code } from "lucide-react";
import { motion } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewFilter, setViewFilter] = useState("all");
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
      (repo) => viewFilter === "all" || (viewFilter === "forks" && repo.fork),
    )
    .filter(
      (repo) => languageFilter === "all" || repo.language === languageFilter,
    )
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  const languages = [
    "all",
    ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean))),
  ];

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n) + "..." : str;

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-gray-100 px-6 md:px-20 py-16">
      <section className="max-w-6xl mx-auto">
        {/* Main Text */}
        <p className="text-2xl md:text-2xl font-medium text-gray-500 mb-8 leading-relaxed">
          Explore my GitHub projects.
        </p>

        {/* Filter + Refresh (right aligned) */}
        <div className="flex justify-end mb-8 gap-4 items-center">
          <button
            onClick={fetchRepos}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Refresh
          </button>

          <div className="flex gap-4 bg-[#1b1b1b] p-3 rounded-lg shadow-sm">
            {/* View Buttons */}
            <div className="flex gap-2">
              {["all", "forks"].map((f) => (
                <button
                  key={f}
                  onClick={() => setViewFilter(f)}
                  className={`pb-1 relative font-medium ${
                    viewFilter === f ? "text-indigo-400" : "text-gray-400"
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                  {viewFilter === f && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Language Dropdown */}
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

        {/* Repo Grid */}
        {loading ? (
          <LoadingSpinner text="Loading repositories..." />
        ) : filteredRepos.length === 0 ? (
          <p>No repositories found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-lg transition"
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
                    `Check out the ${repo.name} project on GitHub.`}
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

                <a
                  href={repo.homepage || repo.html_url}
                  target="_blank"
                  className={`inline-block mt-4 px-3 py-1 text-sm rounded font-medium transition ${
                    repo.homepage
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-600 text-gray-200 hover:bg-gray-700"
                  }`}
                >
                  {repo.homepage ? "View Live" : "View Code"}
                </a>

                <p className="text-gray-500 text-xs mt-2">
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
