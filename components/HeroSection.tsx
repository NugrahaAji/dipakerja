import { HardHat, ClipboardList, ShieldCheck } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] leading-snug mb-4">
                        Evaluasi Keselamatan Kerja
                        <br />
                        <span className="text-[#2F7E79]">Perusahaan di Seluruh Indonesia</span>
                    </h1>
                    <p className="text-[#6B7280] text-base leading-relaxed max-w-md">
                        Berikan penilaian untuk perusahaan terkait K3 di sekitar Anda dan lihat
                        peringkat perusahaan paling aman se-Indonesia.
                    </p>
                </div>

                {/* Right – Illustration card */}
                <div className="flex justify-center md:justify-end">
                    <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm overflow-hidden">
                        {/* Gradient illustration area */}
                        <div className="bg-gradient-to-br from-[#dce8f5] via-[#c8ddf0] to-[#b5cfec] h-56 flex items-center justify-center gap-6 px-8 relative">
                            {/* Stars decoration */}
                            <div className="absolute top-4 right-6 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                                    </svg>
                                ))}
                            </div>

                            {/* Helmet */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-md flex items-center justify-center">
                                    <HardHat className="w-9 h-9 text-white" />
                                </div>
                            </div>

                            {/* Clipboard */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-20 h-24 rounded-2xl bg-white shadow-md flex flex-col items-center justify-center gap-2 px-3">
                                    <ClipboardList className="w-8 h-8 text-[#5B7FA3]" />
                                    {/* Fake checklist lines */}
                                    <div className="w-full space-y-1">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="flex items-center gap-1">
                                                <div className="w-2 h-2 rounded-full bg-[#2E9F87]" />
                                                <div className="h-1.5 rounded-full bg-[#E5E7EB] flex-1" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Shield */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2F7E79] to-[#5B7FA3] shadow-md flex items-center justify-center">
                                    <ShieldCheck className="w-9 h-9 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Card footer */}
                        <div className="px-6 py-4 bg-white">
                            <p className="text-xs text-[#6B7280] text-center font-medium">
                                Platform Evaluasi K3 Terpercaya
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
