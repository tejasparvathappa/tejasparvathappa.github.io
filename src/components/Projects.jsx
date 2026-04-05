import { Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data';
import { vizMap } from './ProjectViz';

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="py-28 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="sec-label">Projects</div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <h2 className="text-5xl sm:text-6xl font-black text-cream leading-tight">
            Things I've<br /><span className="grad-text">built</span>
          </h2>
          <a href="https://github.com/tejasparvathappa" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] text-muted hover:text-cream border border-[#1c1c1c] hover:border-[#2a2a2a] px-4 py-2 rounded-full transition-all">
            <Github size={13} /> All repos ↗
          </a>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const Viz = vizMap[p.vizType];
            return (
              <div key={i}
                className={`glow-card flex flex-col reveal ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}>

                {/* Project visualization thumbnail */}
                <div className="relative h-36 overflow-hidden rounded-t-2xl border-b border-[#1c1c1c] bg-[#0a0a0a]">
                  {Viz && <Viz />}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[14px] font-bold text-cream leading-snug flex-1 pr-2">{p.title}</h3>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="text-muted hover:text-amber transition-colors shrink-0 mt-0.5" aria-label="GitHub">
                      <Github size={14} />
                    </a>
                  </div>

                  <p className="text-[12px] text-muted leading-relaxed mb-4 flex-1">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => <span key={t} className="atag text-[10px]">{t}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
