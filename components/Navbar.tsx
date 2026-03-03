"use client";

import { Shield } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { label: "Beranda", href: "#" },
    { label: "Top Perusahaan", href: "#top-perusahaan" },
    { label: "Panduan", href: "#" },
    { label: "FAQ", href: "#" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-[#2F7E79] flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="font-bold text-lg text-[#2C3E50] tracking-wide">SORE</span>
                        <span className="text-[10px] text-[#6B7280]">Safety Score Public</span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-[#2C3E50] hover:text-[#2F7E79] transition-colors duration-200 font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#"
                        className="bg-[#2F7E79] text-white text-sm font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-200"
                    >
                        Login
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-5 h-0.5 bg-[#2C3E50] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <span
                        className={`block w-5 h-0.5 bg-[#2C3E50] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`block w-5 h-0.5 bg-[#2C3E50] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-[#E5E7EB] bg-white px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-[#2C3E50] hover:text-[#2F7E79] transition-colors duration-200 font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#"
                        className="bg-[#2F7E79] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200 text-center"
                    >
                        Login
                    </a>
                </div>
            )}
        </nav>
    );
}
