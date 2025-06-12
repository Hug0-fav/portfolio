import Link from "next/link";

function Navigation() {
  return (
    <nav className="text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/projects"
            className="hover:text-blue-500 transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
