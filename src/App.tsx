import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Mission from './components/Mission';
import Solutions from './components/Solutions';
import Differentials from './components/Differentials';
import Methodology from './components/Methodology';
import Compliance from './components/Compliance';
import Impact from './components/Impact';
import EmPauta from './components/EmPauta';
import GovIA from './components/GovIA';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;

    requestAnimationFrame(() => {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SocialProof />
      <Mission />
      <Solutions />
      <Differentials />
      {/* <Methodology /> */}
      <Compliance />
      <Impact />
      <GovIA />
      <EmPauta />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
