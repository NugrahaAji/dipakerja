"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, Mail, Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function LoginPerusahaanPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Email dan password wajib diisi.");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            router.push("/?step=2&type=perusahaan");
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />


            {/* Main content */}
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">

                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#3b827e] transition-colors duration-200 mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
                        Kembali ke Beranda
                    </Link>

                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

                        {/* Header */}
                        <div className="flex flex-col items-center text-center mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-[#e8f4f3] flex items-center justify-center mb-4">
                                <Building2 className="w-7 h-7 text-[#3b827e]" />
                            </div>
                            <h1 className="text-xl font-bold text-slate-800">
                                Login Perusahaan
                            </h1>
                            <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                                Masuk untuk melaporkan kejadian kecelakaan kerja
                                <br />atau penyakit akibat kerja atas nama perusahaan.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleLogin} className="space-y-4">

                            {/* Email field */}
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                                    Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <Mail className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="email@perusahaan.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] focus:border-transparent transition bg-gray-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            {/* Password field */}
                            <div className="space-y-1.5">
                                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <Lock className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full border border-gray-200 rounded-xl pl-10 pr-11 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b827e] focus:border-transparent transition bg-gray-50 focus:bg-white"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-4 h-4" />
                                        ) : (
                                            <Eye className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Error message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-2.5">
                                    {error}
                                </div>
                            )}

                            {/* Forgot password */}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="text-xs text-[#3b827e] hover:underline"
                                >
                                    Lupa password?
                                </button>
                            </div>

                            {/* Submit button */}
                            <button
                                id="btn-masuk"
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-200 text-sm mt-2"
                            >
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin w-4 h-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8z"
                                            />
                                        </svg>
                                        Memproses...
                                    </>
                                ) : (
                                    "Masuk"
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                            <p className="text-xs text-slate-400">
                                Belum memiliki akun perusahaan?{" "}
                                <button className="text-[#3b827e] font-semibold hover:underline">
                                    Daftar di sini
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* Footer note */}
                    <p className="text-center text-xs text-slate-400 mt-6 leading-relaxed">
                        Portal ini digunakan khusus untuk pelaporan Keselamatan dan Kesehatan Kerja (K3).
                        <br />Data Anda dijaga kerahasiaannya.
                    </p>
                </div>
            </div>
        </div>
    );
}
