import Navbar from "@/components/Navbar";

export default function Adek3Page() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#e8f4f3] border-2 border-[#3b827e] flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#3b827e] font-bold text-lg">A3</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-800">ADEK3</h1>
                <p className="text-slate-500 text-sm max-w-sm">
                    Halaman ADEK3 sedang dalam pengembangan. Desain akan segera hadir.
                </p>
            </div>
        </div>
    );
}
