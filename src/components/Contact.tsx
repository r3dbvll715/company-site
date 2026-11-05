import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Clock } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

export const Contact: React.FC = () => {
  const [selectedScope, setSelectedScope] = useState<string>('Web Application');
  const [selectedBudget, setSelectedBudget] = useState<string>('$25k - $50k');
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
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/70">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-600/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Info */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-400 bg-brand-950/60 border border-brand-800/60 px-3 py-1 rounded-full">
              Start a Conversation
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4 mb-6 leading-tight">
              Let's engineer something extraordinary together.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Whether you need to launch a high-stakes MVP, overhaul your core enterprise platform, or assemble a dedicated engineering squad, we’re ready.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Inquiries</div>
                  <a href={`mailto:${STUDIO_INFO.email}`} className="font-medium text-white hover:text-brand-300 transition-colors">
                    {STUDIO_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-accent-cyan shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Hubs</div>
                  <div className="font-medium text-white">{STUDIO_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Turnaround Guarantee</div>
                  <div className="font-medium text-white">Guaranteed response within 24 business hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-700/80 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Project Brief Received!
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed mb-8">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. One of our technical directors will review your requirements and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-slate-800 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Scope Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                      Project Objective
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {scopes.map((scope) => (
                        <button
                          type="button"
                          key={scope}
                          onClick={() => setSelectedScope(scope)}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            selectedScope === scope
                              ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          {scope}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                      Target Investment Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setSelectedBudget(b)}
                          className={`py-2 px-3 rounded-lg text-xs font-medium text-center transition-all ${
                            selectedBudget === b
                              ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Diogo Ferreira"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="diogo@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Strata Cloud Inc."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Tell us about the product or challenge *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Goals, timeline, existing tech stack, or specific deliverables..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-accent-cyan text-white font-semibold text-sm shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
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
