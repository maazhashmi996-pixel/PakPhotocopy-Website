'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Award, CheckCircle2, MapPin, History, UserCheck, Star } from 'lucide-react';

export default function HomePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen text-neutral-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-white rounded-full text-xs font-bold tracking-wider uppercase">
              ✨ Premium Digital Hub
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-neutral-900">
              High-End Printing & <br />
              <span className="text-neutral-500 underline decoration-amber-500 decoration-4">Logistics Service.</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-xl">
              From microscopic laser micro-printing, premium 42" structural blueprint copies, and thesis hard-binding to nationwide swift delivery powered by our in-house MNP hub.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/services" className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-xl font-bold shadow-xl flex items-center gap-2 group transition-all">
                Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/mnp-contact" className="bg-white border border-neutral-200 hover:border-neutral-900 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
                MNP Nationwide Cargo
              </Link>
            </div>
          </motion.div>

          {/* Luxury Graphic Block */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative h-[450px] bg-white border border-neutral-100 rounded-3xl p-8 shadow-2xl flex flex-col justify-between overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-50 to-transparent pointer-events-none" />
            <div className="flex justify-between items-start z-10">
              <div className="space-y-1">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Premium Output</p>
                <h3 className="font-extrabold text-2xl">Ultra HD Laser</h3>
              </div>
              <span className="text-sm font-bold px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-lg">Active Depot</span>
            </div>

            {/* Visual element representing a paper block or printing mechanism */}
            <div className="relative my-auto flex justify-center items-center">
              <div className="w-48 h-48 bg-neutral-900/5 rounded-full absolute animate-ping duration-10000" />
              <div className="w-36 h-36 border-2 border-dashed border-neutral-200 rounded-2xl flex items-center justify-center p-4 transform rotate-12 group-hover:rotate-0 transition-transform duration-500 bg-white shadow-xl">
                <span className="font-mono text-xs font-bold text-neutral-400">80g & 100g Rims Available</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-neutral-100 z-10">
              <span className="text-xs font-semibold text-neutral-500">Urdu & English Master Composing</span>
              <span className="font-black text-lg">Rs. 5<span className="text-xs font-normal">/pg</span></span>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="border-neutral-200/60 max-w-7xl mx-auto" />

      {/* 📜 Pak Photocopy Legacy (Since 1997) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-neutral-100 rounded-3xl p-8 lg:p-14 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Side: Large PNG Logo */}
          <div className="md:col-span-4 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="relative w-56 h-56 bg-slate-50 border border-neutral-200/60 p-6 rounded-2xl flex items-center justify-center shadow-inner group"
            >
              <img
                src="/logo.png"
                alt="Pak Photocopy Established 1997 Logo"
                className="w-full h-full object-contain filter drop-shadow-md group-hover:brightness-110 transition-all"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/200?text=Pak+Photocopy"; }}
              />
            </motion.div>
          </div>

          {/* Right Side: Professional Legacy Details */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs tracking-widest uppercase">
              <History className="w-4 h-4" /> Est. 1997 — Three Decades of Excellence
            </div>
            <h2 className="text-3xl font-black text-neutral-900 tracking-tight sm:text-4xl">
              Serving with Immaculate Document Solutions Since 1997
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Established in 1997, Pak Photocopy has evolved from a pioneering local copy shop into Lahore's premier high-end digital duplication hub. For nearly three decades, we have remained deeply committed to supplying flawless double-sided laser printing, wholesale high-brightness paper rims, and intricate structural map plotting. Our longevity is a testament to our unrelenting pursuit of absolute paper quality and rapid turnaround times.
            </p>
            <div className="flex gap-6 pt-2">
              <div>
                <p className="font-black text-neutral-950 text-xl">29+</p>
                <p className="text-[10px] uppercase font-bold text-neutral-400">Years Experience</p>
              </div>
              <div className="w-px h-8 bg-neutral-200 self-center" />
              <div>
                <p className="font-black text-neutral-950 text-xl">100%</p>
                <p className="text-[10px] uppercase font-bold text-neutral-400">Jam-Free Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 👑 CEO Dawood Gee Profile Block */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/70 border border-neutral-200/50 rounded-3xl p-8 lg:p-14 shadow-md grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Side: Bio & Credentials */}
          <div className="md:col-span-7 space-y-4 order-2 md:order-1">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs tracking-widest uppercase">
              <UserCheck className="w-4 h-4" /> Corporate Leadership
            </div>
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-neutral-900 tracking-tight">Dawood Gee</h2>
              <p className="text-xs font-extrabold text-neutral-500 uppercase tracking-wider">Founder & Chief Executive Officer</p>
            </div>
            <p className="text-sm text-neutral-600 italic leading-relaxed">
              "At Pak Photocopy, we don't just transfer ink to paper; we secure and deliver your critical intellectual property, business blue-prints, and academic milestones. Since anchoring this facility in 1997, my philosophy has been clear: maintain VIP grade heavy machinery, foster direct logistics integrations like MNP, and never compromise on a client's trust."
            </p>
            <div className="pt-2 flex items-center gap-2">
              <div className="flex text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-xs font-mono text-neutral-400">— Executive Signature Line</span>
            </div>
          </div>

          {/* Right Side: Enhanced Large & Colorful CEO Picture Asset */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <motion.div
              whileHover={{ y: -4 }}
              className="relative w-full max-w-[320px] h-80 md:h-[380px] bg-neutral-900 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            >
              <img
                src="/11.jpeg"
                alt="Dawood Gee - CEO Pak Photocopy"
                className="w-full h-full object-cover object-top transition-all duration-500"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/350x450?text=Dawood+Gee+CEO"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent flex items-end p-3" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MNP In-house Integration Segment */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white rounded-3xl p-8 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-10 -translate-y-10">
            <MapPin className="w-96 h-96" />
          </div>
          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-md text-xs font-black tracking-widest uppercase">
              Exclusive Domestic Cargo Hub
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Pak Photocopy Interlinked With MNP Courier Service
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              We have integrated a full-scale functioning MNP Branch right inside our facility. Print your mega maps, bulk thesis bindings, or legal documentation books and pass them straight to the MNP deck for seamless city-to-city secured home delivery overnight.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300 font-medium">Inter-city Secured Cargo Tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300 font-medium">Overnight Safe Handle Book Packing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Mechanics Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all">
            <Zap className="w-8 h-8 text-neutral-900 mb-4" />
            <h3 className="font-bold text-lg mb-2">Industrial Plotters</h3>
            <p className="text-sm text-neutral-600">Equipped with 42 inch plotting and high precision heavy cutters for elite precision maps and blueprints.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all">
            <Award className="w-8 h-8 text-neutral-900 mb-4" />
            <h3 className="font-bold text-lg mb-2">Flawless Hard Bindings</h3>
            <p className="text-sm text-neutral-600">Gold gilded covers for thesis and structural ledger journals, crafted by elite binding artisans.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all">
            <ShieldCheck className="w-8 h-8 text-neutral-900 mb-4" />
            <h3 className="font-bold text-lg mb-2">Strict Confidentiality</h3>
            <p className="text-sm text-neutral-600">Enterprise data security protocols ensuring your custom prints and records are immediately cleared post production.</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}