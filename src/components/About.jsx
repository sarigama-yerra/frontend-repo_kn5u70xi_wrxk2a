import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Avatar */}
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-slate-800 to-slate-900 p-1 shadow-lg shadow-cyan-500/10 md:h-80 md:w-80">
            <div className="absolute -inset-1 animate-pulse rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(6,182,212,0.25),transparent_30%,transparent_70%,rgba(6,182,212,0.25))]" />
            <div className="relative z-10 flex h-full w-full items-center justify-center rounded-2xl bg-slate-900/80 backdrop-blur">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-28 w-28 text-cyan-300">
                <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Tentang Saya</h2>
            <p className="mt-4 text-slate-300">
              Saya adalah developer profesional bernama <span className="text-cyan-300">CyberTech</span> yang fokus pada
              pengembangan perangkat lunak modern. Saya mencintai clean code, performa, dan arsitektur yang skalabel.
              Berpengalaman membangun aplikasi web end-to-end, mengintegrasikan API, serta menerapkan praktik CI/CD.
            </p>
            <p className="mt-4 text-slate-300">
              Tech stack favorit: JavaScript/TypeScript, React, Node.js, Laravel, dan Python untuk otomasi dan data.
              Saya terus mengeksplorasi teknologi baru untuk menghasilkan solusi yang berdampak.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">Clean Architecture</span>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">Automation</span>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">Performance</span>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
