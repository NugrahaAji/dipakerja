import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RatingSection from "@/components/RatingSection";
import TopCompanySection from "@/components/TopCompanySection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <HeroSection />
        <RatingSection />
        <TopCompanySection />
      </div>
    </main>
  );
}
