import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const sampleSchemes = [
  {
    badge: 'Potential Match',
    badgeColor: '#2563eb',
    badgeBg: '#eff6ff',
    title: 'Education Support Scheme',
    category: 'Education',
    matchItems: [
      { label: 'Age criteria', ok: true },
      { label: 'Education criteria', ok: true },
      { label: 'Location criteria', ok: true },
    ],
    missing: ['Income certificate required'],
    score: 85,
  },
  {
    badge: 'Potential Match',
    badgeColor: '#16a34a',
    badgeBg: '#f0fdf4',
    title: 'Rural Livelihood Programme',
    category: 'Employment',
    matchItems: [
      { label: 'Occupation category', ok: true },
      { label: 'Location criteria', ok: true },
      { label: 'Income range', ok: true },
    ],
    missing: ['Residence certificate required'],
    score: 78,
  },
  {
    badge: 'Potential Match',
    badgeColor: '#7c3aed',
    badgeBg: '#faf5ff',
    title: 'Women Empowerment Initiative',
    category: 'Women & Child',
    matchItems: [
      { label: 'Gender criteria', ok: true },
      { label: 'Age criteria', ok: true },
    ],
    missing: ['Identity proof required', 'Bank account details'],
    score: 72,
  },
];

function MatchBar({ score }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
        <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Match Indicators
        </span>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1d4ed8' }}>{score}%</span>
      </div>
      <div style={{ background: '#e2e8f0', borderRadius: '999px', height: '5px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${score}%`,
          background: score > 80 ? 'linear-gradient(90deg, #16a34a, #22c55e)' :
            score > 65 ? 'linear-gradient(90deg, #2563eb, #6366f1)' :
              'linear-gradient(90deg, #d97706, #f59e0b)',
          borderRadius: '999px',
          transition: 'width 1s ease-out',
        }} />
      </div>
    </div>
  );
}

export default function Recommendations() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      aria-labelledby="recs-heading"
      className={`section-fade ${inView ? 'visible' : ''}`}
      style={{ padding: '96px 1.5rem', background: '#f8fafc' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', marginBottom: '0.875rem',
            background: '#fef3c7', border: '1px solid #fde68a',
            borderRadius: '999px', padding: '0.25rem 0.875rem',
            fontSize: '0.75rem', fontWeight: 600, color: '#92400e',
          }}>
            Demo Data — Sample illustration only
          </div>
          <h2 id="recs-heading" style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em',
            marginBottom: '1rem',
          }}>
            Recommendations That Explain Themselves
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#64748b', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Each recommendation shows why a scheme was suggested and what information may still be needed.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '1.25rem',
        }}>
          {sampleSchemes.map((scheme, i) => (
            <div
              key={scheme.title}
              className={`scheme-card card-stagger section-fade ${inView ? 'visible' : ''}`}
            >
              {/* Badge + Category */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 700,
                  padding: '0.25rem 0.625rem',
                  borderRadius: '999px',
                  background: scheme.badgeBg,
                  color: scheme.badgeColor,
                }}>
                  {scheme.badge}
                </span>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 500,
                  color: '#94a3b8',
                }}>
                  {scheme.category}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1rem', fontWeight: 700, color: '#0f172a',
                marginBottom: '1rem',
              }}>
                {scheme.title}
              </h3>

              {/* Match bar */}
              <MatchBar score={scheme.score} />

              {/* Match items */}
              <div style={{ marginBottom: '0.875rem' }}>
                {scheme.matchItems.map(item => (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.3rem 0',
                    fontSize: '0.82rem', color: '#334155',
                  }}>
                    <CheckCircle size={14} color="#16a34a" />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Missing info */}
              {scheme.missing.length > 0 && (
                <div style={{
                  background: '#fffbeb',
                  border: '1px solid #fde68a',
                  borderRadius: '0.5rem',
                  padding: '0.625rem 0.875rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#92400e', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Information Still Required
                  </div>
                  {scheme.missing.map(m => (
                    <div key={m} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#78350f' }}>
                      <AlertCircle size={12} color="#d97706" />
                      {m}
                    </div>
                  ))}
                </div>
              )}

              <button style={{
                width: '100%', padding: '0.625rem',
                borderRadius: '0.625rem',
                border: '1.5px solid #bfdbfe',
                background: 'white',
                color: '#1d4ed8',
                fontSize: '0.8125rem', fontWeight: 600,
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#eff6ff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white'; }}
              >
                View Details <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
