"use client";

import { Search, Star } from "lucide-react";
import { useState } from "react";

const ratingOptions = [
    {
        id: "sangat-baik",
        stars: 5,
        label: "Sangat Baik",
        color: "text-[#2E9F87]",
        starColor: "text-yellow-400 fill-yellow-400",
        emoji: "😊",
    },
    {
        id: "baik",
        stars: 4,
        label: "Baik",
        color: "text-[#2C3E50]",
        starColor: "text-yellow-400 fill-yellow-400",
        emoji: null,
    },
    {
        id: "cukup",
        stars: 3,
        label: "Cukup",
        color: "text-[#2C3E50]",
        starColor: "text-yellow-400 fill-yellow-400",
        emoji: null,
    },
    {
        id: "sangat-buruk",
        stars: 2,
        label: "Sangat Buruk",
        color: "text-[#E76F51]",
        starColor: "text-[#E76F51] fill-[#E76F51]",
        emoji: null,
    },
];

export default function RatingSection() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <section className="py-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Title */}
                <h2 className="text-xl font-bold text-[#2C3E50] mb-6">Berikan Penilaian Anda</h2>

                {/* Search + Button */}
                <div className="flex gap-3 mb-6">
                    <div className="flex-1 flex items-center gap-2 border border-[#E5E7EB] rounded-xl px-4 py-3 bg-white focus-within:border-[#2F7E79] transition-colors duration-200">
                        <Search className="w-4 h-4 text-[#6B7280] shrink-0" />
                        <input
                            type="text"
                            placeholder="Cari nama perusahaan..."
                            className="flex-1 text-sm text-[#2C3E50] outline-none placeholder-[#6B7280] bg-transparent"
                        />
                        {/* Down arrow */}
                        <svg className="w-4 h-4 text-[#6B7280] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <button className="bg-[#2F7E79] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity duration-200 whitespace-nowrap">
                        Berikan Nilai
                    </button>
                </div>

                {/* Rating filter */}
                <div className="flex flex-wrap gap-3 mb-4">
                    {ratingOptions.map((opt) => (
                        <button
                            key={opt.id}
                            onClick={() => setSelected(opt.id === selected ? null : opt.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${selected === opt.id
                                    ? "border-[#2F7E79] bg-[#f0faf9]"
                                    : "border-[#E5E7EB] bg-white hover:border-[#2F7E79]"
                                }`}
                        >
                            <div className="flex items-center">
                                {[...Array(opt.stars)].map((_, i) => (
                                    <Star key={i} className={`w-3.5 h-3.5 ${opt.starColor}`} />
                                ))}
                                {[...Array(5 - opt.stars)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-[#E5E7EB] fill-[#E5E7EB]" />
                                ))}
                            </div>
                            {opt.emoji && <span className="text-sm">{opt.emoji}</span>}
                            <span className={opt.color}>{opt.label}</span>
                        </button>
                    ))}
                </div>

                {/* Description */}
                <p className="text-xs text-[#6B7280] leading-relaxed">
                    Beri nilai perusahaan terkait pelaksanaan Keselamatan dan Kesehatan{" "}
                    <em>Kerja (K3)</em>. Pilih nilai dari{" "}
                    <span className="text-[#2C3E50] font-medium">Sangat Baik</span> hingga{" "}
                    <span className="text-[#E76F51] font-medium">Sangat Buruk</span> dan klik{" "}
                    <span className="text-[#2F7E79] font-semibold">Berikan Nilai</span>.
                </p>
            </div>
        </section>
    );
}
