import { Lock, FolderLock, Database, Users, FileCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const principles = [
  {
    icon: <Lock size={22} color="#2563eb" />,
    iconBg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    title: 'Secure Authentication',
    desc: 'User accounts are protected with secure login mechanisms to prevent unauthorised access.',
  },
  {
    icon: <FolderLock size={22} color="#4338ca" />,
    iconBg: 'linear-gradient(135deg, #eef2ff, #e0e7ff)',
    title: 'Protected Document Access',
    desc: 'Uploaded documents are accessible only to the authenticated user who submitted them.',
  },
  {
    icon: <Database size={22} color="#0ea5e9" />,
    iconBg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    title: 'Minimal Data Collection',
    desc: 'Only information relevant to scheme analysis is collected. No unnecessary personal data is stored.',
  },
  {
    icon: <Users size={22} color="#7c3aed" />,
    iconBg: 'linear-gradient(135deg, #faf5ff, #ede9fe)',
    title: 'Role-Based Access',
    desc: 'Different user roles have clearly defined permissions to ensure appropriate data access boundaries.',
  },
  {
    icon: <FileCheck size={22} color="#16a34a" />,
    iconBg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    title: 'Secure File Handling',
    desc: 'Documents are validated on upload. Only supported file types are accepted for processing.',
  },
];

export default function Security() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      aria-labelledby="security-heading"
      className={`section-fade ${inView ? 'visible' : ''}`}
      style={{ padding: '96px 1.5rem', background: '#f8fafc' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left — heading */}
          <div>
            <p style={{
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#2563eb', marginBottom: '0.875rem',
            }}>
              Privacy & Security
            </p>
            <h2 id="security-heading" style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em',
              marginBottom: '1.25rem', lineHeight: 1.15,
            }}>
              Your Information Matters
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#64748b', lineHeight: 1.75 }}>
              SchemeAI is designed with responsible data handling in mind.
              Your documents and personal information are used solely for the
              purpose of scheme analysis.
            </p>
          </div>

          {/* Right — principle cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {principles.map((p, i) => (
              <div
                key={p.title}
                className={`card-stagger section-fade ${inView ? 'visible' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.875rem',
                  padding: '1rem 1.25rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = '#bfdbfe';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,58,138,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: '44px', height: '44px',
                  borderRadius: '0.75rem',
                  background: p.iconBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.7)',
                }}>
                  {p.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a', marginBottom: '0.25rem' }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.6 }}>
                    {p.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
