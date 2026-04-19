import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import { vizMap } from './ProjectViz';

const fadeUp = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

const scaleIn = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  const [featured, ...rest] = projects;
  const FeaturedViz = vizMap[featured.vizType];

  return (
    <section id="projects" className="py-36 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <motion.div variants={fadeUp} className="sec-label">Projects</motion.div>
            <motion.h2 variants={fadeUp}
              className="text-[clamp(38px,6vw,80px)] font-black text-cream leading-tight tracking-tight">
              Things I've<br /><span className="grad-text">built</span>
            </motion.h2>
          </div>
          <motion.a variants={fadeUp}
            href="https://github.com/tejasparvathappa" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] text-muted hover:text-cream border border-[#1c1c1c] hover:border-[#2a2a2a] px-4 py-2 rounded-full transition-all self-start sm:self-auto shrink-0">
            <Github size={13} /> All repos <ArrowUpRight size={12} />
          </motion.a>
        </motion.div>

        {/* Featured project — full-width 2-column card */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={scaleIn}
          className="mb-6"
        >
          <div className="glow-card overflow-hidden relative">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber via-coral/60 to-transparent origin-left"
            />
            <div className="grid lg:grid-cols-2">
              <div className="h-52 lg:h-auto lg:min-h-[260px] bg-[#0a0a0a] border-b lg:border-b-0 lg:border-r border-[#1c1c1c] relative overflow-hidden">
                {FeaturedViz && <FeaturedViz />}
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-amber uppercase tracking-[0.2em] mb-3">Featured Project</span>
                <h3 className="text-xl sm:text-2xl font-bold text-cream mb-3 leading-snug">{featured.title}</h3>
                <p className="text-muted text-[14px] leading-relaxed mb-6">{featured.description}</p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {featured.tags.map(t => <span key={t} className="atag text-[10px]">{t}</span>)}
                </div>
                <a href={featured.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-amber hover:text-amber-light font-mono transition-colors">
                  <Github size={14} /> View on GitHub <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest of projects — 2/3-column grid */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {rest.map((p, i) => {
            const Viz = vizMap[p.vizType];
            return (
              <motion.div key={i} variants={scaleIn}
                className="glow-card flex flex-col overflow-hidden">
                <div className="relative h-36 bg-[#0a0a0a] border-b border-[#1c1c1c] overflow-hidden">
                  {Viz && <Viz />}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[14px] font-bold text-cream leading-snug flex-1 pr-2">{p.title}</h3>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="text-muted hover:text-amber transition-colors shrink-0 mt-0.5" aria-label="GitHub">
                      <Github size={14} />
                    </a>
                  </div>
                  <p className="text-[12px] text-muted leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => <span key={t} className="atag text-[10px]">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
