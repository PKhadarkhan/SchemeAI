import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import AIDemo from '../components/AIDemo';
import SchemeCategories from '../components/SchemeCategories';
import Recommendations from '../components/Recommendations';
import ExplainableAI from '../components/ExplainableAI';
import Security from '../components/Security';
import Languages from '../components/Languages';
import FinalCTA from '../components/FinalCTA';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <Features />
        <AIDemo />
        <SchemeCategories />
        <Recommendations />
        <ExplainableAI />
        <Security />
        <Languages />
        <FinalCTA />
      </main>
      <Disclaimer />
      <Footer />
    </>
  );
}
