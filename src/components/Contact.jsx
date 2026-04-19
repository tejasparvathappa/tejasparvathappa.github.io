import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';
import { profile } from '../data';

const fadeUp = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-36 bg-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-12"
        >
          <motion.div variants={fadeUp} className="sec-label">Contact</motion.div>
        </motion.div>

        {/* Full-bleed CTA card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-[#1c1c1c] bg-[#0a0a0a] p-10 sm:p-16 lg:p-20">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber/5 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-coral/4 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(38px,6vw,80px)] font-black text-cream leading-tight tracking-tight mb-5"
              >
                Let's build<br />
                <span className="grad-text">something great</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-muted text-[15px] sm:text-[16px] leading-relaxed mb-10"
              >
                Data Scientist at ARA, embedded at FDOT in Gainesville, FL — flexible to relocate.
                Always up for interesting conversations about data, infrastructure, or research.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber hover:bg-amber-light text-bg font-bold text-sm transition-all duration-200 shadow-[0_0_44px_rgba(240,165,0,0.28)] hover:shadow-[0_0_64px_rgba(240,165,0,0.45)] mb-10"
              >
                <Mail size={16} />
                {profile.email}
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-6 text-[13px] text-muted"
              >
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber transition-colors">
                  <Linkedin size={14} className="text-amber" />
                  linkedin.com/in/tejas-parvathappa
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber transition-colors">
                  <Github size={14} className="text-amber" />
                  github.com/tejasparvathappa
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-amber" />
                  Gainesville, FL · Open to relocate
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
