"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Settings, ClipboardCheck, ArrowRight, Activity } from 'lucide-react';

const sections = [
  {
    title: "Facility 3: Industrial & Infrastructure Management",
    description: "Delivering end-to-end solutions coordinated by experienced project teams with a focus on railway and automated safety systems.",
    image: "/images/railway.png",
    icons: [
      { name: "Turnkey Management", icon: <ClipboardCheck size={24} />, desc: "Coordinated project delivery within budget and timelines." },
      { name: "Railway Infrastructure", icon: <Truck size={24} />, desc: "Maintenance, Thermit Welding, Point/Crossing maintenance." },
      { name: "Industrial Automation", icon: <Activity size={24} />, desc: "Safety systems, automatic gates, and audio-visual alarms." }
    ]
  }
];

export default function InfrastructureManagement() {
  return (
    <section id="infra" style={{ padding: '120px 0', background: 'var(--background)' }}>
      <div className="container">
        <div className="section-title">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-text">FACILITY 3: INFRASTRUCTURE MANAGEMENT</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '800' }}>
               Specialized Logistics & Automation
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          {sections.map((section, idx) => (
            <div key={idx} style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.2fr 1fr', 
              gap: '80px', 
              alignItems: 'center',
              flexWrap: 'wrap'
            }} className="responsive-grid">
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'var(--primary)', fontWeight: '900', fontSize: '0.85rem', marginBottom: '15px', letterSpacing: '1px' }}>
                   <Settings size={20}/>
                   PRS GROUP FACILITY 3
                </div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: '900' }}>{section.title}</h3>
                <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '40px', lineHeight: 1.6 }}>{section.description}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                  {section.icons.map((item, iIdx) => (
                    <div key={iIdx} style={{
                      background: 'rgba(255,255,255,0.03)',
                      padding: '24px',
                      borderRadius: '16px',
                      border: '1px solid var(--border)',
                      transition: 'transform 0.3s ease'
                    }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                      <div style={{ color: 'var(--primary)', marginBottom: '15px' }}>{item.icon}</div>
                      <div style={{ fontWeight: '800', marginBottom: '8px', color: '#fff' }}>{item.name}</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div style={{ borderRadius: '24px', overflow: 'hidden', height: '450px', border: '1px solid var(--border)' }}>
                <img src={section.image} alt={section.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
