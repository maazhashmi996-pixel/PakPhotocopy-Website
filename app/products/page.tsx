'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '@/data/mockData';
import { ShoppingBag, X, ShoppingCart } from 'lucide-react';

// Product Type (اگر آپ نے types فولڈر میں رکھی ہے تو وہاں سے امپورٹ کر لیں)
interface ProductItem {
    id: string;
    name: string;
    specification: string;
    price: string;
    image: string;
    category: string;
}

export default function ProductsPage() {
    // Modal اور فارم کی اسٹیٹ
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        quantity: '1'
    });

    const WHATSAPP_NUMBER = "923001234567"; // 👈 یہاں اپنا اصلی واٹس ایپ نمبر لکھیں

    const handleOpenModal = (product: ProductItem) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
        // پچھلا فارم ڈیٹا ری سیٹ کرنے کے لیے
        setFormData({ name: '', phone: '', address: '', quantity: '1' });
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.address) {
            alert("Please fill all required fields.");
            return;
        }

        // واٹس ایپ میسج کا پریمیم فارمیٹ
        const message = `*📦 NEW BULK ORDER INQUIRY* \n\n` +
            `*👤 Client Name:* ${formData.name}\n` +
            `*📞 Phone:* ${formData.phone}\n` +
            `*📍 Delivery Address:* ${formData.address}\n\n` +
            `*🛒 Selected Product:* ${selectedProduct?.name}\n` +
            `*💵 Unit Price:* ${selectedProduct?.price}\n` +
            `*🔢 Quantity Required:* ${formData.quantity}\n\n` +
            `_Sent via Pak Photocopy Products Portal_`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        handleCloseModal(); // میسج بھیجنے کے بعد موڈل کلوز کر دیں
    };

    return (
        <div className="bg-slate-50/40 min-h-screen py-16 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <span className="text-xs font-bold tracking-widest text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/60 uppercase">Imported Stock</span>
                    <h1 className="text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">Paper Rims & Stationery</h1>
                    <p className="text-neutral-600">High brightness, jam-free paper rims available in wholesale and retail structures for immaculate double-sided copies.</p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsData.map((product, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            key={product.id}
                            className="bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all p-5 flex flex-col justify-between group"
                        >
                            <div className="space-y-4">
                                <div className="relative h-48 rounded-xl overflow-hidden bg-neutral-50">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <span className="text-[10px] font-extrabold uppercase bg-neutral-100 text-neutral-600 px-2 py-1 rounded">
                                        {product.category}
                                    </span>
                                    <h3 className="font-bold text-lg text-neutral-900 mt-2">{product.name}</h3>
                                    <p className="text-xs text-neutral-500 mt-1">{product.specification}</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-6 pt-4 border-t border-neutral-50">
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-neutral-400">Price</p>
                                    <p className="font-black text-neutral-900 text-base">{product.price}</p>
                                </div>
                                {/* Order Button */}
                                <button
                                    onClick={() => handleOpenModal(product)}
                                    className="bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95"
                                >
                                    <ShoppingBag className="w-3.5 h-3.5" /> Order Bulk
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Popup Modal (AnimatePresence for smooth entry/exit) */}
            <AnimatePresence>
                {isModalOpen && selectedProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        {/* Background Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
                        />

                        {/* Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white w-full max-w-lg rounded-3xl p-6 md:p-8 shadow-2xl z-10"
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 p-2 bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                                    <ShoppingCart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-neutral-900 tracking-tight">Complete Your Order</h3>
                                    <p className="text-xs text-neutral-500">Provide details for home delivery via MNP.</p>
                                </div>
                            </div>

                            {/* Selected Product Highlight */}
                            <div className="flex items-center gap-4 bg-slate-50 border border-neutral-100 p-4 rounded-xl mb-6">
                                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-16 h-16 rounded-lg object-cover shadow-sm" />
                                <div>
                                    <h4 className="text-sm font-bold text-neutral-900">{selectedProduct.name}</h4>
                                    <p className="text-xs text-amber-600 font-semibold">{selectedProduct.price}</p>
                                </div>
                            </div>

                            {/* Form Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-neutral-600">Full Name</label>
                                        <input
                                            type="text" name="name" value={formData.name} onChange={handleChange} required
                                            placeholder="e.g. Maaz Hashmi"
                                            className="w-full bg-slate-50 border border-neutral-200 focus:border-neutral-900 focus:bg-white p-3 rounded-xl text-sm outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-neutral-600">Phone Number</label>
                                        <input
                                            type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                                            placeholder="03000000000"
                                            className="w-full bg-slate-50 border border-neutral-200 focus:border-neutral-900 focus:bg-white p-3 rounded-xl text-sm outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                    <div className="sm:col-span-8 space-y-1">
                                        <label className="text-xs font-bold text-neutral-600">Complete Delivery Address</label>
                                        <input
                                            type="text" name="address" value={formData.address} onChange={handleChange} required
                                            placeholder="House, Street, Area, City"
                                            className="w-full bg-slate-50 border border-neutral-200 focus:border-neutral-900 focus:bg-white p-3 rounded-xl text-sm outline-none transition-all"
                                        />
                                    </div>
                                    <div className="sm:col-span-4 space-y-1">
                                        <label className="text-xs font-bold text-neutral-600">Quantity</label>
                                        <input
                                            type="number" name="quantity" min="1" value={formData.quantity} onChange={handleChange} required
                                            className="w-full bg-slate-50 border border-neutral-200 focus:border-neutral-900 focus:bg-white p-3 rounded-xl text-sm outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="w-full mt-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg hover:shadow-xl uppercase tracking-wider">
                                    Proceed to WhatsApp
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}