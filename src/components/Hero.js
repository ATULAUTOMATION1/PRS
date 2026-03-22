"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Background Image Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/images/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2,
        filter: 'brightness(0.3)'
      }} />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 10, 10, 0.8) 100%)',
        zIndex: -1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '850px' }}
        >


          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            lineHeight: 0.9,
            marginBottom: '30px',
            color: '#fff',
            fontFamily: 'var(--font-outfit)',
            fontWeight: '900',
            letterSpacing: '-3px'
          }}>
            INTEGRATED <br />
            <span className="gradient-text">INFRASTRUCTURE</span> <br />
            & PROTECTION <span style={{ color: 'var(--primary)' }}>SOLUTIONS.</span>
          </h1>

          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            marginBottom: '45px',
            fontWeight: '500'
          }}>
            PRS Group is a multi-disciplinary organization delivering at-scale expertise 
            in Steel Engineering, Advanced Coatings, and Infrastructure Management. 
            Building the core of industrial progress.
          </p>


          <div style={{ display: 'flex', gap: '20px', marginBottom: '60px' }}>
            <a href="#services">
              <button className="primary-btn">
                DISCOVER OUR CAPACITY
              </button>
            </a>
            <a href="https://wa.me/919123456788" target="_blank" rel="noopener noreferrer">
              <button className="secondary-btn">
                TALK TO AN ENGINEER
              </button>
            </a>
          </div>


          {/* Trust Bar (Competitor Buster) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px',
              paddingTop: '40px',
              borderTop: '1px solid var(--border)'
            }}
          >
            {[
              { icon: <Award size={20} />, label: "ISO 9001:2015", sub: "Quality Management" },
              { icon: <Shield size={20} />, label: "ISO 45001:2018", sub: "OHS Certified" },
              { icon: <CheckCircle size={20} />, label: "OHSAS 18001", sub: "Safety Excellence" }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: '800', fontFamily: 'var(--font-outfit)' }}>{item.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Video Loop (Mock or Real if path provided) */}
      {/* <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -3 }}>
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video> */}
    </section>
  );
}
