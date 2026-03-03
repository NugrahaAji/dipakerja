"use client";

import { CheckCircle2 } from "lucide-react";

interface RingkasanLaporanProps {
    tipePelaporan: string;
    namaPelapor: string;
    jenisPengaduan: string;
    lokasiKejadian: string;
    k3Status: string;
    onReset: () => void;
}

export default function RingkasanLaporan({
    tipePelaporan,
    namaPelapor,
    jenisPengaduan,
    lokasiKejadian,
    k3Status,
    onReset,
}: RingkasanLaporanProps) {
    return (
        <section className="py-6">
            <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
                {/* Success Animation */}
                <div className="flex flex-col items-center justify-center py-6 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center animate-bounce-once">
                        <CheckCircle2 className="w-12 h-12 text-[#3b827e]" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 text-center">Laporan Terkirim!</h2>
                    <p className="text-slate-500 text-sm text-center max-w-md leading-relaxed">
                        Terima kasih telah berkontribusi dalam sistem pelaporan keselamatan kerja nasional.
                    </p>
                </div>

                {/* Summary Table */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
                        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                            Ringkasan Laporan
                        </h3>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {[
                            { label: "Tipe Pelaporan", value: tipePelaporan },
                            { label: "Nama Pelapor", value: namaPelapor || "—" },
                            { label: "Jenis Pengaduan", value: jenisPengaduan },
                            { label: "Lokasi Kejadian", value: lokasiKejadian || "—" },
                            { label: "Status Pelaksanaan K3", value: k3Status },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center px-5 py-3.5 gap-4"
                            >
                                <span className="text-sm text-slate-500 w-44 flex-shrink-0">
                                    {item.label}
                                </span>
                                <span className="text-sm font-semibold text-slate-800">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Confirmation Message */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 text-sm text-blue-800 leading-relaxed">
                    ✅ Laporan Anda telah berhasil disimpan dan akan segera ditindaklanjuti oleh tim kami.
                    Nomor referensi laporan akan dikirimkan ke email yang Anda daftarkan.
                </div>

                {/* Reset Button */}
                <div className="flex justify-center pt-2">
                    <button
                        id="btn-laporan-baru"
                        onClick={onReset}
                        className="bg-[#3b827e] hover:bg-[#2f6e6a] text-white font-semibold px-8 py-2.5 rounded-full transition-all duration-200 text-sm"
                    >
                        Buat Laporan Baru
                    </button>
                </div>
            </div>
        </section>
    );
}
