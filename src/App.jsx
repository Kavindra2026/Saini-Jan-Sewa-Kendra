import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNavigateLightbox = (nextIndex) => {
    setLightboxIndex(nextIndex);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenLightbox={handleOpenLightbox} />
        <About onOpenLightbox={handleOpenLightbox} />
        <Services />
        <WhyChooseUs />
        <Gallery onOpenLightbox={handleOpenLightbox} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile / Desktop Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Image Lightbox Viewer */}
      <LightboxModal
        activeIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
