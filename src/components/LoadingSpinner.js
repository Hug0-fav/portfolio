"use client";

export default function LoadingSpinner({ text = "Loading" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      {/* Spinner */}
      <div className="h-10 w-10 rounded-full border-2 border-gray-600 border-t-indigo-500 animate-spin" />

      {/* Optional text */}
      <p className="text-sm text-gray-400 tracking-wide">{text}</p>
    </div>
  );
}
