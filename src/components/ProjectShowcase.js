"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ChevronRight, Activity } from 'lucide-react';

const projects = [
  {
    title: "NINL Blast Furnace Platforms",
    location: "Kalinganagar, Odisha",
    description: "Full-scale structural steel erection and engineering of platform extensions for high-intensity blast furnace operations. Demonstrating massive structural resilience and safety compliance.",
    image: "/images/blast_furnace.png",
    contract: "TATA Steel Group Partner"
  },
  {
    title: "TATA Steel Water Works",
    location: "Jamshedpur",
    description: "Critical infrastructure maintenance and installation of high-capacity water treatment and pipeline networks for industrial-grade utility systems.",
    image: "/images/water_works.png",
    contract: "Infrastructure Specialist"
  }

];

export default function ProjectShowcase() {
  return (
    <section id="projects" style={{ padding: '120px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div className="section-title">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', background: '#000', padding: '10px 0' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(3rem, 10vw, 7rem)', 
              fontWeight: '950', 
              color: '#FFD700', 
              lineHeight: 1, 
              margin: '0',
              fontFamily: 'var(--font-outfit)',
              letterSpacing: '-2px'
            }}>
              PROJECTS
            </h2>

          </motion.div>

        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'flex',
                gap: '40px',
                alignItems: 'center',
                flexWrap: 'wrap',
                flexDirection: 'row'
              }}
              className="project-card"
            >
              <div style={{ flex: '1', minWidth: '400px', height: '500px', overflow: 'hidden', borderRadius: '24px', position: 'relative' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s ease' }} 
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(10px)',
                  padding: '10px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--primary)',
                  fontWeight: '800',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Activity size={16} />
                  PROJECT LIVE: {project.location}
                </div>
              </div>

              <div style={{ flex: '1', minWidth: '350px' }}>
                <div style={{
                  display: 'inline-flex',
                  gap: '10px',
                  marginBottom: '20px',
                  color: 'var(--primary)',
                  fontSize: '0.9rem',
                  fontWeight: '700'
                }}>
                  <Layers size={20} />
                  INDUSTRIAL CASE STUDY
                </div>
                <h3 style={{ fontSize: '3rem', fontWeight: '900', lineHeight: 1.1, marginBottom: '30px' }}>{project.title}</h3>
                <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '40px', lineHeight: 1.6 }}>
                  {project.description}
                </p>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '30px',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  marginBottom: '40px'
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', marginBottom: '5px' }}>Vendor Status</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)' }}>{project.contract}</div>
                </div>

                <button className="primary-btn">
                  VIEW CASE STUDY <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
