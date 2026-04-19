import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { publications } from '../data';

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-12"
        >
          <motion.div variants={fadeUp} className="sec-label">Research</motion.div>
          <motion.h2 variants={fadeUp}
            className="text-[clamp(32px,4.5vw,60px)] font-black text-cream leading-tight tracking-tight">
            Published<br /><span className="grad-text">work</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-4"
        >
          {publications.map((pub, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="glow-card p-6 sm:p-8 flex gap-5 items-start">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center mt-0.5">
                  <BookOpen size={16} className="text-amber" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] sm:text-[16px] font-semibold text-cream leading-snug mb-2">
                    {pub.title}
                  </p>
                  <p className="text-[13px] text-muted mb-1">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="atag text-[10px]">{pub.venue}</span>
                    <span className="text-[11px] font-mono text-muted">{pub.year}</span>
                    {pub.link && (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[13px] text-amber hover:text-amber-light font-mono transition-colors">
                        <ExternalLink size={12} /> View paper ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
