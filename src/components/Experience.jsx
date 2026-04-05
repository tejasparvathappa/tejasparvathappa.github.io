import { Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { experience } from '../data';

const typeColor = {
  Research: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Industry: 'bg-amber/10 text-amber border-amber/20',
};

function CompanyLogo({ job }) {
  if (!job.logo) {
    // Fallback: styled initials
    return (
      <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center shrink-0">
        <span className="text-[10px] font-bold text-amber font-mono">{job.companyShort}</span>
      </div>
    );
  }
  return (
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shrink-0 ${job.logoDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <img
        src={job.logo}
        alt={job.company}
        className="w-8 h-8 object-contain"
        onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML = `<span class="text-[10px] font-bold text-amber font-mono">${job.companyShort}</span>`; }}
      />
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-28 bg-surface diagonal-top diagonal-bottom">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="sec-label">Experience</div>
        <h2 className="text-5xl sm:text-6xl font-black text-cream mb-16 leading-tight">
          Where I've made<br /><span className="grad-text">an impact</span>
        </h2>

        <div ref={ref} className="relative space-y-6">

          {experience.map((job, i) => (
            <div key={i} className={`reveal ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}>

              <div className="glow-card p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-3">
                    <CompanyLogo job={job} />
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <h3 className="text-[15px] font-bold text-cream">{job.role}</h3>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${typeColor[job.type]}`}>{job.type}</span>
                      </div>
                      <p className="text-amber font-medium text-sm">{job.company}</p>
                      {/* Client badge for ARA/FDOT */}
                      {job.client && (
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-[10px] font-mono">embedded @</span>
                          {job.clientLogo && (
                            <img src={job.clientLogo} alt={job.client} className="h-4 object-contain"
                              onError={e => e.target.style.display='none'} />
                          )}
                          <span className="text-[11px] text-cream">{job.client}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 shrink-0 text-[11px] text-cream font-mono">
                    <span className="flex items-center gap-1"><Calendar size={10}/> {job.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={10}/> {job.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-[13px] text-cream leading-relaxed">
                      <span className="text-amber mt-1.5 shrink-0 text-[9px]">◆</span>{h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => <span key={tag} className="atag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
