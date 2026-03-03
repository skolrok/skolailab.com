import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer({ onOpenContact }: { onOpenContact: () => void }) {
  const { t } = useLanguage() as any;

  return (
    <footer id="kontakt" className="relative bg-[#000000] pt-32 pb-12 px-6 md:px-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.h1 
          onClick={onOpenContact}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase text-center leading-[0.85] tracking-tighter w-full mb-20 text-white cursor-pointer hover:text-[#00f0ff] hover:drop-shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-500 transform-gpu will-change-transform whitespace-pre-line"
        >
          {t.footer.cta}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-24 mb-32 w-full transform-gpu will-change-transform"
        >
          <a 
            href="tel:+38631295869" 
            className="group flex flex-col items-
