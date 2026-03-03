/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';

const services = [
  {
    id: "ai-stock",
    title: "AI FOTOGRAFIJA IN STOCK PO MERI",
    intro: "Osebne, hiper-realistične vizualije, ki gradijo kultni status.",
    problem: "Vaša spletna stran izgleda natanko tako kot stran vašega konkurenta, ker oba kupujeta iste, plastične fotografije na Shutterstocku. Vaši produkti nimajo duše.",
    solutions: [
      { title: "100 % Unikatnost", text: "Zgradimo vaš lastni vizualni ekosistem. Vaše fotografije ne obstajajo nikjer drugje na spletu." },
      { title: "Popoln nadzor", text: "Želite vaš produkt v neonskem Tokiu ob 3. uri zjutraj? Ali v minimalističnem skandinavskem studiu? Dobite oboje v nekaj urah." },
      { title: "Brez stroškov produkcije", text: "Pozabite na iskanje lokacij, drage fotografe, najem studiev in čakanje na vreme. Vse ustvarimo v našem AI studiu." }
    ]
  },
  {
    id: "oglasi",
    title: "HIGH-PERFORMANCE OGLASNE KREATIVE",
    intro: "Ustavljamo drsenje. Nižamo ceno klika. Povečujemo prodajo.",
    problem: "Vaši Facebook in Instagram oglasi se izgubijo v morju povprečnosti. Ljudje jih preskočijo, vaš proračun pa izginja.",
    solutions: [
      { title: "Scroll-Stopping vizualije", text: "Ustvarjamo agresivno, premium estetiko, ki obiskovalca dobesedno prisili, da se ustavi." },
      { title: "Neskončno A/B testiranje", text: "V času, ko vaša konkurenca posname en sam oglas, mi zgeneriramo 10 različnih vizualnih variacij za testiranje. Zmagovalna kreativa dobi ves proračun." },
      { title: "Fokus na konverzijo", text: "Vsak piksel je optimiziran s psihologijo prodaje. Ne delamo lepih slik za v galerijo – delamo slike, ki prodajajo vaše storitve." }
    ]
  },
  {
    id: "vplivnezi",
    title: "VIRTUALNI VPLIVNEŽI IN AI AMBASADORJI",
    intro: "Vaš popoln obraz znamke. 24/7 prisotnost. Brez dram.",
    problem: "Klasični vplivneži so dragi, nezanesljivi in lahko uničijo vaš ugled z eno napačno objavo. Vaša znamka je talec njihovih muh in urnikov.",
    solutions: [
      { title: "Popolna lastnina in nadzor", text: "Zgradimo ekskluzivnega digitalnega modela (ambasadorja), ki je 100 % vaša last. Govori in predstavlja točno tisto, kar želite, brez tveganja za vaš ugled." },
      { title: "Neomejena prisotnost", text: "Vaš virtualni model ne potrebuje spanja, ne zamuja na snemanja in ne zaračunava potnih stroškov. Danes pozira na ulicah Tokia, jutri predstavlja vaš produkt v studiu. Vse iz našega sistema." },
      { title: "Konzistentnost estetike", text: "Obraz, ki se ne stara in vedno izgleda brezhibno. Popolna, neprekinjena vizualna identiteta za vašo blagovno znamko." }
    ]
  },
  {
    id: "spletne-strani",
    title: "PREMIUM SPLETNI INŽENIRING",
    intro: "Ne delamo \"lepih vizitk\". Gradimo digitalne prodajne stroje.",
    problem: "Vaša trenutna spletna stran je počasna, generična in obiskovalce dobesedno pošilja k vaši konkurenci. Je zgolj strošek, ne pa investicija.",
    solutions: [
      { title: "Vibecoding arhitektura", text: "Z najnaprednejšim AI spletnim inženiringom gradimo bliskovito hitre strani. Čista koda, takojšnje nalaganje in brezhibno delovanje na vseh napravah." },
      { title: "Dominantna estetika", text: "\"Dark Cyber-Elegance\" dizajn. Vaše podjetje bo v trenutku vizualno pozicionirano ob bok globalnim tehnološkim gigantom. Z globino, neonskimi poudarki in premišljenimi mikro-animacijami." },
      { title: "Fokus na konverzijo", text: "Vsak gumb, vsak naslov in vsak interaktivni element je strateško postavljen z enim samim ciljem – da obiskovalca brez trenja pretvori v plačljivo stranko." }
    ]
  }
];

export default function Storitve({ onOpenContact }: { onOpenContact?: () => void }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
      <CustomCursor />
      <Navbar />

      {/* 1. Hero Sekcija */}
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 pt-32 text-center md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8 text-white"
          >
            DOMINACIJA VSAKEGA KANALA.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-sm md:text-base text-gray-400 tracking-widest uppercase max-w-3xl leading-relaxed"
          >
            [ Ne ponujamo storitev. Ponujamo nepravično prednost pred vašo konkurenco. ]
          </motion.p>
        </div>
        
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#00f0ff]/5 rounded-full blur-[100px] pointer-events-none -z-0"></div>
      </main>

      {/* Storitve Blocks */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <section key={index} id={service.id} className="relative px-6 py-24 md:px-12 lg:py-40 max-w-7xl mx-auto w-full border-t border-white/5">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
              
              {/* Left: Title & Intro */}
              <div className="lg:w-5/12 flex flex-col">
                <div className="lg:sticky lg:top-40">
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] mb-6 transform-gpu will-change-transform"
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#00f0ff] text-lg md:text-xl font-medium italic transform-gpu will-change-transform"
                  >
                    {service.intro}
                  </motion.p>
                </div>
              </div>

              {/* Right: Problem & Solution */}
              <div className="lg:w-7/12 flex flex-col gap-8">
                {/* Problem Block */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-black/90 md:bg-red-950/10 border border-red-500/20 p-8 md:p-10 rounded-2xl backdrop-blur-sm md:backdrop-blur-sm relative overflow-hidden group transform-gpu will-change-transform"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-red-400 font-mono text-xs md:text-sm uppercase tracking-widest mb-4 relative z-10">Problem</h4>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed relative z-10">
                    {service.problem}
                  </p>
                </motion.div>

                {/* Solution Block */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-black/90 md:bg-[#00f0ff]/5 border border-[#00f0ff]/20 p-8 md:p-10 rounded-2xl backdrop-blur-sm md:backdrop-blur-sm relative overflow-hidden group transform-gpu will-change-transform"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-[#00f0ff] font-mono text-xs md:text-sm uppercase tracking-widest mb-6 relative z-10">Rešitev</h4>
                  <ul className="space-y-8 relative z-10">
                    {service.solutions.map((sol, i) => (
                      <li key={i} className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"></div>
                          <strong className="text-white font-display text-lg tracking-wide">{sol.title}</strong>
                        </div>
                        <p className="text-gray-400 text-base leading-relaxed pl-4 border-l border-white/10 ml-[3px]">
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
