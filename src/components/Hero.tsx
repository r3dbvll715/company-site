import React from 'react';
import { useModal } from '../context/ModalContext';
import { TelemetryVisual } from './TelemetryVisual';

export const Hero: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="hero hero--split" id="top" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero-split">
          <div className="hero-copy span-6">
            <p className="hero-notice">EST. 2021 — PORTO • LISBON • LONDON</p>
            <h1 id="hero-h">Software engineering collective in Porto and London</h1>
            <p className="t-lead">
              We architect sub-15ms web platforms, high-concurrency cloud infrastructure, and mobile applications for ambitious technology ventures.
            </p>
            <div className="btn-row">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => openModal('intake')}
              >
                <span>Start a project</span>
                <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
                  <path className="m-arrow__stem" d="M1 6h8" />
                  <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
                </svg>
              </button>
              <a className="btn btn--secondary" href="#work">See selected work</a>
            </div>
            <dl className="hero-facts">
              <div><dt>Latency Target</dt><dd>&lt; 15ms Core Vitals</dd></div>
              <div><dt>Engineering Leads</dt><dd>100% Senior Staff</dd></div>
              <div><dt>Deploy Velocity</dt><dd>Weekly Friday Sprints</dd></div>
            </dl>
          </div>
          <div className="hero-visual span-6 start-7">
            <TelemetryVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
