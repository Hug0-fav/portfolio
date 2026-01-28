"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🕒 Reading time calculator
  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const words = text?.trim().split(/\s+/).length || 0;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      let { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("id", { ascending: false });
      if (error) console.error(error);
      else setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-20 space-y-6">
  {loading ? (
    <LoadingSpinner text="Loading posts..." />
  ) : posts.length > 0 ? (
    posts.map((post) => (
      <div
        key={post.id}
        className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 hover:bg-slate-800 transition shadow-sm"
      >
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-100 mb-1">
          {post.title}
        </h2>

        {/* Date & Read time */}
        <p className="text-sm text-gray-400 mb-3">
          {new Date(post.created_at).toLocaleDateString()} •{" "}
          {calculateReadTime(post.content)}
        </p>

        {/* Preview (this leads emotionally) */}
        <p className="text-gray-200 leading-relaxed mb-4 line-clamp-3">
          {post.content}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.category?.split(",").map((cat, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs uppercase tracking-wide rounded bg-slate-700/60 text-slate-300"
            >
              {cat.trim()}
            </span>
          ))}
        </div>

        {/* Read more */}
        <Link
          href={`/blog/${post.id}`}
          className="inline-block text-indigo-400 text-sm font-medium hover:text-indigo-300 transition"
        >
          Read more →
        </Link>
      </div>
    ))
  ) : (
    <p className="text-gray-400">No posts yet.</p>
  )}
</div>

  );
}
