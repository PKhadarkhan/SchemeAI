import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function FinalCTA() {
  const [ref, inView] = useInView();

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="eligibility"
      ref={ref}
      aria-labelledby="cta-heading"
      className={`section-fade ${inView ? 'visible' : ''}`}
      style={{
        padding: '96px 1.5rem',
        background: 'linear-gradient(160deg, #1e3a8a 0%, #1e40af 50%, #3730a3 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div aria-hidden="true">
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      </div>

      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <p style={{
          fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(147,197,253,0.9)',
          marginBottom: '1rem',
        }}>
          Get Started Today
        </p>
        <h2 id="cta-heading" style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 900, color: 'white',
          letterSpacing: '-0.03em', lineHeight: 1.1,
          marginBottom: '1.25rem',
        }}>
          Start Exploring Government Schemes
        </h2>
        <p style={{
          fontSize: '1.0625rem',
          color: 'rgba(226,232,240,0.85)',
          lineHeight: 1.75,
          marginBottom: '2.25rem',
          maxWidth: '520px',
          margin: '0 auto 2.25rem',
        }}>
          Create your profile and discover potentially relevant schemes with
          AI-assisted guidance. Free to use, transparent, and explainable.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}>
          <a
            href="#home"
            id="cta-check-eligibility"
            onClick={(e) => handleScrollTo(e, '#home')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'white',
              color: '#1d4ed8',
              fontWeight: 700,
              fontSize: '0.9375rem',
              padding: '0.875rem 2rem',
              borderRadius: '0.75rem',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
            }}
          >
            Check My Eligibility
            <ArrowRight size={17} />
          </a>

          <a
            href="#schemes"
            id="cta-explore-schemes"
            onClick={(e) => handleScrollTo(e, '#schemes')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9375rem',
              padding: '0.875rem 2rem',
              borderRadius: '0.75rem',
              border: '1.5px solid rgba(255,255,255,0.35)',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'transparent'; }}
          >
            Explore Schemes
          </a>
        </div>

        {/* Trust row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
          justifyContent: 'center',
          fontSize: '0.82rem',
          color: 'rgba(203,213,225,0.8)',
          fontWeight: 500,
        }}>
          {['AI-assisted guidance', 'No official approval guaranteed', 'Transparent recommendations'].map(t => (
            <span key={t}>· {t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
