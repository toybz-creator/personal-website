import Navbar from "@/components/Navbar";
import LiquidCursor from "@/components/LiquidCursor";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";
import GallerySection from "@/components/sections/GallerySection";
import InterestsSection from "@/components/sections/InterestsSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LiquidCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <GallerySection />
        <InterestsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
