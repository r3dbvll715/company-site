import React from 'react';
import { useModal } from '../context/ModalContext';

export const Team: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="section" id="team" aria-labelledby="team-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="team-h">Studio engineering team</h2>
          <p className="muted">Technical partners who personally architect and lead client systems.</p>
        </div>
        <div className="grid fill">
          <div className="split-col span-6">
            <p className="t-lead">
              Alexandre Martins leads our systems architecture practice alongside senior engineering partners.
            </p>
            <ul className="rows">
              <li><span>Alexandre Martins</span><span>Founding Partner &amp; Lead Architect</span></li>
              <li><span>Beatriz Costa</span><span>Head of Product Design</span></li>
              <li><span>Miguel Rocha</span><span>Lead Systems Architect</span></li>
              <li><span>Sofia Ramos</span><span>Data &amp; AI Practice Lead</span></li>
            </ul>
            <div className="split-col__end">
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => openModal('directors')}
              >
                Meet the directors
              </button>
            </div>
          </div>
          <div className="frame frame--photo frame--fill span-6 start-7">
            <img
              className="frame__img"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
              alt="Studio director Alexandre Martins in studio"
              loading="lazy"
              data-source="library"
              data-subject="studio director portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
