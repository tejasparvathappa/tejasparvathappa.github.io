import { motion } from 'framer-motion';

const funItems = [
  {
    emoji: '🏃',
    title: 'I run',
    desc: "Half marathons, 5Ks — if there's a finish line, I'm probably signed up.",
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
    title: 'Whiskey the cat',
    desc: "Expert at sitting on keyboards and judging my code.",
    img: '/fun/whiskey.jpg',
    imgAlt: 'Whiskey the cat',
    tilt: '-rotate-1',
  },
  {
    emoji: '🚴',
    title: 'Cycling',
    desc: "When I'm not crunching FDOT road data, I'm out riding on those same roads. Ironic? Maybe.",
    img: '/fun/bike.jpg',
    imgAlt: "Tejas's road bike",
    tilt: 'rotate-2',
  },
  {
    emoji: '💻',
    title: 'Side projects',
    desc: "I build things for the people around me. If someone says \"that sounds annoying to do manually\", I take it as a challenge.",
    img: 'https://images.unsplash.com/photo-1754039985001-ccafee437736?w=800&auto=format&fit=crop&q=80',
    imgAlt: 'Developer working on side projects',
    tilt: '-rotate-1',
  },
];

const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94, y: 30 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function FunSection() {
  return (
    <section id="fun" className="py-36 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-14"
        >
          <motion.div variants={fadeUp} className="sec-label">Outside work</motion.div>
          <motion.h2 variants={fadeUp}
            className="text-[clamp(38px,6vw,80px)] font-black text-cream leading-tight tracking-tight mb-4">
            What I do<br /><span className="grad-text">for fun</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/45 text-[16px] max-w-xl">
            Data science is the job. Here's the rest.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {funItems.map((item) => (
            <motion.div key={item.title} variants={scaleIn}
              className={`group glow-card overflow-hidden ${item.tilt} hover:rotate-0 transition-transform duration-300`}>
              <div className="relative h-52 overflow-hidden">
                <img src={item.img} alt={item.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={e => { e.target.parentElement.style.background = '#1a1a1a'; e.target.style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-2xl">{item.emoji}</span>
              </div>
              <div className="p-5">
                <p className="text-[17px] font-bold text-white mb-2">{item.title}</p>
                <p className="text-[14px] text-white/58 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
