// Data-viz SVG previews for each project (since no screenshots exist in repos)

export function SqlViz() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full" style={{background:'#0a0a0a'}}>
      {/* Terminal window */}
      <rect x="10" y="10" width="300" height="140" rx="6" fill="#111" stroke="#222" strokeWidth="1"/>
      <rect x="10" y="10" width="300" height="22" rx="6" fill="#1a1a1a"/>
      <circle cx="24" cy="21" r="4" fill="#ff5f57"/>
      <circle cx="36" cy="21" r="4" fill="#ffbd2e"/>
      <circle cx="48" cy="21" r="4" fill="#28ca41"/>
      {/* User prompt */}
      <text x="18" y="50" fontSize="9" fill="#5a5a5a" fontFamily="monospace">› </text>
      <text x="26" y="50" fontSize="9" fill="#888" fontFamily="monospace">Ask: "Show top 10 sales by region"</text>
      {/* Generated SQL */}
      <text x="18" y="67" fontSize="8.5" fill="#f0a500" fontFamily="monospace">SELECT</text>
      <text x="55" y="67" fontSize="8.5" fill="#6ee7b7" fontFamily="monospace"> region, SUM(sales) AS total</text>
      <text x="18" y="79" fontSize="8.5" fill="#f0a500" fontFamily="monospace">FROM</text>
      <text x="46" y="79" fontSize="8.5" fill="#6ee7b7" fontFamily="monospace"> sales_data</text>
      <text x="18" y="91" fontSize="8.5" fill="#f0a500" fontFamily="monospace">GROUP BY</text>
      <text x="66" y="91" fontSize="8.5" fill="#6ee7b7" fontFamily="monospace"> region</text>
      <text x="18" y="103" fontSize="8.5" fill="#f0a500" fontFamily="monospace">ORDER BY</text>
      <text x="66" y="103" fontSize="8.5" fill="#6ee7b7" fontFamily="monospace"> total DESC</text>
      <text x="18" y="115" fontSize="8.5" fill="#f0a500" fontFamily="monospace">LIMIT</text>
      <text x="46" y="115" fontSize="8.5" fill="#6ee7b7" fontFamily="monospace"> 10;</text>
      {/* Result row */}
      <rect x="18" y="122" width="280" height="16" rx="3" fill="#1a2a1a"/>
      <text x="22" y="133" fontSize="7.5" fill="#28ca41" fontFamily="monospace">✓ Query executed — 10 rows returned in 0.24s</text>
    </svg>
  );
}

export function MonteCarloViz() {
  const paths = Array.from({length: 18}, (_, i) => {
    const seed = i * 137.508;
    const pts = Array.from({length: 40}, (__, j) => {
      const x = 18 + j * 7.2;
      const y = 100 + Math.sin(j * 0.3 + seed) * 20 + (j * (Math.sin(seed) * 0.4)) + Math.cos(j * 0.15 + seed * 0.5) * 12;
      return `${x},${Math.max(20, Math.min(145, y))}`;
    }).join(' ');
    const alpha = 0.15 + (i % 5) * 0.06;
    const hue = 30 + i * 8;
    return { pts, alpha, hue };
  });

  return (
    <svg viewBox="0 0 320 160" className="w-full h-full" style={{background:'#0a0a0a'}}>
      {/* Grid lines */}
      {[40,70,100,130].map(y => (
        <line key={y} x1="18" y1={y} x2="302" y2={y} stroke="#1a1a1a" strokeWidth="1"/>
      ))}
      {/* Simulation paths */}
      {paths.map((p, i) => (
        <polyline key={i} points={p.pts} fill="none"
          stroke={`hsl(${p.hue},80%,55%)`} strokeWidth="0.8" strokeOpacity={p.alpha}/>
      ))}
      {/* Mean path */}
      <polyline
        points={Array.from({length:40},(_,j)=>`${18+j*7.2},${100 - j*0.8}`).join(' ')}
        fill="none" stroke="#f0a500" strokeWidth="1.5" strokeOpacity="0.9"/>
      {/* Confidence band */}
      <polygon
        points={[
          ...Array.from({length:40},(_,j)=>`${18+j*7.2},${80 - j*0.8}`),
          ...Array.from({length:40},(_,j)=>`${18+(39-j)*7.2},${120 - (39-j)*0.8}`),
        ].join(' ')}
        fill="rgba(240,165,0,0.05)" stroke="none"/>
      {/* Labels */}
      <text x="18" y="155" fontSize="7" fill="#444" fontFamily="monospace">T=0</text>
      <text x="250" y="155" fontSize="7" fill="#444" fontFamily="monospace">T=252 (1yr)</text>
      <text x="18" y="16" fontSize="7.5" fill="#f0a500" fontFamily="monospace">10,000 paths · GBM · 95% CI</text>
    </svg>
  );
}

