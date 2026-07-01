'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/data/mockData';
import Image from 'next/image';

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState<'all' | 'printing' | 'binding' | 'copying' | 'specialized'>('all');

    const filteredServices = activeTab === 'all'
        ? servicesData
        : servicesData.filter(s => s.category === activeTab);

    const tabs = [
        { id: 'all', label: 'All Services' },
        { id: 'printing', label: 'Printing & Composing' },
        { id: 'binding', label: 'Premium Binding' },
        { id: 'copying', label: 'Photocopy & Scanning' },
        { id: 'specialized', label: 'Specialized (Maps/PVC)' },
    ];

    return (
        <div className="bg-slate-50/40 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">Our Production Deck</h1>
                    <p className="text-neutral-600">Choose from a variety of document configuration systems, high speed color prints, and custom layout styling options.</p>
                </div>

                {/* Dynamic Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white p-2 rounded-2xl shadow-sm border border-neutral-100 max-w-3xl mx-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide uppercase transition-all ${activeTab === tab.id
                                    ? 'bg-neutral-900 text-white shadow-md'
                                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Services Showcase Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map(service => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={service.id}
                                className="bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-neutral-900 shadow-sm border border-neutral-200">
                                            {service.category.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-2">
                                        <h3 className="font-extrabold text-xl tracking-tight text-neutral-900">{service.title}</h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-0 flex justify-between items-center border-t border-neutral-50 mt-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Rate Card</span>
                                    <span className="font-black text-md text-neutral-900 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-100">
                                        {service.price}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}