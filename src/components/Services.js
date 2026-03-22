"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Droplets, 
  Settings, 
  Zap, 
  Truck, 
  Factory, 
  HardHat, 
  Layers 
} from 'lucide-react';

const services = [
  {
    title: "PEB & STRUCTURAL",
    icon: <Building size={32}/>,
    description: "End-to-end design and installation of high-quality warehouses, factories, and site offices. Our structures are built for longevity and extreme precision.",
    highlights: ["Custom Design", "Rapid Erection", "Factory & Logistics"]
  },
  {
    title: "INDUSTRIAL PAINTING",
    icon: <Droplets size={32}/>,
    description: "Technical coating solutions featuring Epoxy, Polyurethane, Anti-corrosive, and Bituminous finishes. Advanced Sandblasting and Hydro Jetting for optimal surface preparation.",
    highlights: ["Epoxy Specialists", "Sandblasting", "Anti-Corrosive"]
  },
  {
    title: "INFRASTRUCTURE & AUTOMATION",
    icon: <Zap size={32}/>,
    description: "Pioneering railway track construction, maintenance of point & crossing, and state-of-the-art Industrial Automation solutions for modern engineering demands.",
    highlights: ["Railway Work", "Process Automation", "Track Maintenance"]
  }
];

const industrySegments = [
  { name: "Automotive", icon: <Truck size={24} /> },
  { name: "Logistics", icon: <Factory size={24} /> },
  { name: "Energy", icon: <Zap size={24} /> },
  { name: "Infrastructure", icon: <HardHat size={24} /> }
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '120px 0', background: 'var(--background)' }}>
      <div className="container">
        <div className="section-title">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="gradient-text">THE PRS GROUP ADVANTAGE</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800' }}>
              Multi-Disciplinary Industrial Excellence
            </p>
          </motion.div>
        </div>


        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {services.map((service, idx) => (
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
                transition: 'transform 0.3s ease, background 0.3s ease',
                position: 'relative'
              }}
              whileHover={{ 
                transform: 'translateY(-10px)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                background: idx === 1 ? 'var(--accent)' : 'var(--primary)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                marginBottom: '10px'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff' }}>{service.title}</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
                {service.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: 'auto'
              }}>
                {service.highlights.map((h, i) => (
                  <span key={i} style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    background: 'var(--surface)',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    border: '1px solid var(--border)',
                    color: 'rgba(255, 255, 255, 0.5)'
                  }}>
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{
          marginTop: '100px',
          padding: '60px',
          background: 'var(--surface)',
          borderRadius: '24px',
          border: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px'
        }}>
          <h4 style={{ fontSize: '1.25rem', color: '#fff' }}>KEY INDUSTRY VERTICALS</h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '60px'
          }}>
            {industrySegments.map((segment, idx) => (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                filter: 'grayscale(1)',
                opacity: 0.6,
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'none';
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.color = 'var(--primary)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(1)';
                e.currentTarget.style.opacity = '0.6';
                e.currentTarget.style.color = 'inherit';
              }}>
                {segment.icon}
                <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase' }}>{segment.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