export function PoseViz() {
  const joints = {
    nose:[160,30], lShoulder:[130,65], rShoulder:[190,65],
    lElbow:[110,100], rElbow:[210,100], lWrist:[95,130], rWrist:[225,130],
    lHip:[140,115], rHip:[180,115], lKnee:[132,148], rKnee:[188,148],
  };
  const bones = [
    ['nose','lShoulder'],['nose','rShoulder'],
    ['lShoulder','rShoulder'],['lShoulder','lElbow'],['rShoulder','rElbow'],
    ['lElbow','lWrist'],['rElbow','rWrist'],
    ['lShoulder','lHip'],['rShoulder','rHip'],['lHip','rHip'],
    ['lHip','lKnee'],['rHip','rKnee'],
  ];

  return (
    <svg viewBox="0 0 320 160" className="w-full h-full" style={{background:'#0a0a0a'}}>
      {/* Camera feed bg */}
      <rect x="10" y="10" width="300" height="140" rx="4" fill="#111"/>
      {/* Body silhouette */}
      <ellipse cx="160" cy="20" rx="12" ry="12" fill="#1a1a1a"/>
      <rect x="130" y="60" width="60" height="60" rx="8" fill="#1a1a1a"/>
      {/* Bones */}
      {bones.map(([a, b]) => {
        const j0 = joints[a], j1 = joints[b];
        return <line key={`${a}-${b}`} x1={j0[0]} y1={j0[1]} x2={j1[0]} y2={j1[1]}
          stroke="#f0a500" strokeWidth="2" strokeOpacity="0.7"/>;
      })}
      {/* Joints */}
      {Object.entries(joints).map(([k, [x, y]]) => (
        <circle key={k} cx={x} cy={y} r="4" fill="#6ee7b7" stroke="#0a0a0a" strokeWidth="1"/>
      ))}
      {/* Angle arc */}
      <path d="M110,100 Q100,115 95,130" fill="none" stroke="#ff6d3b" strokeWidth="1.5" strokeDasharray="3,2"/>
      <text x="68" y="118" fontSize="7" fill="#ff6d3b" fontFamily="monospace">142°</text>
      {/* HUD */}
      <rect x="10" y="10" width="300" height="140" rx="4" fill="none" stroke="#f0a500" strokeWidth="0.5" strokeOpacity="0.3"/>
      <text x="18" y="22" fontSize="6" fill="#f0a500" fontFamily="monospace">● LIVE  MediaPipe · Warrior II</text>
      <rect x="200" y="130" width="104" height="16" rx="2" fill="#1a2a1a"/>
      <text x="204" y="141" fontSize="6.5" fill="#28ca41" fontFamily="monospace">✓ Posture: CORRECT</text>
    </svg>
  );
}

export function CnnViz() {
  const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'];
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full" style={{background:'#0a0a0a'}}>
      {/* Grid of letter tiles */}
      {letters.map((l, i) => {
        const col = i % 8, row = Math.floor(i / 8);
        const x = 14 + col * 36, y = 12 + row * 68;
        const conf = 0.7 + Math.sin(i * 1.7) * 0.25;
        const g = Math.round(conf * 220);
        return (
          <g key={l}>
            <rect x={x} y={y} width="28" height="58" rx="3" fill="#111" stroke="#1c1c1c"/>
            {/* Mini hand silhouette */}
            <rect x={x+4} y={y+4} width="20" height="36" rx="2" fill="#1a1a1a"/>
            <ellipse cx={x+14} cy={y+18} rx="7" ry="9" fill="#2a2a2a"/>
            {/* Letter label */}
            <text x={x+14} y={y+52} fontSize="9" fill="#f5f1eb" fontFamily="monospace"
              textAnchor="middle" fontWeight="bold">{l}</text>
            {/* Confidence bar */}
            <rect x={x+2} y={y+44} width="24" height="3" rx="1" fill="#1c1c1c"/>
            <rect x={x+2} y={y+44} width={conf*24} height="3" rx="1"
              fill={`rgb(${255-g},${g},80)`}/>
          </g>
        );
      })}
      <text x="16" y="156" fontSize="7" fill="#5a5a5a" fontFamily="monospace">CNN · Keras · Sign Language MNIST · 26 classes</text>
    </svg>
  );
}

