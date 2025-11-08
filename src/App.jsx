import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  // Auto dark mode (prefer dark) – Tailwind already supports dark palette
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">CT</span>
            <span className="font-semibold">CyberTech</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">Tentang</a>
            <a href="#skills" className="transition hover:text-cyan-300">Keahlian</a>
            <a href="#projects" className="transition hover:text-cyan-300">Proyek</a>
            <a href="#contact" className="transition hover:text-cyan-300">Kontak</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 shadow shadow-cyan-500/20 transition hover:bg-cyan-400">Hire Me</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-slate-950 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} CyberTech. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
