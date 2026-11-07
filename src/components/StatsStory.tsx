import React from 'react';
import { ShieldCheck, Cpu, Zap, Target } from 'lucide-react';
import { STATS } from '../data/content';

export const StatsStory: React.FC = () => {
  const values = [
    {
      icon: <Cpu className="w-5 h-5 text-brand-400" />,
      title: 'Senior Engineering Only',
      desc: 'Zero junior handoffs. Every architectural decision and code pull request is engineered and reviewed by staff-level practitioners.',
    },
    {
      icon: <Zap className="w-5 h-5 text-accent-cyan" />,
      title: 'Sub-15ms Latency Mindset',
      desc: 'Sub-second initial loads, 99+ Core Web Vitals, and zero unnecessary runtime bloat are uncompromising baselines.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: '100% IP & Asset Ownership',
      desc: 'Clean automated documentation, exhaustive test suites, reproducible CI/CD, and immediate IP assignment upon milestone delivery.',
    },
    {
      icon: <Target className="w-5 h-5 text-indigo-400" />,
      title: 'Aligned to Enterprise Value',
      desc: 'We calibrate our engineering against your business metrics: conversion velocity, infrastructure cost efficiency, and customer retention.',
    },
  ];

  return (
    <section id="story" className="py-28 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Stats Metric Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-white/[0.07] relative overflow-hidden group hover:border-white/[0.15] transition-colors"
            >
              <div className="font-mono text-3xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
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
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-400 mb-3">
              <span>03</span>
              <span className="text-slate-600">//</span>
              <span>STUDIO METHODOLOGY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2 mb-6 leading-tight">
              We build software with the care of true artisans.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Founded by former principal systems engineers and design leads who grew disillusioned with agency layers and slow sprints, NEXUS operates as an agile, high-dexterity engineering team.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              We embed directly within your technical leadership, eliminating intermediary overhead and shipping tested, production-grade code on fixed weekly iterations.
            </p>

            <div className="p-5 rounded-2xl bg-[#090d16] border border-white/[0.08]">
              <p className="text-xs text-slate-300 italic leading-relaxed">
                “Quality is not an accident. It is the uncompromising refusal to compromise on technical integrity and aesthetic clarity.”
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-brand-400">
                  Alexandre Martins
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Technical Director
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-900/40 border border-white/[0.07] hover:border-white/[0.15] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/[0.08] flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">
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
