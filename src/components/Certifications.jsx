import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { certifications } from '../data';

export default function Certifications() {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView();

  return (
    <section className="py-0 pb-20 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          {/* Tab trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="group flex items-center gap-3 mb-0 px-6 py-4 rounded-xl border border-[#1c1c1c] hover:border-amber/20 bg-surface/50 transition-all duration-200 w-full sm:w-auto"
          >
            <span className="text-[18px] font-mono text-white/70 uppercase tracking-widest">📜 Certifications</span>
            <span className="text-[16px] text-white/40 font-mono">— it's 2026 not sure how many care about this, but here's what I've got</span>
            <ChevronDown
              size={16}
              className={`text-white/50 ml-auto sm:ml-2 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Expandable panel */}
          <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-[600px] mt-5 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="glow-card p-6 flex flex-col gap-4">
                  {/* Provider logo */}
                  <div className="h-8 flex items-center">
                    <img
                      src={cert.logoUrl}
                      alt={cert.issuer}
                      className="h-7 object-contain max-w-[90px]"
                      onError={e => { e.target.style.display='none'; }}
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-white leading-snug">{cert.name}</p>
                    <p className="text-[13px] font-mono text-white/55 mt-1.5">{cert.issuer} · {cert.year}</p>
                  </div>

                  {cert.verifyUrl ? (
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[13px] text-amber hover:text-amber/80 font-mono transition-colors">
                      <ExternalLink size={12} /> Verify ↗
                    </a>
                  ) : (
                    <span className="text-[13px] font-mono text-white/30 italic">In progress</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
