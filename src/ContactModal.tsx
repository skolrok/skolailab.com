import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // Reset state after modal closes
      const timer = setTimeout(() => setIsSubmitted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] rounded-2xl p-8 md:p-12 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors duration-300 z-10"
            >
              <X size={24} />
            </button>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-2">
                    {t.contact.title}
                  </h2>
                  <p className="font-mono text-sm text-gray-400 mb-8">
                    {t.contact.subtitle}
                  </p>

                  <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input type="hidden" name="access_key" value="274f2d37-ff0b-46e2-9215-475914fb26b8" />
                    
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-cyan-500 uppercase tracking-widest">{t.contact.name}</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-cyan-500 uppercase tracking-widest">{t.contact.email}</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-cyan-500 uppercase tracking-widest">{t.contact.interest}</label>
                      <select 
                        name="interest"
                        required
                        defaultValue=""
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 appearance-none"
                      >
                        <option value="" disabled>{t.contact.placeholder}</option>
                        <option value="ai-foto">{t.contact.options.photo}</option>
                        <option value="ads">{t.contact.options.ads}</option>
                        <option value="influencers">{t.contact.options.influencers}</option>
                        <option value="web">{t.contact.options.web}</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-cyan-500 uppercase tracking-widest">{t.contact.message}</label>
                      <textarea 
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="mt-4 relative group px-8 py-4 bg-[#0a0a0a] border border-[#00f0ff] text-[#00f0ff] font-mono text-lg font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] hover:bg-[#00f0ff]/10"
                    >
                      <span className="relative z-10">{t.contact.submit}</span>
                      <div className="absolute inset-0 bg-[#00f0ff]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0px rgba(6,182,212,0)",
                        "0 0 30px rgba(6,182,212,0.5)",
                        "0 0 0px rgba(6,182,212,0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-full mb-8 text-cyan-400"
                  >
                    <CheckCircle size={80} strokeWidth={1.5} />
                  </motion.div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                    {t.contact.success.title}
                  </h3>
                  
                  <p className="font-mono text-sm md:text-base text-cyan-500/80 mb-10 leading-relaxed max-w-sm">
                    {t.contact.success.text}
                  </p>
                  
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-[#0a0a0a] border border-cyan-500/50 text-gray-300 font-mono text-sm tracking-widest uppercase transition-all duration-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  >
                    {t.contact.success.close}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
