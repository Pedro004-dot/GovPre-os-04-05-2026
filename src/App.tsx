import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import { HeroAmbassadorsBand } from './components/HeroAmbassadors';
import SocialProof from './components/SocialProof';
import FeatureSections from './components/FeatureSections';
import HowGovIAWorks from './components/HowGovIAWorks';
import Compliance from './components/Compliance';
import EmPauta from './components/EmPauta';
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
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      {/* <HeroAmbassadorsBand /> */}
      {/* <SocialProof /> */}
      <FeatureSections />
      {/* <HowGovIAWorks /> */}
      <Compliance />
      <CTA />
      <EmPauta />
      <Footer />
    </div>
  );
}

export default App;
