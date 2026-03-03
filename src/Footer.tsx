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
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase text-center leading-[0.85] tracking-tighter w-full mb-20 text-white cursor-pointer hover:text-[#00f0ff] hover:drop-shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-500 whitespace-pre-line"
        >
          {t?.footer?.cta || "ZANETI ISKRO"}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 mb-32 w-full"
        >
          <a href="tel:+38631295869" className="group flex flex-col items-center transition-all duration-300">
            <span className="text-gray-500 text-sm font-mono mb-2 uppercase tracking-widest group-hover:text-white transition-colors duration-300">Telefon</span>
            <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-[#00f0ff] transition-all duration-300">
              +386 31 295 869
            </span>
          </a>

          <a href="mailto:info@skolailab.com" className="group flex flex-col items-center transition-all duration-300">
            <span className="text-gray-500 text-sm font-mono mb-2 uppercase tracking-widest group-hover:text-white transition-colors duration-300">E-mail</span>
            <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-[#00f0ff] transition-all duration-300">
              info@skolailab.com
            </span>
          </a>
        </motion.div>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-xs text-gray-500 tracking-wider">
            {t?.footer?.rights || "© SKOL AI. Vse pravice pridržane."}
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/skolailab" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00f0ff] hover:scale-110 transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/share/18CDHoEXnV/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#ff00ff] hover:scale-110 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
