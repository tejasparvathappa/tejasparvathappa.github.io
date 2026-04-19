import { motion } from 'framer-motion';
import { Brain, Map, Layers, Zap, MapPin, GraduationCap, Award } from 'lucide-react';
import { profile } from '../data';

const stats = [
  { num: '3+',   label: 'Years Experience' },
  { num: '88%',  label: 'Model Accuracy' },
  { num: '40%',  label: 'Review Time Saved' },
  { num: '18K+', label: 'Records Analyzed' },
];

const highlights = [
  { Icon: Brain,  title: 'Deep Learning',       desc: 'PyTorch, DGCNN, CNNs for pavement distress classification, pose detection, and computer vision at production scale.' },
  { Icon: Map,    title: 'GIS & Spatial',        desc: 'ArcGIS Pro spatial analysis, geospatial pipelines, and StoryMaps — translating LiDAR sensor data into actionable infrastructure insights.' },
  { Icon: Layers, title: 'Data Engineering',     desc: 'End-to-end pipelines on Azure and AWS — from raw LCMS sensor output to analyst-ready layers.' },
  { Icon: Zap,    title: 'LLM Tooling',          desc: 'GPT-powered internal tools that automate defect extraction and reporting — cutting manual review time by 40%.' },
];

const QUOTE = "I build deep learning models, process LiDAR point clouds, and engineer the data pipelines that keep Florida's roads in shape.";

const fadeUp = {
  hidden:   { opacity: 0, y: 50 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = (delay = 0) => ({
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.1, delayChildren: delay } },
});

export default function About() {
  const words = QUOTE.split(' ');

  return (
    <section id="about" className="py-36 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section label + heading */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger()}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="sec-label">About me</motion.div>
          <motion.h2 variants={fadeUp}
            className="text-[clamp(38px,6vw,80px)] font-black text-cream leading-tight tracking-tight">
            Data scientist by trade,<br />
            <span className="grad-text">infrastructure</span> by impact
          </motion.h2>
        </motion.div>

        {/* Large word-reveal quote */}
        <div className="mb-20 max-w-4xl">
          <motion.p
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.035 } } }}
            className="text-[clamp(18px,2.6vw,32px)] font-semibold leading-[1.45] text-cream/30"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden:  { opacity: 0.08, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="inline-block mr-[0.28em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger()}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24"
        >
          {stats.map(({ num, label }) => (
            <motion.div key={label} variants={fadeUp}
              className="rounded-2xl border border-[#1c1c1c] bg-surface p-6 sm:p-8 text-center group hover:border-amber/20 transition-colors duration-300">
              <p className="text-[clamp(32px,4vw,54px)] font-black grad-text leading-none mb-2">{num}</p>
              <p className="text-[11px] font-mono text-muted uppercase tracking-widest">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio + highlights */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-14 items-start">

          {/* Left — bio */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger()}
          >
            {profile.about.split('\n\n').map((para, i) => (
              <motion.p key={i} variants={fadeUp}
                className="text-white/78 text-[16px] sm:text-[17px] leading-[1.85] mb-5">
                {para}
              </motion.p>
            ))}
            <motion.div variants={fadeUp}
              className="flex flex-wrap gap-5 mt-8 pt-8 border-t border-[#1c1c1c]">
              {[
                { Icon: MapPin,        text: 'Gainesville, FL · Open to relocate' },
                { Icon: GraduationCap, text: 'M.S @ RIT 2024' },
                { Icon: Award,         text: 'AWS & Google Certified' },
              ].map(({ Icon, text }) => (
                <span key={text} className="flex items-center gap-2 text-[14px] text-white/65">
                  <Icon size={14} className="text-amber shrink-0" />{text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — highlight cards */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger(0.1)}
            className="space-y-4"
          >
            {highlights.map(({ Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp}
                className="glow-card p-5 flex gap-4 items-start">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center">
                  <Icon size={16} className="text-amber" />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white mb-1">{title}</p>
                  <p className="text-[13px] text-white/60 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
