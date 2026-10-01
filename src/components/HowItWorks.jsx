import { UserCircle, FileUp, Cpu, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    num: '01',
    icon: <UserCircle size={28} color="#1d4ed8" />,
    title: 'Create Your Profile',
    desc: 'Provide basic information such as age, location, occupation, income and other relevant details to help us understand your situation.',
  },
  {
    num: '02',
    icon: <FileUp size={28} color="#4338ca" />,
    title: 'Upload Documents',
    desc: 'Upload supporting documents such as income, residence, education or other certificates securely to the platform.',
  },
  {
    num: '03',
    icon: <Cpu size={28} color="#2563eb" />,
    title: 'AI Analyses Your Information',
    desc: 'Computer vision, OCR and NLP extract relevant information from your documents and structure it for comparison.',
  },
  {
    num: '04',
    icon: <Sparkles size={28} color="#4f46e5" />,
    title: 'Discover Potential Matches',
    desc: 'The recommendation engine compares your information with scheme criteria and explains the results in plain language.',
  },
];

function ConnectorLine() {
  return (
    <div
      aria-hidden="true"
      className="hidden lg:flex items-center"
      style={{ flex: '0 0 48px', justifyContent: 'center' }}
    >
      <div style={{
        width: '100%', height: '2px',
        background: 'linear-gradient(90deg, #bfdbfe, #a5b4fc)',
        borderRadius: '1px',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', right: '-4px', top: '50%',
          transform: 'translateY(-50%)',
          width: '8px', height: '8px', borderRadius: '50%',
          background: '#6366f1',
        }} />
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [ref, inView] = useInView();

  return (
    <section
      id="how-it-works"
      ref={ref}
      aria-labelledby="how-heading"
      className={`section-fade ${inView ? 'visible' : ''}`}
      style={{
        padding: '96px 1.5rem',
        background: '#f8fafc',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#2563eb', marginBottom: '0.75rem',
          }}>
            Simple Process
          </p>
          <h2 id="how-heading" style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em',
            marginBottom: '1rem',
          }}>
            How SchemeAI Works
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#64748b', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            From documents to personalised scheme insights in four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          alignItems: 'stretch',
          justifyContent: 'center',
        }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ display: 'flex', alignItems: 'center', flex: '1 1 220px', maxWidth: '280px' }}>
              <div
                className={`step-card card-stagger section-fade ${inView ? 'visible' : ''}`}
                style={{ flex: 1, height: '100%' }}
              >
                {/* Step number */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px', height: '40px',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, #eff6ff, #e0e7ff)',
                  marginBottom: '1.125rem',
                  border: '1px solid #bfdbfe',
                }}>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 800,
                    color: '#1d4ed8', letterSpacing: '0.02em',
                  }}>
                    {step.num}
                  </span>
                </div>

                {/* Icon */}
                <div style={{ marginBottom: '1rem' }}>{step.icon}</div>

                <h3 style={{
                  fontSize: '1rem', fontWeight: 700,
                  color: '#0f172a', marginBottom: '0.625rem',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>

              {/* Connector (not after last) */}
              {i < steps.length - 1 && <ConnectorLine />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
