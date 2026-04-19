import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const links = [
  { label: 'About',          href: '#about' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Publications',   href: '#publications' },
  { label: 'Contact',        href: '#contact' },
  { label: 'Outside work',   href: '#fun' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#070707]/85 backdrop-blur-xl border-b border-[#1a1a1a]' : 'bg-transparent'
    }`}>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber to-coral origin-left"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#hero" className="font-mono text-sm font-medium group">
            <span className="text-amber">tp</span>
            <span className="text-muted">.</span>
            <span className="text-[#3a3a3a] group-hover:text-[#5a5a5a] transition-colors">dev</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className="text-[13px] text-muted hover:text-cream transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="mailto:tejasparvathappa@gmail.com"
              className="text-[13px] px-5 py-2 rounded-full border border-amber/40 text-amber hover:bg-amber hover:text-bg font-medium transition-all duration-200">
              Hire me ↗
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-muted hover:text-cream p-1"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden overflow-hidden border-t border-[#1c1c1c] bg-[#070707]/95 backdrop-blur-xl"
      >
        <div className="flex flex-col gap-1 px-5 pb-5 pt-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm text-muted hover:text-cream py-2.5 px-3 rounded-lg hover:bg-surface transition-colors">
              {l.label}
            </a>
          ))}
          <a href="mailto:tejasparvathappa@gmail.com"
            className="mt-2 text-sm px-4 py-2.5 rounded-full border border-amber/40 text-amber text-center font-medium">
            Hire me ↗
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
