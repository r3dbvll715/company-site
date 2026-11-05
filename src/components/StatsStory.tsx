import React from 'react';
import { ShieldCheck, Cpu, Zap, Target } from 'lucide-react';
import { STATS } from '../data/content';

export const StatsStory: React.FC = () => {
  const values = [
    {
      icon: <Cpu className="w-5 h-5 text-brand-400" />,
      title: 'Senior Engineering Only',
      desc: 'No junior handoffs. Every line of frontend and backend code is written and reviewed by seasoned veterans.',
    },
    {
      icon: <Zap className="w-5 h-5 text-accent-cyan" />,
      title: 'Obsessive Performance',
      desc: 'Sub-second loads, 99+ Lighthouse scores, clean bundles, and zero framework bloat are non-negotiable.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Complete Ownership',
      desc: 'Clean documentation, automated CI/CD pipelines, and 100% intellectual property transfer to your team upon launch.',
    },
    {
      icon: <Target className="w-5 h-5 text-indigo-400" />,
      title: 'Outcome-Driven Alignment',
      desc: 'We measure success by conversions, user retention, and platform uptime, not just arbitrary ticket completion.',
    },
  ];

  return (
    <section id="story" className="py-24 relative overflow-hidden">
      {/* Background radial ambient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-slate-800/80 group hover:border-brand-500/40 transition-colors"
            >
              <div className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-2 text-gradient-brand">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-400 bg-brand-950/60 border border-brand-800/60 px-3 py-1 rounded-full">
              Our Ethos
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4 mb-6 leading-tight">
              We build software as if our own name is on every commit.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Founded by former staff engineers and design directors who grew tired of generic agency bureaucracy, NEXUS operates as an agile SWAT team.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              We embed deeply with your founders and technical stakeholders, eliminating fluff and shipping working, revenue-generating software into production every Friday.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <p className="text-xs text-slate-400 italic">
                “Quality is not an accident; it is the deliberate refusal to ship mediocre code.”
              </p>
              <span className="block mt-2 text-xs font-semibold text-brand-300">
                — Alexandre Martins, Technical Director
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="glass-panel rounded-xl p-6 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

