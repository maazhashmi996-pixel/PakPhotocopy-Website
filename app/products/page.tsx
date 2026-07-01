'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { productsData } from '@/data/mockData';
import { ShoppingBag, X, ShoppingCart, Sparkles } from 'lucide-react';

interface ProductItem {
    id: string;
    name: string;
    specification: string;
    price: string;
    image: string;
    category: string;
}

export default function ProductsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
    const [formData, setFormData] = useState({ name: '', phone: '', address: '', quantity: '1' });

    const WHATSAPP_NUMBER = "923001234567";

    const handleOpenModal = (product: ProductItem) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
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

        const message = `*📦 NEW BULK ORDER INQUIRY* \n\n` +
            `*👤 Client Name:* ${formData.name}\n` +
            `*📞 Phone:* ${formData.phone}\n` +
            `*📍 Delivery Address:* ${formData.address}\n\n` +
            `*🛒 Selected Product:* ${selectedProduct?.name}\n` +
            `*💵 Unit Price:* ${selectedProduct?.price}\n` +
            `*🔢 Quantity Required:* ${formData.quantity}\n\n` +
            `_Sent via Pak Photocopy Products Portal_`;

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        handleCloseModal();
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div className="bg-slate-50/50 min-h-screen py-20 selection:bg-amber-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-2xl mx-auto mb-16 space-y-4"
                >
                    <span className="inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] text-amber-600 bg-amber-100/50 px-4 py-2 rounded-full uppercase">
                        <Sparkles className="w-3 h-3" /> Premium Collection
                    </span>
                    <h1 className="text-5xl font-black text-neutral-900 tracking-tighter">Office Essentials</h1>
                    <p className="text-neutral-500 font-medium">Professional grade stationery delivered with speed.</p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {productsData.map((product) => (
                        <motion.div
                            variants={itemVariants}
                            key={product.id}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-300 p-6 flex flex-col group"
                        >
                            <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-white/90 backdrop-blur text-[10px] font-black uppercase px-3 py-1 rounded-full text-neutral-900">{product.category}</span>
                                </div>
                            </div>

                            <div className="flex-grow">
                                <h3 className="font-black text-xl text-neutral-900">{product.name}</h3>
                                <p className="text-sm text-neutral-500 mt-2 mb-4 line-clamp-2">{product.specification}</p>
                            </div>

                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-50">
                                <p className="font-black text-xl text-neutral-900">{product.price}</p>
                                <button
                                    onClick={() => handleOpenModal(product)}
                                    className="bg-neutral-900 hover:bg-amber-500 text-white px-6 py-3 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 active:scale-90"
                                >
                                    <ShoppingBag className="w-4 h-4" /> Order Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && selectedProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            className="bg-white rounded-[2rem] p-8 w-full max-w-lg shadow-2xl relative z-10"
                        >
                            <button onClick={handleCloseModal} className="absolute top-6 right-6 p-2 bg-neutral-100 rounded-full hover:bg-neutral-200">
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="text-2xl font-black mb-6">Confirm Order</h2>

                            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl mb-6">
                                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-16 h-16 rounded-xl object-cover" />
                                <div>
                                    <h4 className="font-bold">{selectedProduct.name}</h4>
                                    <p className="text-amber-600 font-black">{selectedProduct.price}</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-4 bg-neutral-50 rounded-xl outline-none" />
                                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-4 bg-neutral-50 rounded-xl outline-none" />
                                <input type="text" name="address" placeholder="Delivery Address" value={formData.address} onChange={handleChange} required className="w-full p-4 bg-neutral-50 rounded-xl outline-none" />
                                <button type="submit" className="w-full bg-neutral-900 text-white font-black py-4 rounded-xl hover:bg-amber-500 transition-colors">
                                    Send to WhatsApp
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}