"use client";

export default function AboutDipaKerja() {
    return (
        <section className="py-12">
            <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
                {/* Title */}
                <h1 className="text-2xl font-bold text-slate-800">Tentang DIPA KERJA</h1>

                {/* Intro paragraphs */}
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                    <p>
                        DIPA KERJA (Digital Inspection &amp; Prevention of Accidents Kerja) adalah platform
                        digital yang dikembangkan untuk mendukung sistem pelaporan, pemantauan, dan evaluasi
                        keselamatan serta kesehatan kerja (K3) di Indonesia.
                    </p>
                    <p>
                        Platform ini dirancang sebagai sarana transparansi dan penguatan budaya keselamatan
                        kerja melalui pendekatan berbasis data (data-driven safety system).
                    </p>
                    <p className="font-semibold text-slate-700">DIPA KERJA memungkinkan:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Pelaporan kecelakaan kerja dan penyakit akibat kerja (KK/PAK)</li>
                        <li>Evaluasi pelaksanaan K3 di perusahaan</li>
                        <li>Monitoring kepatuhan pemeriksaan kesehatan kerja (MCU tahunan)</li>
                        <li>Penyediaan skor keselamatan perusahaan secara terbuka</li>
                    </ul>
                    <p>
                        Kami percaya bahwa keselamatan kerja bukan hanya kewajiban regulatif, tetapi merupakan
                        investasi jangka panjang dalam perlindungan tenaga kerja dan keberlanjutan perusahaan.
                    </p>
                </div>

                {/* Visi */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-800">🎯 Visi</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Mewujudkan ekosistem kerja yang aman, sehat, dan transparan melalui transformasi digital
                        sistem keselamatan dan kesehatan kerja di Indonesia.
                    </p>
                </div>

                {/* Misi */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-800">🎯 Misi</h2>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm leading-relaxed pl-2">
                        <li>Meningkatkan akses pelaporan kejadian kerja secara cepat dan akurat.</li>
                        <li>Mendorong akuntabilitas perusahaan dalam penerapan sistem manajemen K3.</li>
                        <li>Menyediakan sistem penilaian berbasis indikator keselamatan kerja.</li>
                        <li>Mendukung pengambilan kebijakan berbasis data nasional K3.</li>
                    </ul>
                </div>

                {/* Nilai Utama */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-800">💡 Nilai Utama Kami</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Transparansi",
                            "Integritas",
                            "Inovasi",
                            "Perlindungan Pekerja",
                            "Kolaborasi Lintas Sektor",
                        ].map((nilai) => (
                            <span
                                key={nilai}
                                className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200"
                            >
                                {nilai}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Regulasi */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-800">🛡 Dasar Regulasi</h2>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm leading-relaxed pl-2">
                        <li>Undang-Undang No. 1 Tahun 1970</li>
                        <li>Undang-Undang No. 13 Tahun 2003</li>
                        <li>PP No. 50 Tahun 2012</li>
                        <li>Permenaker No. 5 Tahun 2018</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
