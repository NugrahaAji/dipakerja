"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "ADEK3", href: "/adek3" },
    { label: "SORE", href: "/sore" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/uness.png" alt="" height={48} width={48}/>
                    <span className="font-semibold text-xl text-[#2C3E50] tracking-wide">
                        DIPAKERJA
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
                                        ? "text-[#2F7E79] bg-[#f0faf9] font-medium border border-[#2F7E79]/20"
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
                <div className="md:hidden border-t border-[#E5E7EB] px-6 py-4 flex flex-col gap-2 relative">
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
