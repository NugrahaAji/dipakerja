"use client";

import Navbar from "@/components/Navbar";
import {
    Search,
    Settings,
    Download,
    ChevronLeft,
    ChevronRight,
    ClipboardList,
    Stethoscope,
    ShieldCheck,
    Plus,
} from "lucide-react";
import { useState } from "react";

// ─── SVG Illustration ────────────────────────────────────────────────────────

function HealthIllustration() {
    return (
        <div className="flex items-center justify-center gap-4 flex-shrink-0">
            {/* Clipboard */}
            <div className="relative">
                <div className="w-20 h-24 md:w-28 md:h-32 bg-white rounded-2xl shadow-lg border border-blue-100 flex flex-col items-center justify-center p-3 rotate-[-4deg]">
                    <div className="w-8 h-2 bg-amber-400 rounded-full mb-3" />
                    <div className="w-full space-y-1.5">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-sm border-2 border-teal-400 flex items-center justify-center flex-shrink-0">
                                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-sm" />
                                </div>
                                <div className="h-1.5 bg-gray-200 rounded-full flex-1" />
                            </div>
                        ))}
                    </div>
                    <ClipboardList className="absolute -top-3 -right-3 w-6 h-6 text-teal-500" />
                </div>
            </div>

            {/* Stethoscope circle */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-teal-500 rounded-full shadow-lg flex items-center justify-center rotate-[6deg]">
                <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>

            {/* Shield medical */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-2xl shadow-lg flex items-center justify-center rotate-[-2deg]">
                <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
        </div>
    );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-200">
            {/* Left */}
            <div className="flex-1 min-w-0">
                <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
                    ADEK3 — Medical Check-Up
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-3">
                    Pelaporan Hasil MCU Tahunan
                </h1>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
                    Laporan Pemeriksaan Kesehatan Kerja untuk setiap perusahaan setiap
                    tahunnya. Pantau status kesehatan tenaga kerja secara terpusat dan
                    terstruktur.
                </p>
            </div>

            {/* Right – Illustration */}
            <div className="flex-shrink-0">
                <HealthIllustration />
            </div>
        </div>
    );
}

// ─── Dasar Hukum Section ──────────────────────────────────────────────────────

