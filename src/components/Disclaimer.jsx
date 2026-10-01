import { AlertTriangle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Disclaimer() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      aria-label="Important disclaimer"
      className={`section-fade ${inView ? 'visible' : ''}`}
      style={{ padding: '32px 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start',
          padding: '1.25rem 1.5rem',
          background: 'white',
          border: '1px solid #e2e8f0',
          borderLeft: '4px solid #3b82f6',
          borderRadius: '0.75rem',
        }}>
          <AlertTriangle size={18} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.875rem' }}>Important: </span>
            <span style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.7 }}>
              SchemeAI provides AI-assisted preliminary information based on the information supplied by the user.
              It does <strong>not</strong> provide official government eligibility decisions, approvals, or guarantees.
              Users should verify current eligibility requirements and application procedures with the concerned
              government authority before making any decisions.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
