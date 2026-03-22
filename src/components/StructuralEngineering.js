"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Settings, Truck, Zap, HardHat, Cog, ClipboardCheck, ArrowRight, Layout } from 'lucide-react';

const sections = [
  {
    title: "Facility 1: Advanced Pre-Engineered & Prefab Buildings",
    description: "PRS GROUP is a professional leader in the design, fabrication, and precision installation of high-scale PEB and prefabricated solutions.",
    image: "/images/peb.png",
    icons: [
      { name: "Pre-Engineered (PEB)", icon: <Building size={24} />, desc: "Custom steel building systems with large clear spans and optimized material usage for warehouses and factories." },
      { name: "Prefabricated Systems", icon: <Layout size={24} />, desc: "Fast-deployment site offices, labor camps, and relocatable classrooms designed for repeatable use." },
      { name: "Concrete Prefab", icon: <HardHat size={24} />, desc: "High-durability precast concrete panels and structural elements with high fire resistance." },
      { name: "Composite Solutions", icon: <Settings size={24} />, desc: "Utilizing steel, concrete, and advanced materials for enhanced thermal performance and efficiency." },
      { name: "Penalized Buildings", icon: <Building size={24} />, desc: "Flexible design with wall, floor, and roof panels for assembly on-site." }
    ]
  }
];


export default function StructuralEngineering() {
  return (
    <section id="structural" style={{ padding: '120px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div className="section-title">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-text">FACILITY 1: STEEL & PEB ENGINEERING</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '800' }}>
              Steel Engineering & Precision Erection
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          {sections.map((section, idx) => (
            <div key={idx} style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1.2fr', 
              gap: '80px', 
              alignItems: 'center',
              flexWrap: 'wrap'
            }} className="responsive-grid">
              <div style={{ borderRadius: '24px', overflow: 'hidden', height: '450px', border: '1px solid var(--border)' }}>
                <img src={section.image} alt={section.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', color: 'var(--primary)', fontWeight: '900', fontSize: '0.85rem', marginBottom: '15px', letterSpacing: '1px' }}>
                   <Building size={20}/>
                   PRS GROUP INDUSTRIAL INFRASTRUCTURE
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
