export default function Footer() {
  return (
    <footer className="border-t border-[#1c1c1c] py-8 px-5 bg-[#070707]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-muted font-mono">
        <span>
          <span className="text-amber">tp</span>.dev — tejas parvathappa
        </span>
        <span>© {new Date().getFullYear()} · Built with React & Tailwind</span>
      </div>
    </footer>
  );
}
