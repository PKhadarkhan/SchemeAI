import { FileSearch } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Home', href: '#home' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Schemes', href: '#schemes' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Use', href: '#terms' },
    { label: 'Contact', href: '#contact' },
    { label: 'About', href: '#about' },
  ],
};

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer
      role="contentinfo"
      style={{
        background: '#0f172a',
        color: '#94a3b8',
        padding: '60px 1.5rem 32px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {/* Brand col */}
          <div style={{ gridColumn: 'span 2', minWidth: '200px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #1d4ed8, #4338ca)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FileSearch size={17} color="white" />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.125rem', color: 'white', letterSpacing: '-0.02em' }}>
                Scheme<span style={{ color: '#60a5fa' }}>AI</span>
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, maxWidth: '280px', color: '#94a3b8' }}>
              AI-assisted government scheme discovery. Helping citizens understand their potential eligibility intelligently.
            </p>
            <div style={{
              marginTop: '1.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 0.75rem',
              border: '1px solid rgba(59,130,246,0.3)',
              borderRadius: '999px',
              fontSize: '0.75rem',
              color: '#60a5fa',
              fontWeight: 600,
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              B.Tech CSE (AI/ML) Final Year Project
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 style={{
                fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: '#cbd5e1', marginBottom: '1rem',
              }}>
                {group}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.target.style.color = '#e2e8f0'}
                      onMouseLeave={e => e.target.style.color = '#94a3b8'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
            © 2026 SchemeAI. Final scheme eligibility is determined by the concerned government authority.
          </p>
          <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
            Built with React · Vite · Tailwind CSS · AI/ML
          </p>
        </div>
      </div>
    </footer>
  );
}
