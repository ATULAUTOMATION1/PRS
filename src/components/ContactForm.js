"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact-form" style={{ padding: '120px 0', background: 'var(--background)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'start' }}>
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>CONNECT WITH <br/> OUR EXPERTS</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '50px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Discuss your industrial requirements, structural designs, or coating projects 
              with our specialized engineering team. We provide end-to-end technical coordination.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255,215,0,0.1)', padding: '15px', borderRadius: '12px', color: 'var(--primary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '800', color: '#fff' }}>DELHI HQ</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>Laxmi Park Nangloi, Delhi-110041</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255,215,0,0.1)', padding: '15px', borderRadius: '12px', color: 'var(--primary)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '800', color: '#fff' }}>PROCUREMENT HOTLINE</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>+91 91234 56788</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255,215,0,0.1)', padding: '15px', borderRadius: '12px', color: 'var(--primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '800', color: '#fff' }}>EMAIL ENQUIRY</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>info@prsgroup.in</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255,215,0,0.1)', padding: '15px', borderRadius: '12px', color: 'var(--primary)' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '800', color: '#fff' }}>WORKING HOURS</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>Mon - Sat: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'var(--surface)',
              padding: '60px',
              borderRadius: '32px',
              border: '1px solid var(--border)',
              position: 'relative'
            }}
          >
            <form style={{ display: 'grid', gap: '25px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="responsive-grid">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Company Name</label>
                  <input type="text" placeholder="Industrial Corp" style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="responsive-grid">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Inquiry Subject</label>
                <select style={inputStyle}>
                  <option>Select a Service</option>
                  <option>Steel Engineering & PEB</option>
                  <option>Surface Protection & Coating</option>
                  <option>Infrastructure Management</option>
                  <option>Safety Governance</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Message</label>
                <textarea rows="4" placeholder="Describe your project requirement..." style={inputStyle}></textarea>
              </div>

              <button className="primary-btn" style={{ width: '100%', padding: '20px', borderRadius: '12px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <Send size={20} /> SEND REQUISITION
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '15px',
  color: '#fff',
  fontSize: '1rem',
  outline: 'none',
  width: '100%'
};
