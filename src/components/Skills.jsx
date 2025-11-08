import React from 'react';

const SkillBar = ({ label, level }) => (
  <div>
    <div className="mb-2 flex items-center justify-between text-sm">
      <span className="text-slate-200">{label}</span>
      <span className="text-cyan-300">{level}%</span>
    </div>
    <div className="h-2 w-full rounded bg-slate-800">
      <div
        className="h-2 rounded bg-cyan-500 transition-all duration-700"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { label: 'HTML', level: 95 },
    { label: 'CSS', level: 90 },
    { label: 'JavaScript', level: 92 },
    { label: 'PHP', level: 85 },
    { label: 'Laravel', level: 82 },
    { label: 'Python', level: 88 },
  ];

  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">Keahlian</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Tech stack inti dengan penilaian kemampuan. Hover pada ikon untuk aksen neon.
        </p>

        {/* Icons */}
        <div className="mt-10 grid grid-cols-3 items-center justify-center gap-6 sm:grid-cols-6">
          {['HTML5','CSS3','JavaScript','PHP','Laravel','Python'].map((name) => (
            <div key={name} className="group flex flex-col items-center gap-3">
              <div className="rounded-xl border border-cyan-400/30 bg-slate-900 p-4 transition group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]">
                <span className="text-cyan-300">{name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((s) => (
            <SkillBar key={s.label} label={s.label} level={s.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
