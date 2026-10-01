import { useState, useEffect } from 'react';
import {
  ChevronRight, ArrowRight, ShieldCheck, Zap, FileText,
  CheckCircle, AlertCircle, Cpu, FileSearch
} from 'lucide-react';

function AIDashboardCard() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0=scanning, 1=complete
  const [dots, setDots] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 94) {
          clearInterval(timer);
          setPhase(1);
          return 94;
        }
        return p + 2;
      });
    }, 60);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (phase === 0) {
      const d = setInterval(() => setDots(x => (x + 1) % 4), 450);
      return () => clearInterval(d);
    }
  }, [phase]);

  const docs = [
    { label: 'Income Certificate', done: progress > 30 },
    { label: 'Residence Certificate', done: progress > 55 },
    { label: 'Education Document', done: progress > 75 },
  ];

  return (
    <div
      role="img"
      aria-label="AI document analysis dashboard mockup showing document scanning and scheme matching"
      style={{
        background: 'white',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        boxShadow: '0 24px 64px -12px rgba(30,58,138,0.22), 0 4px 16px rgba(30,58,138,0.08)',
        border: '1px solid #e2e8f0',
        maxWidth: '380px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: '4px',
        background: 'linear-gradient(90deg, #1d4ed8, #4338ca, #6366f1)',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #1d4ed8, #4338ca)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Cpu size={16} color="white" />
          </div>
          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>SchemeAI</span>
        </div>
        <span style={{
          fontSize: '0.7rem', fontWeight: 600, padding: '0.25rem 0.625rem',
          borderRadius: '999px', background: phase === 0 ? '#eff6ff' : '#f0fdf4',
          color: phase === 0 ? '#2563eb' : '#16a34a',
          display: 'flex', alignItems: 'center', gap: '0.3rem',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: phase === 0 ? '#3b82f6' : '#22c55e',
            display: 'inline-block',
            animation: phase === 0 ? 'pulse-slow 1.5s ease-in-out infinite' : 'none',
          }} />
          {phase === 0 ? 'Analyzing' : 'Complete'}
        </span>
      </div>

      {/* Document analysis section */}
      <div style={{
        background: '#f8fafc',
        borderRadius: '0.875rem',
        padding: '1rem',
        marginBottom: '1rem',
        border: '1px solid #f1f5f9',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {phase === 0 && (
          <div className="scanning-line" style={{ top: `${(progress / 94) * 100}%` }} />
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <FileSearch size={14} color="#475569" />
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>Document Analysis</span>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Processing</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1d4ed8' }}>{progress}%</span>
          </div>
          <div style={{ background: '#e2e8f0', borderRadius: '999px', height: '7px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #1d4ed8, #4f46e5)',
              borderRadius: '999px',
              transition: 'width 0.15s ease-out',
            }} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.75rem' }}>
          {docs.map((doc) => (
            <div key={doc.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {doc.done ? (
                <CheckCircle size={14} color="#16a34a" />
              ) : (
                <div style={{
                  width: '14px', height: '14px', borderRadius: '50%',
                  border: '2px solid #cbd5e1',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#94a3b8' }} />
                </div>
              )}
              <span style={{
                fontSize: '0.78rem',
                color: doc.done ? '#334155' : '#94a3b8',
                fontWeight: doc.done ? 500 : 400,
                transition: 'all 0.3s ease',
              }}>
                {doc.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Matching section */}
      <div style={{
        background: phase === 1
          ? 'linear-gradient(135deg, #f0fdf4, #dcfce7)'
          : '#f8fafc',
        borderRadius: '0.875rem',
        padding: '1rem',
        border: `1px solid ${phase === 1 ? '#bbf7d0' : '#f1f5f9'}`,
        transition: 'all 0.5s ease',
      }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>
          AI Scheme Matching
        </div>
        <div style={{
          fontSize: '1.4rem', fontWeight: 800,
          color: phase === 1 ? '#15803d' : '#1d4ed8',
          transition: 'color 0.5s ease',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          {phase === 1 ? (
            <>
              <CheckCircle size={20} color="#16a34a" />
              12 Potential Matches
            </>
          ) : (
            <>
              <span>Matching</span>
              <span style={{ display: 'flex', gap: '2px', alignItems: 'flex-end' }}>
                {[0,1,2].map(i => (
                  <span key={i} style={{
                    display: 'inline-block', width: '5px', height: '5px',
                    borderRadius: '50%', background: '#3b82f6',
                    animation: `dot-bounce 1.4s infinite ${i * 200}ms`,
                  }} />
                ))}
              </span>
            </>
          )}
        </div>
        <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0.25rem 0 0.875rem' }}>
          {phase === 1 ? 'Based on your profile and documents' : 'Comparing with scheme criteria...'}
        </p>
        <button
          disabled={phase === 0}
          style={{
            width: '100%',
            padding: '0.625rem',
            borderRadius: '0.625rem',
            border: 'none',
            background: phase === 1
              ? 'linear-gradient(135deg, #1d4ed8, #4338ca)'
              : '#e2e8f0',
            color: phase === 1 ? 'white' : '#94a3b8',
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: phase === 1 ? 'pointer' : 'not-allowed',
            transition: 'all 0.4s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
          }}
        >
          View Recommendations
          {phase === 1 && <ArrowRight size={13} />}
        </button>
      </div>

      {/* Trust indicators */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginTop: '1rem',
        fontSize: '0.7rem', color: '#94a3b8', fontWeight: 500,
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <ShieldCheck size={11} color="#22c55e" /> Secure
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <Zap size={11} color="#3b82f6" /> AI-Assisted
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <FileText size={11} color="#6366f1" /> Explainable
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      aria-label="Hero section — SchemeAI introduction"
      className="hero-bg"
      style={{ paddingTop: '96px', paddingBottom: '80px', overflow: 'hidden' }}
    >
      {/* Soft background blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '560px', height: '560px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-40px', left: '-60px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }} />
      </div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
      }}>
        {/* Left column — text */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '999px',
            padding: '0.35rem 0.875rem',
            marginBottom: '1.5rem',
          }}>
            <Zap size={13} color="#2563eb" />
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.07em',
              color: '#1d4ed8',
              textTransform: 'uppercase',
            }}>
              AI-Powered Government Scheme Assistant
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: '#0f172a',
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
          }}>
            Find Government Schemes{' '}
            <br className="hidden sm:block" />
            You May Be{' '}
            <span style={{
              position: 'relative',
              display: 'inline-block',
            }}>
              <span className="gradient-text">Eligible For</span>
              <span aria-hidden="true" style={{
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
                borderRadius: '2px',
                opacity: 0.6,
              }} />
            </span>
          </h1>

          {/* Supporting text */}
          <p style={{
            fontSize: '1.0625rem',
            color: '#475569',
            lineHeight: 1.75,
            marginBottom: '2rem',
            maxWidth: '520px',
          }}>
            Upload your documents, tell us about your needs, and let AI analyze
            potentially relevant government schemes in one place.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center', marginBottom: '1.75rem' }}>
            <a
              href="#eligibility"
              id="hero-check-eligibility"
              className="btn-primary"
              onClick={(e) => handleScrollTo(e, '#how-it-works')}
            >
              Check My Eligibility
              <ArrowRight size={16} />
            </a>
            <a
              href="#schemes"
              id="hero-explore-schemes"
              className="btn-secondary"
              onClick={(e) => handleScrollTo(e, '#schemes')}
            >
              Explore Schemes
            </a>
          </div>

          {/* Trust row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
            {[
              { icon: <Zap size={14} color="#2563eb" />, label: 'AI-assisted' },
              { icon: <ShieldCheck size={14} color="#16a34a" />, label: 'Secure' },
              { icon: <FileText size={14} color="#6366f1" />, label: 'Explainable' },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '0.375rem',
                fontSize: '0.85rem', color: '#64748b', fontWeight: 500,
              }}>
                {icon}
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right column — dashboard */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'all 0.85s cubic-bezier(0.4, 0, 0.2, 1) 0.12s',
        }}>
          <AIDashboardCard />
        </div>
      </div>
    </section>
  );
}
