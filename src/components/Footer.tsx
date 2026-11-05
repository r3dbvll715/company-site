import React from 'react';
import { ArrowUp } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-850">
          {/* Brand info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-accent-cyan flex items-center justify-center font-bold text-white text-sm shadow-md shadow-brand-500/20">
                N
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                {STUDIO_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              {STUDIO_INFO.tagline} Partnering with forward-thinking leaders to ship category-defining digital products.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Headquartered in {STUDIO_INFO.location}</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase font-semibold text-white tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Capabilities</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">Studio Story</a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">Leadership Team</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Project Inquiry</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase font-semibold text-white tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p>
                General & New Business: <br />
                <a href={`mailto:${STUDIO_INFO.email}`} className="text-white hover:text-brand-400 font-medium">
                  {STUDIO_INFO.email}
                </a>
              </p>
              <p className="text-xs text-slate-500">
                Strict confidentiality guaranteed for unannounced products & proprietary codebases.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {STUDIO_INFO.name} Studio Lda. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
