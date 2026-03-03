export default function LegalSection() {
    const laws = [
        "Undang-Undang No. 13 Tahun 2003 tentang Ketenagakerjaan.",
        "Permenaker No. 5 Tahun 2018 tentang K3 Lingkungan Kerja.",
        "Permenkes No. 66 Tahun 2016 tentang Kesehatan Kerja.",
        "PP No. 88 Tahun 2019 tentang Kesehatan Pekerja.",
    ];

    return (
        <section className="py-0">
            <div className="max-w-6xl mx-auto px-6">

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10">

                    <h3 className="text-2xl font-semibold text-slate-800 mb-10">
                        Dasar Hukum Kewajiban MCU Tahunan
                    </h3>

                    <div className="space-y-6">
                        {laws.map((law, index) => (
                            <div key={index} className="flex gap-4">

                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-50 text-teal-600 text-sm font-medium">
                                    {index + 1}
                                </div>

                                <p className="text-base text-slate-600 leading-relaxed">
                                    {law}
                                </p>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}