import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { SocialProof } from './components/SocialProof';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { ModalProvider } from './context/ModalContext';
import { IntakeModal } from './components/IntakeModal';

export const App: React.FC = () => {
  return (
    <ModalProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <SocialProof />
        <Team />
      </main>
      <Footer />
      <IntakeModal />
    </ModalProvider>
  );
};

export default App;
