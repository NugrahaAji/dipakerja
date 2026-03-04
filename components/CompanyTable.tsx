"use client";

import { Star, ChevronLeft, ChevronRight, ChevronRight as ArrowRight, Users } from "lucide-react";
import { useState } from "react";

interface Company {
    no: number;
    nama: string;
    lokasi: string;
    score: number;
    votes: string;
    icon: string;
    iconBg: string;
}

const companies: Company[] = [
    {
        no: 1,
        nama: "PT Sejahtera Abadi Plastik",
        lokasi: "Cikarang, Jawa Barat",
        score: 4.88,
        votes: "3.421",
        icon: "🏭",
        iconBg: "bg-blue-100",
    },
    {
        no: 2,
        nama: "PT Pertamina Hulu Energy",
        lokasi: "Balikpapan, Kalimantan Timur",
        score: 4.85,
        votes: "2.997",
        icon: "⚡",
        iconBg: "bg-purple-100",
    },
    {
        no: 3,
        nama: "RS Harapan Sehat",
        lokasi: "Semarang, Jawa Tengah",
        score: 4.84,
        votes: "2.758",
        icon: "🏥",
        iconBg: "bg-red-100",
    },
    {
        no: 4,
        nama: "PT Utama Baja Steel",
        lokasi: "Surabaya, Jawa Timur",
        score: 4.83,
        votes: "2.532",
        icon: "🔩",
        iconBg: "bg-gray-100",
    },
    {
        no: 5,
        nama: "PT Angkasa Citra Logistik",
        lokasi: "Makassar, Sulawesi Selatan",
        score: 4.82,
        votes: "2.415",
        icon: "✈️",
        iconBg: "bg-sky-100",
    },
];

const rankMedal = (no: number) => {
    if (no === 1) return "🥇";
    if (no === 2) return "🥈";
    if (no === 3) return "🥉";
    return null;
};

export default function CompanyTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    return (
        <div>
            {/* Scrollable table wrapper */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-[#E5E7EB] bg-[#f9fafb]">
                            <th className="text-left px-6 py-4 font-semibold text-[#6B7280] text-xs uppercase tracking-wider w-16">
                                No
                            </th>
                            <th className="text-left px-4 py-4 font-semibold text-[#6B7280] text-xs uppercase tracking-wider">
                                Nama Perusahaan
                            </th>
                            <th className="text-left px-4 py-4 font-semibold text-[#6B7280] text-xs uppercase tracking-wider">
                                Lokasi
                            </th>
                            <th className="text-left px-4 py-4 font-semibold text-[#6B7280] text-xs uppercase tracking-wider">
                                Safety Score
                            </th>
                            <th className="text-left px-4 py-4 font-semibold text-[#6B7280] text-xs uppercase tracking-wider">
                                Votes
                            </th>
                            <th className="px-4 py-4 w-8" />
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company, idx) => (
                            <tr
                                key={company.no}
                                className={`border-b border-[#E5E7EB] hover:bg-[#f9fafb] transition-colors duration-150 ${idx === companies.length - 1 ? "border-b-0" : ""}`}
                            >
                                {/* No */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5">
                                        {rankMedal(company.no) ? (
                                            <span className="text-lg">{rankMedal(company.no)}</span>
                                        ) : (
                                            <span className="text-[#6B7280] font-medium w-6 text-center">{company.no}</span>
                                        )}
                                    </div>
                                </td>

                                {/* Nama */}
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-9 h-9 rounded-full ${company.iconBg} flex items-center justify-center text-base shrink-0`}>
                                            {company.icon}
                                        </div>
                                        <span className="font-semibold text-[#2C3E50] whitespace-nowrap">
                                            {company.nama}
                                        </span>
                                    </div>
                                </td>

                                {/* Lokasi */}
                                <td className="px-4 py-4 text-[#6B7280] whitespace-nowrap">
                                    {company.lokasi}
                                </td>

                                {/* Safety Score Badge */}
                                <td className="px-4 py-4">
                                    <span className="inline-flex items-center gap-1.5 bg-[#2E9F87] text-white text-sm font-medium px-4 py-1.5 rounded-full">
                                        <Star className="w-3.5 h-3.5 fill-white text-white" />
                                        {company.score.toFixed(2)}
                                    </span>
                                </td>

                                {/* Votes */}
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-1.5 text-[#6B7280]">
                                        <Users className="w-3.5 h-3.5" />
                                        <span className="text-sm">{company.votes} votes</span>
                                    </div>
                                </td>

                                {/* Arrow */}
                                <td className="px-4 py-4">
                                    <ChevronRight className="w-4 h-4 text-[#6B7280]" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#6B7280]">
                    Menampilkan 1 – 10 dari 5.872 perusahaan
                </p>

                <div className="flex items-center gap-2">
                    {/* Pagination */}
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#E5E7EB] text-[#6B7280] hover:border-[#2F7E79] hover:text-[#2F7E79] transition-colors duration-150 disabled:opacity-40"
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>

                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium border transition-colors duration-150 ${currentPage === page
                                        ? "bg-[#2F7E79] text-white border-[#2F7E79]"
                                        : "border-[#E5E7EB] text-[#6B7280] hover:border-[#2F7E79] hover:text-[#2F7E79]"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#E5E7EB] text-[#6B7280] hover:border-[#2F7E79] hover:text-[#2F7E79] transition-colors duration-150 disabled:opacity-40"
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Lihat Semua */}
                    <button className="flex items-center gap-1.5 bg-[#2F7E79] text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-200 ml-2">
                        Lihat Semua
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
