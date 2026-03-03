/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { ChevronDown, Instagram, Linkedin } from 'lucide-react';
import Storitve from './Storitve';
import Showroom from './Showroom';
import Vibecoding from './Vibecoding';
import Navbar from './Navbar';
import ContactModal from './ContactModal';
import CustomCursor from './CustomCursor';
import Preloader from './Preloader';
import Footer from './Footer';
import { useLanguage } from './LanguageContext';

const arsenalCards = [
  {
    title: "AI FOTOGRAFIJA IN STOCK PO MERI",
    description: "Ustvarjamo 100% unikatne, hiper-realistične vizualije za vašo znamko, ki ne obstajajo nikjer drugje. Osebno, prilagojeno, brez stroškov klasične produkcije.",
    href: "/storitve#ai-stock"
  },
  {
    title: "HIGH-PERFORMANCE OGLASNE KREATIVE",
    description: "Agresivna, scroll-stopping estetika narejena za A/B testiranje. Ustavljamo drsenje in drastično nižamo ceno vašega klika.",
    href: "/storitve#oglasi"
  },
  {
    title: "VIRTUALNI VPLIVNEŽI IN AI MODELI",
    description: "Zgradite popolnega digitalnega ambasadorja za vašo znamko. 24/7 prisotnost in popolna vizualna konzistentnost brez dram.",
    href: "/storitve#vplivnezi"
  },
  {
    title: "PREMIUM IZDELAVA SPLETNIH STRANI",
    description: "Z najsodobnejšim spletnim inženiringom gradimo bliskovito hitre, dominantne \"landing\" strani, ki obiskovalca brez trenja spremenijo v kupca.",
    href: "/storitve#spletne-strani"
  }
];

