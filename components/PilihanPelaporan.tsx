"use client";

import { User, Building2, ChevronRight } from "lucide-react";

type PilihanType = "perorangan" | "perusahaan";

interface PilihanPelaporanProps {
    selected: PilihanType | null;
    onSelect: (type: PilihanType) => void;
    onNext: () => void;
}

const options: {
    id: PilihanType;
    icon: React.ReactNode;
    title: string;
    description: string;
}[] = [
        {
            id: "perorangan",
            icon: <User className="w-10 h-10 text-[#3b827e]" />,
            title: "Perorangan",
            description:
                "Laporan kejadian kecelakaan kerja atau penyakit akibat kerja dari perorangan.",
        },
        {
            id: "perusahaan",
            icon: <Building2 className="w-10 h-10 text-[#3b827e]" />,
            title: "Perusahaan",
            description:
                "Laporkan kejadian kecelakaan kerja atau penyakit akibat kerja di perusahaan.",
        },
    ];

export default function PilihanPelaporan({
    selected,
    onSelect,
    onNext,
}: PilihanPelaporanProps) {
    return (
        <section className="py-4">
            <div className="bg-white rounded-xl p-6 space-y-5">

                <div className=" pt-4">
                    <p className="text-sm text-slate-600 mb-4">
                        <span className="font-semibold text-slate-800">Pilihan Pelaporan:</span>{" "}
                        Pilih jenis pelaporan yang ingin Anda
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {options.map((opt) => {
                            const isActive = selected === opt.id;
                            return (
                                <button
                                    key={opt.id}
                                    id={`card-${opt.id}`}
                                    onClick={() => onSelect(opt.id)}
                                    className={`flex items-start gap-4 p-5 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer
                    ${isActive
                                            ? "border-blue-400 bg-blue-50"
                                            : "border-slate-200 bg-white hover:border-slate-300"
                                        }`}
                                >
                                    <div
                                        className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0
                    ${isActive ? "bg-blue-100" : "bg-slate-100"}`}
                                    >
                                        {opt.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 text-base mb-1">{opt.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{opt.description}</p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Next Button */}
                    <div className="flex justify-center mt-5">
                        <button
                            id="btn-next-pilihan"
                            onClick={onNext}
                            disabled={!selected}
                            className="flex items-center gap-2 bg-[#3b827e] hover:bg-[#2f6e6a] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-8 py-2.5 rounded-full transition-all duration-200 text-sm"
                        >
                            Selanjutnya
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
