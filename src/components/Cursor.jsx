import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let rx = 0, ry = 0;

    const move = (e) => {
      const x = e.clientX, y = e.clientY;
      dot.style.left  = x + 'px';
      dot.style.top   = y + 'px';
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
    };

    // Smooth ring via rAF
    let raf;
    const loop = () => {
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}
