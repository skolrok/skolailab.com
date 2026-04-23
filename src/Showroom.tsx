/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState, useRef, MouseEvent, TouchEvent, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import Navbar from './Navbar';
import { useLanguage } from './LanguageContext';

export default function Showroom({ onOpenContact }: { onOpenContact?: () => void }) {
  const { t } = useLanguage() as any;
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.title = "Showroom | SKOL AI Kreativni Studio";
  }, []);

  const handleToggleMute = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
      <Navbar />

      {/* 1. Hero Sekcija */}
      <main className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center z-10 my-20 md:my-32 transform-gpu will-change-transform">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[1.1] md:leading-[1.05] tracking-tight mb-8 text-white drop-shadow-2xl transform-gpu will-change-transform"
          >
            SHOWROOM.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs md:text-base text-gray-300 tracking-widest uppercase max-w-2xl leading-relaxed px-2 md:px-0"
          >
            {t.showroom.subtitle}
          </motion.p>
        </div>
        
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-[#00f0ff]/5 to-[#ff00ff]/5 rounded-full blur-[120px] pointer-events-none -z-0"></div>
      </main>

      {/* 3. Sekcija: ARHIV DOMINACIJE (Bento Box Grid) */}
      <section className="relative px-4 py-16 md:px-12 lg:py-40 max-w-[1400px] mx-auto border-t border-white/5">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-left uppercase tracking-tight mb-12 md:mb-16 transform-gpu will-change-transform"
        >
          {t.showroom.stockTitle.split('&')[0]} & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t.showroom.stockTitle.split('&')[1]}</span>
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[350px]">
          
          {/* Item 1: Horizontal Wide (ZGORAJ LEVO) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="showroom-item md:col-span-2 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-2xl bg-[#111] border border-white/10 transition-all duration-500 hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] cursor-pointer transform-gpu will-change-transform"
          >
            <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105">
              <video className="showroom-video" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src="https://res.cloudinary.com/ddl75cyhk/video/upload/v1772400185/skolai-solimat-arhitektura-pergola_ukfu8s.mov" type="video/mp4" />
              </video>
            </div>
            <div className="video-overlay absolute inset-0 bg-black/40 md:bg-black/0 group-hover:bg-black/70 transition-colors duration-400 flex flex-col justify-end p-6 md:p-8">
              <div className="opacity-100 md:opacity-0 md:translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                <h3 className="font-display text-xl md:text-3xl font-bold text-white mb-2 uppercase tracking-wide">{t.showroom.items.b2b.title}</h3>
                <p className="font-mono text-xs md:text-base text-[#00f0ff] uppercase tracking-widest">{t.showroom.items.b2b.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Item 2: Vertical Tall (SREDINSKI PORTRET) - AI Ambassador Video */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-1 row-span-1 md:row-span-2 relative overflow-hidden rounded-2xl bg-[#000000] border border-white/10 transition-all duration-500 hover:border-[#ff00ff]/50 hover:shadow-[0_0_30px_rgba(255,0,255,0.2)] cursor-pointer transform-gpu will-change-transform"
          >
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 w-full h-full">
              <video 
                ref={videoRef}
                src="https://res.cloudinary.com/ddl75cyhk/video/upload/v1773247789/ai-agencija-skol-ai-virtualni-ambasador_jnpxz1.mp4"
                autoPlay 
                loop 
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
              <button
                onClick={handleToggleMute}
                className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white border border-white/10 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 active:scale-95"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={22} strokeWidth={1.5} /> : <Volume2 size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </motion.div>

          {/* Item 3: Square (ZGORAJ DESNO) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="showroom-item md:col-span-1 lg:col-span-1 row-span-1 group relative overflow-hidden rounded-2xl bg-[#111] border border-white/10 transition-all duration-500 hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] cursor-pointer transform-gpu will-change-transform"
          >
            <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105">
              <video className="showroom-video" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src="https://res.cloudinary.com/ddl75cyhk/video/upload/v1772400185/skolai-berryshka-tekoce-zlato_nsn6we.mov" type="video/mp4" />
              </video>
            </div>
            <div className="video-overlay absolute inset-0 bg-black/40 md:bg-black/0 group-hover:bg-black/70 transition-colors duration-400 flex flex-col justify-end p-6 md:p-8">
              <div className="opacity-100 md:opacity-0 md:translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                <h3 className="font-display text-lg md:text-2xl font-bold text-white mb-2 uppercase tracking-wide">{t.showroom.items.stock.title}</h3>
                <p className="font-mono text-[10px] md:text-sm text-[#00f0ff] uppercase tracking-widest">{t.showroom.items.stock.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Item 4: Square (SPODAJ LEVO) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="showroom-item md:col-span-1 lg:col-span-1 row-span-1 group relative overflow-hidden rounded-2xl bg-[#111] border border-white/10 transition-all duration-500 hover:border-[#ff00ff]/50 hover:shadow-[0_0_30px_rgba(255,0,255,0.2)] cursor-pointer transform-gpu will-change-transform"
          >
            <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105">
              <video className="showroom-video" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src="https://res.cloudinary.com/ddl75cyhk/video/upload/v1772400185/skolai-bartog-avtomobilizem-akcija_rhgjx8.mov" type="video/mp4" />
              </video>
            </div>
            <div className="video-overlay absolute inset-0 bg-black/40 md:bg-black/0 group-hover:bg-black/70 transition-colors duration-400 flex flex-col justify-end p-6 md:p-8">
              <div className="opacity-100 md:opacity-0 md:translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                <h3 className="font-display text-lg md:text-2xl font-bold text-white mb-2 uppercase tracking-wide">{t.showroom.items.ads.title}</h3>
                <p className="font-mono text-[10px] md:text-sm text-[#ff00ff] uppercase tracking-widest">{t.showroom.items.ads.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Item 5: Horizontal Wide (SPODAJ DESNO) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="showroom-item md:col-span-2 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-2xl bg-[#111] border border-white/10 transition-all duration-500 hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] cursor-pointer transform-gpu will-change-transform"
          >
            <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105">
              <video className="showroom-video" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src="https://res.cloudinary.com/ddl75cyhk/video/upload/v1772400185/skolai-vitaproshop-sport-adrenalin_z2lkej.mov" type="video/mp4" />
              </video>
            </div>
            <div className="video-overlay absolute inset-0 bg-black/40 md:bg-black/0 group-hover:bg-black/70 transition-colors duration-400 flex flex-col justify-end p-6 md:p-8">
              <div className="opacity-100 md:opacity-0 md:translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                <h3 className="font-display text-xl md:text-3xl font-bold text-white mb-2 uppercase tracking-wide">{t.showroom.items.action.title}</h3>
                <p className="font-mono text-xs md:text-base text-[#00f0ff] uppercase tracking-widest">{t.showroom.items.action.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Item 6: Web Design Full Width Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:col-span-3 lg:col-span-4 row-span-1 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 transition-all duration-500 hover:border-[#00f0ff]/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] transform-gpu will-change-transform flex flex-col md:flex-row"
          >
            {/* Visual (Placeholder for 3D Device) */}
            <div className="w-full md:w-3/5 h-[300px] md:h-auto relative overflow-hidden order-2 justify-center p-8 bg-black">
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                <img 
                  src="https://res.cloudinary.com/ddl75cyhk/image/upload/v1776931870/solimat-mockup-skolai.webp" 
                  alt="Solimat Web Design 3D Mockup" 
                  className="w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-70 transition-all duration-700" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-90 pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/5 p-8 md:p-12 z-10 flex flex-col justify-center order-1 self-center bg-[#0a0a0a]/50 backdrop-blur-sm">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="font-mono text-[10px] md:text-xs text-[#00f0ff] uppercase tracking-widest border border-[#00f0ff]/30 px-3 py-1 rounded-full bg-[#00f0ff]/5">
                  {t.showroom.items.web.tag}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
                {t.showroom.items.web.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-gray-400 mb-8 leading-relaxed">
                {t.showroom.items.web.desc}
              </p>
              <a 
                href="https://solimat.si" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-[#00f0ff] text-[#00f0ff] font-mono text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:text-white w-fit"
              >
                {t.showroom.items.web.cta}
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
