import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Clock } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

export const Contact: React.FC = () => {
  const [selectedScope, setSelectedScope] = useState<string>('Web Application');
  const [selectedBudget, setSelectedBudget] = useState<string>('$30k - $60k');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scopes = ['Web Application', 'Mobile App', 'UI/UX Redesign', 'AI Integration', 'Dedicated Squad'];
  const budgets = ['< $15,000', '$15k - $30k', '$30k - $60k', '$60k+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate API transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#070b14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-400 mb-3">
              <span>06</span>
              <span className="text-slate-600">//</span>
              <span>INITIATE ENGAGEMENT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2 mb-6 leading-tight">
              Let's engineer something extraordinary together.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are preparing to deploy a mission-critical platform, refactoring high-latency core services, or need a staff-level unit for accelerated execution, our calendar is open for review.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.08] flex items-center justify-center text-brand-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Direct Transmission</div>
                  <a href={`mailto:${STUDIO_INFO.email}`} className="font-mono text-xs sm:text-sm text-white hover:text-brand-300 transition-colors">
                    {STUDIO_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.08] flex items-center justify-center text-accent-cyan shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Studio Hubs</div>
                  <div className="font-mono text-xs sm:text-sm text-white">{STUDIO_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.08] flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">SLA Response Guarantee</div>
                  <div className="font-mono text-xs sm:text-sm text-white">Direct Director response within 24 business hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief Form */}
          <div className="lg:col-span-7">
            <div className="editorial-panel rounded-3xl p-7 sm:p-10 border border-white/[0.1] shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Project Brief Received
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed mb-8">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. An engineering director will evaluate your technical requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
                  >
                    Submit Additional Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Scope Selector with radiogroup semantics */}
                  <div>
                    <label id="scope-label" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      Project Scope &amp; Target Discipline
                    </label>
                    <div
                      role="radiogroup"
                      aria-labelledby="scope-label"
                      className="flex flex-wrap gap-2"
                    >
                      {scopes.map((scope) => {
                        const isSelected = selectedScope === scope;
                        return (
                          <button
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            key={scope}
                            onClick={() => setSelectedScope(scope)}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                              isSelected
                                ? 'bg-white text-slate-950 font-semibold border-white shadow-sm'
                                : 'bg-slate-900/90 text-slate-400 border-white/[0.08] hover:border-white/[0.2] hover:text-slate-200'
                            }`}
                          >
                            {scope}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector with radiogroup semantics */}
                  <div>
                    <label id="budget-label" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      Target Investment Band
                    </label>
                    <div
                      role="radiogroup"
                      aria-labelledby="budget-label"
                      className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                    >
                      {budgets.map((b) => {
                        const isSelected = selectedBudget === b;
                        return (
                          <button
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            key={b}
                            onClick={() => setSelectedBudget(b)}
                            className={`py-2 px-3 rounded-lg text-xs font-mono text-center transition-all border ${
                              isSelected
                                ? 'bg-white text-slate-950 font-semibold border-white shadow-sm'
                                : 'bg-slate-900/90 text-slate-400 border-white/[0.08] hover:border-white/[0.2] hover:text-slate-200'
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Diogo Ferreira"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="diogo@strata.dev"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Strata Cloud Inc."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Architecture Requirements or Challenge *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Objectives, current tech stack, target milestone date, latency goals..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs font-mono uppercase tracking-wider shadow-xl shadow-white/5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Brief...</span>
                    ) : (
                      <>
                        <span>Submit Architectural Brief</span>
                        <Send className="w-3.5 h-3.5 text-slate-950" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
