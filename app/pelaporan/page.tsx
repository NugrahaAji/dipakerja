"use client";

import { useState } from "react";
import { ShieldPlus } from "lucide-react";
import Navbar from "@/components/Navbar";
import AboutDipaKerja from "@/components/AboutDipaKerja";
import PilihanPelaporan from "@/components/PilihanPelaporan";
import DataPelapor, { ReporterForm } from "@/components/DataPelapor";
import DetailKejadian, { KejadianForm, VictimForm } from "@/components/DetailKejadian";
import RingkasanLaporan from "@/components/RingkasanLaporan";

type PilihanType = "perorangan" | "perusahaan";
type StepType = "pilihan" | "pelapor" | "detail" | "ringkasan";

const defaultVictim: VictimForm = {
    nama: "",
    gender: "Laki-laki",
    nik: "",
    email: "",
    instansi: "",
    file: null,
};

const defaultReporterForm: ReporterForm = {
    nama: "",
    gender: "Laki-laki",
    nik: "",
    email: "",
    instansi: "",
    consent: true,
};

const defaultKejadianForm: KejadianForm = {
    role: "Pelapor",
    victim: defaultVictim,
    tanggal: "",
    waktu: "01:00",
    jenisPengaduan: "KK",
    deskripsi: "",
    lokasi: "",
    k3Status: "Buruk",
    keterangan: "",
};

export default function PelaporanPage() {
    const [step, setStep] = useState<StepType>("pilihan");
    const [pilihan, setPilihan] = useState<PilihanType | null>(null);
    const [reporterForm, setReporterForm] = useState<ReporterForm>(defaultReporterForm);
    const [kejadianForm, setKejadianForm] = useState<KejadianForm>(defaultKejadianForm);

    const handleReset = () => {
        setStep("pilihan");
        setPilihan(null);
        setReporterForm(defaultReporterForm);
        setKejadianForm(defaultKejadianForm);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Shared Navbar */}
            <Navbar />

            {/* Page Title Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#e8f4f3] border-2 border-[#3b827e] flex items-center justify-center flex-shrink-0">
                        <ShieldPlus className="w-4 h-4 text-[#3b827e]" />
                    </div>
                    <div className="leading-tight">
                        <p className="font-bold text-slate-800 text-sm leading-snug">
                            Pelaporan Kejadian Kecelakaan Kerja dan Penyakit Akibat Kerja (KK/PAK)
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 pb-16">
                {/* Section 1: About */}
                <AboutDipaKerja />

                {/* Section 2: Pilihan Pelaporan */}
                <PilihanPelaporan
                    selected={pilihan}
                    onSelect={setPilihan}
                    onNext={() => {
                        if (pilihan) setStep("pelapor");
                    }}
                />

                {/* Section 3: Data Pelapor — shown after step >= pelapor */}
                {(step === "pelapor" || step === "detail" || step === "ringkasan") && (
                    <div
                        id="section-pelapor"
                        className="transition-all duration-300 animate-fade-in"
                    >
                        <DataPelapor
                            form={reporterForm}
                            onChange={setReporterForm}
                            onNext={() => setStep("detail")}
                        />
                    </div>
                )}

                {/* Section 4: Detail Kejadian — shown after step >= detail */}
                {(step === "detail" || step === "ringkasan") && (
                    <div
                        id="section-detail"
                        className="transition-all duration-300 animate-fade-in"
                    >
                        <DetailKejadian
                            form={kejadianForm}
                            onChange={setKejadianForm}
                            onBack={() => setStep("pelapor")}
                            onSubmit={() => setStep("ringkasan")}
                        />
                    </div>
                )}

                {/* Section 5: Ringkasan — shown after submit */}
                {step === "ringkasan" && (
                    <div
                        id="section-ringkasan"
                        className="transition-all duration-300 animate-fade-in"
                    >
                        <RingkasanLaporan
                            tipePelaporan={
                                pilihan === "perorangan" ? "Perorangan" : "Perusahaan"
                            }
                            namaPelapor={reporterForm.nama}
                            jenisPengaduan={kejadianForm.jenisPengaduan}
                            lokasiKejadian={kejadianForm.lokasi}
                            k3Status={kejadianForm.k3Status}
                            onReset={handleReset}
                        />
                    </div>
                )}
            </main>
        </div>
    );
}
