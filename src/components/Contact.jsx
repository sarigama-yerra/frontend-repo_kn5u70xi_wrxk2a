import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Terima kasih! Pesan kamu sudah terkirim (demo).');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">Kontak</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Ingin berkolaborasi atau berdiskusi? Kirim pesan, saya akan membalas secepatnya.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-xl border border-white/5 bg-slate-900/40 p-6 shadow-lg shadow-black/20">
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-200 outline-none ring-cyan-500/30 transition placeholder:text-slate-500 focus:ring"
                  placeholder="Nama kamu"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-200 outline-none ring-cyan-500/30 transition placeholder:text-slate-500 focus:ring"
                  placeholder="email@domain.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Pesan</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-200 outline-none ring-cyan-500/30 transition placeholder:text-slate-500 focus:ring"
                  placeholder="Tuliskan pesanmu di sini..."
                />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
                Kirim Pesan
              </button>
              {status && (
                <p className="text-sm text-cyan-300">{status}</p>
              )}
            </div>
          </form>

          {/* Socials */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Terhubung</h3>
              <p className="mt-2 text-slate-300">Ikuti saya di platform berikut untuk update terbaru.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:max-w-sm">
              {[
                { name: 'GitHub', href: 'https://github.com', icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12c0 4.425 2.867 8.175 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.701-2.782.604-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.087 2.91.832.092-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.09.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.099 2.65.64.699 1.028 1.593 1.028 2.683 0 3.842-2.338 4.688-4.566 4.937.36.31.679.92.679 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.481C19.137 20.172 22 16.422 22 12c0-5.525-4.475-10-10-10Z"/></svg>
                ) },
                { name: 'LinkedIn', href: 'https://linkedin.com', icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.9 0 4.6 2.6 4.6 6V24h-4v-7.2c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z"/></svg>
                ) },
                { name: 'Instagram', href: 'https://instagram.com', icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.507 5.507 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zM18 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/></svg>
                ) },
              ].map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-2 rounded-lg border border-cyan-400/30 bg-slate-900 px-4 py-4 text-cyan-300 transition hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]">
                  {s.icon}
                  <span className="sr-only">{s.name}</span>
                </a>
              ))}
            </div>

            <div className="text-sm text-slate-400">
              <p>Email: <a className="text-cyan-300" href="mailto:hello@cybertech.dev">hello@cybertech.dev</a></p>
              <p>Lokasi: Remote / Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
