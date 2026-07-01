'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Truck } from 'lucide-react';

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
                    {/* Brand Logo & Subtitle */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 flex items-center justify-center bg-slate-50 border border-neutral-100 p-1.5 rounded-xl shadow-sm group-hover:scale-105 transition-transform">
                            <img
                                src="/logo.png"
                                alt="Pak Photocopy Logo"
                                className="w-full h-full object-contain filter drop-shadow-sm"
                                onError={(e) => { e.currentTarget.src = "https://placehold.co/50?text=PP"; }}
                            />
                        </div>
                        <div>
                            <span className="font-black text-lg tracking-tight text-neutral-900 uppercase block leading-none">
                                PAK PHOTOCOPY
                            </span>
                            <span className="text-[10px] text-amber-600 font-bold tracking-widest flex items-center gap-1 mt-1 uppercase">
                                <Truck className="w-3 h-3" /> Official MNP Partner
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative py-2 text-sm font-semibold transition-colors ${isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 rounded-full"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                        <Link href="/mnp-contact" className="bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all hover:shadow-lg">
                            Book Parcel
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with Smooth Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 px-4 pb-6 space-y-1.5 overflow-hidden"
                    >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${isActive ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <div className="pt-2">
                            <Link
                                href="/mnp-contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-neutral-900 hover:bg-neutral-800 text-white py-3.5 rounded-xl font-bold transition-all shadow-md"
                            >
                                Book Parcel via MNP
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}