"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AboutDipaKerja from "@/components/AboutDipaKerja";
import PilihanPelaporan from "@/components/PilihanPelaporan";
import DataPelapor, { ReporterForm } from "@/components/DataPelapor";
import DataPerusahaan, { PerusahaanForm } from "@/components/DataPerusahaan";
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

const defaultPerusahaanForm: PerusahaanForm = {
    namaPerusahaan: "",
    email: "",
    telepon: "",
    alamat: "",
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

const slideVariants = {
    enter: (direction: number) => ({
        opacity: 0,
        x: direction > 0 ? 40 : -40,
    }),
    center: {
        opacity: 1,
        x: 0,
    },
    exit: (direction: number) => ({
        opacity: 0,
        x: direction > 0 ? -40 : 40,
    }),
};

// Inner component that uses useSearchParams (must be inside Suspense)
function PelaporanSlider() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [step, setStep] = useState<StepIndex>(0);
    const [direction, setDirection] = useState<number>(1);
    const [pilihan, setPilihan] = useState<PilihanType | null>(null);
    const [reporterForm, setReporterForm] = useState<ReporterForm>(defaultReporterForm);
    const [perusahaanForm, setPerusahaanForm] = useState<PerusahaanForm>(defaultPerusahaanForm);
    const [kejadianForm, setKejadianForm] = useState<KejadianForm>(defaultKejadianForm);

    // Read query params on mount — restore step & type after company login redirect
    useEffect(() => {
        const stepParam = searchParams.get("step");
        const typeParam = searchParams.get("type");

        if (stepParam === "2" && typeParam === "perusahaan") {
            setPilihan("perusahaan");
            setDirection(1);
            setStep(1); // step index 1 = "Data Pelapor/Perusahaan" (the 2nd step)
            // Clean up URL without reloading
            router.replace("/", { scroll: false });
        }
    }, [searchParams, router]);

    const goToStep = (next: StepIndex) => {
        setDirection(next > step ? 1 : -1);
        setStep(next);
    };

    const handleReset = () => {
        setDirection(-1);
        setStep(0);
        setPilihan(null);
        setReporterForm(defaultReporterForm);
        setPerusahaanForm(defaultPerusahaanForm);
        setKejadianForm(defaultKejadianForm);
    };

    // Step 0 → Next handler: redirect to login page if perusahaan
    const handleNextFromStep0 = () => {
        if (!pilihan) return;
        if (pilihan === "perusahaan") {
            router.push("/login-perusahaan");
        } else {
            goToStep(1);
        }
    };

    return (
            <div className="max-w-6xl px6 mx-auto">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

                    {/* Progress Bar */}
                    <div className="flex items-center gap-2 mb-8">
                        {[0, 1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={`flex-1 h-2 rounded-full transition-all duration-300 ${step >= i ? "bg-[#3b827e]" : "bg-[#3b827e30]"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Slider Content */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                            {step === 0 && (
                                <motion.div
                                    key="step-0"
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <PilihanPelaporan
                                        selected={pilihan}
                                        onSelect={setPilihan}
                                        onNext={handleNextFromStep0}
                                    />
                                </motion.div>
                            )}

                            {step === 1 && pilihan === "perorangan" && (
                                <motion.div
                                    key="step-1-perorangan"
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <DataPelapor
                                        form={reporterForm}
                                        onChange={setReporterForm}
                                        onNext={() => goToStep(2)}
                                        onBack={() => goToStep(0)}
                                    />
                                </motion.div>
                            )}

                            {step === 1 && pilihan === "perusahaan" && (
                                <motion.div
                                    key="step-1-perusahaan"
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <DataPerusahaan
                                        form={perusahaanForm}
                                        onChange={setPerusahaanForm}
                                        onNext={() => goToStep(2)}
                                        onBack={() => goToStep(0)}
                                    />
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step-2"
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <DetailKejadian
                                        form={kejadianForm}
                                        onChange={setKejadianForm}
                                        onBack={() => goToStep(1)}
                                        onSubmit={() => goToStep(3)}
                                    />
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step-3"
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <RingkasanLaporan
                                        tipePelaporan={
                                            pilihan === "perorangan" ? "Perorangan" : "Perusahaan"
                                        }
                                        namaPelapor={
                                            pilihan === "perusahaan"
                                                ? perusahaanForm.namaPerusahaan
                                                : reporterForm.nama
                                        }
                                        jenisPengaduan={kejadianForm.jenisPengaduan}
                                        lokasiKejadian={kejadianForm.lokasi}
                                        k3Status={kejadianForm.k3Status}
                                        onReset={handleReset}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
    );
}

export default function PelaporanPage() {
    return (
        <div className="bg-slate-50">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-12">
                <AboutDipaKerja />
                <Suspense fallback={null}>
                    <PelaporanSlider />
                </Suspense>

            </main>
        </div>
    );
}
