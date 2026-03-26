"use client";
import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  "TATA STEEL", "RELIANCE", "INDIAN RAILWAYS", "JSW", "L&T", "ADANI", "NINL", "VEDANTA"
];

export default function ClientMarquee() {
  return (
    <div style={{
      padding: '40px 0',
      background: '#020202',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
      {/* Gradient Fades for Smooth Entry/Exit */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, #020202, transparent)', zIndex: 2 }}></div>
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, #020202, transparent)', zIndex: 2 }}></div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        style={{ display: 'flex', whiteSpace: 'nowrap', width: 'fit-content' }}
      >
        {/* Double array to create infinite seamless loop */}
        {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
          <div key={idx} style={{
            marginRight: '80px',
            fontSize: '1.8rem',
            fontWeight: '900',
            fontFamily: 'var(--font-outfit)',
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '80px'
          }}>
            <span>{client}</span>
            <span style={{ color: 'var(--primary)', opacity: 0.5 }}>///</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
