/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg:      '#070707',
        surface: '#0f0f0f',
        border:  '#1c1c1c',
        amber:   { DEFAULT: '#f0a500', light: '#ffc84a', dark: '#c98900' },
        coral:   { DEFAULT: '#ff6d3b', light: '#ff8f64' },
        cream:   '#f5f1eb',
        muted:   '#5a5a5a',
      },
      animation: {
        'blob1':    'blob1 12s ease-in-out infinite',
        'blob2':    'blob2 16s ease-in-out infinite',
        'blob3':    'blob3 10s ease-in-out infinite',
        'marquee':  'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'flicker':  'flicker 3s ease-in-out infinite',
        'draw':     'draw 1.5s ease-out forwards',
      },
      keyframes: {
        blob1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(60px,-40px) scale(1.1)' },
          '66%':     { transform: 'translate(-30px,30px) scale(0.95)' },
        },
        blob2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(-50px,60px) scale(1.05)' },
          '66%':     { transform: 'translate(40px,-20px) scale(0.9)' },
        },
        blob3: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%':     { transform: 'translate(30px,-50px) scale(1.08)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        flicker: {
          '0%,100%': { opacity: 1 },
          '92%':     { opacity: 1 },
          '93%':     { opacity: 0.4 },
          '94%':     { opacity: 1 },
          '96%':     { opacity: 0.6 },
          '97%':     { opacity: 1 },
        },
        draw: {
          '0%':   { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
