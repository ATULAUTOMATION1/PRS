"use client";
import React, { useEffect } from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import StructuralEngineering from "../components/StructuralEngineering";
import PaintingProtection from "../components/PaintingProtection";
import InfrastructureManagement from "../components/InfrastructureManagement";
import SafetyManagement from "../components/SafetyManagement";
import ProjectShowcase from "../components/ProjectShowcase";
import Footer from "../components/Footer";
import WhatsAppCTA from "../components/WhatsAppCTA";

export default function Home() {
  useEffect(() => {
    // Scroll Progress Logic
    const progressBar = document.getElementById('progress-bar');
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / fullHeight) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
    };

    // Intersection Observer for Reveal Animations
    const observerOptions = {
      root: null,
      threshold: 0.1
    };

    const revealCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    window.addEventListener('scroll', updateScrollProgress);
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      observer.disconnect();
    };
  }, []);

  return (
    <main style={{ background: 'var(--background)' }}>
      {/* Scroll Progress Indicator */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'rgba(255, 215, 0, 0.1)', zIndex: 1002 }}>
        <div id="progress-bar" style={{ height: '100%', width: '0%', background: '#FFD700', transition: 'width 0.2s ease-out' }}></div>
      </div>

      <Header />
      <Hero />
      <Services />
      <StructuralEngineering />
      <PaintingProtection />
      <InfrastructureManagement />
      <SafetyManagement />
      <ProjectShowcase />
      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
