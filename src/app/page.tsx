import Navbar from "../components/ui/Navbar";
import Hero from "../sections/Hero";
import FeaturedProject from "../sections/FeaturedProject";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Navbar />
     
      <Hero />
       <About />
       <Skills />
      <FeaturedProject />
      
      <Contact />
      <Footer />
    
    </main>
  );
}