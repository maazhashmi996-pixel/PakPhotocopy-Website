'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Phone, Clock } from 'lucide-react';

export default function MnpContactPage() {
    // فارم کی اسٹیٹ ہینڈلنگ
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        service: 'Bulk Book Printing & Fast Track Delivery',
        city: '',
        instructions: ''
    });

    const WHATSAPP_NUMBER = "923001234567";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // اگر بنیادی فیلڈز خالی ہوں تو یہیں روک دیں
        if (!formData.fullName || !formData.phone) {
            alert("Please fill in your Name and Phone Number.");
            return;
        }

        // واٹس ایپ میسج کا پریمیم فارمیٹ
        const message = `*🌟 NEW PRINTING & CARGO ORDER 🌟* \n\n` +
            `*👤 Client Name:* ${formData.fullName}\n` +
            `*📞 Phone:* ${formData.phone}\n` +
            `*🛠️ Service:* ${formData.service}\n` +
            `*📍 Destination City:* ${formData.city || 'N/A'}\n\n` +
            `*📝 Custom Instructions:* \n${formData.instructions || 'No extra instructions provided.'}\n\n` +
            `_Sent via Pak Photocopy Digital Portal_`;

        // URL Safe encoding
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

        // نیو ٹیب میں واٹس ایپ اوپن کریں
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-slate-50/40 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Logistics and Branch Specs */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-3">
                            <span className="bg-amber-600 text-white font-black text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-lg">
                                Authorized Setup
                            </span>
                            <h1 className="text-4xl font-black text-neutral-900 tracking-tight">MNP Express Desk</h1>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                No need to take heavy files and boxes somewhere else. Our integrated MNP branch processes parcels straight from the printing machine to the delivery rider grid instantly.
                            </p>
                        </div>

                        <div className="space-y-4 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-neutral-50 text-neutral-900 rounded-xl border border-neutral-100">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-neutral-900">Main Hub Address</h4>
                                    <p className="text-xs text-neutral-500 mt-0.5">Pak Photocopy Midland Plaza, Near Defence Mor Courier New Super Town Lahore.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-neutral-50 text-neutral-900 rounded-xl border border-neutral-100">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-neutral-900">Timings</h4>
                                    <p className="text-xs text-neutral-500 mt-0.5">09:00 AM — 8:00 PM (Sunday Closed)</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-neutral-50 text-neutral-900 rounded-xl border border-neutral-100">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-neutral-900">Direct Inquiries</h4>
                                    <p className="text-xs text-neutral-500 mt-0.5">+92 42 3555 9876 / +92 300 1234567</p>
                                </div>
                            </div>
                        </div>

                        {/* MNP Cargo Highlights */}
                        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-6 rounded-2xl shadow-xl space-y-3">
                            <div className="flex items-center gap-2 text-amber-400">
                                <Truck className="w-5 h-5 animate-bounce" />
                                <span className="text-xs font-black tracking-wider uppercase">City-to-City Delivery Rates</span>
                            </div>
                            <p className="text-xs text-neutral-300">
                                Documents up to 0.5 KG starting from just **Rs. 250** with premium water-proof secure packaging cover.
                            </p>
                        </div>
                    </div>

                    {/* Premium Digital Booking Form */}
                    <div className="lg:col-span-7">
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white border border-neutral-100 p-8 rounded-3xl shadow-xl space-y-6">
                            <div>
                                <h3 className="text-xl font-extrabold text-neutral-900">Submit Printing & Delivery Order</h3>
                                <p className="text-xs text-neutral-500 mt-1">Fill out the job specifications below. Clicking submit will instantly draft a secure message to our WhatsApp team desk.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-neutral-600">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50 border border-neutral-200 focus:border-neutral-900 focus:bg-white p-3.5 rounded-xl text-sm outline-none transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-neutral-600">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="03000000000"
                                            className="w-full bg-slate-50 border border-neutral-200 focus:border-neutral-900 focus:bg-white p-3.5 rounded-xl text-sm outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-neutral-600">Select Primary Service Requirement</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-neutral-200 focus:border-neutral-900 focus:bg-white p-3.5 rounded-xl text-sm outline-none transition-all appearance-none"
                                    >
                                        <option>Bulk Book Printing & Fast Track Delivery</option>
                                        <option>Thesis Hard Binding (+ Gold Embossing)</option>
                                        <option>Large Map Plotting (42 Inches Scanning)</option>
                                        <option>Paper Rims Wholesale Order</option>
                                        <option>Urdu/English Composing & PVC Intelligent Cards</option>
                                    </select>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-neutral-600">Destination City (For MNP Cargo Setup)</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="e.g. Karachi, Islamabad, Multan"
                                        className="w-full bg-slate-50 border border-neutral-200 focus:border-neutral-900 focus:bg-white p-3.5 rounded-xl text-sm outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-neutral-600">Order Instructions / Copy Counts</label>
                                    <textarea
                                        rows={4}
                                        name="instructions"
                                        value={formData.instructions}
                                        onChange={handleChange}
                                        placeholder="Please describe page requirements, paper weight preferences (80g/100g), or courier specifics..."
                                        className="w-full bg-slate-50 border border-neutral-200 focus:border-neutral-900 focus:bg-white p-3.5 rounded-xl text-sm outline-none transition-all resize-none"
                                    />
                                </div>

                                <button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 rounded-xl text-sm transition-all shadow-lg hover:shadow-xl uppercase tracking-wider flex items-center justify-center gap-2">
                                    🚀 Send Order to WhatsApp
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}