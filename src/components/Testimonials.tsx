import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-[#070b14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              <span>04</span>
              <span className="text-slate-600">//</span>
              <span>CLIENT ENDORSEMENTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Direct feedback from technical leaders.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
            We partner on high-stakes platforms where delivery speed and architectural stability directly dictate venture survival.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="editorial-panel editorial-panel-hover rounded-2xl p-8 flex flex-col justify-between border border-white/[0.08]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Engagement</span>
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-white/[0.15] shadow-sm"
                />
                <div>
                  <h4 className="font-display font-bold text-white text-sm">
                    {t.author}
                  </h4>
                  <p className="text-xs text-brand-400 font-medium">
                    {t.role}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
