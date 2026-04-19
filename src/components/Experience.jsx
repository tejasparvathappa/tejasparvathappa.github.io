import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experience } from '../data';

const typeColor = {
  Research: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Industry:  'bg-amber/10 text-amber border-amber/20',
};

const fadeUp = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

function CompanyLogo({ job }) {
  if (!job.logo) {
    return (
      <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center shrink-0">
        <span className="text-[10px] font-bold text-amber font-mono">{job.companyShort}</span>
      </div>
    );
  }
  return (
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shrink-0 ${job.logoDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <img src={job.logo} alt={job.company} className="w-8 h-8 object-contain"
        onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = `<span class="text-[10px] font-bold text-amber font-mono">${job.companyShort}</span>`; }} />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-36 bg-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="sec-label">Experience</motion.div>
          <motion.h2 variants={fadeUp}
            className="text-[clamp(38px,6vw,80px)] font-black text-cream leading-tight tracking-tight">
            Where I've made<br /><span className="grad-text">an impact</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          className="space-y-6"
        >
          {experience.map((job, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="glow-card p-6 sm:p-8 relative overflow-hidden">

                {/* Amber top accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber via-coral/60 to-transparent origin-left"
                />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-3">
                    <CompanyLogo job={job} />
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <h3 className="text-[15px] font-bold text-cream">{job.role}</h3>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${typeColor[job.type]}`}>{job.type}</span>
                      </div>
                      <p className="text-amber font-medium text-sm">{job.company}</p>
                      {job.client && (
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-[10px] font-mono text-muted">embedded @</span>
                          {job.clientLogo && (
                            <img src={job.clientLogo} alt={job.client} className="h-4 object-contain"
                              onError={e => e.target.style.display = 'none'} />
                          )}
                          <span className="text-[11px] text-cream">{job.client}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 shrink-0 text-[11px] text-muted font-mono">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {job.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={10} /> {job.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-5">
                  {job.highlights.map((h, j) => (
                    <motion.li key={j}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: j * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      className="flex gap-3 text-[13px] text-cream/80 leading-relaxed"
                    >
                      <span className="text-amber mt-1.5 shrink-0 text-[8px]">◆</span>{h}
                    </motion.li>
                  ))}
                </ul>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {job.tags.map(tag => <span key={tag} className="atag">{tag}</span>)}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
