/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState, useRef, MouseEvent, TouchEvent, useEffect } from 'react';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import { useLanguage } from './LanguageContext';

function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[21/9] max-h-[70vh] overflow-hidden rounded-3xl cursor-ew-resize select-none border border-white/10 shadow-2xl"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => handleMove(e.clientX)}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://i.ibb.co/4n6SC4zY/skol-ai-kreativni-studio-umetna-inteligenca-oglasi.webp" 
          alt="skol ai kreativni studio umetna inteligenca oglasi" 
          className="w-full h-full object-cover object-top" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-mono text-[#00f0ff] border border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          SKOL AI Custom
        </div>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src="https://i.ibb.co/5hTh3PMY/izdelava-spletnih-strani-slabe-fotografije-prej.webp" 
          alt="izdelava spletnih strani slabe fotografije prej" 
          className="w-full h-full object-cover object-top" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-mono text-gray-300 border border-white/10">
          Generični Stock
        </div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-[#00f0ff] shadow-[0_0_15px_#00f0ff] cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a0a0a] border-2 border-[#00f0ff] rounded-full flex items-center justify-center shadow-[0_0_20px_#00f0ff]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l6-6-6-6" />
            <path d="M9 18l-6-6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Showroom({ onOpenContact }: { onOpenContact?: () => void }) {
  const { t } = useLanguage() as any;

  useEffect(() => {
    document.title = "Showroom | SKOL AI Kreativni Studio";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
      <CustomCursor />
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

      {/* 2. Sekcija: INTERAKTIVNE TRANSFORMACIJE */}
      <section className="relative px-4 py-16 md:px-12 lg:py-32 w-full max-w-[1400px] mx-auto border-t border-white/5">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-center uppercase tracking-tight mb-12 md:mb-16 transform-gpu will-change-transform"
        >
          {t.showroom.precision.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t.showroom.precision.split(' ')[1]}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[90%] mx-auto transform-gpu will-change-transform"
        >
          <BeforeAfterSlider />
        </motion.div>
      </section>

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
            className="md:col-span-1 lg:col-span-1 row-span-1 md:row-span-2 group relative overflow-hidden rounded-2xl bg-[#000000] border border-white/10 transition-all duration-500 hover:border-[#ff00ff]/50 hover:shadow-[0_0_30px_rgba(255,0,255,0.2)] cursor-pointer transform-gpu will-change-transform"
          >
            <video 
              src="https://res.cloudinary.com/ddl75cyhk/video/upload/v1773247789/ai-agencija-skol-ai-virtualni-ambasador_jnpxz1.mp4"
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            />
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

        </div>
      </section>
    </div>
  );
}
