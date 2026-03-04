"use client";

export interface PerusahaanForm {
    namaPerusahaan: string;
    email: string;
    telepon: string;
    alamat: string;
    consent: boolean;
}

interface DataPerusahaanProps {
    form: PerusahaanForm;
    onChange: (form: PerusahaanForm) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function DataPerusahaan({ form, onChange, onNext, onBack }: DataPerusahaanProps) {
    const update = <K extends keyof PerusahaanForm>(key: K, value: PerusahaanForm[K]) => {
        onChange({ ...form, [key]: value });
    };

    const inputClass =
        "w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] focus:border-transparent transition";

    return (
        <section className="py-4">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-5">
                <h2 className="text-xl font-bold text-slate-800">Data Perusahaan</h2>

                <div className="border-t border-slate-200 pt-4 space-y-5">
                    <h3 className="text-base font-semibold text-slate-700">
                        Identitas Perusahaan
                    </h3>

                    {/* Nama Perusahaan */}
                    <input
                        id="input-nama-perusahaan"
                        type="text"
                        placeholder="Nama Perusahaan"
                        value={form.namaPerusahaan}
                        onChange={(e) => update("namaPerusahaan", e.target.value)}
                        className={inputClass}
                    />

                    {/* Email */}
                    <input
                        id="input-email-perusahaan"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputClass}
                    />

                    {/* Nomor Telepon */}
                    <input
                        id="input-telepon-perusahaan"
                        type="tel"
                        placeholder="Nomor Telepon"
                        value={form.telepon}
                        onChange={(e) => update("telepon", e.target.value)}
                        className={inputClass}
                    />

                    {/* Alamat Perusahaan */}
                    <textarea
                        id="input-alamat-perusahaan"
                        placeholder="Alamat Perusahaan"
                        rows={3}
                        value={form.alamat}
                        onChange={(e) => update("alamat", e.target.value)}
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] focus:border-transparent transition resize-none"
                    />

                    {/* Consent + Buttons */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <label className="flex items-start gap-2.5 cursor-pointer max-w-lg">
                            <input
                                id="checkbox-consent-perusahaan"
                                type="checkbox"
                                checked={form.consent}
                                onChange={(e) => update("consent", e.target.checked)}
                                className="w-4 h-4 mt-0.5 accent-[#3b827e] flex-shrink-0"
                            />
                            <span className="text-sm text-slate-600 leading-relaxed">
                                Saya menyatakan{" "}
                                <span className="font-bold text-slate-800">bahwa data yang</span>{" "}
                                diberikan benar. Saya menerima dan setuju dengan informed consent
                                platform ini.
                            </span>
                        </label>

                        <div className="flex justify-between gap-5 mt-8">
                            <button
                                type="button"
                                onClick={onBack}
                                className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-5 py-2.5 rounded-full transition-all duration-200 text-sm"
                            >
                                Kembali
                            </button>

                            <button
                                type="button"
                                onClick={onNext}
                                disabled={!form.consent}
                                className="flex items-center gap-2 bg-[#3b827e] hover:bg-[#2f6e6a] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-2.5 rounded-full transition-all duration-200 text-sm"
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
