import "@/app/__styles/globals.css";
import HomeHero from "./__component/HomeHero";
import HomeAbout from "./__component/HomeAbout";
import FeaturedProjects from "./__component/FeaturedProject";
export default function Page() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <FeaturedProjects />
    </main>
  );
}
