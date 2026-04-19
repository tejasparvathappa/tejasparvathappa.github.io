import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { certifications } from '../data';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Certifications() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-0 pb-24 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Accordion trigger */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#1c1c1c] hover:border-amber/25 bg-surface/50 transition-all duration-200 w-full sm:w-auto text-left"
        >
          <span className="text-[15px] font-mono text-white/70 uppercase tracking-widest">📜 Certifications</span>
          <span className="text-[13px] text-white/35 font-mono hidden sm:block">— it's 2026, not sure how many care, but here's what I've got</span>
          <ChevronDown size={15}
            className={`text-white/40 ml-auto sm:ml-2 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <motion.div
                initial="hidden" animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5"
              >
                {certifications.map((cert, i) => (
                  <motion.div key={i} variants={fadeUp}
                    className="glow-card p-6 flex flex-col gap-4">
                    <div className="h-8 flex items-center">
                      <img src={cert.logoUrl} alt={cert.issuer}
                        className="h-7 object-contain max-w-[90px]"
                        onError={e => { e.target.style.display = 'none'; }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[15px] font-semibold text-white leading-snug">{cert.name}</p>
                      <p className="text-[12px] font-mono text-white/50 mt-1.5">{cert.issuer} · {cert.year}</p>
                    </div>
                    {cert.verifyUrl ? (
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[13px] text-amber hover:text-amber-light font-mono transition-colors">
                        <ExternalLink size={12} /> Verify ↗
                      </a>
                    ) : (
                      <span className="text-[12px] font-mono text-muted/60 italic">In progress</span>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