const faqData = [
  {
    question: "Kdo si lasti avtorske pravice za AI generirane vizualije?",
    answer: "Vi. Ko za vašo znamko ustvarimo AI stock fotografije ali virtualne vplivneže, dobite polne komercialne pravice. Brez skritih licenc, brez omejitev uporabe."
  },
  {
    question: "Kako hitro je lahko naša nova spletna stran na spletu?",
    answer: "Z uporabo najsodobnejšega \"vibecodinga\" drastično skrajšamo čas razvoja. Naše premium spletne strani so običajno postavljene in optimizirane v nekaj tednih, ne mesecih."
  },
  {
    question: "Lahko AI res nadomesti klasično fotografiranje produktov?",
    answer: "Popolnoma. Naši high-performance oglasi in AI vizualije dosegajo hiper-realizem. Prihranite pri stroških studiev in modelov, hkrati pa dobite neskončne možnosti variacij."
  }
];

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
      className="relative w-full aspect-[4/3] md:aspect-[21/9] max-h-[80vh] overflow-hidden rounded-3xl cursor-ew-resize select-none border border-white/10"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => handleMove(e.clientX)}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://res.cloudinary.com/ddl75cyhk/image/upload/v1772532608/skol-ai-kreativni-studio-umetna-inteligenca-oglasi_ibb8jq.webp" 
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
          src="https://res.cloudinary.com/ddl75cyhk/image/upload/v1772532608/izdelava-spletnih-strani-slabe-fotografije-prej_tojpdq.webp" 
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

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void, key?: string | number }) {
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

export default function App() {
  const { t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [path, setPath] = useState(window.location.pathname);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('preloaderShown');
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloaderShown', 'true');
    setIsLoading(false);
  };

  useEffect(() => {
    const onLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const pageContent = () => {
    if (path === '/storitve') {
      return (
        <div key="storitve" className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
          <Storitve onOpenContact={() => setIsContactModalOpen(true)} />
          <Footer onOpenContact={() => setIsContactModalOpen(true)} />
          <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
      );
    }

    if (path === '/showroom') {
      return (
        <div key="showroom" className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
          <Showroom onOpenContact={() => setIsContactModalOpen(true)} />
          <Footer onOpenContact={() => setIsContactModalOpen(true)} />
          <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
      );
    }

    if (path === '/vibecoding') {
      return (
        <div key="vibecoding" className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
          <Vibecoding onOpenContact={() => setIsContactModalOpen(true)} />
          <Footer onOpenContact={() => setIsContactModalOpen(true)} />
          <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
      );
    }

    return (
      <div key="home" className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
        <CustomCursor />
        <Navbar />
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

        {/* 1. Hero Section: VIZUALNA DOMINACIJA */}
      <main className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 text-center md:px-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 transform-gpu will-change-transform">
          <img 
            src="https://res.cloudinary.com/ddl75cyhk/image/upload/v1772532610/skol-ai-izdelava-spletnih-strani-hero-ozadje_ybaeam.webp" 
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
            className="hero-title font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6 text-white drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]"
            style={{ textShadow: '0 0 20px rgba(0,240,255,0.4), 0 0 40px rgba(255,0,255,0.2)' }}
          >
            {t.hero.h1}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-lg md:text-xl text-gray-400 font-light max-w-3xl mb-10 leading-relaxed"
          >
            {t.hero.h2}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-mono text-gray-300 mb-12"
          >
            {t.hero.tags.map((tag, i) => (
              <span 
                key={i} 
                className="cursor-default transition-colors duration-300 hover:text-[#00f0ff] hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <motion.button 
              onClick={() => setIsContactModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-10 py-5 bg-[#0a0a0a] border border-[#00f0ff] text-[#00f0ff] font-mono text-lg font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:bg-[#00f0ff]/5 inline-block"
            >
              <span className="relative z-10">{t.hero.cta}</span>
              <div className="absolute inset-0 bg-[#00f0ff]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </motion.button>
          </motion.div>
          
        </div>
      </main>

      {/* 2. Sekcija: NAŠ ARZENAL */}
      <section className="relative px-6 py-24 md:px-12 lg:py-40 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Sticky Title */}
          <div className="lg:w-1/2">
            <div className="lg:sticky lg:top-40">
              <motion.h2 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight transform-gpu will-change-transform"
              >
                {t.arsenal.title}
              </motion.h2>
            </div>
          </div>

          {/* Right Side: Scrollable Cards */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {t.arsenal.cards.map((card, idx) => (
               <motion.a
                 href="/showroom"
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.1 }}
                 transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                 whileHover={{ scale: 1.05 }}
                 className="block p-8 rounded-2xl bg-black/90 md:bg-white/5 backdrop-blur-sm md:backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] cursor-pointer transform-gpu will-change-transform"
               >
                 <h3 className="font-display text-xl md:text-2xl font-bold mb-4 text-white tracking-wide">
                   {card.title}
                 </h3>
                 <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                   {card.description}
                 </p>
               </motion.a>
            ))}
          </div>
          
        </div>
      </section>

      {/* 2.5 Sekcija: NAŠ PROTOKOL */}
      <section className="relative px-6 py-24 md:px-12 lg:py-32 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-16">
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
            className="font-mono text-sm md:text-base text-gray-400 tracking-widest uppercase"
          >
            {t.protocol.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {t.protocol.steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col pt-12 transform-gpu will-change-transform"
            >
              <span className="absolute top-0 left-0 text-[8rem] leading-none font-display font-black text-white/5 pointer-events-none select-none -z-10 -translate-y-8 -translate-x-4">
                {step.num}
              </span>
              <h3 className={`font-display text-2xl font-bold mb-4 tracking-wide uppercase ${idx === 0 ? 'text-[#00f0ff]' : idx === 1 ? 'text-[#ff00ff]' : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`}>
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Sekcija: NAŠ VPLIV */}
      <section className="relative px-6 py-24 md:px-12 lg:py-32 max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase tracking-tight mb-16 transform-gpu will-change-transform"
          >
            {t.impact.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="transform-gpu will-change-transform"
          >
            <BeforeAfterSlider />
          </motion.div>
        </div>
      </section>

      {/* 4. Sekcija: KREATIVNA VIZIJA */}
      <section className="relative px-6 py-24 md:px-12 lg:py-40 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-16 text-center lg:text-left transform-gpu will-change-transform"
        >
          {t.vision.title}
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Stolpec 1: Vizualija */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 aspect-[3/4] relative rounded-2xl overflow-hidden bg-black/90 md:bg-white/5 backdrop-blur-sm md:backdrop-blur-sm border border-white/10 shadow-2xl transform-gpu will-change-transform"
          >
            <img 
              src="https://res.cloudinary.com/ddl75cyhk/image/upload/v1772532610/rok-skol-ai-kreativni-studio-direktor_z5inpr.png" 
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
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.2] mb-8 transform-gpu will-change-transform"
            >
              {t.vision.quote.split('.').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}{i < arr.length - 1 ? '.' : ''}
                  {i === 0 && <br />}
                  {i === 1 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{part}</span>}
                </React.Fragment>
              ))}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2 border-l-2 border-[#00f0ff]/50 pl-6 mb-12 transform-gpu will-change-transform"
            >
              <span className="font-display text-2xl md:text-3xl font-bold text-white tracking-wide">{t.vision.signature}</span>
              <span className="font-mono text-sm md:text-base text-[#00f0ff] uppercase tracking-widest">{t.vision.role}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="transform-gpu will-change-transform"
            >
              <a 
                href="/vibecoding"
                className="inline-block font-mono text-xs md:text-sm text-gray-400 uppercase tracking-widest transition-all duration-300 hover:text-[#00f0ff] hover:tracking-[0.3em] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
              >
                {t.vision.cta}
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 5. Sekcija: FAQ */}
      <section className="relative px-6 py-24 md:px-12 lg:py-32 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl font-bold text-center uppercase tracking-tight mb-16 transform-gpu will-change-transform"
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

      <Footer onOpenContact={() => setIsContactModalOpen(true)} />
      </div>
    );
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" onComplete={handlePreloaderComplete} />
      ) : (
        pageContent()
      )}
    </AnimatePresence>
  );
}
