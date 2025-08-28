"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

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
    <div className="max-w-2xl mx-auto mt-20 space-y-6">
      {loading ? (
        <p className="text-gray-400">Loading posts...</p>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="p-6 rounded-lg bg-gray-900 border border-gray-700 hover:bg-gray-800 transition shadow"
          >
            {/* Title */}
            <h2 className="text-2xl font-semibold text-white mb-2">
              {post.title}
            </h2>

            {/* Date & Read time */}
            <p className="text-sm text-gray-400 mb-2">
              {new Date(post.created_at).toLocaleDateString()} •{" "}
              {calculateReadTime(post.content)}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.category?.split(",").map((cat, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-medium rounded bg-gray-800 text-gray-300"
                >
                  {cat.trim()}
                </span>
              ))}
            </div>

            {/* Preview */}
            <p className="text-gray-300 mb-4 line-clamp-3">{post.content}</p>

            {/* Read more */}
            <Link
              href={`/blog/${post.id}`}
              className="text-indigo-400 hover:underline text-sm"
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
