"use client";
import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppCTA() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      <motion.a
        href="https://wa.me/919123456788"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        style={{
          background: '#25D366',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '50px',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: '700',
          textTransform: 'uppercase',
          fontSize: '0.85rem'
        }}
      >
        <MessageCircle size={24} />
        TALK TO AN ENGINEER
      </motion.a>

      <motion.a
        href="tel:+919123456788"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        style={{
          background: '#FFFFFF',
          color: '#000',
          padding: '12px 24px',
          borderRadius: '50px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: '700',
          textTransform: 'uppercase',
          fontSize: '0.85rem'
        }}
      >
        <PhoneCall size={24} />
        PROCUREMENT HOTLINE
      </motion.a>

    </div>
  );
}
