/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import { useLanguage } from './LanguageContext';

export default function Storitve({ onOpenContact }: { onOpenContact?: () => void }) {
  const { t, lang } = useLanguage() as any;
  const location = useLocation();

  useEffect(() => {
    document.title = "Storitve | SKOL AI Kreativni Studio";
    
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    {
      id: "ai-stock",
      title: lang === 'sl' ? "AI FOTOGRAFIJA IN STOCK PO MERI" : "CUSTOM AI PHOTOGRAPHY & STOCK",
      intro: lang === 'sl' ? "Osebne, hiper-realistične vizualije, ki gradijo kultni status." : "Personal, hyper-realistic visuals that build cult status.",
      problem: lang === 'sl' ? "Vaša spletna stran izgleda natanko tako kot stran vašega konkurenta, ker oba kupujeta iste, plastične fotografije na Shutterstocku. Vaši produkti nimajo duše." : "Your website looks exactly like your competitor's because you both buy the same plastic photos on Shutterstock. Your products have no soul.",
      solutions: lang === 'sl' ? [
        { title: "100 % Unikatnost", text: "Zgradimo vaš lastni vizualni ekosistem. Vaše fotografije ne obstajajo nikjer drugje na spletu." },
        { title: "Popoln nadzor", text: "Želite vaš produkt v neonskem Tokiu ob 3. uri zjutraj? Ali v minimalističnem skandinavskem studiu? Dobite oboje v nekaj urah." },
        { title: "Brez stroškov produkcije", text: "Pozabite na iskanje lokacij, drage fotografe, najem studiev in čakanje na vreme. Vse ustvarimo v našem AI studiu." }
      ] : [
        { title: "100% Uniqueness", text: "We build your own visual ecosystem. Your photos don't exist anywhere else on the web." },
        { title: "Full Control", text: "Want your product in neon Tokyo at 3 AM? Or in a minimalist Scandinavian studio? Get both in hours." },
        { title: "No Production Costs", text: "Forget location scouting, expensive photographers, studio rentals, and waiting for weather. We create everything in our AI studio." }
      ]
    },
    {
      id: "oglasi",
      title: lang === 'sl' ? "HIGH-PERFORMANCE OGLASNE KREATIVE" : "HIGH-PERFORMANCE AD CREATIVES",
      intro: lang === 'sl' ? "Ustavljamo drsenje. Nižamo ceno klika. Povečujemo prodajo." : "We stop the scroll. We lower the cost per click. We increase sales.",
      problem: lang === 'sl' ? "Vaši Facebook in Instagram oglasi se izgubijo v morju povprečnosti. Ljudje jih preskočijo, vaš proračun pa izginja." : "Your Facebook and Instagram ads get lost in a sea of mediocrity. People skip them, and your budget disappears.",
      solutions: lang === 'sl' ? [
        { title: "Scroll-Stopping vizualije", text: "Ustvarjamo agresivno, premium estetiko, ki obiskovalca dobesedno prisili, da se ustavi." },
        { title: "Neskončno A/B testiranje", text: "V času, ko vaša konkurenca posname en sam oglas, mi zgeneriramo 10 različnih vizualnih variacij za testiranje. Zmagovalna kreativa dobi ves proračun." },
        { title: "Fokus na konverzijo", text: "Vsak piksel je optimiziran s psihologijo prodaje. Ne delamo lepih slik za v galerijo – delamo slike, ki prodajajo vaše storitve." }
      ] : [
        { title: "Scroll-Stopping Visuals", text: "We create aggressive, premium aesthetics that literally force the visitor to stop." },
        { title: "Infinite A/B Testing", text: "In the time your competition records a single ad, we generate 10 different visual variations for testing. The winning creative gets the entire budget." },
        { title: "Focus on Conversion", text: "Every pixel is optimized with sales psychology. We don't just make pretty pictures for a gallery – we make pictures that sell your services." }
      ]
    },
    {
      id: "vplivnezi",
      title: lang === 'sl' ? "VIRTUALNI VPLIVNEŽI IN AI AMBASADORJI" : "VIRTUAL INFLUENCERS & AI AMBASSADORS",
      intro: lang === 'sl' ? "Vaš popoln obraz znamke. 24/7 prisotnost. Brez dram." : "Your perfect brand face. 24/7 presence. No drama.",
      problem: lang === 'sl' ? "Klasični vplivneži so dragi, nezanesljivi in lahko uničijo vaš ugled z eno napačno objavo. Vaša znamka je talec njihovih muh in urnikov." : "Classic influencers are expensive, unreliable, and can ruin your reputation with one wrong post. Your brand is a hostage to their whims and schedules.",
      solutions: lang === 'sl' ? [
        { title: "Popolna lastnina in nadzor", text: "Zgradimo ekskluzivnega digitalnega modela (ambasadorja), ki je 100 % vaša last. Govori in predstavlja točno tisto, kar želite, brez tveganja za vaš ugled." },
        { title: "Neomejena prisotnost", text: "Vaš virtualni model ne potrebuje spanja, ne zamuja na snemanja in ne zaračunava potnih stroškov. Danes pozira na ulicah Tokia, jutri predstavlja vaš produkt v studiu. Vse iz našega sistema." },
        { title: "Konzistentnost estetike", text: "Obraz, ki se ne stara in vedno izgleda brezhibno. Popolna, neprekinjena vizualna identiteta za vašo blagovno znamko." }
      ] : [
        { title: "Full Ownership and Control", text: "We build an exclusive digital model (ambassador) that is 100% your property. They say and represent exactly what you want, without risk to your reputation." },
        { title: "Unlimited Presence", text: "Your virtual model doesn't need sleep, isn't late for shoots, and doesn't charge travel expenses. Today posing in Tokyo, tomorrow presenting your product in the studio. All from our system." },
        { title: "Aesthetic Consistency", text: "A face that doesn't age and always looks flawless. Perfect, continuous visual identity for your brand." }
      ]
    },
    {
      id: "spletne-strani",
      title: lang === 'sl' ? "PREMIUM SPLETNI INŽENIRING" : "PREMIUM WEB ENGINEERING",
      intro: lang === 'sl' ? "Ne delamo \"lepih vizitk\". Gradimo digitalne prodajne stroje." : "We don't make 'pretty business cards'. We build digital sales machines.",
      problem: lang === 'sl' ? "Vaša trenutna spletna stran je počasna, generična in obiskovalce dobesedno pošilja k vaši konkurenci. Je zgolj strošek, ne pa investicija." : "Your current website is slow, generic, and literally sends visitors to your competition. It's just an expense, not an investment.",
      solutions: lang === 'sl' ? [
        { title: "Vibecoding arhitektura", text: "Z najnaprednejšim AI spletnim inženiringom gradimo bliskovito hitre strani. Čista koda, takojšnje nalaganje in brezhibno delovanje na vseh napravah." },
        { title: "Dominantna estetika", text: "\"Dark Cyber-Elegance\" dizajn. Vaše podjetje bo v trenutku vizualno pozicionirano ob bok globalnim tehnološkim gigantom. Z globino, neonskimi poudarki in premišljenimi mikro-animacijami." },
        { title: "Fokus na konverzijo", text: "Vsak gumb, vsak naslov in vsak interaktivni element je strateško postavljen z enim samim ciljem – da obiskovalca brez trenja pretvori v plačljivo stranko." }
      ] : [
        { title: "Vibecoding Architecture", text: "With the most advanced AI web engineering, we build lightning-fast pages. Clean code, instant loading, and flawless performance on all devices." },
        { title: "Dominant Aesthetics", text: "'Dark Cyber-Elegance' design. Your company will instantly be visually positioned alongside global tech giants. With depth, neon accents, and thoughtful micro-animations." },
        { title: "Focus on Conversion", text: "Every button, every headline, and every interactive element is strategically placed with one goal – to seamlessly convert visitors into paying customers." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
      <Navbar />

      {/* 1. Hero Sekcija */}
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 pt-32 text-center md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] md:leading-[1.05] tracking-tight mb-8 text-white"
          >
            {t.services_page.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs md:text-base text-gray-400 tracking-widest uppercase max-w-3xl leading-relaxed px-2 md:px-0"
          >
            {t.services_page.subtitle}
          </motion.p>
        </div>
        
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#00f0ff]/5 rounded-full blur-[100px] pointer-events-none -z-0"></div>
      </main>

      {/* Storitve Blocks */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <section key={index} id={service.id} className="relative px-4 py-16 md:px-12 lg:py-40 max-w-7xl mx-auto w-full border-t border-white/5">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
              
              {/* Left: Title & Intro */}
              <div className="lg:w-5/12 flex flex-col">
                <div className="lg:sticky lg:top-40">
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] mb-6 transform-gpu will-change-transform"
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#00f0ff] text-base md:text-xl font-medium italic transform-gpu will-change-transform"
                  >
                    {service.intro}
                  </motion.p>
                </div>
              </div>

              {/* Right: Problem & Solution */}
              <div className="lg:w-7/12 flex flex-col gap-6 md:gap-8">
                {/* Problem Block */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-black/90 md:bg-red-950/10 border border-red-500/20 p-6 md:p-10 rounded-2xl backdrop-blur-sm md:backdrop-blur-sm relative overflow-hidden group transform-gpu will-change-transform"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-red-400 font-mono text-[10px] md:text-sm uppercase tracking-widest mb-4 relative z-10">{t.services_page.problem}</h4>
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed relative z-10">
                    {service.problem}
                  </p>
                </motion.div>

                {/* Solution Block */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-black/90 md:bg-[#00f0ff]/5 border border-[#00f0ff]/20 p-6 md:p-10 rounded-2xl backdrop-blur-sm md:backdrop-blur-sm relative overflow-hidden group transform-gpu will-change-transform"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-[#00f0ff] font-mono text-[10px] md:text-sm uppercase tracking-widest mb-6 relative z-10">{t.services_page.solution}</h4>
                  <ul className="space-y-6 md:space-y-8 relative z-10">
                    {service.solutions.map((sol, i) => (
                      <li key={i} className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"></div>
                          <strong className="text-white font-display text-base md:text-lg tracking-wide">{sol.title}</strong>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-4 border-l border-white/10 ml-[3px]">
                          {sol.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
