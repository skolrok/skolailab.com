import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function FeaturedProject() {
  const { t } = useLanguage() as any;

  return (
    <section className="relative px-4 py-16 md:px-12 lg:py-32 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-12 md:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight transform-gpu will-change-transform"
        >
          {t.featuredProject.sectionTitle}
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Visual / Mockup (Left Side) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl relative overflow-hidden bg-black/90 md:bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.1)] group transform-gpu will-change-transform"
        >
          <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
            {/* Elegant placeholder image representing a website aesthetic */}
            <img 
              src="/assets/images/solimat-mockup.png" 
              alt="Solimat Website Mockup" 
              className="w-full h-full object-cover object-center opacity-70 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 pointer-events-none"></div>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
          
          <div className="absolute bottom-6 left-6 2xl:bottom-8 2xl:left-8 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-mono text-[#00f0ff] border border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            {t.featuredProject.livePreview}
          </div>
        </motion.div>

        {/* Content (Right Side) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badges / Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {t.featuredProject.badges.map((tag: string) => (
                <span 
                  key={tag} 
                  className="font-mono text-[10px] md:text-xs text-[#00f0ff] uppercase tracking-widest border border-[#00f0ff]/30 px-3 py-1 rounded-full bg-[#00f0ff]/5"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Project Title */}
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-tight mb-6 drop-shadow-lg">
              {t.featuredProject.title}
            </h3>
            
            {/* Project Description */}
            <p className="font-sans text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              {t.featuredProject.description}
            </p>

            {/* CTA Button */}
            <a 
              href="https://solimat.si" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] border border-[#00f0ff] text-[#00f0ff] font-mono text-sm md:text-base font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-[#00f0ff]/10 w-fit"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">{t.featuredProject.cta}</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
              <div className="absolute inset-0 bg-[#00f0ff]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
