"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users, Heart, ClipboardCheck } from 'lucide-react';

export default function CorporateGovernance() {
  const values = [
    { name: "Responsible for Quality", icon: <Shield size={24} />, desc: "Complete value for your investment; every member is committed to output quality." },
    { name: "Client Satisfaction", icon: <ClipboardCheck size={24} />, desc: "Dedicated to understanding and exceeding client expectations as a core profile." },
    { name: "Valuing Our People", icon: <Users size={24} />, desc: "A talented pool of individuals shaping a shared future at the heart of our actions." },
    { name: "Acting with Integrity", icon: <Heart size={24} />, desc: "Committed to honesty, time-value, and efficient open communication in all matters." }
  ];

  return (
    <section id="governance" style={{ padding: '120px 0', background: 'var(--surface)' }}>
      <div className="container">
        
        {/* Mission & Vision */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', marginBottom: '100px' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ background: 'rgba(255,255,255,0.02)', padding: '50px', borderRadius: '32px', border: '1px solid var(--border)' }}
          >
            <div style={{ color: 'var(--primary)', marginBottom: '25px' }}><Target size={40} /></div>
            <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '20px' }}>OUR MISSION</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              To stay committed to being innovative, competitive, and achieving high levels of client satisfaction. 
              We aim to provide an environment that promotes personal growth, self-pride, and professional 
              excellence for our entire team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ background: 'rgba(255,255,255,0.02)', padding: '50px', borderRadius: '32px', border: '1px solid var(--border)' }}
          >
            <div style={{ color: 'var(--primary)', marginBottom: '25px' }}><Eye size={40} /></div>
            <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '20px' }}>OUR VISION</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              To be the "Enterprise of the Future"—viewed as the most reliable, respected, and 
              profitable business house in our core competence. Our customers, employees, 
              partners, and shareholders will take pride in being associated with us.
            </p>
          </motion.div>
        </div>

        {/* Global Values */}
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="gradient-text">OUR GUIDING PRINCIPLES</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '800' }}>
              Ethics, Quality & Corporate Behavior
            </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '100px' }}>
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ background: 'var(--background)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border)' }}
            >
              <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>{val.icon}</div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '15px' }}>{val.name}</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* The Pledge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ 
            background: 'linear-gradient(135deg, rgba(255,215,0,0.05), rgba(10,10,10,0.3))', 
            padding: '60px', 
            borderRadius: '40px', 
            border: '1px solid rgba(255,215,0,0.2)',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '30px' }}>OUR PLEDGE</h3>
          <p style={{ maxWidth: '900px', margin: '0 auto 40px', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
            "We pledge to establish strong partnerships with our clients by anticipating their needs and 
            working together to determine the best project solutions. We ensure technically accurate, 
            high-quality work through continuous improvement and unyielding commitment."
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800', color: 'var(--primary)' }}>
                <ClipboardCheck size={20} /> SPEED & QUALITY
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800', color: 'var(--primary)' }}>
                <ClipboardCheck size={20} /> TECHNICAL ACCURACY
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800', color: 'var(--primary)' }}>
                <ClipboardCheck size={20} /> OPERATIONAL EXCELLENCE
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