function DasarHukumSection() {
    const items = [
        {
            id: 1,
            text: "Undang-Undang No. 13 Tahun 2003 tentang Ketenagakerjaan Pasal 86 ayat (2) yang mewajibkan perusahaan menjalankan pemeriksaan kesehatan berkala.",
        },
        {
            id: 2,
            text: "Peraturan Menteri Ketenagakerjaan No. 5 Tahun 2018 tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja Pasal 5 ayat (5) yang mengatur kewajiban MCU (Medical Check-Up) tahunan untuk setiap pekerja.",
        },
        {
            id: 3,
            text: "Peraturan Menteri Kesehatan No. 66 Tahun 2016 tentang Kesehatan Kerja Pasal 8 ayat (1) yang mengatur kewajiban pemeriksaan kesehatan berkala setiap tahun.",
        },
        {
            id: 4,
            text: "Peraturan Pemerintah No. 88 Tahun 2019 tentang Kesehatan Pekerja Pasal 24 yang mengatur pelaporan hasil MCU tahunan ke instansi terkait.",
        },
    ];

    return (
        <div className="bg-gray-100 rounded-2xl border border-gray-200 p-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                    Dasar Hukum Kewajiban MCU Tahunan
                </h2>
                <ol className="space-y-5">
                    {items.map((item) => (
                        <li key={item.id} className="flex gap-4">
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-bold flex items-center justify-center mt-0.5">
                                {item.id}
                            </span>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
    const colorMap: Record<string, string> = {
        Diterima: "bg-teal-100 text-teal-700",
        Ditolak: "bg-red-100 text-red-600",
        Pending: "bg-amber-100 text-amber-700",
    };
    const cls = colorMap[status] ?? "bg-gray-100 text-gray-600";
    return (
        <span className={`${cls} rounded-full px-3 py-1 text-xs font-semibold`}>
            {status}
        </span>
    );
}

// ─── MCU Table Section ────────────────────────────────────────────────────────

interface TableRow {
    no: number;
    perusahaan: string;
    tahun: string;
    status: string;
}

interface McuTableSectionProps {
    title: string;
    description: string;
    data: TableRow[];
    showAddButton?: boolean;
}

function McuTableSection({
    title,
    description,
    data,
    showAddButton = false,
}: McuTableSectionProps) {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("Semua Status");
    const [perPage, setPerPage] = useState(10);

    const filtered = data.filter((row) => {
        const matchSearch = row.perusahaan
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchStatus =
            statusFilter === "Semua Status" || row.status === statusFilter;
        return matchSearch && matchStatus;
    });

    return (
        <div className="bg-gray-100 rounded-2xl border border-gray-200 p-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-5">
                {/* ── Header ── */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                            {description}
                        </p>
                    </div>
                    {showAddButton && (
                        <button
                            id="btn-tambah-laporan"
                            className="flex items-center gap-2 bg-teal-600 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-teal-700 active:scale-95 transition-all duration-200 flex-shrink-0 shadow-sm"
                        >
                            <Plus className="w-4 h-4" />
                            Tambah Laporan Baru
                        </button>
                    )}
                </div>

                {/* ── Filter Bar ── */}
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                    {/* Search */}
                    <div className="flex items-center gap-2 flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus-within:border-teal-400 focus-within:ring-2 focus-within:ring-teal-100 transition">
                        <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Cari nama perusahaan"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none w-full"
                        />
                    </div>

                    {/* Status Dropdown */}
                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-700 pr-8 outline-none cursor-pointer hover:border-teal-400 transition"
                        >
                            <option>Semua Status</option>
                            <option>Diterima</option>
                            <option>Ditolak</option>
                            <option>Pending</option>
                        </select>
                        <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90 pointer-events-none" />
                    </div>

                    {/* Settings Icon */}
                    <button
                        id="btn-settings"
                        className="bg-gray-50 border border-gray-200 rounded-xl p-2 hover:border-teal-400 hover:bg-teal-50 transition flex items-center justify-center"
                    >
                        <Settings className="w-4 h-4 text-gray-500" />
                    </button>
                </div>

                {/* ── Table ── */}
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="text-left font-semibold text-gray-500 px-4 py-3 w-12">
                                    No
                                </th>
                                <th className="text-left font-semibold text-gray-500 px-4 py-3">
                                    Nama Perusahaan
                                </th>
                                <th className="text-left font-semibold text-gray-500 px-4 py-3">
                                    Tahun Laporan
                                </th>
                                <th className="text-left font-semibold text-gray-500 px-4 py-3">
                                    Status
                                </th>
                                <th className="text-left font-semibold text-gray-500 px-4 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="text-center text-gray-400 py-10 text-sm"
                                    >
                                        Tidak ada data yang cocok.
                                    </td>
                                </tr>
                            ) : (
                                filtered.slice(0, perPage).map((row) => (
                                    <tr
                                        key={row.no}
                                        className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors duration-150"
                                    >
                                        <td className="px-4 py-3 text-gray-500">{row.no}</td>
                                        <td className="px-4 py-3 font-medium text-gray-700">
                                            {row.perusahaan}
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">{row.tahun}</td>
                                        <td className="px-4 py-3">
                                            <StatusBadge status={row.status} />
                                        </td>
                                        <td className="px-4 py-3">
                                            <button className="flex items-center gap-2 bg-teal-600 text-white rounded-full px-4 py-1.5 text-xs font-semibold hover:bg-teal-700 active:scale-95 transition-all duration-200 shadow-sm">
                                                Detail
                                                <Download className="w-3.5 h-3.5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* ── Table Footer ── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                    <p className="text-sm text-gray-400">
                        Menampilkan{" "}
                        <span className="font-medium text-gray-600">
                            {Math.min(filtered.length, perPage)}
                        </span>{" "}
                        dari{" "}
                        <span className="font-medium text-gray-600">{filtered.length}</span>{" "}
                        laporan
                    </p>

                    <div className="flex items-center gap-3">
                        {/* Per page */}
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Tampilkan</span>
                            <select
                                value={perPage}
                                onChange={(e) => setPerPage(Number(e.target.value))}
                                className="border border-gray-200 rounded-lg px-2 py-1 text-sm text-gray-700 outline-none bg-gray-50 hover:border-teal-400 transition cursor-pointer"
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                            </select>
                            <span>entri</span>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center gap-1">
                            <button className="w-7 h-7 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center hover:border-teal-400 hover:bg-teal-50 transition text-gray-500">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="w-7 h-7 rounded-lg bg-teal-600 text-white text-xs font-semibold flex items-center justify-center shadow-sm">
                                1
                            </button>
                            <button className="w-7 h-7 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center hover:border-teal-400 hover:bg-teal-50 transition text-gray-500">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const tableData: TableRow[] = [
    { no: 1, perusahaan: "PT Sukses Jaya Mandiri", tahun: "2023", status: "Diterima" },
    { no: 2, perusahaan: "CV Maju Bersama", tahun: "2023", status: "Pending" },
    { no: 3, perusahaan: "PT Karya Nusantara", tahun: "2022", status: "Diterima" },
    { no: 4, perusahaan: "PT Bangun Sejahtera", tahun: "2023", status: "Ditolak" },
    { no: 5, perusahaan: "CV Anugrah Abadi", tahun: "2022", status: "Diterima" },
];

export default function Adek3Page() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
                {/* Section 1 — Hero */}
                <HeroSection />

                {/* Section 2 — Dasar Hukum */}
                <DasarHukumSection />

                {/* Section 3 — Tabel Laporan MCU (dengan tombol Tambah) */}
                <McuTableSection
                    title="Pelaporan Hasil MCU Tahunan"
                    description="Log ini berisi laporan pemeriksaan Kesehatan Kerja yang disiapkan perusahaan untuk melaporkan MCU tahunan."
                    data={tableData}
                    showAddButton={true}
                />

                {/* Section 4 — Tabel Laporan Perusahaan */}
                <McuTableSection
                    title="Pelaporan Hasil MCU Tahunan"
                    description="Perusahaan dapat melaporkan berdasarkan workplace atau perusahaan (setiap perusahaan)."
                    data={tableData}
                    showAddButton={false}
                />
            </main>
        </div>
    );
}
