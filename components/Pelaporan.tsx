import { ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 leading-tight tracking-tight">
            Pelaporan Hasil MCU Tahunan
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-lg">
            Sistem pelaporan pemeriksaan kesehatan kerja perusahaan secara 
            terintegrasi, transparan, dan profesional setiap tahunnya.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-md transition">
              Buat Laporan
            </button>

            <button className="border border-slate-300 hover:border-teal-600 text-slate-400 hover:text-teal-600 px-6 py-3 rounded-xl text-sm font-medium transition">
              Pelajari Regulasi 
            </button>
          </div>
        </div>

        {/* Icon Card */}
        <div className="flex justify-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
            <ShieldCheck size={120} className="text-teal-600" />
          </div>
        </div>
      </div>
    </section>
  );
}