import NavBar from "./components/NavBar";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    // Main container
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />

      {/* Page content container */}
      <div className="container mt-24 mx-auto px-12 py-4">
        <LandingSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
