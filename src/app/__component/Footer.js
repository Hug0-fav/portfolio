import { Github, Mail, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-20 p-6 border-t text-sm text-center text-gray-500">
      <p>© {new Date().getFullYear()} Hugo. Built with 💻 & ☕ using Next.js</p>
      <div className="mt-2 space-x-4 flex justify-center">
        <a
          href="https://github.com/hug0-fav"
          className="hover:text-blue-600"
          target="_blank"
        >
          <Github />
        </a>
        <a
          href="https://twitter.com/@FavoHugo"
          className="hover:text-blue-600"
          target="_blank"
        >
          <Twitter />
        </a>
        <a href="favourugochukwu548@gmail.com" className="hover:text-blue-600">
          <Mail />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
