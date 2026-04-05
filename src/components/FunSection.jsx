import { useInView } from '../hooks/useInView';

const funItems = [
  {
    emoji: '🏃',
    title: 'I run',
    desc: "Half marathons, 5Ks,  — if there's a finish line, I'm probably signed up.",
    img: '/fun/running.jpg',
    imgAlt: 'Tejas at a race with UF Gator mascots',
    tilt: '-rotate-1',
  },
  {
    emoji: '🧗',
    title: 'Bouldering',
    desc: "Problem-solving with my hands for once.",
    img: 'https://images.unsplash.com/photo-1759928222798-63e73f690563?w=800&auto=format&fit=crop&q=80',
    imgAlt: 'Person on a colorful bouldering wall',
    tilt: 'rotate-1',
  },
  {
    emoji: '🐱',
    title: 'Pet',
    desc: "My cat Whiskey — an expert at sitting on keyboards, judging my code",
    img: '/fun/whiskey.jpg',
    imgAlt: 'Whiskey the cat',
    tilt: '-rotate-1',
  },
  {
    emoji: '🚴',
    title: 'Cycling',
    desc: "When I'm not crunching FDOT road data, I'm out riding on those same roads. Ironic? Maybe. Satisfying? Absolutely.",
    img: '/fun/bike.jpg',
    imgAlt: 'Tejas\'s road bike',
    tilt: 'rotate-2',
  },
  {
    emoji: '💻',
    title: 'Side projects',
    desc: "I build things for the people around me — automations, tools, dashboards. If someone says \"that sounds annoying to do manually\", I take it as a challenge.",
    img: 'https://images.unsplash.com/photo-1754039985001-ccafee437736?w=800&auto=format&fit=crop&q=80',
    imgAlt: 'Developer working on side projects',
    tilt: '-rotate-1',
  },
];

export default function FunSection() {
  const [ref, inView] = useInView();

  return (
    <section id="fun" className="py-28 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          <div className="sec-label">Outside work</div>
          <h2 className="text-5xl sm:text-6xl font-black text-cream leading-tight mb-4">
            What I do<br /><span className="grad-text">for fun</span>
          </h2>
          <p className="text-white/50 text-[16px] mb-14 max-w-xl">
            Data science is the job. Here's the rest.
          </p>

          {/* Masonry-style grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {funItems.map((item, i) => (
              <div
                key={item.title}
                className={`group glow-card overflow-hidden ${item.tilt} hover:rotate-0 transition-transform duration-300`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Photo */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.imgAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={e => {
                      e.target.parentElement.style.background = '#1a1a1a';
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 text-2xl">{item.emoji}</span>
                </div>

                {/* Text */}
                <div className="p-5">
                  <p className="text-[17px] font-bold text-white mb-2">{item.title}</p>
                  <p className="text-[14px] text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
