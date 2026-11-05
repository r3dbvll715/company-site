import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, X } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Web App', 'Mobile', 'Design System', 'AI Product'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-accent-cyan bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
              Proven Results
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-base leading-relaxed">
            Real products shipped to real users. Explore how we transformed high-stakes technical complexity into market-leading platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                  : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:bg-slate-850'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden cursor-pointer group flex flex-col"
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-slate-950/80 backdrop-blur-md text-brand-300 border border-slate-700/60 shadow-md">
                    {project.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-brand-500 transition-colors duration-200 shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Client & Title overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    {project.client}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Details Bottom */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Impact Highlight */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 mb-6">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Metrics + Tags Footer */}
                <div>
                  <div className="grid grid-cols-2 gap-4 pb-4 mb-4 border-b border-slate-800/80">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-lg font-bold font-display text-white">{m.value}</div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-depth Case Study */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="glass-panel max-w-2xl w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative max-h-[90vh] flex flex-col">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-slate-900">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs uppercase font-semibold text-brand-400 tracking-wider">
                      {activeModalProject.client}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {activeModalProject.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Executive Summary</h4>
                    <p>{activeModalProject.summary}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-950/40 border border-brand-800/40">
                    <h4 className="font-semibold text-brand-300 flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-accent-cyan" />
                      Measurable Business Outcome
                    </h4>
                    <p className="text-slate-300">{activeModalProject.impact}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {activeModalProject.metrics.map((m, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="text-2xl font-bold font-display text-white">{m.value}</div>
                          <div className="text-xs text-slate-400 uppercase tracking-wider">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Technical Implementation Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.tags.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex justify-end">
                    <a
                      href="#contact"
                      onClick={() => setActiveModalProject(null)}
                      className="px-6 py-2.5 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-medium text-sm transition-colors"
                    >
                      Inquire About Similar Architecture
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
