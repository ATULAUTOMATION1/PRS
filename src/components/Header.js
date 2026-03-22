"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ShieldCheck, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Company", href: "#governance" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];


  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: isScrolled ? '15px 0' : '25px 0',
      background: isScrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(15px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="/" style={{ display: 'block', height: '54px', width: 'auto' }}>
            <img src="/images/logo.png" alt="PRS GROUP Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
          </a>
        </div>


        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '30px', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }} 
                   onMouseEnter={(e) => e.target.style.color = '#FFD700'} 
                   onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />

          <a href="#contact">
            <button className="primary-btn" style={{ 
              padding: '10px 20px', 
              fontSize: '0.75rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              background: '#FFD700',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
              fontWeight: '800',
              cursor: 'pointer'
            }}>
              <Download size={16} /> GROUP PROFILE
            </button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ 
            display: 'none', 
            background: 'none', 
            border: 'none', 
            color: '#fff', 
            cursor: 'pointer' 
          }}
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '80%',
              height: '100vh',
              background: '#0a0a0a',
              zIndex: 1001,
              padding: '100px 40px',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="primary-btn" style={{ width: '100%', padding: '15px' }}>
                DOWNLOAD GROUP PROFILE
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx>{`
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
