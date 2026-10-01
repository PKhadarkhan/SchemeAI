import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const languages = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
];

const sampleTexts = {
  en: {
    heading: 'Check your eligibility for PM Housing Scheme',
    desc: 'This scheme provides financial assistance for construction or enhancement of house to eligible beneficiaries.',
    cta: 'Check Eligibility',
  },
  te: {
    heading: 'PM గృహ పథకానికి మీ అర్హతను తనిఖీ చేయండి',
    desc: 'ఈ పథకం అర్హులైన లబ్ధిదారులకు ఇంటి నిర్మాణానికి లేదా మెరుగుదలకు ఆర్థిక సహాయం అందిస్తుంది.',
    cta: 'అర్హత తనిఖీ చేయండి',
  },
  hi: {
    heading: 'PM आवास योजना के लिए अपनी पात्रता जांचें',
    desc: 'यह योजना पात्र लाभार्थियों को घर के निर्माण या सुधार के लिए वित्तीय सहायता प्रदान करती है।',
    cta: 'पात्रता जाँचें',
  },
};

export default function Languages() {
  const [ref, inView] = useInView();
  const [selected, setSelected] = useState('en');
  const [dropOpen, setDropOpen] = useState(false);

  const currentLang = languages.find(l => l.code === selected);
  const text = sampleTexts[selected];

  return (
    <section
      ref={ref}
      aria-labelledby="lang-heading"
      className={`section-fade ${inView ? 'visible' : ''}`}
      style={{ padding: '96px 1.5rem', background: 'white' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left — text */}
          <div>
            <p style={{
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#2563eb', marginBottom: '0.875rem',
            }}>
              Multilingual Support
            </p>
            <h2 id="lang-heading" style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em',
              marginBottom: '1.25rem', lineHeight: 1.15,
            }}>
              Government Information,{' '}
              <span className="gradient-accent">Made Easier to Understand</span>
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#64748b', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Help users understand scheme information in a language they are comfortable with.
              SchemeAI aims to reduce language barriers in accessing government information.
            </p>

            {/* Language chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setSelected(lang.code)}
                  aria-pressed={selected === lang.code}
                  style={{
                    padding: '0.5rem 1.125rem',
                    borderRadius: '999px',
                    border: `1.5px solid ${selected === lang.code ? '#2563eb' : '#e2e8f0'}`,
                    background: selected === lang.code ? '#eff6ff' : 'white',
                    color: selected === lang.code ? '#1d4ed8' : '#475569',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {lang.native}
                </button>
              ))}
            </div>
          </div>

          {/* Right — language selector mockup */}
          <div>
            <div style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              boxShadow: '0 8px 32px -8px rgba(30,58,138,0.12)',
            }}>
              {/* Top bar */}
              <div style={{
                padding: '0.875rem 1.25rem',
                background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Globe size={14} color="#64748b" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>
                    Language Preference
                  </span>
                </div>

                {/* Language selector */}
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setDropOpen(!dropOpen)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.375rem 0.75rem',
                      border: '1px solid #bfdbfe',
                      borderRadius: '0.5rem',
                      background: 'white',
                      color: '#1d4ed8',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {currentLang.native}
                    <ChevronDown size={12} style={{ transform: dropOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>
                  {dropOpen && (
                    <div style={{
                      position: 'absolute', right: 0, top: '110%',
                      background: 'white', border: '1px solid #e2e8f0',
                      borderRadius: '0.625rem', boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      overflow: 'hidden', zIndex: 10, minWidth: '130px',
                    }}>
                      {languages.map(lang => (
                        <button
                          key={lang.code}
                          onClick={() => { setSelected(lang.code); setDropOpen(false); }}
                          style={{
                            display: 'block', width: '100%', textAlign: 'left',
                            padding: '0.625rem 1rem',
                            background: selected === lang.code ? '#eff6ff' : 'white',
                            color: selected === lang.code ? '#1d4ed8' : '#334155',
                            fontSize: '0.8375rem', fontWeight: selected === lang.code ? 600 : 400,
                            border: 'none', cursor: 'pointer',
                            transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => { if (lang.code !== selected) e.currentTarget.style.background = '#f8fafc'; }}
                          onMouseLeave={e => { if (lang.code !== selected) e.currentTarget.style.background = 'white'; }}
                        >
                          {lang.native} — {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', minHeight: '160px' }}>
                <div style={{
                  fontSize: '0.75rem', fontWeight: 700, color: '#2563eb',
                  textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem',
                }}>
                  Housing Scheme (Demo)
                </div>
                <h3 style={{
                  fontSize: '1rem', fontWeight: 700, color: '#0f172a',
                  marginBottom: '0.75rem', lineHeight: 1.4,
                  transition: 'all 0.3s ease',
                }}>
                  {text.heading}
                </h3>
                <p style={{
                  fontSize: '0.8375rem', color: '#64748b', lineHeight: 1.7,
                  marginBottom: '1.25rem',
                  transition: 'all 0.3s ease',
                }}>
                  {text.desc}
                </p>
                <button style={{
                  padding: '0.5rem 1.125rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  background: 'linear-gradient(135deg, #1d4ed8, #4338ca)',
                  color: 'white',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}>
                  {text.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
