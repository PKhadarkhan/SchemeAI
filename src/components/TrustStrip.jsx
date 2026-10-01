import { Brain, FileSearch, Star, Lightbulb } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const items = [
  { icon: <Brain size={18} color="#2563eb" />, label: 'AI-assisted analysis' },
  { icon: <FileSearch size={18} color="#4338ca" />, label: 'Document intelligence' },
  { icon: <Star size={18} color="#2563eb" />, label: 'Personalised recommendations' },
  { icon: <Lightbulb size={18} color="#4338ca" />, label: 'Explainable results' },
];

export default function TrustStrip() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      aria-label="Platform highlights"
      className={`section-fade ${inView ? 'visible' : ''}`}
      style={{
        background: 'white',
        borderTop: '1px solid #f1f5f9',
        borderBottom: '1px solid #f1f5f9',
        padding: '2.25rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#94a3b8',
          marginBottom: '1.5rem',
        }}>
          One platform. Multiple possibilities.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }}>
          {items.map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '0.75rem',
                padding: '0.625rem 1.125rem',
                fontSize: '0.875rem',
                color: '#334155',
                fontWeight: 500,
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#bfdbfe';
                e.currentTarget.style.background = '#eff6ff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {icon}
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
