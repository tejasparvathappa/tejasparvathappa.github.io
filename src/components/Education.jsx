import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';
import { education } from '../data';

const fadeUp = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

export default function Education() {
  return (
    <section id="education" className="py-36 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="sec-label">Education</motion.div>
          <motion.h2 variants={fadeUp}
            className="text-[clamp(38px,6vw,80px)] font-black text-cream leading-tight tracking-tight">
            Academic<br /><span className="grad-text">background</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {education.map((edu, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="glow-card p-7 flex gap-5 relative overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber via-coral/60 to-transparent origin-left"
                />
                {/* Logo */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#f36e21] flex items-center justify-center overflow-hidden">
                  {edu.logo
                    ? <img src={edu.logo} alt={edu.school} className="w-10 h-10 object-contain"
                        onError={e => { e.target.style.display = 'none'; }} />
                    : <GraduationCap size={20} className="text-white" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white text-[16px] mb-0.5">{edu.school}</p>
                  <p className="text-amber text-[14px] mt-0.5 leading-snug">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-[12px] text-white/55 font-mono">
                    <span className="flex items-center gap-1.5"><Calendar size={10} /> {edu.period}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={10} /> {edu.location}</span>
                    <span className="flex items-center gap-1.5"><Star size={10} /> GPA {edu.gpa}</span>
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
