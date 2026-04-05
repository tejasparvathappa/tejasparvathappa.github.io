import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { profile } from '../data';

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="py-28 bg-surface diagonal-top">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          <div className="sec-label">Contact</div>

          {/* Big CTA card */}
          <div className="relative rounded-2xl overflow-hidden border border-[#1c1c1c] bg-[#0a0a0a] p-10 sm:p-16">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber/4 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl sm:text-6xl font-black text-cream leading-tight mb-5">
                Let's build<br />
                <span className="grad-text">something great</span>
              </h2>
              <p className="text-muted text-[15px] leading-relaxed mb-10">
                Data Scientist at ARA, embedded at FDOT in Gainesville, FL — flexible to relocate.
                Always up for interesting conversations about data, infrastructure, or research.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber hover:bg-amber-light text-bg font-bold text-sm transition-all duration-200 shadow-[0_0_40px_rgba(240,165,0,0.25)] hover:shadow-[0_0_60px_rgba(240,165,0,0.4)] mb-10"
              >
                <Mail size={16} />
                {profile.email}
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex flex-wrap gap-6 text-[13px] text-muted">
                <a
                  href={profile.linkedin}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber transition-colors"
                >
                  <Linkedin size={14} className="text-amber" />
                  linkedin.com/in/tejas-parvathappa
                </a>
                <a
                  href={profile.github}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber transition-colors"
                >
                  <Github size={14} className="text-amber" />
                  github.com/tejasparvathappa
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-amber" />
                  Gainesville, FL · Open to relocate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