export function PipelineViz() {
  const nodes = [
    { x: 30,  y: 80, label: 'S3\nSource', color: '#f0a500' },
    { x: 110, y: 80, label: 'Lambda\nTrigger', color: '#6ee7b7' },
    { x: 190, y: 80, label: 'Glue\nETL', color: '#818cf8' },
    { x: 270, y: 80, label: 'S3\nTarget', color: '#f0a500' },
  ];

  return (
    <svg viewBox="0 0 320 160" className="w-full h-full" style={{background:'#0a0a0a'}}>
      {/* Background grid */}
      {[40,80,120].map(y => <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#111" strokeWidth="1"/>)}
      {/* Flow arrows */}
      {nodes.slice(0,-1).map((n, i) => {
        const n2 = nodes[i+1];
        return (
          <g key={i}>
            <line x1={n.x+28} y1={80} x2={n2.x-28} y2={80} stroke="#2a2a2a" strokeWidth="1.5" strokeDasharray="4,3"/>
            <polygon points={`${n2.x-30},75 ${n2.x-20},80 ${n2.x-30},85`} fill="#3a3a3a"/>
          </g>
        );
      })}
      {/* Animated flow dots */}
      {[0.2,0.5,0.8].map((offset, i) => (
        <circle key={i} cx={30 + offset*240} cy={80} r="3" fill="#f0a500" opacity="0.6">
          <animateTransform attributeName="transform" type="translate" from="0 0" to="240 0"
            dur="3s" begin={`${i}s`} repeatCount="indefinite"/>
        </circle>
      ))}
      {/* Nodes */}
      {nodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x-28} y={55} width="56" height="50" rx="6" fill="#111" stroke={n.color} strokeWidth="1.5" strokeOpacity="0.6"/>
          {n.label.split('\n').map((line, li) => (
            <text key={li} x={n.x} y={75 + li*14} fontSize="8.5" fill={n.color}
              fontFamily="monospace" textAnchor="middle" fontWeight="600">{line}</text>
          ))}
        </g>
      ))}
      <text x="16" y="150" fontSize="7" fill="#5a5a5a" fontFamily="monospace">Serverless · Event-driven · 40% efficiency ↑</text>
    </svg>
  );
}

export function TimeSeriesViz() {
  const actual = [120,118,125,130,128,135,140,138,145,150,148,155,160,158,165,170,168];
  const predicted = [122,120,126,131,129,136,141,140,146,151,150,157,162,160,167,172,170];
  const n = actual.length;
  const minV = 110, maxV = 180, W = 302, H = 120;

  const toSvg = (v, i) => [18 + (i / (n-1)) * W, H - ((v - minV) / (maxV - minV)) * (H - 20)];

  const aPath = actual.map((v, i) => `${i===0?'M':'L'}${toSvg(v,i).join(',')}`).join(' ');
  const pPath = predicted.map((v, i) => `${i===0?'M':'L'}${toSvg(v,i).join(',')}`).join(' ');
  const areaPath = [
    ...actual.map((v, i) => `${i===0?'M':'L'}${toSvg(v,i).join(',')}`),
    ...predicted.slice().reverse().map((v, i) => `L${toSvg(v, n-1-i).join(',')}`)
  ].join(' ') + 'Z';

  return (
    <svg viewBox="0 0 320 160" className="w-full h-full" style={{background:'#0a0a0a'}}>
      {[30,60,90,120].map(y => <line key={y} x1="18" y1={y} x2="318" y2={y} stroke="#1a1a1a" strokeWidth="1"/>)}
      <path d={areaPath} fill="rgba(240,165,0,0.05)"/>
      <path d={aPath} fill="none" stroke="#6ee7b7" strokeWidth="1.5"/>
      <path d={pPath} fill="none" stroke="#f0a500" strokeWidth="1.5" strokeDasharray="5,3"/>
      {/* Dots */}
      {actual.map((v, i) => { const [x,y]=toSvg(v,i); return <circle key={i} cx={x} cy={y} r="2" fill="#6ee7b7"/>; })}
      {/* Legend */}
      <line x1="18" y1="148" x2="32" y2="148" stroke="#6ee7b7" strokeWidth="1.5"/>
      <text x="35" y="151" fontSize="7" fill="#6ee7b7" fontFamily="monospace">Actual</text>
      <line x1="70" y1="148" x2="84" y2="148" stroke="#f0a500" strokeWidth="1.5" strokeDasharray="4,2"/>
      <text x="87" y="151" fontSize="7" fill="#f0a500" fontFamily="monospace">ARIMA Forecast</text>
      <text x="200" y="151" fontSize="7" fill="#5a5a5a" fontFamily="monospace">House Price Index</text>
    </svg>
  );
}

export const vizMap = { sql: SqlViz, montecarlo: MonteCarloViz, pose: PoseViz, cnn: CnnViz, pipeline: PipelineViz, timeseries: TimeSeriesViz };
