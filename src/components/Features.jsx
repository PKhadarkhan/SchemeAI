import { Eye, AlignLeft, MessageSquare, BarChart3, Sparkles, Lightbulb } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: <Eye size={24} color="#2563eb" />,
    iconBg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    title: 'Computer Vision',
    desc: 'Detect and classify uploaded document types automatically using object detection models for accurate document identification.',
  },
  {
    icon: <AlignLeft size={24} color="#4338ca" />,
    iconBg: 'linear-gradient(135deg, #eef2ff, #e0e7ff)',
    title: 'OCR',
    desc: 'Extract useful information from document images using optical character recognition optimised for multilingual government documents.',
  },
  {
    icon: <MessageSquare size={24} color="#6366f1" />,
    iconBg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    title: 'NLP',
    desc: 'Convert extracted text into structured information using natural language processing to identify key eligibility fields.',
  },
  {
    icon: <BarChart3 size={24} color="#1d4ed8" />,
    iconBg: 'linear-gradient(135deg, #eff6ff, #bfdbfe)',
    title: 'Eligibility Analysis',
    desc: 'Compare user information with documented scheme criteria using structured matching to surface potentially relevant schemes.',
  },
  {
    icon: <Sparkles size={24} color="#7c3aed" />,
    iconBg: 'linear-gradient(135deg, #faf5ff, #ede9fe)',
    title: 'Smart Recommendations',
    desc: 'Identify potentially relevant schemes based on the user\'s profile and documents using collaborative and content-based methods.',
  },
  {
    icon: <Lightbulb size={24} color="#0ea5e9" />,
    iconBg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    title: 'Explainable AI',
    desc: 'Show users why a particular scheme was recommended and what information may still be required for a complete assessment.',
  },
];

export default function Features() {
  const [ref, inView] = useInView();

  return (
    <section
      id="features"
      ref={ref}
      aria-labelledby="features-heading"
      className={`section-fade ${inView ? 'visible' : ''}`}
      style={{ padding: '96px 1.5rem', background: 'white' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#2563eb', marginBottom: '0.75rem',
          }}>
            Technology Stack
          </p>
          <h2 id="features-heading" style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em',
            marginBottom: '1rem',
          }}>
            Powered by Multiple Layers of AI
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#64748b', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Six integrated AI capabilities work together to provide personalised, explainable scheme recommendations.
          </p>
        </div>

        {/* Feature grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '1.25rem',
        }}>
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`feature-card card-stagger section-fade ${inView ? 'visible' : ''}`}
            >
              {/* Icon */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px', height: '52px',
                borderRadius: '0.875rem',
                background: feat.iconBg,
                marginBottom: '1.125rem',
                border: '1px solid rgba(255,255,255,0.8)',
              }}>
                {feat.icon}
              </div>

              <h3 style={{
                fontSize: '1rem', fontWeight: 700,
                color: '#0f172a', marginBottom: '0.5rem',
              }}>
                {feat.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7 }}>
                {feat.desc}
              </p>

              {/* Decorative accent */}
              <div style={{
                marginTop: '1.25rem',
                height: '3px',
                width: '32px',
                background: feat.iconBg,
                borderRadius: '2px',
                border: '1px solid rgba(255,255,255,0.5)',
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
