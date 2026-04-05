import { Github, Linkedin, Mail } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { profile } from '../data';
import PointCloudBg from './PointCloudBg';

const roles = ['Data Scientist', 'Data Analyst'];

const techStack = ['Python', 'PyTorch', 'ArcGIS Pro', 'Azure', 'SQL', 'PySpark', 'GIS'];

export default function Hero() {
  const typed = useTypewriter(roles, 80, 45, 2200);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <PointCloudBg />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-bg/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(240,165,0,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(240,165,0,0.012)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-20 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">

          {/* LEFT — name, title, CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full border border-[#222] bg-surface/40 backdrop-blur text-[11px] font-mono text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-amber opacity-70" />
              Data Scientist @ Applied Research Associates @ FDOT · Gainesville, FL
            </div>

            <h1 className="text-[clamp(38px,6vw,72px)] font-black leading-[1.0] tracking-tight mb-3">
              <span className="text-cream">Tejas </span>
              <span className="grad-text">Parvathappa</span>
            </h1>

            <div className="flex items-center gap-3 mb-5 h-9">
              <span className="w-5 h-px bg-amber shrink-0" />
              <span className="text-lg sm:text-xl font-mono text-cream/70">
                {typed}<span className="text-amber animate-pulse">|</span>
              </span>
            </div>

            <p className="max-w-md text-white/80 text-[16px] sm:text-[17px] leading-relaxed mb-10">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a href="#projects"
                className="px-6 py-2.5 rounded-full bg-amber hover:bg-amber-light text-bg font-semibold text-sm transition-all shadow-[0_0_24px_rgba(240,165,0,0.2)]">
                View Projects
              </a>
              <a href="#experience"
                className="px-6 py-2.5 rounded-full border border-[#2a2a2a] text-muted hover:text-cream hover:border-[#3a3a3a] text-sm transition-all">
                My Work
              </a>
            </div>

            <div className="flex items-center gap-6">
              {[
                { Icon: Github,   href: profile.github,            label: 'GitHub' },
                { Icon: Linkedin, href: profile.linkedin,          label: 'LinkedIn' },
                { Icon: Mail,     href: `mailto:${profile.email}`, label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer" aria-label={label}
                  className="text-white hover:text-amber transition-colors">
                  <Icon size={22} />
                </a>
              ))}
              <span className="text-[12px] font-mono text-white/40 tracking-wider hidden sm:block">
                {profile.email}
              </span>
            </div>
          </div>

          {/* RIGHT — floating data panel */}
          <div className="hidden lg:flex flex-col gap-3">

            {/* Mini terminal header */}
            <div className="rounded-xl border border-[#1c1c1c] bg-[#0a0a0a]/80 backdrop-blur overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1c1c1c]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
                </div>
                <span className="text-[10px] font-mono text-white/40 ml-2">tp ~ terminal</span>
              </div>
              <div className="px-4 py-3 space-y-1 text-[11px] font-mono">
                <p><span className="text-white/40">$</span> <span className="text-amber">python</span> <span className="text-[#6ee7b7]">clean_the_worlds_data.py</span></p>
                <p className="text-white/50">Looking for new challenges...</p>
                <p><span className="text-[#6ee7b7]">✓</span> <span className="text-white/50">B.S and M.S degrees in Data / ML domain loaded</span></p>
                <p><span className="text-[#6ee7b7]">✓</span> <span className="text-white/50">Over 3 years of tech experience currently in stack</span></p>
                <p><span className="text-amber">→</span> <span className="text-white/50">Ability to be a great teammate, lead and be lead skills loaded..</span></p>
                <p className="text-white/30 italic text-[10px]">Let's talk</p>
                <p className="text-[#6ee7b7] animate-pulse">█</p>
              </div>
            </div>

            {/* Tech stack pills
            <div className="rounded-xl border border-[#1c1c1c] bg-[#0a0a0a]/80 backdrop-blur p-3">
              <p className="text-[9px] font-mono text-muted uppercase tracking-widest mb-2.5">Current stack</p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map(t => (
                  <span key={t} className="atag text-[10px]">{t}</span>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* LiDAR label */}
      <div className="absolute right-8 bottom-12 hidden xl:flex flex-col items-end gap-1 text-[9px] font-mono text-[#222]">
        <span className="text-amber/25">// point cloud preview</span>
        <span></span>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#252525]">
        <span className="text-[9px] font-mono tracking-[0.2em] uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#2a2a2a] to-transparent" />
      </div>
    </section>
  );
}
