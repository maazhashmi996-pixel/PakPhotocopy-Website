'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, ArrowUpRight, Truck } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home Hub', href: '/' },
        { name: 'Production Deck', href: '/services' },
        { name: 'Paper & Stationery', href: '/products' },
        { name: 'MNP Courier & Contact', href: '/mnp-contact' },
    ];

    const servicesLinks = [
        { name: 'Book Printing', href: '/services' },
        { name: 'Thesis Hard Binding', href: '/services' },
        { name: '42" Map Plotting', href: '/services' },
        { name: 'PVC Smart Cards', href: '/services' },
    ];

    return (
        <footer className="bg-white border-t border-neutral-100 text-neutral-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-neutral-100">

                    {/* Brand/Logo Section */}
                    <div className="md:col-span-4 space-y-5">
                        <Link href="/" className="flex items-center gap-3">
                            {/* Logo PNG Asset Container */}
                            <div className="relative w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-100 p-1 flex items-center justify-center">
                                <img
                                    src="/logo.png"
                                    alt="Pak Photocopy Logo"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        // اگر لوگو امیج نہ ملے تو بیک اپ ٹیکسٹ شو ہو جائے
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            <div>
                                <span className="font-black text-lg tracking-tight uppercase block">PAK PHOTOCOPY</span>
                                <span className="text-[10px] text-amber-600 font-bold tracking-widest flex items-center gap-1">
                                    <Truck className="w-3 h-3" /> OFFICIAL MNP HUB
                                </span>
                            </div>
                        </Link>
                        <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
                            Premium digital duplication, large scale industrial drawing prints, and high-end thesis bindings interlinked directly with nationwide MNP logistics networks.
                        </p>
                    </div>

                    {/* Quick Navigation Links */}
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400">Navigation</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-neutral-600 hover:text-neutral-900 font-medium transition-colors inline-flex items-center gap-0.5 group">
                                        {link.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Featured Core Offerings */}
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400">Core Services</h4>
                        <ul className="space-y-2.5">
                            {servicesLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-neutral-600 hover:text-neutral-900 font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Store Credentials Section */}
                    <div className="md:col-span-4 space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400">Hub Identity</h4>
                        <div className="space-y-3.5">
                            {/* Accurate Custom Address */}
                            <div className="flex gap-3 items-start text-sm text-neutral-600">
                                <MapPin className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                                <span className="text-xs leading-relaxed">
                                    Pak Photocopy, Defence Mor, Midland Plaza, Near Cavalry Ground, Lahore.
                                </span>
                            </div>

                            {/* Verified Hotlines */}
                            <div className="flex gap-3 items-start text-sm text-neutral-600">
                                <Phone className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                                <div className="flex flex-col text-xs font-bold text-neutral-800 space-y-1">
                                    <a href="tel:+923004342944" className="hover:text-amber-600 transition-colors">+92 300 4342944</a>
                                    <a href="tel:+923234342944" className="hover:text-amber-600 transition-colors">+92 323 4342944</a>
                                </div>
                            </div>

                            {/* Active Operational Window */}
                            <div className="flex gap-3 items-start text-sm text-neutral-600">
                                <Clock className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                                <span className="text-xs">8:30 AM — 10:15 PM <span className="text-neutral-400 font-medium">(Sunday Opened)</span></span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Copyright Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-medium">
                    <p>© {currentYear} Pak Photocopy & Document Solutions. All Rights Reserved.</p>
                    <div className="flex items-center gap-1 text-neutral-500">
                        Powered by MNP Logistics Network &
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="text-neutral-950 font-black cursor-pointer underline decoration-amber-500"
                        >
                            VIP UI Architecture
                        </motion.span>
                    </div>
                </div>

            </div>
        </footer>
    );
}