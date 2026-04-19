import { motion } from 'framer-motion';
import { skills } from '../data';

const catColor = {
  'Languages':           '#f0a500',
  'ML & Deep Learning':  '#34d399',
  'GIS & Spatial':       '#60a5fa',
  'Cloud & Data Eng.':   '#ff6d3b',
  'BI & Visualization':  '#a78bfa',
};

const allSkills = Object.entries(skills).flatMap(([cat, items]) =>
  items.map(name => ({ name, cat }))
);
const marqueeItems  = [...allSkills, ...allSkills];
const marqueeItems2 = [...allSkills].reverse().concat([...allSkills].reverse());

function SkillPill({ name, cat }) {
  const color = catColor[cat] || '#f0a500';
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1c1c1c] bg-surface text-[13px] text-muted whitespace-nowrap mx-2 shrink-0">
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
      {name}
    </span>
  );
}

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-36 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-14">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="sec-label">Skills</motion.div>
          <motion.h2 variants={fadeUp}
            className="text-[clamp(38px,6vw,80px)] font-black text-cream leading-tight tracking-tight">
            My technical<br /><span className="grad-text">toolkit</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="relative flex mb-4">
        <div className="flex animate-marquee">
          {marqueeItems.map((s, i) => <SkillPill key={`a-${i}`} {...s} />)}
        </div>
      </div>
      <div className="relative flex mb-16">
        <div className="flex animate-marquee2">
          {marqueeItems2.map((s, i) => <SkillPill key={`b-${i}`} {...s} />)}
        </div>
      </div>

      {/* Categorized grid */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {Object.entries(skills).map(([cat, items]) => {
            const color = catColor[cat] || '#f0a500';
            return (
              <motion.div key={cat} variants={fadeUp}
                className="glow-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                  <p className="text-[11px] font-mono text-muted uppercase tracking-widest">{cat}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <motion.span key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-cream/80 border border-[#242424] bg-[#0f0f0f] hover:border-amber/20 hover:text-cream transition-colors duration-200">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
