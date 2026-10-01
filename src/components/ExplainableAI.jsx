import { CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reasons = [
  { text: 'Your location matches the scheme\'s target geography', ok: true },
  { text: 'Your income appears within the documented eligibility range', ok: true },
  { text: 'Your occupation matches the target beneficiary group', ok: true },
];

const missingInfo = [
  'Valid income certificate (within last 6 months)',
  'Proof of residence from local authority',
];

export default function ExplainableAI() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="xai-heading"
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
              Explainable AI
            </p>
            <h2 id="xai-heading" style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em',
              marginBottom: '1.25rem',
              lineHeight: 1.15,
            }}>
              Not Just a Result.{' '}
              <span className="gradient-text">An Explanation.</span>
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#64748b', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              SchemeAI doesn't just match you to schemes — it tells you <em>why</em>.
              Every recommendation comes with a transparent explanation of what criteria
              appear to be met, and what additional information may be needed.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                'No black-box decisions',
                'Criteria clearly stated',
                'Missing information identified',
                'Actionable next steps suggested',
              ].map(item => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: '0.625rem',
                  fontSize: '0.9rem', color: '#334155', fontWeight: 500,
                }}>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: '#f0fdf4', border: '1.5px solid #bbf7d0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CheckCircle size={12} color="#16a34a" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — explanation card */}
          <div>
            <div style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              boxShadow: '0 8px 32px -8px rgba(30,58,138,0.12)',
            }}>
              {/* Card header */}
              <div style={{
                padding: '1rem 1.5rem',
                background: 'linear-gradient(135deg, #eff6ff, #eef2ff)',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex', alignItems: 'center', gap: '0.625rem',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, #1d4ed8, #4338ca)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Lightbulb size={16} color="white" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>
                    Why this scheme was recommended
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>AI explanation — Demo Data</div>
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                {/* Matching criteria */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <p style={{
                    fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.06em', color: '#94a3b8', marginBottom: '0.75rem',
                  }}>
                    Criteria that appear to match
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {reasons.map(({ text }) => (
                      <div key={text} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
                        padding: '0.625rem 0.875rem',
                        background: '#f0fdf4',
                        border: '1px solid #dcfce7',
                        borderRadius: '0.625rem',
                        fontSize: '0.8375rem',
                        color: '#14532d',
                        lineHeight: 1.5,
                      }}>
                        <CheckCircle size={14} color="#16a34a" style={{ flexShrink: 0, marginTop: '1px' }} />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Missing info */}
                <div>
                  <p style={{
                    fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.06em', color: '#94a3b8', marginBottom: '0.75rem',
                  }}>
                    Information still required
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {missingInfo.map(item => (
                      <div key={item} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
                        padding: '0.625rem 0.875rem',
                        background: '#fffbeb',
                        border: '1px solid #fde68a',
                        borderRadius: '0.625rem',
                        fontSize: '0.8375rem',
                        color: '#78350f',
                        lineHeight: 1.5,
                      }}>
                        <AlertCircle size={14} color="#d97706" style={{ flexShrink: 0, marginTop: '1px' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
