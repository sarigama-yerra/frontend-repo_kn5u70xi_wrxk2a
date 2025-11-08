import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [SplineComp, setSplineComp] = useState(null);

  // Lazy-load Spline so the page still renders even if the package/asset is unavailable
  useEffect(() => {
    let mounted = true;
    import('@splinetool/react-spline')
      .then((mod) => {
        if (mounted) setSplineComp(() => mod.default);
      })
      .catch(() => {
        // If Spline fails to load, we gracefully degrade to gradient background
        setSplineComp(null);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline Background (optional) */}
      {SplineComp ? (
        <div className="absolute inset-0">
          <SplineComp
            scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ) : (
        // Fallback background if Spline is unavailable
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
          <div className="absolute inset-0 opacity-30" aria-hidden>
            <div className="animate-[scan_8s_linear_infinite] h-1/2 w-full bg-[radial-gradient(circle_at_50%_0,rgba(6,182,212,0.25),transparent_60%)]" />
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-3xl overflow-hidden rounded-md border border-white/5 bg-black/30">
              <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap p-3 font-mono text-xs text-cyan-200/70">
                &gt; const tech = ['HTML','CSS','JavaScript','PHP','Laravel','Python']; // keep shipping 🚀 — CyberTech
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay gradients to enhance readability (no pointer blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs tracking-wide text-cyan-300 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Available for Freelance Projects
        </span>

        <h1 className="text-3xl font-semibold leading-tight text-white/90 drop-shadow md:text-5xl lg:text-6xl">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">CyberTech</span>
          <br className="hidden sm:block" />
          <span className="text-white/80">— Software Developer & Tech Enthusiast</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
          I craft scalable web apps, elegant user experiences, and reliable systems. Focused on clean
          architecture, performance, and developer-first workflows.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
          >
            Lihat Portofolio
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-white/5 px-5 py-3 text-sm font-medium text-cyan-300 backdrop-blur transition hover:bg-white/10"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Subtle code ticker (always visible) */}
        <div className="pointer-events-none mt-12 w-full max-w-3xl overflow-hidden rounded-md border border-white/5 bg-black/20">
          <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap p-3 font-mono text-xs text-cyan-200/70">
            $ npm run build —> optimized production bundle • CI ready • type-safe • lint clean • deploy in seconds
            — const dev = { html: true, css: true, js: true, php: true, laravel: true, python: true } — keep shipping 🚀
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(200%); } }
      `}</style>
    </section>
  );
};

export default Hero;
