import HeroSection from "@/components/Pelaporan";
import LegalSection from "@/components/Hukum";
import ReportTable from "@/components/TabelReport";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <HeroSection />
      <LegalSection />
      <ReportTable />
    </main>
  );
}