import CompanyTable from "@/components/CompanyTable";

export default function TopCompanySection() {
    return (
        <section id="top-perusahaan" className="py-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold text-[#2C3E50]">
                        Top Perusahaan dengan Nilai Safety Tertinggi
                    </h2>
                    <p className="text-xs text-[#6B7280] mt-1 max-w-sm">
                        Login untuk melihat lebih banyak peringkat Nama dan Skor perusahaan.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm text-[#2C3E50] font-medium bg-white hover:border-[#5B7FA3] transition-colors duration-200">
                        Lihat Skor Se-Indonesia
                        <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Map of Indonesia placeholder */}
                <div className="bg-gradient-to-br from-[#dce9f5] to-[#c5d9ee] h-52 flex items-center justify-center relative overflow-hidden">
                    {/* Simplified Indonesia map SVG */}
                    <svg
                        viewBox="0 0 600 200"
                        className="w-full h-full object-contain px-8"
                        aria-label="Peta Indonesia"
                    >
                        {/* Sumatra */}
                        <ellipse cx="120" cy="110" rx="65" ry="22" fill="#8db8d8" opacity="0.85" />
                        {/* Java */}
                        <ellipse cx="270" cy="130" rx="75" ry="18" fill="#7aaecf" opacity="0.85" />
                        {/* Kalimantan */}
                        <ellipse cx="330" cy="85" rx="60" ry="45" fill="#8db8d8" opacity="0.85" />
                        {/* Sulawesi */}
                        <ellipse cx="420" cy="90" rx="28" ry="40" fill="#7aaecf" opacity="0.85" />
                        {/* Papua */}
                        <ellipse cx="540" cy="100" rx="50" ry="38" fill="#8db8d8" opacity="0.85" />
                        {/* Bali & Lombok */}
                        <circle cx="360" cy="135" r="10" fill="#7aaecf" opacity="0.85" />
                        <circle cx="380" cy="137" r="8" fill="#8db8d8" opacity="0.85" />

                        {/* Map pins */}
                        {[
                            { cx: 270, cy: 125, label: "Cikarang" },
                            { cx: 340, cy: 75, label: "Balikpapan" },
                            { cx: 295, cy: 115, label: "Semarang" },
                            { cx: 310, cy: 128, label: "Surabaya" },
                            { cx: 420, cy: 82, label: "Makassar" },
                        ].map((pin) => (
                            <g key={pin.label}>
                                <circle cx={pin.cx} cy={pin.cy - 2} r="6" fill="#F5D25A" stroke="#e6b800" strokeWidth="1.5" />
                                <line x1={pin.cx} y1={pin.cy + 4} x2={pin.cx} y2={pin.cy + 10} stroke="#e6b800" strokeWidth="1.5" />
                            </g>
                        ))}
                    </svg>

                    {/* Dropdown overlay on the map */}
                    <div className="absolute bottom-4 left-4">
                        <button className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 shadow text-xs font-medium text-[#2C3E50] border border-[#E5E7EB]">
                            Lihat Skor Se-Indonesia
                            <svg className="w-3 h-3 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <CompanyTable />
            </div>
        </section>
    );
}
