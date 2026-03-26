"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StructuralEngineering from './StructuralEngineering';
import PaintingProtection from './PaintingProtection';
import InfrastructureManagement from './InfrastructureManagement';
import { Building, Droplets, Zap } from 'lucide-react';

const tabs = [
  { id: 'structural', label: 'Steel & PEB Engineering', icon: <Building size={20} /> },
  { id: 'painting', label: 'Advanced Industrial Coatings', icon: <Droplets size={20} /> },
  { id: 'infrastructure', label: 'Infrastructure & Automation', icon: <Zap size={20} /> }
];

export default function CoreCapabilities() {
  const [activeTab, setActiveTab] = useState('structural');

  return (
    <section id="capabilities" style={{ padding: '80px 0', background: '#080808' }}>
      <div className="container">
        
        {/* Tab Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          justifyContent: 'center',
          marginBottom: '60px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          paddingBottom: '20px'
        }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: isActive ? 'var(--primary)' : 'transparent',
                  color: isActive ? '#000' : 'rgba(255,255,255,0.6)',
                  border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  padding: '16px 32px',
                  borderRadius: '100px',
                  fontSize: '0.95rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Rendering */}
        <div style={{ position: 'relative', minHeight: '600px' }}>
          <AnimatePresence mode="wait">
            {activeTab === 'structural' && (
              <motion.div
                key="structural"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ marginTop: '-100px' }}>
                  <StructuralEngineering />
                </div>
              </motion.div>
            )}

            {activeTab === 'painting' && (
              <motion.div
                key="painting"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ marginTop: '-100px' }}>
                  <PaintingProtection />
                </div>
              </motion.div>
            )}

            {activeTab === 'infrastructure' && (
              <motion.div
                key="infrastructure"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ marginTop: '-100px' }}>
                  <InfrastructureManagement />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
