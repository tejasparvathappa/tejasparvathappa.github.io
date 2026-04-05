import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { education } from '../data';

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="py-28 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="sec-label">Education & Research</div>
        <h2 className="text-5xl sm:text-6xl font-black text-cream mb-16 leading-tight">
          Academic<br /><span className="grad-text">background</span>
        </h2>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8">
          {/* Education cards */}
          <div className="space-y-5">
            {education.map((edu, i) => (
              <div key={i} className={`glow-card p-6 flex gap-4 reveal ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}>
                {/* Logo */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#f36e21] flex items-center justify-center overflow-hidden">
                  {edu.logo
                    ? <img src={edu.logo} alt={edu.school} className="w-10 h-10 object-contain"
                        onError={e => { e.target.style.display='none'; }}/>
                    : <GraduationCap size={20} className="text-white" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white text-[16px]">{edu.school}</p>
                  <p className="text-amber text-[15px] mt-0.5">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-[13px] text-white/60 font-mono">
                    <span className="flex items-center gap-1"><Calendar size={10}/> {edu.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={10}/> {edu.location}</span>
                    <span className="flex items-center gap-1"><Star size={10}/> GPA {edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Right: GIS spotlight
          <div className={`reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="glow-card p-6 h-full">
              <p className="text-[11px] font-mono text-muted uppercase tracking-widest mb-5">GIS & Spatial Work</p>
              <div className="space-y-4">
                {[
                  { icon: '🗺️', title: 'Pavement Condition Mapping', desc: 'ArcGIS Pro spatial analysis of LiDAR crack detection outputs across Florida\'s highway network — visualizing road health indices county-by-county.' },
                  { icon: '📡', title: 'LCMS Sensor Data', desc: 'Processing and georeferencing 3D point cloud data from LCMS road scanners to produce actionable GIS layers for FDOT engineers.' },
                  { icon: '📊', title: 'ArcGIS StoryMap', desc: 'Published geospatial StoryMaps to communicate infrastructure analytics findings to non-technical FDOT stakeholders.' },
                  { icon: '🛣️', title: 'Road Infrastructure Analytics', desc: 'Integrating ML model outputs with GIS to prioritize road repair scheduling based on pavement distress severity and location.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 p-3 rounded-xl bg-[#0a0a0a] border border-[#1c1c1c]">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-[14px] font-semibold text-white mb-1">{item.title}</p>
                      <p className="text-[13px] text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
