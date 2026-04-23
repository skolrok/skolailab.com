/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { ChevronDown, Instagram, Facebook } from 'lucide-react';
import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import Storitve from './Storitve';
import Showroom from './Showroom';
import Vibecoding from './Vibecoding';
import Navbar from './Navbar';
import ContactModal from './ContactModal';
import Preloader from './Preloader';
import FeaturedProject from './FeaturedProject';
import { useLanguage } from './LanguageContext';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void, key?: any }) {
  return (
    <div className="border-b border-white/10">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="font-display text-lg md:text-xl font-medium text-white group-hover:text-[#00f0ff] transition-colors duration-300">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="ml-4 flex-shrink-0 text-gray-500 group-hover:text-[#00f0ff] transition-colors duration-300"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-400 text-base md:text-lg leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Footer({ onOpenContact }: { onOpenContact: () => void }) {
  const { t } = useLanguage() as any;
  return (
    <footer id="kontakt" className="relative bg-[#000000] pt-20 md:pt-32 pb-12 px-4 md:px-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.h1 
          onClick={onOpenContact}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase text-center leading-[0.85] tracking-tighter w-full mb-12 md:mb-20 text-white cursor-pointer hover:text-[#00f0ff] hover:drop-shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-500 transform-gpu will-change-transform whitespace-pre-line"
        >
          {t.footer.cta}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-24 mb-20 md:mb-32 w-full transform-gpu will-change-transform"
        >
          <a 
            href="tel:+38631295869" 
            className="group flex flex-col items-center md:items-start transition-all duration-300 w-full md:w-auto"
          >
            <span className="text-gray-500 text-sm font-mono mb-2 uppercase tracking-widest group-hover:text-white transition-colors duration-300">{t.footer.phone}</span>
            <span className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-[#00f0ff] group-hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300">
              +386 31 295 869
            </span>
          </a>

          <a 
            href="mailto:info@skolailab.com" 
            className="group flex flex-col items-center md:items-start transition-all duration-300 w-full md:w-auto"
          >
            <span className="text-gray-500 text-sm font-mono mb-2 uppercase tracking-widest group-hover:text-white transition-colors duration-300">{t.footer.email}</span>
            <span className="font-display text-xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-[#00f0ff] group-hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300 break-all md:break-normal text-center md:text-left">
              info@skolailab.com
            </span>
          </a>
        </motion.div>

        {/* Pravni del */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-[10px] md:text-xs text-gray-500 tracking-wider text-center md:text-left">
            {t.footer.rights}
          </p>
          <div className="flex items-center gap-8 md:gap-6">
            <a 
              href="https://www.instagram.com/skolailab?igsh=dTZxcWNxZDYzZW11&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#00f0ff] hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] hover:scale-110 transition-all duration-300" 
              aria-label="Instagram"
            >
              <Instagram size={24} className="md:w-5 md:h-5" />
            </a>
            <a 
              href="https://www.facebook.com/share/18CDHoEXnV/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#ff00ff] hover:drop-shadow-[0_0_10px_rgba(255,0,255,0.8)] hover:scale-110 transition-all duration-300" 
              aria-label="Facebook"
            >
              <Facebook size={24} className="md:w-5 md:h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

function HomeContent({ onOpenContact }: { onOpenContact: () => void }) {
  const { t } = useLanguage() as any;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Domov | SKOL AI Kreativni Studio";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
      <Navbar />
      
      {/* 1. Hero Section: VIZUALNA DOMINACIJA */}
      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-32 text-center md:px-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 transform-gpu will-change-transform">
          <img 
            src="https://i.ibb.co/hF19Y8cb/skol-ai-izdelava-spletnih-strani-hero-ozadje.webp" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 md:mix-blend-screen transform-gpu will-change-transform"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]"></div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center z-10">
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] md:leading-[1.05] tracking-tight mb-6 text-white drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]"
            style={{ textShadow: '0 0 20px rgba(0,240,255,0.4), 0 0 40px rgba(255,0,255,0.2)' }}
          >
            {t.hero.h1}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base md:text-xl text-gray-400 font-light max-w-3xl mb-10 leading-relaxed md:px-0 px-2"
          >
            {t.hero.h2}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 text-[10px] sm:text-sm font-mono text-gray-300 mb-12"
          >
            {t.hero.tags.map((tag, i) => (
              <span 
                key={i} 
                className="cursor-default transition-colors duration-300 hover:text-[#00f0ff] hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] border border-white/5 px-3 py-1 rounded-full md:border-none md:p-0"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-8 w-full px-4 md:px-0"
          >
            <motion.button 
              onClick={onOpenContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group w-full md:w-auto px-10 py-5 bg-[#0a0a0a] border border-[#00f0ff] text-[#00f0ff] font-mono text-lg font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:bg-[#00f0ff]/5 inline-block min-h-[60px]"
            >
              <span className="relative z-10">{t.hero.cta}</span>
              <div className="absolute inset-0 bg-[#00f0ff]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </motion.button>
          </motion.div>
          
        </div>
      </main>

      {/* 2. Sekcija: NAŠ ARZENAL */}
      <section id="arzenal" className="relative px-4 py-16 md:px-12 lg:py-40 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Side: Sticky Title */}
          <div className="lg:w-1/2">
            <div className="lg:sticky lg:top-40">
              <motion.h2 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight transform-gpu will-change-transform"
              >
                {t.arsenal.title}
              </motion.h2>
            </div>
          </div>

          {/* Right Side: Scrollable Cards */}
          <div className="lg:w-1/2 flex flex-col gap-6 md:gap-8">
            {t.arsenal.cards.map((card, idx) => {
               const ids = ['ai-stock', 'oglasi', 'vplivnezi', 'spletne-strani'];
               return (
               <Link
                 to="/storitve"
                 state={{ scrollTo: ids[idx] }}
                 key={idx}
                 className="block"
               >
                 <motion.div
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, amount: 0.1 }}
                   transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                   whileHover={{ scale: 1.02 }}
                   className="p-6 md:p-8 rounded-2xl bg-black/90 md:bg-white/5 backdrop-blur-sm md:backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] cursor-pointer transform-gpu will-change-transform"
                 >
                   <h3 className="font-display text-lg md:text-2xl font-bold mb-3 md:mb-4 text-white tracking-wide">
                     {card.title}
                   </h3>
                   <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                     {card.description}
                   </p>
                 </motion.div>
               </Link>
            )})}
          </div>
          
        </div>
      </section>

      {/* 2.5 Sekcija: NAŠ PROTOKOL */}
      <section className="relative px-4 py-16 md:px-12 lg:py-32 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-4 transform-gpu will-change-transform"
          >
            {t.protocol.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs md:text-base text-gray-400 tracking-widest uppercase"
          >
            {t.protocol.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {t.protocol.steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col pt-16 md:pt-12 transform-gpu will-change-transform"
            >
              <span className="absolute top-0 left-0 text-7xl md:text-[8rem] leading-none font-display font-black text-white/5 pointer-events-none select-none -z-10 -translate-y-4 md:-translate-y-8 -translate-x-2 md:-translate-x-4">
                {step.num}
              </span>
              <h3 className={`font-display text-xl md:text-2xl font-bold mb-4 tracking-wide uppercase ${idx === 0 ? 'text-[#00f0ff]' : idx === 1 ? 'text-[#ff00ff]' : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`}>
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Project Section */}
      <FeaturedProject />

      {/* 4. Sekcija: KREATIVNA VIZIJA */}
      <section className="relative px-4 py-16 md:px-12 lg:py-40 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-12 md:mb-16 text-center lg:text-left transform-gpu will-change-transform"
        >
          {t.vision.title}
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Stolpec 1: Vizualija */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 aspect-[3/4] relative rounded-2xl overflow-hidden bg-black/90 md:bg-white/5 backdrop-blur-sm md:backdrop-blur-sm border border-white/10 shadow-2xl transform-gpu will-change-transform"
          >
            <img 
              src="https://i.ibb.co/LDznGTZd/rok-skol-ai-kreativni-studio-direktor.png" 
              alt="Rok Skol - Kreativni vodja in ustanovitelj SKOL AI" 
              className="w-full h-full object-cover object-center opacity-90 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
            {/* Moody gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
          </motion.div>

          {/* Stolpec 2: Besedilo */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.2] mb-8 transform-gpu will-change-transform text-white"
            >
              {t.vision.quote}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2 border-l-2 border-[#00f0ff]/50 pl-6 mb-10 md:mb-12 transform-gpu will-change-transform"
            >
              <span className="font-display text-xl md:text-3xl font-bold text-white tracking-wide">{t.vision.signature}</span>
              <span className="font-mono text-xs md:text-base text-[#00f0ff] uppercase tracking-widest">{t.vision.role}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="transform-gpu will-change-transform text-center lg:text-left"
            >
              <Link 
                to="/vibecoding"
                className="inline-block font-mono text-[10px] md:text-sm text-gray-400 uppercase tracking-widest transition-all duration-300 hover:text-[#00f0ff] hover:tracking-[0.3em] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
              >
                {t.vision.cta}
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 5. Sekcija: FAQ */}
      <section className="relative px-4 py-16 md:px-12 lg:py-32 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl font-bold text-center uppercase tracking-tight mb-12 md:mb-16 transform-gpu will-change-transform"
        >
          {t.faq.title}
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/10 transform-gpu will-change-transform"
        >
          {t.faq.items.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === index}
              onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('preloaderShown');
  });
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Handle hash scrolling
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloaderShown', 'true');
    setIsLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" onComplete={handlePreloaderComplete} />
      ) : (
        <div key="content">
          <Navbar />
          <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
          <Routes>
            <Route path="/" element={<HomeContent onOpenContact={() => setIsContactModalOpen(true)} />} />
            <Route path="/storitve" element={<Storitve onOpenContact={() => setIsContactModalOpen(true)} />} />
            <Route path="/showroom" element={<Showroom onOpenContact={() => setIsContactModalOpen(true)} />} />
            <Route path="/vibecoding" element={<Vibecoding onOpenContact={() => setIsContactModalOpen(true)} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer onOpenContact={() => setIsContactModalOpen(true)} />
        </div>
      )}
    </AnimatePresence>
  );
}
