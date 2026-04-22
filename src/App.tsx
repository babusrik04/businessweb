import { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudy from './components/CaseStudy';
import Pricing from './components/Pricing';
import ContactCTA from './components/ContactCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Hero onGetStarted={() => setShowContactForm(true)} />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <CaseStudy />
      <Pricing />
      <ContactCTA onGetStarted={() => setShowContactForm(true)} />
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
      <Footer />
    </div>
  );
}

export default App;
