import { HardHat, ClipboardList, ShieldCheck } from "lucide-react";
import Image from "next/image";
export default function HeroSore() {
    return (
        <section className="py-16 max-w-6xl mx-auto px-6 bg-transparent z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-medium text-[#2C3E50] leading-[1.2] mb-4 ">
                        Evaluasi Keselamatan Kerja Perusahaan di Seluruh Indonesia
                    </h1>
                    <p className="text-[#6B7280] text-base leading-relaxed max-w-md">
                        Berikan penilaian untuk perusahaan terkait K3 di sekitar Anda dan lihat
                        peringkat perusahaan paling aman se-Indonesia.
                    </p>
                </div>
            </div>
        </section>
    );
}
