import React from 'react';
import { CLIENT_LOGOS, TESTIMONIALS, STATS } from '../data/content';
import { Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="section" id="endorsements" aria-labelledby="proof-h">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head">
          <h2 id="proof-h">Verified technical proof</h2>
          <p className="muted">Senior engineering partnerships evaluated by venture CTOs and VPs of Engineering.</p>
        </div>

        {/* Client Brands Bar */}
        <div className="py-5 px-6 rounded-2xl bg-[#0c1018] border border-white/5 mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-[#a4adbc] mb-3 text-center sm:text-left">
            Production Systems Deployed For
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client}
                className="py-2.5 px-3 rounded-lg bg-white/5 font-mono text-xs font-semibold text-white/80 tracking-wide"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Aggregate Delivery Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-5 sm:p-6 rounded-2xl bg-[#0c1018] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-[#5ab9fc] uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#a4adbc] leading-relaxed">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>

        {/* CTO Endorsements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.slice(0, 2).map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0c1018] border border-white/10 flex flex-col justify-between"
            >
              <div className="mb-6">
                <Quote className="w-6 h-6 text-[#5ab9fc]/40 mb-3" />
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white">{t.author}</div>
                  <div className="text-xs font-mono text-[#a4adbc]">
                    {t.role} • <span className="text-[#5ab9fc]">{t.company}</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-md bg-white/5 text-xs font-mono text-emerald-400">
                  Verified CTO
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
