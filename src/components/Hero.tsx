import React from 'react';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { CLIENT_LOGOS } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-brand-600/20 via-accent-cyan/15 to-accent-violet/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Studio Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-brand-500/30 text-xs sm:text-sm font-medium text-slate-200 mb-8 shadow-lg shadow-brand-500/10 animate-fade-in">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            <span className="text-slate-300">Award-Winning Digital Product Studio</span>
            <span className="text-brand-400 font-semibold">• 2026 Edition</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            We engineer <span className="text-gradient-brand">iconic products</span> that define modern industries.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300/90 max-w-2xl font-normal leading-relaxed mb-10">
            A multidisciplinary collective of architects, senior developers, and product designers partnering with ambitious teams to deliver transformative web, mobile, and AI solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 via-brand-600 to-accent-cyan text-white font-semibold text-base shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Build With Us</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-panel hover:bg-slate-800/80 text-slate-200 font-medium text-base border border-slate-700/80 transition-all duration-300 hover:text-white"
            >
              <span>Explore Selected Work</span>
            </a>
          </div>

          {/* Key Assurance Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-400 mb-16">
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full-Stack & Cloud Native</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Design System Mastery</span>
            </div>
            <div className="flex items-center gap-2 justify-center col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Agile Weekly Sprints</span>
            </div>
          </div>
        </div>

        {/* Client Logos Ribbon */}
        <div className="pt-10 border-t border-slate-800/60 max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">
            Trusted by engineering & product leaders globally
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70">
            {CLIENT_LOGOS.map((client) => (
              <span
                key={client}
                className="font-display font-bold text-sm sm:text-base tracking-wider text-slate-400 hover:text-white transition-colors duration-200 cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#services"
            className="p-2 rounded-full text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
            aria-label="Scroll to services"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
