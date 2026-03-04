import Navbar from "@/components/Navbar";
import HeroSore from "@/components/HeroSore";
import RatingSection from "@/components/RatingSection";
import TopCompanySection from "@/components/TopCompanySection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex flex-row md:flex-col items-center bg-[#e6eded] relative">
        <HeroSore/>
        <Image
          src="/soreHero.png"
          alt="SORE Illustration"
          width={400}
          height={300}
          className="h-full w-auto object-cover absolute bottom-0 right-0 pointer-events-none opacity-0 md:opacity-100"
        />
      </div>
        <RatingSection />
        <TopCompanySection />
    </main>
  );
}
