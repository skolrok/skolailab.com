/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useLanguage } from './LanguageContext';

export default function Vibecoding({ onOpenContact }: { onOpenContact?: () => void }) {
  const { t } = useLanguage() as any;

  useEffect(() => {
    document.title = "Manifest | SKOL AI Kreativni Studio";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
      <Navbar />

      {/* Hero Sekcija */}
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 pt-32 text-center md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center z-10 transform-gpu will-change-transform">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[1.1] md:leading-[1.05] tracking-tight mb-8 text-white drop-shadow-2xl transform-gpu will-change-transform"
          >
            {t.manifest.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs md:text-base text-gray-300 tracking-widest uppercase max-w-2xl leading-relaxed px-2 md:px-0 transform-gpu will-change-transform"
          >
            {t.manifest.subtitle}
          </motion.p>
        </div>
        
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-gradient-to-tr from-[#00f0ff]/5 to-[#ff00ff]/5 rounded-full blur-[120px] pointer-events-none -z-0"></div>
      </main>

      {/* Tekstovni blok (Vibecoding & AI) */}
      <section className="relative px-4 py-16 md:px-12 lg:py-32 max-w-5xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-300 transform-gpu will-change-transform"
        >
          {t.manifest.quote}
        </motion.p>
      </section>

      {/* KREATIVNA VIZIJA */}
      <section className="relative px-4 py-16 md:px-12 lg:py-40 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Vizualija */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 aspect-[3/4] bg-neutral-900 rounded-2xl relative overflow-hidden border border-white/10 shadow-2xl group transform-gpu will-change-transform"
          >
            <img 
              src="https://i.ibb.co/LDznGTZd/rok-skol-ai-kreativni-studio-direktor.png" 
              alt="Rok Skol - Kreativni vodja in ustanovitelj SKOL AI" 
              className="w-full h-full object-cover object-center opacity-90 mix-blend-luminosity transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl"></div>
          </motion.div>

          {/* Tipografija */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] mb-8 md:mb-12 text-white drop-shadow-lg transform-gpu will-change-transform"
            >
              {t.vision.quote}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2 border-l-2 border-[#00f0ff]/50 pl-6 transform-gpu will-change-transform"
            >
              <span className="font-display text-xl md:text-3xl font-bold text-white tracking-wide">{t.vision.signature}</span>
              <span className="font-mono text-xs md:text-base text-[#00f0ff] uppercase tracking-widest">{t.vision.role}</span>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
