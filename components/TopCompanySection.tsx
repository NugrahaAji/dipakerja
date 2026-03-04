"use client";

import CompanyTable from "@/components/CompanyTable";
import Image from "next/image";

export default function TopCompanySection() {
    return (
        <section id="top-perusahaan" className="py-8  max-w-6xl mx-auto px-6">
            {/* Header */}

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                {/* Map of Indonesia placeholder */}
                <div className="bg-gradient-to-br from-[#f4f7f7] to-[#dce4e4] h-60 flex  relative overflow-hidden p-8">
                    <div className="flex flex-col sm:items-start justify-between gap-4 mb-6 z-10">
                        <div>
                            <h2 className="text-2xl font-medium text-[#2C3E50]">
                                Top Perusahaan dengan Nilai Safety Tertinggi
                            </h2>
                            <p className="text-sm text-[#6B7280] mt-1 max-w-sm">
                                Login untuk melihat lebih banyak peringkat Nama dan Skor perusahaan.
                            </p>
                        </div>
                            <button className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 shadow text-xs font-medium text-[#2C3E50] border border-[#E5E7EB] w-fit">
                                Lihat Skor Se-Indonesia
                                <svg className="w-3 h-3 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                    </div>
                    {/* Dropdown overlay on the map */}
                    <Image
                        src="/petaIndonesia.png"
                        alt="Peta Indonesia"
                        width={480}
                        height={160}
                        className="absolute object-cover bottom-0 right-0 md:opacity-100 opacity-2"
                    />

                </div>

                {/* Table */}
                <CompanyTable />
            </div>
        </section>
    );
}
