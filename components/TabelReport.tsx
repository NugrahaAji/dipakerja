"use client";

import { useState, useMemo } from "react";
import { Search, Eye, ChevronLeft, ChevronRight } from "lucide-react";

export default function ReportTable() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [itemsPerPage, setItemsPerPage] = useState(5);

    const reports = [
        { id: 1, company: "PT Sukses Jaya Mandiri", year: 2023, status: "Diterima" },
        { id: 2, company: "PT Sukses Sentosa Makmur", year: 2023, status: "Ditolak" },
        { id: 3, company: "PT Makmur Abadi", year: 2023, status: "Diproses" },
        { id: 4, company: "PT Jaya Sejahtera", year: 2023, status: "Diterima" },
        { id: 5, company: "PT Sentosa Bersama", year: 2023, status: "Diproses" },
    ];

    // Filter data
    const filtered = useMemo(() => {
        return reports.filter((r) =>
            r.company.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, reports]);

    // Pagination logic
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filtered.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearch = (value: string) => {
        setSearch(value);
        setCurrentPage(1);
    };

    return (
        <section className="py-10 max-w-8xl mx-auto px-6 pb-20">
            <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-semibold text-slate-800">
                        Data Laporan MCU Tahunan
                    </h3>
                </div>

                {/* Search */}
                <div className="relative max-w-sm mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Cari nama perusahaan..."
                        className="w-full text-black pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm"
                        value={search}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 min-h-[320px]">
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                            <tr>
                                <th className="p-4 text-middle font-medium w-fit">No</th>
                                <th className="p-4 text-middle font-medium">Nama Perusahaan</th>
                                <th className="p-4 text-middle font-medium">Tahun</th>
                                <th className="p-4 text-middle font-medium">Status</th>
                                <th className="p-4 text-middle font-medium">Aksi</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentData.map((report, index) => (
                                <tr key={report.id} className="border-t hover:bg-slate-50 transition">
                                    <td className="p-4 text-center font-medium text-slate-700 w-fit">
                                        {startIndex + index + 1}
                                    </td>
                                    <td className="p-4  font-medium text-slate-700 truncate">
                                        {report.company}
                                    </td>
                                    <td className="p-4 text-center font-medium text-slate-700">
                                        {report.year}
                                    </td>
                                    <td className="p-4 flex item-center justify-center w-full">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${report.status === "Diterima"
                                                ? "bg-emerald-100 text-emerald-600"
                                                : report.status === "Ditolak"
                                                    ? "bg-red-100 text-red-600"
                                                    : "bg-yellow-100 text-yellow-600"
                                                }`}>
                                            {report.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex justify-center">
                                            <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition">
                                                <Eye size={16} /> Detail
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {/* Empty rows agar tinggi konsisten */}
                            {Array.from({ length: itemsPerPage - currentData.length }).map(
                                (_, i) => (
                                    <tr key={`empty-${i}`} className="border-t">
                                        <td className="p-4">&nbsp;</td>
                                        <td className="p-4"></td>
                                        <td className="p-4"></td>
                                        <td className="p-4"></td>
                                        <td className="p-4"></td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {filtered.length > 0 && (
                    <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        {/* Left Section */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

                            {/* Dropdown */}
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <span>Tampilkan</span>
                                <select
                                    value={itemsPerPage}
                                    onChange={(e) => {
                                        setItemsPerPage(Number(e.target.value));
                                        setCurrentPage(1);
                                    }}
                                    className="border border-slate-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                </select>
                                <span>data</span>
                            </div>

                            {/* Info */}
                            <p className="text-sm text-slate-500">
                                Menampilkan{" "}
                                <span className="font-medium text-slate-700">
                                    {startIndex + 1}
                                </span>
                                –
                                <span className="font-medium text-slate-700">
                                    {Math.min(endIndex, filtered.length)}
                                </span>{" "}
                                dari{" "}
                                <span className="font-medium text-slate-700">
                                    {filtered.length}
                                </span>{" "}
                                data
                            </p>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-center sm:justify-end gap-2">

                            {/* Previous */}
                            <button
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-3 py-2 rounded-lg border text-sm flex items-center gap-1 transition
                                    ${currentPage === 1
                                        ? "text-slate-400 border-slate-200 cursor-not-allowed"
                                        : "text-slate-700 border-slate-300 hover:bg-slate-50"
                                    }`}
                            >
                                <ChevronLeft size={16} />
                            </button>

                            {/* Numbered Pages - Hidden on Mobile */}
                            <div className="hidden sm:flex items-center gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1)
                                    .slice(
                                        Math.max(currentPage - 2, 0),
                                        Math.min(currentPage + 1, totalPages)
                                    )
                                    .map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => goToPage(page)}
                                            className={`px-3 py-2 rounded-lg text-sm border transition
                                                ${currentPage === page
                                                    ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                                                    : "border-slate-300 text-slate-700 hover:bg-slate-50"
                                                }`}>
                                            {page}
                                        </button>
                                    ))}
                            </div>

                            {/* Next */}
                            <button
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-2 rounded-lg border text-sm flex items-center gap-1 transition
                                    ${currentPage === totalPages
                                        ? "text-slate-400 border-slate-200 cursor-not-allowed"
                                        : "text-slate-700 border-slate-300 hover:bg-slate-50"
                                    }`}>
                                <ChevronRight size={16} />
                            </button>

                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
