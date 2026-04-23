import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function FeaturedProject() {
  const { t } = useLanguage() as any;

  return (
    <section className="relative px-4 py-16 md:px-12 lg:py-32 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* COLUMN 1: Content & Details */}
        <div className="flex flex-col w-full order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section Title */}
            <h2 className="font-display text-sm md:text-base text-[#00f0ff] font-bold uppercase tracking-widest mb-4 md:mb-6">
              {t.featuredProject.sectionTitle}
            </h2>
            
            {/* Project Title */}
            <h3 className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6 md:mb-8 drop-shadow-lg">
              {t.featuredProject.title}
            </h3>
            
            {/* Project Description */}
            <p className="font-sans text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl">
              {t.featuredProject.description}
            </p>

            {/* Badges / Tags */}
            <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
              {t.featuredProject.badges.map((tag: string) => (
                <span 
                  key={tag} 
                  className="font-mono text-[10px] md:text-xs text-[#00f0ff] uppercase tracking-widest border border-[#00f0ff]/40 px-4 py-2 rounded-full bg-[#00f0ff]/5 shadow-[0_0_10px_rgba(0,240,255,0.1)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="w-full flex">
              <a 
                href="https://solimat.si" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full md:w-auto relative flex items-center justify-center gap-3 px-8 py-5 bg-[#0a0a0a] border-2 border-[#00f0ff] text-[#00f0ff] font-mono text-sm md:text-base font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:bg-[#00f0ff]/10 text-center"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                  {t.featuredProject.cta}
                </span>
                <div className="absolute inset-0 bg-[#00f0ff]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* COLUMN 2: Premium Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full order-1 lg:order-2 aspect-video rounded-2xl relative overflow-hidden bg-black/90 md:bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_0_40px_rgba(0,240,255,0.08)] group transform-gpu will-change-transform"
        >
          <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
            <img 
              src="https://res.cloudinary.com/ddl75cyhk/image/upload/v1776931364/solimat-mockup.webp" 
              alt="Solimat Web Design Mockup" 
              className="w-full h-full object-cover object-center opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 pointer-events-none"></div>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
          
          {/* Default Placeholder Label for mobile is not strictly needed since we have a real image, but just in case, we can add a small live badge */}
          <div className="md:hidden absolute bottom-4 left-4 right-4 text-center">
               <div className="inline-block bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-mono text-[#00f0ff] border border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  {t.featuredProject.livePreview}
               </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
