"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutDipaKerja from "@/components/AboutDipaKerja";
import PilihanPelaporan from "@/components/PilihanPelaporan";
import DataPelapor, { ReporterForm } from "@/components/DataPelapor";
import DetailKejadian, { KejadianForm, VictimForm } from "@/components/DetailKejadian";
import RingkasanLaporan from "@/components/RingkasanLaporan";

type PilihanType = "perorangan" | "perusahaan";
type StepIndex = 0 | 1 | 2 | 3;

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
    const [step, setStep] = useState<StepIndex>(0);
    const [pilihan, setPilihan] = useState<PilihanType | null>(null);
    const [reporterForm, setReporterForm] =
        useState<ReporterForm>(defaultReporterForm);
    const [kejadianForm, setKejadianForm] =
        useState<KejadianForm>(defaultKejadianForm);

    const handleReset = () => {
        setStep(0);
        setPilihan(null);
        setReporterForm(defaultReporterForm);
        setKejadianForm(defaultKejadianForm);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f4f7f7] to-[#dce4e4]">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-12">

                {/* About Section (Static) */}
                <AboutDipaKerja />

                {/* Progress Indicator */}
                <div className="flex items-center gap-2 mb-8 mt-10">
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={`flex-1 h-2 rounded-full transition-all duration-300 ${step >= i ? "bg-[#3b827e]" : "bg-slate-200"
                                }`}
                        />
                    ))}
                </div>

                {/* WIZARD CONTAINER */}
                <div className="relative overflow-hidden w-full">

                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${step * 100}%)`,
                        }}
                    >

                        {/* STEP 1 */}
                        <div className="min-w-full">
                            <PilihanPelaporan
                                selected={pilihan}
                                onSelect={setPilihan}
                                onNext={() => {
                                    if (pilihan) setStep(1);
                                }}
                            />
                        </div>

                        {/* STEP 2 */}
                        <div className="min-w-full">
                            <DataPelapor
                                form={reporterForm}
                                onChange={setReporterForm}
                                onNext={() => setStep(2)}
                                onBack={() => setStep(0)}
                            />
                        </div>

                        {/* STEP 3 */}
                        <div className="min-w-full">
                            <DetailKejadian
                                form={kejadianForm}
                                onChange={setKejadianForm}
                                onBack={() => setStep(1)}
                                onSubmit={() => setStep(3)}
                            />
                        </div>

                        {/* STEP 4 */}
                        <div className="min-w-full">
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

                    </div>
                </div>
            </main>
        </div>
    );
}