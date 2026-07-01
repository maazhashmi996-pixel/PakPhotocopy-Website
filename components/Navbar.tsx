'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Printer, Menu, X, Truck } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Our Services', href: '/services' },
        { name: 'Paper & Stationery', href: '/products' },
        { name: 'MNP Courier & Contact', href: '/mnp-contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 dark:bg-neutral-900/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="p-2.5 bg-neutral-900 text-white rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                            <Printer className="w-6 h-6 animate-pulse" />
                        </div>
                        <div>
                            <span className="font-extrabold text-xl tracking-tight text-neutral-900 uppercase block">PAK PHOTOCOPY</span>
                            <span className="text-xs text-amber-600 font-semibold tracking-widest flex items-center gap-1">
                                <Truck className="w-3 h-3" /> OFFICIAL MNP PARTNER
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link key={link.href} href={link.href} className="relative py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                                    {link.name}
                                    {isActive && (
                                        <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                        <Link href="/mnp-contact" className="bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-all hover:shadow-lg">
                            Book Parcel
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-neutral-700">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-xl text-base font-medium text-neutral-700 hover:bg-neutral-50">
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/mnp-contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-neutral-900 text-white py-3 rounded-xl font-semibold">
                        Book Parcel via MNP
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}