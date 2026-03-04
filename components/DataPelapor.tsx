"use client";

import { ChevronRight } from "lucide-react";

export interface ReporterForm {
    nama: string;
    gender: "Laki-laki" | "Perempuan";
    nik: string;
    email: string;
    instansi: string;
    consent: boolean;
}

const instansiOptions = [
    "Kementerian Ketenagakerjaan",
    "BPJS Ketenagakerjaan",
    "Dinas Tenaga Kerja",
    "Perusahaan Swasta",
    "Instansi Pemerintah",
    "Lainnya",
];

interface DataPelaporProps {
    form: ReporterForm;
    onChange: (form: ReporterForm) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function DataPelapor({ form, onChange, onNext, onBack }: DataPelaporProps) {
    const update = <K extends keyof ReporterForm>(key: K, value: ReporterForm[K]) => {
        onChange({ ...form, [key]: value });
    };

    return (
        <section className="py-4">
            <div className="bg-white rounded-xl p-6 space-y-5">
                <h2 className="text-2xl font-medium text-slate-800">Data Pelapor / Korban</h2>

                <div className="border-t border-slate-200 pt-4 space-y-5">
                    <h3 className="text-base font-semibold text-slate-700">
                        Identitas Diri (Perorangan)
                    </h3>

                    {/* Nama Lengkap */}
                    <input
                        id="input-nama"
                        type="text"
                        placeholder="Nama Lengkap"
                        value={form.nama}
                        onChange={(e) => update("nama", e.target.value)}
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] focus:border-transparent transition"
                    />

                    {/* Jenis Kelamin + NIK */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex items-center gap-4 md:w-1/2">
                            <span className="text-sm text-slate-600 font-medium whitespace-nowrap">
                                Jenis Kelamin
                            </span>
                            {(["Laki-laki", "Perempuan"] as const).map((g) => (
                                <label key={g} className="flex items-center gap-1.5 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="gender-pelapor"
                                        value={g}
                                        checked={form.gender === g}
                                        onChange={() => update("gender", g)}
                                        className="w-4 h-4 accent-[#3b827e]"
                                    />
                                    <span className="text-sm text-slate-600">{g}</span>
                                </label>
                            ))}
                        </div>
                        <input
                            id="input-nik"
                            type="text"
                            placeholder="NIK"
                            value={form.nik}
                            onChange={(e) => update("nik", e.target.value)}
                            className="md:w-1/2 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] focus:border-transparent transition"
                        />
                    </div>

                    {/* Email + Instansi */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            id="input-email"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            className="md:w-1/2 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] focus:border-transparent transition"
                        />
                        <select
                            id="select-instansi"
                            value={form.instansi}
                            onChange={(e) => update("instansi", e.target.value)}
                            className="md:w-1/2 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] focus:border-transparent transition bg-white"
                        >
                            <option value="" disabled>
                                Asal Instansi
                            </option>
                            {instansiOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Consent + Next */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <label className="flex items-start gap-2.5 cursor-pointer max-w-lg">
                            <input
                                id="checkbox-consent"
                                type="checkbox"
                                checked={form.consent}
                                onChange={(e) => update("consent", e.target.checked)}
                                className="w-4 h-4 mt-0.5 accent-[#3b827e] flex-shrink-0"
                            />
                            <span className="text-sm text-slate-600 leading-relaxed">
                                Saya menyatakan{" "}
                                <span className="font-bold text-slate-800">bahwa data yang</span> diberikan benar.
                                Saya memerima dan setuju dengan informed consent platform ini.
                            </span>
                        </label>

                        <div className="flex justify-between gap-5 mt-8">
                            <button
                                type="button"
                                onClick={onBack}
                                className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium px-5 py-2.5 rounded-full transition-all duration-200 text-sm"
                            >
                                Kembali
                            </button>

                            <button
                                type="button"
                                onClick={onNext}
                                className="flex items-center gap-2 bg-[#3b827e] hover:bg-[#2f6e6a] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-8 py-2.5 rounded-full transition-all duration-200 text-sm"
                            >
                                Lanjut
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
