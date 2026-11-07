import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Wifi, Server, CheckCircle2 } from 'lucide-react';

export const TelemetryVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flow' | 'vitals' | 'nodes'>('flow');
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((p) => (p + 1) % 100);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="telemetry-panel w-full rounded-2xl bg-[#0c1018] border border-white/10 p-5 font-mono text-xs text-[#f0f4f8] shadow-2xl flex flex-col justify-between min-h-[380px]">
      {/* Telemetry Header Bar */}
      <div>
        <div className="flex items-center justify-between pb-3.5 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-[#5ab9fc] font-medium">STREAM: US-EAST-1</span>
            <span className="text-white/30">/</span>
            <span className="text-[#a4adbc]">NOMINAL</span>
          </div>
          <div className="flex items-center gap-3 text-[#a4adbc]">
            <span className="hidden sm:inline">P99: 4.8ms</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs text-emerald-400">
              100% ONLINE
            </span>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className="flex items-center gap-2 pt-3 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab('flow')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
              activeTab === 'flow'
                ? 'bg-[#5ab9fc]/15 text-[#5ab9fc] border border-[#5ab9fc]/30'
                : 'text-[#a4adbc] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            Packet Flow
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('vitals')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
              activeTab === 'vitals'
                ? 'bg-[#5ab9fc]/15 text-[#5ab9fc] border border-[#5ab9fc]/30'
                : 'text-[#a4adbc] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            Vitals &lt; 15ms
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('nodes')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
              activeTab === 'nodes'
                ? 'bg-[#5ab9fc]/15 text-[#5ab9fc] border border-[#5ab9fc]/30'
                : 'text-[#a4adbc] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            Topology Mesh
          </button>
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="py-2 flex-1 flex flex-col justify-center">
        {activeTab === 'flow' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-[#a4adbc]">
              <span>Ingress Stream Throughput</span>
              <span className="text-white font-medium">184,200 events/sec</span>
            </div>
            
            {/* SVG Live Waveform / Histogram */}
            <div className="h-28 w-full rounded-xl bg-[#131824] border border-white/5 p-2.5 flex items-end justify-between gap-1">
              {[42, 68, 85, 72, 94, 60, 48, 88, 92, 78, 64, 82, 96, 74, 58, 89, 95, 80, 62, 91].map((val, i) => (
                <div
                  key={i}
                  className="w-full rounded-sm bg-[#5ab9fc]/30 transition-all duration-500 hover:bg-[#5ab9fc]"
                  style={{
                    height: `${((val + (pulse * (i % 3))) % 80) + 20}%`,
                    backgroundColor: i === 12 || i === 16 ? '#5ab9fc' : undefined,
                  }}
                ></div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 text-xs">
              <div className="p-2 rounded-lg bg-[#131824] border border-white/5">
                <span className="text-[#a4adbc] block text-xs">Ring Buffer</span>
                <span className="text-white font-medium">0 allocs/op</span>
              </div>
              <div className="p-2 rounded-lg bg-[#131824] border border-white/5">
                <span className="text-[#a4adbc] block text-xs">Queue Depth</span>
                <span className="text-[#5ab9fc] font-medium">&lt; 1.2ms</span>
              </div>
              <div className="p-2 rounded-lg bg-[#131824] border border-white/5">
                <span className="text-[#a4adbc] block text-xs">Partition Egress</span>
                <span className="text-emerald-400 font-medium">100% synced</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'vitals' && (
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-[#131824] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-[#5ab9fc]" />
                <div>
                  <div className="text-xs text-white font-medium">Interaction to Next Paint (INP)</div>
                  <div className="text-xs text-[#a4adbc]">Target &lt; 20ms • Achieved: 8ms</div>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-semibold">8ms</span>
            </div>

            <div className="p-3 rounded-xl bg-[#131824] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-[#5ab9fc]" />
                <div>
                  <div className="text-xs text-white font-medium">Time to First Byte (TTFB)</div>
                  <div className="text-xs text-[#a4adbc]">Edge cached across 240 global PoPs</div>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-semibold">12ms</span>
            </div>

            <div className="p-3 rounded-xl bg-[#131824] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Wifi className="w-4 h-4 text-[#5ab9fc]" />
                <div>
                  <div className="text-xs text-white font-medium">WebSocket Frame Latency</div>
                  <div className="text-xs text-[#a4adbc]">Sub-10ms full bidirectional handshake</div>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-semibold">4.2ms</span>
            </div>
          </div>
        )}

        {activeTab === 'nodes' && (
          <div className="p-4 rounded-xl bg-[#131824] border border-white/5 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#a4adbc]">Topology: Multi-Region Active/Active</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Healthy</span>
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-white flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-[#5ab9fc]" />
                  <span>fra-node-01 (Frankfurt)</span>
                </span>
                <span className="text-[#a4adbc]">2.1ms • Go 1.23</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-white flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-[#5ab9fc]" />
                  <span>lhr-node-04 (London)</span>
                </span>
                <span className="text-[#a4adbc]">3.4ms • Rust 1.82</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-white flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-[#5ab9fc]" />
                  <span>iad-node-02 (Virginia)</span>
                </span>
                <span className="text-[#a4adbc]">8.9ms • ClickHouse</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Live Status Footer */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#a4adbc]">
        <div className="flex items-center gap-1.5">
          <span className="text-[#5ab9fc] font-bold">NEXUS CORE</span>
          <span>v4.8.2</span>
        </div>
        <div>Continuous automated telemetry verification</div>
      </div>
    </div>
  );
};
