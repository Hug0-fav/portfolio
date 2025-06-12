import Image from "next/image";
import HomeHeroButton from "./HomeHeroButton";

const HomeIntro = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-8 sm:py-12 gap-6 sm:gap-10 max-w-7xl mx-auto">
      <div className="text-left max-w-xl">
        <h1 className="text-slate-100 text-3xl sm:text-4xl font-bold mb-2">
          Favour Ugochukwu
        </h1>

        <span className="text-slate-300 text-lg block mb-2">
          Frontend Developer
        </span>

        <p className="text-slate-400 text-base leading-relaxed">
          I build web applications with React and design interfaces using
          graphic design tools. I focus on clean, responsive, and user-centered
          design.
        </p>

        {/* Button Under Text */}
        <div className="mt-4">
          <HomeHeroButton />
        </div>
      </div>

      <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden border-4 border-slate-700 shadow-lg">
        <Image
          src="/fiverr.jpg"
          alt="profile"
          fill
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HomeIntro;
