"use client";
import React, { useEffect } from 'react';
import Header from "../components/Header";
import AboutCharter from "../components/AboutCharter";
import CoreServicesList from "../components/CoreServicesList";
import Certifications from "../components/Certifications";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WhatsAppCTA from "../components/WhatsAppCTA";

export default function Home() {
  useEffect(() => {
    const progressBar = document.getElementById('progress-bar');
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / fullHeight) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <main style={{ background: 'transparent' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'rgba(255, 215, 0, 0.1)', zIndex: 1002 }}>
        <div id="progress-bar" style={{ height: '100%', width: '0%', background: '#FFD700', transition: 'width 0.2s ease-out' }}></div>
      </div>

      <Header />
      
      {/* Dynamic exact content blocks */}
      <div style={{ paddingTop: '100px' }}>
        <AboutCharter />
        <CoreServicesList />
        <Certifications />
      </div>

      <ContactForm />
      <Footer />
      <WhatsAppCTA />

    </main>
  );
}
