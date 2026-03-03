import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AccordionItem from './AccordionItem';
import Storitve from './Storitve';
import Showroom from './Showroom';
import Vibecoding from './Vibecoding';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ContactModal from './ContactModal';
import CustomCursor from './CustomCursor';
import Preloader from './Preloader';
import Footer from './Footer';
import { useLanguage } from './LanguageContext';

const arsenalCards = [
  // ... (tukaj pusti obstoječe podatke za arsenalCards)
];

const protocolSteps = [
  // ... (tukaj pusti obstoječe podatke za protocolSteps)
];

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

function AppContent() {
  const { t } = useLanguage();
  const location = useLocation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('preloaderShown');
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloaderShown', 'true');
    setIsLoading(false);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const pageContent = () => {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
        <CustomCursor />
        <Navbar />
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

        <Routes>
          <Route path="/storitve" element={<Storitve onOpenContact={() => setIsContactModalOpen(true)} />} />
          <Route path="/showroom" element={<Showroom onOpenContact={() => setIsContactModalOpen(true)} />} />
          <Route path="/vibecoding" element={<Vibecoding onOpenContact={() => setIsContactModalOpen(true)} />} />
          <Route path="/" element={<HomeContent t={t} openFaqIndex={openFaqIndex} setOpenFaqIndex={setOpenFaqIndex} setIsContactModalOpen={setIsContactModalOpen} />} />
        </Routes>

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

function HomeContent({ t, openFaqIndex, setOpenFaqIndex, setIsContactModalOpen }: any) {
  return (
    <>
      {/* 1. Hero Section: VIZUALNA DOMINACIJA */}
      {/* ... (tukaj pusti celotno obstoječo kodo za domačo stran (main, sekcije 2, 3, 4, 5)) ... */}
    </>
  );
}
