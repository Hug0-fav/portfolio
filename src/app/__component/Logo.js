import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <span className="text-xl font-semibold">Favour</span>
    </Link>
  );
}

export default Logo;
