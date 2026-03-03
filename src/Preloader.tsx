import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const messages = [
  '[ INICIALIZACIJA SISTEMA... ]',
  '[ NALAGANJE VIZUALNIH MATRIK... ]',
  '[ DEŠIFRIRANJE KREATIVNEGA DNK... ]',
  '[ SKOL AI AKTIVIRAN. DOSTOP ODOBREN. ]'
];

export default function Preloader({ onComplete }: { onComplete: () => void, key?: string | number }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cycle through messages
    const messageInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev < messages.length - 1) return prev + 1;
        return prev;
      });
    }, 500);

    // Progress bar simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        return 100;
      });
    }, 20);

    // Completion timeout
    const timeout = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center max-w-xs w-full px-6">
        {/* SKOL AI Logo/Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl font-black tracking-tighter text-white">
            SKOL<span className="text-cyan-400">AI</span>
          </h1>
        </motion.div>

        {/* Circular Loader or Progress Bar */}
        <div className="w-full h-[2px] bg-white/5 relative mb-8 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Status Messages */}
        <div className="h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-cyan-400/80 uppercase text-center drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
            >
              {messages[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Percentage */}
        <motion.span 
          className="mt-4 font-mono text-[10px] text-gray-600 tracking-widest"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {progress}%
        </motion.span>
      </div>

      {/* Background Grid/Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
    </motion.div>
  );
}
