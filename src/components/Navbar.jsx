import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? "backdrop-blur bg-slate-950/60 border-b border-white/10" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Fukuri Judokool" className="h-7 w-7" />
          <span className="text-white font-bold tracking-tight">Fukuri Judokool</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-200">
          <a href="#dojo" className="hover:text-white">Dojo</a>
          <a href="#schedule" className="hover:text-white">Schedule</a>
          <a href="#programs" className="hover:text-white">Programs</a>
          <a href="#principles" className="hover:text-white">Principles</a>
          <a href="#contact" className="text-white font-semibold bg-blue-600/80 hover:bg-blue-500 px-3 py-1.5 rounded-lg">Free Class</a>
        </nav>

        <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/80">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
