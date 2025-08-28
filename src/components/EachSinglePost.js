"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function EachSinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      let { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();
      if (error) console.error(error);
      else setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading)
    return <p className="text-gray-400 text-center py-10">Loading...</p>;
  if (!post)
    return <p className="text-gray-400 text-center py-10">Post not found</p>;

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 bg-gray-900 text-gray-200 rounded-xl shadow-xl">
      {/* Back to posts */}
      <Link
        href="/blog"
        className="inline-block mb-10 text-xl font-bold text-blue-400 hover:text-blue-300"
      >
        ← Back to Posts
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-white mb-6 break-words">
        {post.title}
      </h1>

      {/* Date */}
      <p className="text-sm text-gray-400 mb-6">
        {new Date(post.created_at).toLocaleDateString()}
      </p>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {post.category?.split(",").map((cat, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300"
          >
            {cat.trim()}
          </span>
        ))}
      </div>

      {/* Full content */}
      <div className="prose prose-invert max-w-none leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
    </article>
  );
}
