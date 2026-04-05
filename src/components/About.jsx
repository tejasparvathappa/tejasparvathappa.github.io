import { MapPin, GraduationCap, Award, Layers, Brain, Map, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { profile } from '../data';

const highlights = [
  {
    Icon: Brain,
    title: 'Deep Learning',
    desc: 'PyTorch, DGCNN, CNNs for pavement distress classification, pose detection, and computer vision at production scale.',
  },
  {
    Icon: Map,
    title: 'GIS & Spatial Analytics',
    desc: 'ArcGIS Pro spatial analysis, geospatial data pipelines, and StoryMaps — translating sensor data into actionable infrastructure insights.',
  },
  {
    Icon: Layers,
    title: 'Data Engineering',
    desc: 'End-to-end pipelines on Azure and AWS — ingesting, transforming, and serving data from raw LCMS sensor output to analyst-ready layers.',
  },
  {
    Icon: Zap,
    title: 'LLM Tooling',
    desc: 'GPT-powered internal tools that automate defect extraction and reporting — cutting manual review time significantly.',
  },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-28 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          <div className="sec-label">About me</div>
          <h2 className="text-5xl sm:text-6xl font-black text-cream leading-tight mb-10">
            Data scientist by trade,<br />
            <span className="grad-text">infrastructure</span> by impact
          </h2>

          <div className="grid lg:grid-cols-[1fr_420px] gap-14 items-start">
            {/* Left — bio paragraphs */}
            <div>
              {profile.about.split('\n\n').map((para, i) => (
                <p key={i} className="text-white/85 text-[16px] leading-[1.85] mb-5">{para}</p>
              ))}

              <div className="flex flex-wrap gap-5 mt-8 pt-8 border-t border-[#1c1c1c]">
                {[
                  { Icon: MapPin,        text: 'Gainesville, FL · Open to relocate' },
                  { Icon: GraduationCap, text: 'M.S @ RIT 2024' },
                  { Icon: Award,         text: 'AWS & Google Certified' },
                ].map(({ Icon, text }) => (
                  <span key={text} className="flex items-center gap-2 text-[14px] text-white/70">
                    <Icon size={14} className="text-amber shrink-0" />{text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — highlight cards */}
            <div className="space-y-4">
              {highlights.map(({ Icon, title, desc }) => (
                <div key={title} className="glow-card p-5 flex gap-4 items-start">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center">
                    <Icon size={16} className="text-amber" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-white mb-1">{title}</p>
                    <p className="text-[13px] text-white/65 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
