import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { profile } from '../data';
import PointCloudBg from './PointCloudBg';

const roles = ['Data Scientist', 'Data Analyst'];

export default function Hero() {
  const typed = useTypewriter(roles, 80, 45, 2200);
  const { scrollY } = useScroll();
  const y       = useTransform(scrollY, [0, 700], [0, -160]);
  const opacity = useTransform(scrollY, [0, 480], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <PointCloudBg />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/45 to-bg pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_38%,rgba(240,165,0,0.055),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(240,165,0,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(240,165,0,0.008)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-5 sm:px-8 max-w-5xl mx-auto pt-16 w-full"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-10 px-3.5 py-1.5 rounded-full border border-[#222] bg-surface/50 backdrop-blur text-[11px] font-mono text-muted"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
          Data Scientist @ ARA @ FDOT · Gainesville, FL
        </motion.div>

        {/* Name — clips out from bottom for smooth entrance */}
        <div className="overflow-hidden mb-5">
          <motion.h1
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(52px,9.5vw,120px)] font-black leading-[0.92] tracking-[-0.03em]"
          >
            <span className="text-cream">Tejas </span>
            <span className="grad-text">Parvathappa</span>
          </motion.h1>
        </div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4 mb-7 h-9"
        >
          <span className="w-8 h-px bg-amber/50 shrink-0" />
          <span className="text-lg sm:text-xl font-mono text-cream/55">
            {typed}<span className="text-amber animate-pulse">|</span>
          </span>
          <span className="w-8 h-px bg-amber/50 shrink-0" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mx-auto text-white/55 text-[16px] sm:text-[18px] leading-relaxed mb-10"
        >
          {profile.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <a href="#projects"
            className="px-7 py-3 rounded-full bg-amber hover:bg-amber-light text-bg font-bold text-sm transition-all duration-200 shadow-[0_0_32px_rgba(240,165,0,0.22)] hover:shadow-[0_0_52px_rgba(240,165,0,0.42)]">
            View Projects
          </a>
          <a href="#contact"
            className="px-7 py-3 rounded-full border border-[#282828] text-muted hover:text-cream hover:border-[#3a3a3a] text-sm transition-all duration-200">
            Get in touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="flex items-center justify-center gap-7"
        >
          {[
            { Icon: Github,   href: profile.github,            label: 'GitHub' },
            { Icon: Linkedin, href: profile.linkedin,          label: 'LinkedIn' },
            { Icon: Mail,     href: `mailto:${profile.email}`, label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer" aria-label={label}
              className="text-white/35 hover:text-amber transition-colors duration-200">
              <Icon size={21} />
            </a>
          ))}
          <span className="text-[11px] font-mono text-white/25 tracking-wider hidden sm:block ml-1">
            {profile.email}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#2e2e2e]"
      >
        <span className="text-[9px] font-mono tracking-[0.2em] uppercase">scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.35, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#2a2a2a] to-transparent"
        />
      </motion.div>
    </section>
  );
}
