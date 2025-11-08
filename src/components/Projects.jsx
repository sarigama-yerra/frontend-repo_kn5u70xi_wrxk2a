import React from 'react';

const projects = [
  {
    title: 'AI Code Assistant',
    desc: 'Asisten coding cerdas untuk mempercepat workflow pengembangan.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    link: 'https://github.com',
  },
  {
    title: 'E-Commerce Dashboard',
    desc: 'Dashboard modern dengan analitik real-time dan manajemen produk.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    link: 'https://github.com',
  },
  {
    title: 'Dev Portfolio Generator',
    desc: 'Generator portofolio dinamis berbasis JSON schema.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop',
    link: 'https://github.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">Proyek</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Beberapa karya terpilih yang menyoroti keahlian dalam pengembangan software dan UI modern.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-white/5 bg-slate-900/40 shadow-lg shadow-black/20">
              <div className="relative h-44 w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-md border border-cyan-400/40 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-300 transition hover:bg-cyan-500/20">
                  Lihat Detail
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="m15 3 6 6"/><path d="M21 3h-6v6"/></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
