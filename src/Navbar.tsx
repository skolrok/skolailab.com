import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.work, href: '/showroom' },
    { name: t.nav.manifesto, href: '/vibecoding' },
    { name: t.nav.contact, href: '#kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        } px-6 md:px-12`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="font-display text-2xl font-black tracking-widest uppercase text-white hover:text-[#00f0ff] hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all duration-300">
            SKOL AI
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="font-mono text-xs lg:text-sm tracking-[0.2em] text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-widest border-l border-white/10 pl-8 ml-2">
              <button 
                onClick={() => setLang('sl')}
                className={`transition-all duration-300 ${lang === 'sl' ? 'text-[#00f0ff] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]' : 'text-gray-500 hover:text-white'}`}
              >
                SLO
              </button>
              <span className="text-gray-700">|</span>
              <button 
                onClick={() => setLang('en')}
                className={`transition-all duration-300 ${lang === 'en' ? 'text-[#00f0ff] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]' : 'text-gray-500 hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
             {/* Mobile Language Switcher */}
             <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest mr-2">
              <button onClick={() => setLang('sl')} className={lang === 'sl' ? 'text-[#00f0ff]' : 'text-gray-500'}>SLO</button>
              <span className="text-gray-700">|</span>
              <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-[#00f0ff]' : 'text-gray-500'}>EN</button>
            </div>
            <button 
              className="text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="font-display text-3xl font-bold tracking-widest uppercase text-white hover:text-[#00f0ff] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
