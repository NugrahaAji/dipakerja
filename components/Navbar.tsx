"use client";

import { Shield } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Beranda", href: "/pelaporan" },
    { label: "ADEK3", href: "/adek3" },
    { label: "SORE", href: "/" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#2F7E79] flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-base text-[#2C3E50] tracking-wide">
                        DIPA KERJA
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200
                                    ${isActive
                                        ? "text-[#2F7E79] bg-[#e8f4f3] font-semibold"
                                        : "text-[#4B5563] hover:text-[#2F7E79] hover:bg-slate-50"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
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
                <div className="md:hidden border-t border-[#E5E7EB] bg-white px-6 py-4 flex flex-col gap-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200
                                    ${isActive
                                        ? "text-[#2F7E79] bg-[#e8f4f3] font-semibold"
                                        : "text-[#4B5563] hover:text-[#2F7E79] hover:bg-slate-50"
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
