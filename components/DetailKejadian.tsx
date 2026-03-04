"use client";

import { Upload, ChevronRight } from "lucide-react";

type RoleType = "Pelapor" | "Korban";
type K3Status = "Baik" | "Buruk";
type PengaduanType = "KK" | "PAK";

export interface VictimForm {
    nama: string;
    gender: "Laki-laki" | "Perempuan";
    nik: string;
    email: string;
    instansi: string;
    file: File | null;
}

export interface KejadianForm {
    role: RoleType;
    victim: VictimForm;
    tanggal: string;
    waktu: string;
    jenisPengaduan: PengaduanType;
    deskripsi: string;
    lokasi: string;
    k3Status: K3Status;
    keterangan: string;
}

const instansiOptions = [
    "Kementerian Ketenagakerjaan",
    "BPJS Ketenagakerjaan",
    "Dinas Tenaga Kerja",
    "Perusahaan Swasta",
    "Instansi Pemerintah",
    "Lainnya",
];

interface DetailKejadianProps {
    form: KejadianForm;
    onChange: (form: KejadianForm) => void;
    onBack: () => void;
    onSubmit: () => void;
}

export default function DetailKejadian({
    form,
    onChange,
    onBack,
    onSubmit,
}: DetailKejadianProps) {
    const update = <K extends keyof KejadianForm>(key: K, value: KejadianForm[K]) => {
        onChange({ ...form, [key]: value });
    };

    const updateVictim = <K extends keyof VictimForm>(key: K, value: VictimForm[K]) => {
        onChange({ ...form, victim: { ...form.victim, [key]: value } });
    };

    return (
        <section className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* LEFT COLUMN */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
                    {/* Role */}
                    <div className="space-y-2">
                        <p className="text-sm font-semibold text-slate-700">
                            Anda melaporkan sebagai:
                        </p>
                        <div className="flex gap-5">
                            {(["Pelapor", "Korban"] as RoleType[]).map((r) => (
                                <label key={r} className="flex items-center gap-1.5 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="role"
                                        value={r}
                                        checked={form.role === r}
                                        onChange={() => update("role", r)}
                                        className="w-4 h-4 accent-[#3b827e]"
                                    />
                                    <span className="text-sm text-slate-600">{r}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Identitas Korban – only when Pelapor */}
                    {form.role === "Pelapor" && (
                        <div className="space-y-4">
                            <h3 className="text-base font-semibold text-slate-800">Identitas Korban</h3>

                            <input
                                id="victim-nama"
                                type="text"
                                placeholder="Nama Lengkap"
                                value={form.victim.nama}
                                onChange={(e) => updateVictim("nama", e.target.value)}
                                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition"
                            />

                            <div className="flex items-center gap-3">
                                <span className="text-sm text-slate-600 whitespace-nowrap">
                                    Jenis Kelamin
                                </span>
                                {(["Laki-laki", "Perempuan"] as const).map((g) => (
                                    <label key={g} className="flex items-center gap-1.5 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="victim-gender"
                                            value={g}
                                            checked={form.victim.gender === g}
                                            onChange={() => updateVictim("gender", g)}
                                            className="w-4 h-4 accent-[#3b827e]"
                                        />
                                        <span className="text-sm text-slate-600">{g}</span>
                                    </label>
                                ))}
                            </div>

                            <input
                                id="victim-nik"
                                type="text"
                                placeholder="Nomor Induk Kependudukan"
                                value={form.victim.nik}
                                onChange={(e) => updateVictim("nik", e.target.value)}
                                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition"
                            />

                            <input
                                id="victim-email"
                                type="email"
                                placeholder="Email"
                                value={form.victim.email}
                                onChange={(e) => updateVictim("email", e.target.value)}
                                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition"
                            />

                            <select
                                id="victim-instansi"
                                value={form.victim.instansi}
                                onChange={(e) => updateVictim("instansi", e.target.value)}
                                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition bg-white"
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

                            {/* Upload */}
                            <label
                                htmlFor="victim-file"
                                className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-lg p-5 cursor-pointer hover:border-[#3b827e] hover:bg-slate-50 transition group"
                            >
                                <Upload className="w-6 h-6 text-slate-400 group-hover:text-[#3b827e] transition" />
                                <span className="text-sm text-slate-500 group-hover:text-[#3b827e] transition">
                                    + Unggah File (opsional)
                                </span>
                                <input
                                    id="victim-file"
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => updateVictim("file", e.target.files?.[0] ?? null)}
                                />
                            </label>
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
                    <h3 className="text-base font-semibold text-slate-800">Informasi Kejadian</h3>

                    {/* Tanggal */}
                    <div className="flex items-center gap-3">
                        <label className="text-sm text-slate-600 font-medium w-36">
                            Tanggal Kejadian
                        </label>
                        <input
                            id="input-tanggal"
                            type="date"
                            value={form.tanggal}
                            onChange={(e) => update("tanggal", e.target.value)}
                            className="flex-1 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition"
                        />
                    </div>

                    {/* Waktu */}
                    <div className="flex items-center gap-3">
                        <label className="text-sm text-slate-600 font-medium w-36">
                            Waktu Kejadian
                        </label>
                        <input
                            id="input-waktu"
                            type="time"
                            value={form.waktu}
                            onChange={(e) => update("waktu", e.target.value)}
                            className="flex-1 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition"
                        />
                    </div>

                    {/* Jenis Pengaduan */}
                    <div className="flex items-center gap-3">
                        <label className="text-sm text-slate-600 font-medium w-36">
                            Pilih Jenis Pengaduan
                        </label>
                        <select
                            id="select-jenis"
                            value={form.jenisPengaduan}
                            onChange={(e) => update("jenisPengaduan", e.target.value as PengaduanType)}
                            className="flex-1 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition bg-white"
                        >
                            <option value="KK">KK</option>
                            <option value="PAK">PAK</option>
                        </select>
                    </div>

                    {/* Deskripsi */}
                    <textarea
                        id="input-deskripsi"
                        placeholder="Deskripsi Kejadian"
                        value={form.deskripsi}
                        onChange={(e) => update("deskripsi", e.target.value)}
                        rows={4}
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition resize-none"
                    />

                    {/* Lokasi */}
                    <div className="flex items-center gap-3">
                        <label className="text-sm text-slate-600 font-medium w-36">
                            Lokasi Kejadian
                        </label>
                        <input
                            id="input-lokasi"
                            type="text"
                            value={form.lokasi}
                            onChange={(e) => update("lokasi", e.target.value)}
                            className="flex-1 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition"
                        />
                    </div>

                    {/* K3 Status */}
                    <div className="space-y-2">
                        <p className="text-sm font-semibold text-slate-700">
                            Pelaksanaan K3 di Lokasi
                        </p>
                        <div className="flex gap-5">
                            {(["Baik", "Buruk"] as K3Status[]).map((s) => (
                                <label key={s} className="flex items-center gap-1.5 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="k3status"
                                        value={s}
                                        checked={form.k3Status === s}
                                        onChange={() => update("k3Status", s)}
                                        className="w-4 h-4 accent-[#3b827e]"
                                    />
                                    <span className="text-sm text-slate-600">{s}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Keterangan */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-slate-700">Keterangan</span>
                            <span className="text-xs text-slate-400">Dapat berupa alasan atau saran</span>
                        </div>
                        <input
                            id="input-keterangan"
                            type="text"
                            value={form.keterangan}
                            onChange={(e) => update("keterangan", e.target.value)}
                            className="w-full border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3b827e] transition"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between pt-2">
                        <button
                            id="btn-kembali"
                            onClick={onBack}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium px-5 py-2.5 rounded-full transition-all duration-200 text-sm"
                        >
                            Kembali
                        </button>
                        <button
                            id="btn-kirim"
                            onClick={onSubmit}
                            className="flex items-center gap-2 bg-[#3b827e] hover:bg-[#2f6e6a] text-white font-medium px-6 py-2.5 rounded-full transition-all duration-200 text-sm"
                        >
                            Kirim Laporan
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
