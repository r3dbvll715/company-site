import React, { useState } from 'react';
import { Terminal, Check, Copy } from 'lucide-react';

export const BenchmarkConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'go' | 'k8s' | 'sec'>('go');
  const [copied, setCopied] = useState(false);

  const snippets = {
    go: `// BenchmarkZeroCopyStream verifies sub-10ms event serialization
func BenchmarkZeroCopyStream(b *testing.B) {
    stream := nexus.NewBoundedRingBuffer(1024 * 1024)
    b.ReportAllocs()
    b.ResetTimer()
    for i := 0; i < b.N; i++ {
        stream.WriteUnsafe(sampleTelemetryPayload)
    }
}
// PASS: 48,290,110 ops @ 3.84 ns/op (0 B/op, 0 allocs/op)
// Latency: p50 1.2ms | p95 3.8ms | p99 7.1ms`,
    k8s: `# Zero-Trust Operator Specification (AWS/GCP Multi-Region)
apiVersion: nexus.systems/v1alpha1
kind: DistributedSquadDeployment
metadata:
  name: orderbook-stream-core
spec:
  regions: ["eu-west-1", "us-east-1"]
  autoscaling:
    minReplicas: 8
    targetP99Latency: 10ms
  security:
    wireEncryption: mTLS-Strict
    hsmKeyRotation: 24h`,
    sec: `// Zero-Trust cryptographic envelope verification
type TelemetryPacket struct {
    TimestampNano int64    \`json:"ts"\`    // Monotonic hardware clock
    SequenceID    uint64   \`json:"seq"\`   // Strict partition sequence
    Signature     [32]byte \`json:"sig"\`   // Ed25519 signature
}
// Hardware-backed HSM key attestation passed.
// SOC2 Type II automated controls verified.`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0c1018] border border-white/10 p-5 font-mono text-xs text-[#f0f4f8] shadow-2xl flex flex-col justify-between min-h-[380px]">
      <div>
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#5ab9fc]" />
            <span className="text-[#5ab9fc] font-medium">systems/benchmarks</span>
            <span className="text-white/30">/</span>
            <span className="text-[#a4adbc]">verified-suite</span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-xs text-[#a4adbc] hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 pt-3 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab('go')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
              activeTab === 'go'
                ? 'bg-[#5ab9fc]/15 text-[#5ab9fc] border border-[#5ab9fc]/30'
                : 'text-[#a4adbc] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            benchmark_test.go
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('k8s')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
              activeTab === 'k8s'
                ? 'bg-[#5ab9fc]/15 text-[#5ab9fc] border border-[#5ab9fc]/30'
                : 'text-[#a4adbc] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            topology.yaml
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('sec')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
              activeTab === 'sec'
                ? 'bg-[#5ab9fc]/15 text-[#5ab9fc] border border-[#5ab9fc]/30'
                : 'text-[#a4adbc] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            security_spec.go
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="flex-1 my-1 p-3.5 rounded-xl bg-[#131824] border border-white/5 overflow-x-auto">
        <pre className="text-xs leading-relaxed text-[#f0f4f8]">
          <code>{snippets[activeTab]}</code>
        </pre>
      </div>

      {/* Terminal Footer Status */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#a4adbc]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Core vitals &amp; throughput target verified</span>
        </div>
        <div className="text-white font-medium">&lt; 15ms guaranteed</div>
      </div>
    </div>
  );
};
