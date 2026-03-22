"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#050505',
      color: '#fff',
      textAlign: 'center',
      padding: '40px'
    }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ color: '#FFD700', marginBottom: '30px' }}
      >
        <ShieldAlert size={100} />
      </motion.div>
      
      <h1 style={{ fontSize: '10rem', fontWeight: '900', lineHeight: 1, marginBottom: '20px', letterSpacing: '-10px', color: 'rgba(255,255,255,0.05)' }}>404</h1>
      <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '20px' }}>ACCESS RESTRICTED OR DENIED</h2>
      <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px', marginBottom: '40px', lineHeight: 1.6 }}>
        The industrial resource or section you are trying to access is currently unavailable 
        on the PRS GROUP secure server.
      </p>

      <Link href="/" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px', 
        background: '#FFD700', 
        color: '#000', 
        padding: '15px 30px', 
        borderRadius: '50px',
        fontWeight: '800',
        textDecoration: 'none' 
      }}>
        <ArrowLeft size={20} /> RETURN TO MISSION CONTROL
      </Link>
    </div>
  );
}
