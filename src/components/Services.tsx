import React from 'react';
import { useModal } from '../context/ModalContext';
import { BenchmarkConsole } from './BenchmarkConsole';

export const Services: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="section" id="services" aria-labelledby="services-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="services-h">Engineering services</h2>
          <p className="muted">Dedicated senior engineering squads deployed directly into your architecture.</p>
        </div>
        <div className="grid fill">
          <div className="split-col span-6">
            <p className="t-lead">
              High-throughput microservices, sub-second telemetry streams, and zero-trust cloud topologies built to sustain extreme peak scale.
            </p>
            <ul className="rows">
              <li><span>Distributed Systems</span><span>Go · Rust · Kafka</span></li>
              <li><span>Cloud Platforms</span><span>AWS · Kubernetes · Terraform</span></li>
              <li><span>Data Pipelines</span><span>PostgreSQL · ClickHouse</span></li>
              <li><span>Security Architecture</span><span>Zero-Trust · SOC2</span></li>
            </ul>
            <div className="split-col__end">
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => openModal('specs')}
              >
                Explore technical specs
              </button>
            </div>
          </div>
          <div className="span-6 start-7 flex items-center">
            <BenchmarkConsole />
          </div>
        </div>
      </div>
    </section>
  );
};
