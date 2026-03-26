"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectShowcaseCards() {
  const showcaseImages = [
    { src: "/images/media__1774545933075.jpg", title: "Acrylic Painting Services - TATA STEEL UISL" },
    { src: "/images/media__1774545947478.jpg", title: "Industrial Painting Services - Blast Furnace NINL" },
    { src: "/images/media__1774545957809.jpg", title: "Industrial Platform & Conveyor Painting" },
    { src: "/images/media__1774545978015.png", title: "Running Projects - PEB Installation" }
  ];

  return (
    <section id="project-showcase" style={{ padding: '80px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '20px' }}>
            Featured Projects & Capabilities
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '60px' }}>
            A snapshot of our ongoing and completed industrial milestones.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '40px' 
        }}>
          {showcaseImages.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
              transition={{ duration: 0.4 }}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                cursor: 'pointer'
              }}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
