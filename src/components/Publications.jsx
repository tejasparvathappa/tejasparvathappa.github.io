import { BookOpen, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { publications } from '../data';

export default function Publications() {
  const [ref, inView] = useInView();

  return (
    <section id="publications" className="py-24 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          <div className="sec-label">Research</div>
          <h2 className="text-5xl sm:text-6xl font-black text-cream leading-tight mb-12">
            Published<br /><span className="grad-text">work</span>
          </h2>

          <div className="space-y-5">
            {publications.map((pub, i) => (
              <div key={i} className="glow-card p-7 border-l-2 border-l-amber/50">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center mt-0.5">
                    <BookOpen size={18} className="text-amber" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[17px] font-semibold text-white leading-snug mb-3">
                      "{pub.title}"
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/55 font-mono">
                      <span>{pub.authors}</span>
                      <span className="text-white/25">·</span>
                      <span>{pub.venue}</span>
                      <span className="text-white/25">·</span>
                      <span>{pub.year}</span>
                      {pub.link && (
                        <>
                          <span className="text-white/25">·</span>
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-amber hover:text-amber/80 transition-colors"
                          >
                            <ExternalLink size={12} /> View paper
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
