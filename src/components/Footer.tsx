import React from 'react';
import { useModal } from '../context/ModalContext';

export const Footer: React.FC = () => {
  const { openModal } = useModal();

  return (
    <footer className="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        {/* Child 1: .closing__cta.close--type */}
        <div className="closing__cta close--type">
          <h2 id="contact-h">Start a project</h2>
          <p className="t-lead">
            Direct partner engineering from day zero. Production platforms shipped in rapid weekly sprints.
          </p>
          <div>
            <button
              type="button"
              className="btn btn--primary btn--xl"
              onClick={() => openModal('intake')}
            >
              Start a project
            </button>
          </div>
        </div>

        {/* Child 2: .closing__links */}
        <div className="closing__links">
          <div className="grid">
            <div className="footer__col span-4">
              <p className="footer__lede">Software engineering collective in Porto and London.</p>
            </div>
            <div className="footer__col span-3">
              <p className="t-label muted">Capabilities</p>
              <ul>
                <li><a href="#services">Distributed Systems</a></li>
                <li><a href="#services">Cloud Platforms</a></li>
                <li><a href="#services">Data Pipelines</a></li>
                <li><a href="#services">Security Architecture</a></li>
              </ul>
            </div>
            <div className="footer__col span-3">
              <p className="t-label muted">Case studies</p>
              <ul>
                <li><a href="#work">Strata Cloud Engine</a></li>
                <li><a href="#work">Aurora BioTrack</a></li>
                <li><a href="#endorsements">Client Endorsements</a></li>
                <li><a href="#team">Studio directors</a></li>
              </ul>
            </div>
            <div className="footer__col span-2">
              <p className="t-label muted">Studio Hubs</p>
              <p className="t-small muted">Porto · London<br /><a href="mailto:hello@nexus-studio.dev">hello@nexus-studio.dev</a></p>
            </div>
          </div>

          <div className="footer__legal">
            <div>© 2026 NEXUS Collective Lda. All rights reserved.</div>
            <div>All systems engineered under SOC2 Type II &amp; Zero-Trust protocols. Registered in Portugal &amp; UK.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
