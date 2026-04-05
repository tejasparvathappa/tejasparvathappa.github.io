import { skills } from '../data';

// Flatten all skills into a single marquee list
const allSkills = Object.entries(skills).flatMap(([cat, items]) =>
  items.map(name => ({ name, cat }))
);

const catDot = {
  'Languages':         '#f0a500',
  'Databases & Cloud': '#60a5fa',
  'BI & Visualization':'#a78bfa',
  'Data Engineering':  '#ff6d3b',
  'ML & Analytics':    '#34d399',
};

// Double the list for seamless loop
const marqueeItems  = [...allSkills, ...allSkills];
const marqueeItems2 = [...allSkills].reverse().concat([...allSkills].reverse());

function SkillPill({ name, cat, inverted }) {
  const color = catDot[cat] || '#f0a500';
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1c1c1c] bg-surface text-[13px] text-muted whitespace-nowrap mx-2 shrink-0"
      style={{ '--dot': color }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-surface diagonal-top diagonal-bottom overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-14">
        <div className="sec-label">Skills</div>
        <h2 className="text-5xl sm:text-6xl font-black text-cream leading-tight">
          My technical<br />
          <span className="grad-text">toolkit</span>
        </h2>
      </div>

      {/* Marquee row 1 — left */}
      <div className="relative flex mb-4">
        <div className="flex animate-marquee">
          {marqueeItems.map((s, i) => <SkillPill key={`a-${i}`} {...s} />)}
        </div>
      </div>

      {/* Marquee row 2 — right (reversed) */}
      <div className="relative flex mb-14">
        <div className="flex animate-marquee2">
          {marqueeItems2.map((s, i) => <SkillPill key={`b-${i}`} {...s} />)}
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap gap-5">
          {Object.entries(catDot).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-2 text-[12px] text-muted">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
