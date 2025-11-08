import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [open, setOpen] = useState(false);

  // Auto dark mode (prefer dark)
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500/30 to-cyan-300/30 text-cyan-300 ring-1 ring-cyan-400/30">CT</span>
            <span className="font-semibold tracking-wide">CyberTech</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {[{href:'#about',label:'Tentang'},{href:'#skills',label:'Keahlian'},{href:'#projects',label:'Proyek'},{href:'#contact',label:'Kontak'}].map((i)=> (
              <a key={i.href} href={i.href} className="relative transition hover:text-cyan-300">
                {i.label}
                <span className="absolute inset-x-0 -bottom-1 mx-auto h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 md:inline-flex">Hire Me</a>
            <button aria-label="Toggle Menu" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden" onClick={() => setOpen(!open)}>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        {open && (
          <div className="border-t border-white/5 bg-slate-950/95 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
              {[{href:'#about',label:'Tentang'},{href:'#skills',label:'Keahlian'},{href:'#projects',label:'Proyek'},{href:'#contact',label:'Kontak'}].map((i)=> (
                <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-cyan-300">{i.label}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">Hire Me</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <About />
        <Divider />
        <Skills />
        <Divider subtle />
        <Projects />
        <Divider />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-slate-950 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-6xl px-6">
          <p>© {new Date().getFullYear()} CyberTech • Dibuat dengan cinta, kopi, dan Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

const Divider = ({ subtle = false }) => (
  <div className={`relative h-px w-full ${subtle ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' : 'bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent'}`} />
);

export default App;
