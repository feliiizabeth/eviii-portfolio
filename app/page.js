import LandingSection from "./components/LandingSection";

export default function Home() {
  return (
    // Main container
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* Landing container */}
      <div className="container mx-auto px-12 py-4">
        <LandingSection />
      </div>
    </main>
  );
}
