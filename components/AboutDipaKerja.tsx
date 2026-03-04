"use client";

import { ShieldCheck, Target, Lightbulb, ScrollText, CheckCircle2, Blend } from "lucide-react";

export default function AboutDipaKerja() {
    return (
        <section className="py-8 max-w-6xl mx-auto space-y-6">

            {/* --- INTRO CARD --- */}
            <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E7EB]/50">
                <div>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f0faf9] text-[#2F7E79] font-medium text-xs border border-[#2F7E79]/20">
                        <Blend className="w-3 h-3" />
                        About us
                    </div>

                    <h1 className="text-2xl font-medium text-[#2C3E50] mb-5">
                        Membangun Budaya Aman Bersama DIPA KERJA
                    </h1>
                </div>

                <div className="space-y-4 text-sm text-[#6B7280] leading-relaxed max-w-4xl">
                    <p>
                        <strong className="text-[#2C3E50] font-medium">DIPA KERJA</strong> <em>(Digital Inspection &amp; Prevention of Accidents Kerja)</em> hadir sebagai solusi teknologi mutakhir untuk mendigitalisasi pelaporan, pemantauan, dan evaluasi Keselamatan dan Kesehatan Kerja (K3) di Indonesia.
                    </p>
                    <p>
                        Mengubah paradigma K3 dari sekadar kepatuhan menjadi budaya proaktif. Melalui pendekatan <em>data-driven safety system</em>, kami tidak hanya memfasilitasi transparansi, tetapi juga memberdayakan perusahaan untuk mengambil langkah preventif yang presisi. Kami percaya bahwa perlindungan tenaga kerja adalah investasi strategis untuk keberlanjutan masa depan bisnis.
                    </p>
                </div>

                {/* Ekosistem List */}
                <div className="mt-8 pt-8 border-t border-[#E5E7EB]">
                    <h3 className="text-lg font-medium text-[#2C3E50] mb-5 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#2F7E79]" />
                        Kapasitas Ekosistem Kami
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { title: "Pelaporan Responsif", desc: "Pencatatan insiden (KK/PAK) secara real-time dan terverifikasi." },
                            { title: "Evaluasi Komprehensif", desc: "Audit dan pemantauan implementasi K3 terstruktur di seluruh divisi." },
                            { title: "Kepatuhan Medis", desc: "Integrasi pemantauan Medical Check-Up (MCU) berkala pekerja." },
                            { title: "Indeks Keselamatan", desc: "Pemetaan skor K3 untuk mendorong persaingan sehat & akuntabilitas." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#2F7E79] transition-colors duration-200">
                                <CheckCircle2 className="w-4 h-4 text-[#2E9F87] mt-0.5 shrink-0" />
                                <div>
                                    <span className="block text-sm font-medium text-[#2C3E50] mb-1">{item.title}</span>
                                    <span className="block text-xs text-[#6B7280] leading-relaxed">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- VISI & MISI ROW --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Visi */}
                <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E7EB]/50">
                    <h2 className="text-lg font-medium text-[#2C3E50] mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-[#2F7E79]" />
                        Visi Kami
                    </h2>
                    <p className="text-sm text-[#6B7280] leading-relaxed italic">
                        &quot; Menjadi pionir transformasi digital K3 di Indonesia yang mewujudkan ekosistem kerja proaktif, aman, tangguh, dan transparan.&quot;
                    </p>
                </div>

                {/* Misi */}
                <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E7EB]/50">
                    <h2 className="text-lg font-medium text-[#2C3E50] mb-4 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-[#2F7E79]" />
                        Misi Penggerak
                    </h2>
                    <ul className="space-y-3 text-sm text-[#6B7280]">
                        {[
                            "Mendigitalisasi akses pelaporan insiden dengan akurasi tinggi.",
                            "Membangun standar akuntabilitas baru dalam manajemen K3.",
                            "Menghadirkan sistem penilaian objektif berbasis indikator nyata.",
                            "Menyediakan analitik data untuk perumusan kebijakan nasional."
                        ].map((misi, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#2E9F87] font-bold mt-0.5">•</span>
                                <span className="leading-relaxed">{misi}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* --- NILAI & REGULASI ROW --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nilai Utama */}
                <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E7EB]/50">
                    <h2 className="text-lg font-medium text-[#2C3E50] mb-5 flex items-center gap-2">
                        <Target className="w-5 h-5 text-[#2F7E79]" />
                        Fondasi Nilai Kami
                    </h2>
                    <div className="flex flex-wrap gap-2.5">
                        {[
                            "Transparansi Terukur",
                            "Integritas Data",
                            "Inovasi Berkelanjutan",
                            "Orientasi Perlindungan",
                            "Sinergi Lintas Sektor",
                        ].map((nilai) => (
                            <span
                                key={nilai}
                                className="px-4 py-2 rounded-full border border-[#E5E7EB] text-xs font-medium text-[#6B7280] bg-white hover:border-[#2F7E79] hover:bg-[#f0faf9] transition-all duration-200 cursor-default"
                            >
                                {nilai}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Regulasi */}
                <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E7EB]/50">
                    <h2 className="text-lg font-medium text-[#2C3E50] mb-5 flex items-center gap-2">
                        <ScrollText className="w-5 h-5 text-[#2F7E79]" />
                        Kepatuhan Regulasi
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "UU No. 1 / 1970",
                            "UU No. 13 / 2003",
                            "PP No. 50 / 2012",
                            "Permenaker No. 5 / 2018",
                        ].map((reg, idx) => (
                            <span key={idx} className="px-3 py-2 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB] text-xs text-[#6B7280] font-medium flex items-center gap-2">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#2E9F87]" />
                                {reg}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
