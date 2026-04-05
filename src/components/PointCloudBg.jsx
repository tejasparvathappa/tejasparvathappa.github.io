import { useEffect, useRef } from 'react';

// LiDAR-style animated 3D point cloud background
// Simulates a road surface scan — directly relevant to Tejas's ARA work
export default function PointCloudBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = canvas.width  = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    let angle = 0;
    let raf;

    // Generate point cloud: flat road surface with cracks/bumps + surrounding scatter
    const N = 2200;
    const points = Array.from({ length: N }, (_, i) => {
      const isRoad = i < 1600;
      if (isRoad) {
        // Road surface — flat plane with gaussian noise (simulates asphalt)
        const x = (Math.random() - 0.5) * 5;
        const z = (Math.random() - 0.5) * 8;
        // Add crack-like depressions
        const crackNoise = Math.random() < 0.06
          ? -(Math.random() * 0.4 + 0.1)   // crack/pothole
          : (Math.random() - 0.5) * 0.08;  // surface roughness
        const y = crackNoise;
        return { x, y, z, baseY: y, phase: Math.random() * Math.PI * 2 };
      } else {
        // Surrounding scatter (vegetation, curbs, noise)
        const x = (Math.random() - 0.5) * 9;
        const z = (Math.random() - 0.5) * 10;
        const y = Math.random() * 1.5 - 0.3;
        return { x, y, z, baseY: y, phase: Math.random() * Math.PI * 2 };
      }
    });

    // LiDAR height colormap: blue → cyan → green → yellow → red
    function heightColor(y, minY = -0.5, maxY = 1.5) {
      const t = Math.max(0, Math.min(1, (y - minY) / (maxY - minY)));
      // 5-stop gradient
      const stops = [
        [0,   [30,  100, 220]],  // blue  (low/crack)
        [0.25,[0,   200, 200]],  // cyan
        [0.5, [50,  200,  50]],  // green (road level)
        [0.75,[240, 200,  20]],  // yellow
        [1.0, [220,  50,  30]],  // red   (high/raised)
      ];
      for (let i = 0; i < stops.length - 1; i++) {
        const [t0, c0] = stops[i];
        const [t1, c1] = stops[i + 1];
        if (t >= t0 && t <= t1) {
          const f = (t - t0) / (t1 - t0);
          const r = Math.round(c0[0] + f * (c1[0] - c0[0]));
          const g = Math.round(c0[1] + f * (c1[1] - c0[1]));
          const b = Math.round(c0[2] + f * (c1[2] - c0[2]));
          return `rgba(${r},${g},${b},`;
        }
      }
      return 'rgba(220,50,30,';
    }

    function project(px, py, pz) {
      // Rotate around Y axis
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const rx = px * cos - pz * sin;
      const rz = px * sin + pz * cos;

      // Perspective
      const fov = 320;
      const cz  = rz + 6;
      if (cz <= 0.1) return null;
      const sx = (rx / cz) * fov + W / 2;
      const sy = (py / cz) * fov + H * 0.55;
      const size = Math.max(0.5, (1.5 / cz) * fov * 0.012);
      const alpha = Math.min(0.9, 0.4 + 0.5 * (1 - rz / 10));
      return { sx, sy, size, alpha, rz };
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);

      // Slow rotation
      angle = t * 0.00008;

      // Sort back-to-front for painter's algorithm
      const projected = points
        .map(p => ({ ...project(p.x, p.y, p.z), color: heightColor(p.y) }))
        .filter(Boolean)
        .sort((a, b) => b.rz - a.rz);

      for (const p of projected) {
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    const onResize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.55 }}
      aria-hidden
    />
  );
}
