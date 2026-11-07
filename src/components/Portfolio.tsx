import React from 'react';
import { useModal } from '../context/ModalContext';
import { Activity, TrendingUp, ArrowRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="section" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="work-h">Featured software products</h2>
          <p className="muted">Production platforms shipped to millions of active users worldwide.</p>
        </div>
        <div className="grid fill">
          {/* Card 1: Strata Cloud Engine */}
          <article className="card card--row span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0c1018] border border-white/10 hover:border-[#5ab9fc]/30 transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#a4adbc] mb-2">
                <span className="text-[#5ab9fc] font-medium">FINANCIAL ARCHITECTURE</span>
                <span>STRATA FINTECH INC.</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Strata Cloud Engine</h3>
              <p className="text-sm text-[#a4adbc] leading-relaxed mb-4">
                Quantitative trading platform streaming 1M data points in sub-10ms intervals. Increased analyst throughput by 340% for Series B scale.
              </p>

              {/* Live Quantitative Product UI Mock */}
              <div className="rounded-xl bg-[#131824] border border-white/5 p-4 font-mono text-xs mb-4">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/5 text-xs">
                  <span className="text-white flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-[#5ab9fc]" />
                    <span>L2 Order Book Stream</span>
                  </span>
                  <span className="text-emerald-400">LATENCY: 4.8ms</span>
                </div>
                {/* Simulated Order Book Depth */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400">BUY 104,280.50</span>
                    <div className="w-32 sm:w-44 h-2 rounded bg-emerald-500/20 overflow-hidden">
                      <div className="w-4/5 h-full bg-emerald-400"></div>
                    </div>
                    <span className="text-white/60">14.8 BTC</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400">BUY 104,275.00</span>
                    <div className="w-32 sm:w-44 h-2 rounded bg-emerald-500/20 overflow-hidden">
                      <div className="w-3/5 h-full bg-emerald-400"></div>
                    </div>
                    <span className="text-white/60">28.4 BTC</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-rose-400">SELL 104,290.00</span>
                    <div className="w-32 sm:w-44 h-2 rounded bg-rose-500/20 overflow-hidden">
                      <div className="w-2/3 h-full bg-rose-400"></div>
                    </div>
                    <span className="text-white/60">22.1 BTC</span>
                  </div>
                </div>
              </div>

              {/* Verified Metrics Pills */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-[#a4adbc] block text-xs mb-0.5">P99 Latency</span>
                  <span className="text-white font-medium text-sm">&lt; 12ms SLA</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-[#a4adbc] block text-xs mb-0.5">Active Traders</span>
                  <span className="text-[#5ab9fc] font-medium text-sm">45,000+ Daily</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#a4adbc]">
                <span>Go</span> • <span>React</span> • <span>WebGL</span> • <span>Kafka</span>
              </div>
              <button
                type="button"
                onClick={() => openModal('specs')}
                className="flex items-center gap-1 text-xs font-medium text-[#5ab9fc] hover:underline"
              >
                <span>Architecture spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>

          {/* Card 2: Aurora BioTrack */}
          <article className="card card--row span-6 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0c1018] border border-white/10 hover:border-[#5ab9fc]/30 transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#a4adbc] mb-2">
                <span className="text-[#5ab9fc] font-medium">HEALTHCARE TELEMETRY</span>
                <span>AURORA HEALTH GLOBAL</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Aurora BioTrack</h3>
              <p className="text-sm text-[#a4adbc] leading-relaxed mb-4">
                Clinical wearable telemetry suite combining sensor streams with predictive ML models. Ranked #1 Health App across 6 countries.
              </p>

              {/* Live BioTrack Telemetry Product UI */}
              <div className="rounded-xl bg-[#131824] border border-white/5 p-4 font-mono text-xs mb-4">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/5 text-xs">
                  <span className="text-white flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>Clinical Predictive Curve</span>
                  </span>
                  <span className="text-[#5ab9fc]">MODEL: ON-DEVICE ML</span>
                </div>
                {/* Simulated Telemetry Waveform */}
                <div className="h-10 w-full flex items-center justify-between gap-1 px-1">
                  {[20, 35, 28, 65, 90, 45, 30, 25, 40, 70, 85, 50, 30, 40, 60, 80, 55, 35, 25, 30].map((v, i) => (
                    <div
                      key={i}
                      className="w-full bg-[#5ab9fc] rounded-sm transition-all"
                      style={{ height: `${v}%`, opacity: i > 12 ? 0.4 : 0.85 }}
                    ></div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2.5 text-xs text-[#a4adbc]">
                  <span>Biometric Sensor Sync: 120Hz</span>
                  <span className="text-emerald-400 font-medium">Anomaly Detection: Nominal</span>
                </div>
              </div>

              {/* Verified Metrics Pills */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-[#a4adbc] block text-xs mb-0.5">App Store Rating</span>
                  <span className="text-white font-medium text-sm">4.9 ★ Verified</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-[#a4adbc] block text-xs mb-0.5">Active Subscribers</span>
                  <span className="text-[#5ab9fc] font-medium text-sm">450k+ Worldwide</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#a4adbc]">
                <span>React Native</span> • <span>Expo</span> • <span>HealthKit</span>
              </div>
              <button
                type="button"
                onClick={() => openModal('specs')}
                className="flex items-center gap-1 text-xs font-medium text-[#5ab9fc] hover:underline"
              >
                <span>Architecture spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
