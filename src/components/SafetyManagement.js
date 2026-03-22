"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, FileText, CheckCircle, Activity, Layout, Briefcase } from 'lucide-react';

const pillars = [
  {
    title: "Compliance-First Approach",
    icon: <Award size={32} />,
    description: "Operating under strict adherence to ISO 9001:2015 for quality and ISO 45001:2018 for safety standards.",
    color: 'var(--primary)'
  },
  {
    title: "Safety Management",
    icon: <Shield size={32} />,
    description: "Dedicated safety officers ensuring a zero-incident culture in high-risk zones like Blast Furnaces.",
    color: 'var(--accent)'
  },
  {
    title: "Vendor Legitimacy",
    icon: <FileText size={32} />,
    description: "Streamlined procurement through verified vendor credentials and full compliance with MSME/GST registrations.",
    color: 'var(--primary)'
  },
  {
    title: "Operational Excellence",
    icon: <Activity size={32} />,
    description: "Focusing on speed, technical accuracy, and budget control for every single industrial project.",
    color: 'var(--secondary)'
  }
];

export default function SafetyManagement() {
  return (
    <section id="safety" style={{ padding: '120px 0', background: 'var(--background)' }}>
      <div className="container">
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: 1.2, marginBottom: '15px' }}>STRATEGIC GOVERNANCE & SAFETY</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '800', fontSize: '1.1rem' }}>
              The Foundation of Industrial Leadership
            </p>
          </motion.div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(350px, 1fr) 2fr',
          gap: '100px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }} className="responsive-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', gap: '10px', alignItems: 'center', color: 'var(--primary)', fontWeight: '900', marginBottom: '20px' }}>
              <Users size={24} />
              EXECUTIVE INDUSTRIAL OVERSIGHT
            </div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', lineHeight: 1, marginBottom: '40px' }}>
              BUILT FOR THE <br />
              <span className="gradient-text">ZERO-INCIDENT</span> <br />
              CULTURE.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '40px' }}>
              We target the "Executive" mindset by ensuring absolute compliance, 
              safety accountability, and streamlined vendor legitimacy. 
              Engineering is not just building; it's professional industrial management.
            </p>
            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '300px', border: '1px solid var(--border)' }}>
              <img src="/images/safety.png" alt="Safety Management" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-card"
                style={{
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  transition: 'all 0.3s ease',
                  borderTop: `4px solid ${pillar.color}`
                }}
                whileHover={{ transform: 'translateY(-10px)' }}
              >
                <div style={{ color: pillar.color }}>{pillar.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff' }}>{pillar.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6 }}>{pillar.description}</p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '10px', color: pillar.color, fontWeight: '700', fontSize: '0.9rem' }}>
                  <CheckCircle size={18} />
                  ISO COMPLIANT
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
