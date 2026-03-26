"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';

export default function CoreServicesList() {
  const services = [
    {
      title: "Prefabricated Buildings",
      points: [
        "Factory-manufactured building components assembled on site",
        "Reduced construction time and improved quality control.",
        "Suitable for residential, commercial, and industrial applications"
      ]
    },
    {
      title: "Pre-Engineered Buildings (PEB)",
      points: [
        "Custom-designed steel building systems",
        "Large clear spans, lightweight structures, and optimized material usage",
        "Ideal for warehouses, factories, workshops, hangars, and logistics facilities"
      ]
    },
    {
      title: "Temporary Structures",
      points: [
        "Fast-deployment and relocatable buildings",
        "Site offices, labor camps, classrooms, and storage units",
        "Designed for durability, safety, and repeated use"
      ]
    },
    {
      title: "Composite Material Buildings",
      points: [
        "Structures utilizing a combination of steel, concrete, and advanced composite materials",
        "Enhanced strength, thermal performance, and structural efficiency",
        "Suitable for specialized and high-performance applications"
      ]
    },
    {
      title: "Steel Structure Prefab Buildings",
      points: [
        "Robust steel framing systems with precision erection",
        "Seismic-resistant and long service life",
        "Used for industrial plants, commercial buildings, and infrastructure projects"
      ]
    },
    {
      title: "Concrete Prefab Buildings",
      points: [
        "Precast concrete panels and structural elements",
        "High durability, fire resistance, and low maintenance",
        "Applied in residential blocks, offices, and institutional buildings"
      ]
    },
    {
      title: "Penalized Buildings",
      points: [
        "Precast concrete panels and structural elements",
        "High durability, fire resistance, and low maintenance",
        "Applied in residential blocks, offices, and institutional buildings"
      ]
    }
  ];

  return (
    <section id="core-services" style={{ padding: '80px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '30px' }}>Our Core Services</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '60px' }}>
            We provide end-to-end solutions, including engineering, fabrication coordination, on-site erection, 
            and final installation for the following systems:
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginBottom: '100px' }}>
          {services.map((srv, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#FFD700', marginBottom: '20px' }}>
                <Hand size={30} style={{ transform: 'rotate(-45deg)' }} />
                <h3 style={{ fontSize: '2rem', fontWeight: '700', margin: 0 }}>{srv.title}</h3>
              </div>
              <ul style={{ listStyleType: 'circle', paddingLeft: '50px', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {srv.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Our Capabilities */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '30px' }}>Our Capabilities</h2>
          <ul style={{ listStyleType: 'circle', paddingLeft: '30px', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li>Structural erection and installation</li>
            <li>On-site construction management</li>
            <li>Mechanical fastening and assembly</li>
            <li>Quality control and safety compliance</li>
            <li>Coordination with engineering and design teams</li>
          </ul>
        </motion.div>

        {/* Our Commitment */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '30px' }}>Our Commitment</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '20px' }}>
            At PRS INFRABUILD , we are committed to:
          </p>
          <ul style={{ listStyleType: 'circle', paddingLeft: '30px', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li>Delivering projects on time and within budget</li>
            <li>Maintaining high safety and quality standards</li>
            <li>Providing customized solutions aligned with client requirements</li>
            <li>Building long-term partnerships through reliability and technical excellence</li>
          </ul>
        </motion.div>

        {/* Industries We Serve */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '30px' }}>Industries We Serve</h2>
          <ul style={{ listStyleType: 'circle', paddingLeft: '30px', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li>Industrial and manufacturing</li>
            <li>Warehousing and logistics</li>
            <li>Commercial and retail</li>
            <li>Infrastructure, utilities & construction camps</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
