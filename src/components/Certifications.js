"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '80px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '60px' }}>
            Registered under Government Institution
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={cardStyle}>
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>UDYAM Registration</h3>
              <div style={{ height: '300px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', border: '1px dashed rgba(255,255,255,0.2)' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', padding: '20px' }}>Please place Udyam Certificate Image here <br/><small>(public/images/udyam.jpg)</small></span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={cardStyle}>
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Incorporation Certificate</h3>
              <div style={{ height: '300px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', border: '1px dashed rgba(255,255,255,0.2)' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', padding: '20px' }}>Please place Incorporation Certificate here<br/><small>(public/images/incorp.jpg)</small></span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={cardStyle}>
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>ISO 45001:2018</h3>
              <div style={{ height: '300px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', border: '1px dashed rgba(255,255,255,0.2)' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', padding: '20px' }}>Please place ISO Certificate here<br/><small>(public/images/iso45001.jpg)</small></span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: 'rgba(0,0,0,0.2)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '24px'
};
