"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplets, Zap, Activity, CheckCircle, Crosshair } from 'lucide-react';

const segments = [
  {
    title: "Surface Preparation (The Foundation)",
    subtitle: "Achieving superior mechanical bonding through technical precision.",
    image: "/images/sandblasting.png",
    details: [
      { name: "Abrasive Sandblasting", desc: "Achieving Sa 2.5/Sa 3 standards for heavy structural steel." },
      { name: "Hydro Jet Cleaning", desc: "High-pressure water blasting (up to 10,000 PSI) for zero dust removal." },
      { name: "Chemical Treatment", desc: "Rust converters and phosphating for specialized substrates." }
    ]
  },
  {
    title: "High-Performance Coating Systems",
    subtitle: "Corrosion science for extreme industrial durability.",
    image: "/images/epoxy.png",
    details: [
      { name: "Epoxy Systems", desc: "Zinc-rich primers for chemical and moisture-heavy environments." },
      { name: "Polyurethane (PU)", desc: "UV-resistant topcoats for color retention and gloss." },
      { name: "Fire Retardant (Intumescent)", desc: "Enhancing structural integrity during thermal events." }
    ]
  }
];

export default function PaintingProtection() {
  return (
    <section id="painting" style={{ padding: '120px 0', background: 'var(--background)' }}>
      <div className="container">
        <div className="section-title">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-text">FACILITY 2: ADVANCED INDUSTRIAL COATINGS</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '800' }}>
              Corrosion Science & Surface Protection
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          {segments.map((segment, idx) => (
            <div key={idx} style={{ 
              display: 'grid', 
              gridTemplateColumns: idx % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr', 
              gap: '60px', 
              alignItems: 'center',
              flexWrap: 'wrap'
            }} className="responsive-grid">
              {idx % 2 !== 0 && (
                <div style={{ borderRadius: '24px', overflow: 'hidden', height: '450px' }}>
                  <img src={segment.image} alt={segment.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div style={{
                  background: 'var(--surface)',
                  padding: '40px',
                  borderRadius: '24px',
                  border: '1px solid var(--border)'
                }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '10px', color: 'var(--primary)' }}>{segment.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '30px' }}>{segment.subtitle}</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {segment.details.map((detail, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                        <div style={{ marginTop: '5px', color: 'var(--primary)' }}>
                          <CheckCircle size={20} />
                        </div>
                        <div>
                          <div style={{ fontWeight: '800', color: '#fff', fontSize: '1.1rem' }}>{detail.name}</div>
                          <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>{detail.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {idx % 2 === 0 && (
                <div style={{ borderRadius: '24px', overflow: 'hidden', height: '450px' }}>
                  <img src={segment.image} alt={segment.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          {[
            { label: "Epoxy & PU Coating", icon: <Shield /> },
            { label: "Bituminous & Aluminium", icon: <Droplets /> },
            { label: "Acrylic & Emulsion", icon: <Activity /> },
            { label: "Anti-Corrosive Systems", icon: <Shield /> },
            { label: "Hydro Jet Cleaning", icon: <Crosshair /> },
            { label: "Cement & Enamel Painting", icon: <Droplets /> }
          ].map((item, i) => (
            <div key={i} className="glass-card" style={{ padding: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
              <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
