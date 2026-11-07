import React from 'react';
import { STUDIO_INFO } from '../data/content';
import { useModal } from '../context/ModalContext';

export const Navbar: React.FC = () => {
  const { openModal } = useModal();

  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="nav__logo" href="#top">
          <span className="mark" data-mark="ring" aria-hidden="true"></span>
          <span>{STUDIO_INFO.name}</span>
        </a>
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item"><a className="nav__link" href="#services">Services</a></div>
          <div className="nav__item"><a className="nav__link" href="#work">Products</a></div>
          <div className="nav__item"><a className="nav__link" href="#endorsements">Proof</a></div>
          <div className="nav__item"><a className="nav__link" href="#team">Team</a></div>
        </nav>
        <div className="nav__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => openModal('intake')}
          >
            Start a project
          </button>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </button>
      </div>
    </header>
  );
};
