import Navbar from "../components/ui/Navbar";
import Hero from "../sections/Hero";
import FeaturedProject from "../sections/FeaturedProject";
import Stats from "../sections/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Stats />
    </main>
  );
}