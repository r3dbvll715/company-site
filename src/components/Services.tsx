import React from 'react';
import { Code2, Palette, Smartphone, Sparkles, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/content';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-brand-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-accent-cyan" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      default:
        return <Code2 className="w-6 h-6 text-brand-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-400 bg-brand-950/60 border border-brand-800/60 px-3 py-1 rounded-full">
              Our Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4">
              Engineered for speed, built for enduring scale.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-base leading-relaxed">
            From initial prototype to enterprise deployment, we combine rigorous technical engineering with bespoke product aesthetics.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover rounded-2xl p-8 relative flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon + Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    {service.id}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-brand-400/90 mt-1 mb-4">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-8 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                    Key Deliverables
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-brand-400" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5 items-center">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-medium text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brand-950/60 via-slate-900/60 to-slate-950/60 border border-brand-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-lg text-white">Have a custom technical challenge?</h4>
            <p className="text-sm text-slate-400 mt-1">We architect tailored solutions for complex protocols, real-time data, and proprietary systems.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm transition-all duration-200 shrink-0 shadow-lg shadow-brand-600/30"
          >
            <span>Consult Our Architects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
