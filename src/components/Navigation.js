"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-lg font-bold text-gray-900 dark:text-gray-100"
        >
          Ugochukwu Favour
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-gray-700 dark:text-gray-300">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Projects
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
