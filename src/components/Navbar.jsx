import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, FileSearch, ChevronRight, Shield
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Schemes', href: '#schemes' },
  { label: 'About', href: '#about' },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5 no-underline" aria-label="SchemeAI Home">
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl"
        style={{ background: 'linear-gradient(135deg, #1d4ed8, #4338ca)' }}>
        <FileSearch size={18} color="white" strokeWidth={2} />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center"
          style={{ background: '#22c55e', fontSize: '8px', color: 'white', fontWeight: 700 }}>
          AI
        </span>
      </div>
      <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#0f172a', letterSpacing: '-0.02em' }}>
        Scheme<span style={{ color: '#2563eb' }}>AI</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.8)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
          borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                role="menuitem"
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#login"
              style={{
                color: '#475569',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                padding: '0.375rem 0.875rem',
                borderRadius: '0.5rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.target.style.color = '#1d4ed8'; e.target.style.background = '#eff6ff'; }}
              onMouseLeave={e => { e.target.style.color = '#475569'; e.target.style.background = 'transparent'; }}
            >
              Login
            </a>
            <a
              href="#eligibility"
              className="btn-primary"
              style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}
              onClick={(e) => handleNavClick(e, '#eligibility')}
            >
              Check Eligibility
              <ChevronRight size={15} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
            style={{ border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={20} color="#334155" /> : <Menu size={20} color="#334155" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Mobile navigation"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
          overflowY: 'auto',
          paddingTop: '80px',
        }}
      >
        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '2rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  display: 'block',
                  padding: '0.875rem 1rem',
                  borderRadius: '0.625rem',
                  color: '#334155',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.target.style.background = '#f1f5f9'}
                onMouseLeave={e => e.target.style.background = 'transparent'}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="#login" className="btn-secondary" style={{ justifyContent: 'center' }}>
              Login
            </a>
            <a href="#eligibility" className="btn-primary" style={{ justifyContent: 'center' }}>
              Check Eligibility <ChevronRight size={16} />
            </a>
          </div>
          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            background: '#f8fafc',
            borderRadius: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.8rem',
            color: '#64748b',
          }}>
            <Shield size={14} color="#22c55e" />
            AI-assisted • Secure • Explainable
          </div>
        </div>
      </div>
    </>
  );
}
