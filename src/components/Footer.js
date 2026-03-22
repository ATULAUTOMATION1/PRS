"use client";
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" style={{ padding: '120px 0 60px', background: 'var(--background)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          <div>
            <a href="/" style={{ 
              display: 'block',
              height: '80px', 
              width: 'auto',
              marginBottom: '24px'
            }}>
              <img src="/images/logo.png" alt="PRS GROUP Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
            </a>


            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '30px', fontSize: '1.1rem' }}>
              Integrated provider of industrial infrastructure & protection solutions.
              Delivering excellence across diverse industrial sectors.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ border: '1px solid var(--border)', padding: '10px 15px', borderRadius: '8px', fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700' }}>ISO 9001:2015</div>
              <div style={{ border: '1px solid var(--border)', padding: '10px 15px', borderRadius: '8px', fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700' }}>ISO 45001:2018</div>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '1.1rem', color: '#fff', fontWeight: '800' }}>REGISTERED OFFICE (DELHI)</h4>
            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '15px', fontSize: '0.95rem' }}>
              House No.B-63, KH No-74/4, Laxmi Park Nangloi, Delhi-110041
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
              Corporate coordination and strategic planning for national infrastructure projects.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '1.1rem', color: '#fff', fontWeight: '800' }}>BRANCH OFFICE (JAMSHEDPUR)</h4>
            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '15px', fontSize: '0.95rem' }}>
              SHOP NO.- UB-76, AKASHDEEP PLAZA, Golmuri, Jamshedpur, East Singhbhum, Jharkhand- 831003
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
              Operational hub serving TATA Steel and major industrial zones with on-ground expertise.
            </p>
          </div>
        </div>

        <div style={{
          paddingTop: '60px',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.3)',
          fontSize: '0.9rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p>© 2026 PRS GROUP. ALL RIGHTS RESERVED.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={16} /> ISO 9001:2015 | ISO 45001:2018 | OHSAS 18001
          </p>
        </div>
      </div>
    </footer>
  );
}
