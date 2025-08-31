import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-20 border-t bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* Brand / Intro */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Ugochukwu Favour
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Let’s build something great together.
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a
              href="https://github.com/Hug0-fav"
              target="_blank"
              className="hover:text-blue-600"
            >
              <Github />
            </a>
            <a
              href="https://twitter.com/FavoHugo"
              target="_blank"
              className="hover:text-blue-600"
            >
              <Twitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-600">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100">
            Get in Touch
          </h3>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Need advice? Have a question? Let me know, I’ll be happy to assist!
          </p>
          <a
            href="mailto:favourugochukwu548@gmail.com"
            className="flex items-center justify-center md:justify-start mt-3 hover:text-blue-600"
          >
            <Mail className="w-4 h-4" />
            <span className="ml-2">favourugochukwu548@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Ugochukwu Chidubem Favour. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
