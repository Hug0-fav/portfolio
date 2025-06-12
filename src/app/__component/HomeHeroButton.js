import Link from "next/link";

function HomeHeroButton() {
  return (
    <div className="flex text-slate-400 gap-4 mt-4">
      <Link href="/about">
        <button className="bg-slate-700 hover:bg-slate-800 text-white font-semibold px-4 py-2 rounded-xl">
          Contact Me
        </button>
      </Link>
    </div>
  );
}

export default HomeHeroButton;
