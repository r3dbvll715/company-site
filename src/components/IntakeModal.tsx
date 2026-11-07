import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { X, Check, Copy, ArrowRight, ShieldCheck, Cpu, Database, Activity, Layers, Terminal } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

export const IntakeModal: React.FC = () => {
  const { activeModal, closeModal, openModal } = useModal();
  const [copied, setCopied] = useState(false);
  const [selectedScope, setSelectedScope] = useState('Sub-15ms Web Platform');
  const [selectedTimeline, setSelectedTimeline] = useState('Dedicated Senior Squad');
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!activeModal) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDIO_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const scopes = [
    'Sub-15ms Web Platform',
    'Distributed Systems (Go/Rust)',
    'High-Concurrency Cloud',
    'Data & AI Pipeline',
  ];

  const timelines = [
    'Dedicated Senior Squad',
    'High-Velocity Sprint (4-6 wks)',
    'Architecture Audit',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0e131d] border border-white/10 shadow-2xl p-6 sm:p-8 text-[#f0f4f8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#a4adbc] hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ── MODAL MODE: INTAKE ──────────────────────────────── */}
        {activeModal === 'intake' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#5ab9fc] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5ab9fc]"></span>
              <span>Project Intake & Architecture Scoping</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2">
              Start a project with NEXUS
            </h2>
            <p className="text-sm text-[#a4adbc] mb-6 leading-relaxed">
              Direct partner engineering from day zero. Deployed into production through rapid weekly sprints.
            </p>

            {/* Quick Email Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#131824] border border-white/5 mb-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#a4adbc]">Direct contact:</span>
                <span className="font-mono text-white font-medium">{STUDIO_INFO.email}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono text-xs transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#5ab9fc]" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-white">Project Brief Transmitted</h3>
                <p className="text-sm text-[#a4adbc] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Founding Partner Alexandre Martins will evaluate your requirements and respond within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn btn--primary inline-flex items-center gap-2 px-6 py-2.5 rounded-lg"
                  >
                    <span>Back to site</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Scope Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#a4adbc] mb-2.5">
                    Architecture Scope
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {scopes.map((scope) => (
                      <button
                        key={scope}
                        type="button"
                        onClick={() => setSelectedScope(scope)}
                        className={`text-left text-xs font-medium px-3.5 py-2.5 rounded-xl border transition-all ${
                          selectedScope === scope
                            ? 'bg-[#5ab9fc]/10 border-[#5ab9fc] text-[#5ab9fc]'
                            : 'bg-[#131824]/60 border-white/5 text-[#a4adbc] hover:border-white/15 hover:text-white'
                        }`}
                      >
                        {scope}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#a4adbc] mb-2.5">
                    Engagement Model
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {timelines.map((timeline) => (
                      <button
                        key={timeline}
                        type="button"
                        onClick={() => setSelectedTimeline(timeline)}
                        className={`text-center text-xs font-medium px-3 py-2 rounded-xl border transition-all ${
                          selectedTimeline === timeline
                            ? 'bg-[#5ab9fc]/10 border-[#5ab9fc] text-[#5ab9fc]'
                            : 'bg-[#131824]/60 border-white/5 text-[#a4adbc] hover:border-white/15 hover:text-white'
                        }`}
                      >
                        {timeline}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-[#a4adbc] mb-1.5" htmlFor="field-name">
                      Name *
                    </label>
                    <input
                      id="field-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#131824] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5ab9fc] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#a4adbc] mb-1.5" htmlFor="field-email">
                      Work Email *
                    </label>
                    <input
                      id="field-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#131824] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5ab9fc] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a4adbc] mb-1.5" htmlFor="field-details">
                    Project Goals / Key Bottlenecks (Optional)
                  </label>
                  <textarea
                    id="field-details"
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="e.g. Refactoring orderbook data stream from Python to Go/Kafka, targeting sub-10ms latency."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#131824] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5ab9fc] transition-colors resize-none"
                  />
                </div>

                {/* Action button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#a4adbc]">
                    <ShieldCheck className="w-4 h-4 text-[#5ab9fc]" />
                    <span>24h Partner SLA • NDA on request</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto btn btn--primary flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Submit Project Brief'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* ── MODAL MODE: TECHNICAL SPECS ─────────────────────── */}
        {activeModal === 'specs' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#5ab9fc] uppercase mb-2">
              <Terminal className="w-3.5 h-3.5 text-[#5ab9fc]" />
              <span>Architectural Specifications & Standards</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2">
              Engineering Architecture Specs
            </h2>
            <p className="text-sm text-[#a4adbc] mb-6 leading-relaxed">
              Every system delivered by NEXUS complies with rigorous throughput, latency, and fault-tolerance SLAs.
            </p>

            <div className="space-y-3.5 mb-6">
              <div className="p-4 rounded-xl bg-[#131824] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#5ab9fc] mb-1">
                  <Activity className="w-4 h-4" />
                  <span>01 / Latency & Throughput Targets</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">Sub-15ms Web Vitals · Sub-10ms Message Queuing</div>
                <p className="text-xs text-[#a4adbc] leading-relaxed">
                  Compiled Go and Rust microservices utilizing bounded ring buffers, zero-allocation serialization, and partition-level parallelism.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#131824] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#5ab9fc] mb-1">
                  <Layers className="w-4 h-4" />
                  <span>02 / Distributed Cloud Topology</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">Multi-Region Kubernetes & Declarative Terraform</div>
                <p className="text-xs text-[#a4adbc] leading-relaxed">
                  Active-active deployments across AWS/GCP with automatic regional failover, automated blue/green canary verification, and strict zero-trust network boundaries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#131824] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#5ab9fc] mb-1">
                  <Database className="w-4 h-4" />
                  <span>03 / High-Concurrency Data Pipelines</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">PostgreSQL OLTP · ClickHouse OLAP · Kafka Streams</div>
                <p className="text-xs text-[#a4adbc] leading-relaxed">
                  Sub-second analytical rollups across millions of events with strictly monotonic timestamps and transactional consistency.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#131824] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#5ab9fc] mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>04 / Delivery Rigor & Staffing</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">100% Senior Staff Leads · Weekly Friday Releases</div>
                <p className="text-xs text-[#a4adbc] leading-relaxed">
                  No junior handoffs or opaque outsourcing. Direct commit access, joint architectural reviews, and comprehensive automated test coverage.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/5">
              <div className="text-xs text-[#a4adbc]">
                Targeting a custom technical benchmark?
              </div>
              <button
                type="button"
                onClick={() => openModal('intake')}
                className="w-full sm:w-auto btn btn--primary flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm"
              >
                <span>Engage squad for these specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ── MODAL MODE: DIRECTORS ───────────────────────────── */}
        {activeModal === 'directors' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#5ab9fc] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5ab9fc]"></span>
              <span>Engineering Leadership & Dossier</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2">
              Studio Engineering Directors
            </h2>
            <p className="text-sm text-[#a4adbc] mb-6 leading-relaxed">
              Technical partners who personally architect, write, and lead client systems from Porto and London.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-4 rounded-xl bg-[#131824] border border-white/5 space-y-2">
                <div className="text-sm font-medium text-white">Alexandre Martins</div>
                <div className="text-xs font-mono text-[#5ab9fc]">Founding Partner & Lead Architect</div>
                <p className="text-xs text-[#a4adbc] leading-relaxed">
                  12+ years building high-frequency trading platforms and distributed Go/Rust backends. Former FinTech Principal Engineer.
                </p>
                <div className="text-xs font-mono text-slate-400 pt-1">
                  <a href="mailto:alexandre@nexus-studio.dev" className="hover:text-white transition-colors">
                    alexandre@nexus-studio.dev
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#131824] border border-white/5 space-y-2">
                <div className="text-sm font-medium text-white">Beatriz Costa</div>
                <div className="text-xs font-mono text-[#5ab9fc]">Head of Product Design</div>
                <p className="text-xs text-[#a4adbc] leading-relaxed">
                  9+ years crafting enterprise design systems and telemetry visualizations. Lead on multi-brand component architectures.
                </p>
                <div className="text-xs font-mono text-slate-400 pt-1">
                  <a href="mailto:beatriz@nexus-studio.dev" className="hover:text-white transition-colors">
                    beatriz@nexus-studio.dev
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#131824] border border-white/5 space-y-2">
                <div className="text-sm font-medium text-white">Miguel Rocha</div>
                <div className="text-xs font-mono text-[#5ab9fc]">Lead Systems Architect</div>
                <p className="text-xs text-[#a4adbc] leading-relaxed">
                  Cloud platform and Kubernetes specialist. Expert in high-throughput Kafka streaming and sub-50ms database tuning.
                </p>
                <div className="text-xs font-mono text-slate-400 pt-1">
                  <a href="mailto:miguel@nexus-studio.dev" className="hover:text-white transition-colors">
                    miguel@nexus-studio.dev
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#131824] border border-white/5 space-y-2">
                <div className="text-sm font-medium text-white">Sofia Ramos</div>
                <div className="text-xs font-mono text-[#5ab9fc]">Data & AI Practice Lead</div>
                <p className="text-xs text-[#a4adbc] leading-relaxed">
                  Specialist in real-time telemetry architectures, predictive models, and on-device ML workflows for mobile and cloud.
                </p>
                <div className="text-xs font-mono text-slate-400 pt-1">
                  <a href="mailto:sofia@nexus-studio.dev" className="hover:text-white transition-colors">
                    sofia@nexus-studio.dev
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/5">
              <div className="text-xs text-[#a4adbc]">
                Ready to review technical scope with a partner?
              </div>
              <button
                type="button"
                onClick={() => openModal('intake')}
                className="w-full sm:w-auto btn btn--primary flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm"
              >
                <span>Initiate project consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

