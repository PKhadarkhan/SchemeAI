import { ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const categories = [
  {
    emoji: '🎓',
    name: 'Education',
    desc: 'Scholarships, fellowships, and educational support programmes.',
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    emoji: '🌾',
    name: 'Agriculture',
    desc: 'Farmer welfare, crop insurance, and rural development schemes.',
    color: '#16a34a',
    bg: '#f0fdf4',
  },
  {
    emoji: '💼',
    name: 'Employment',
    desc: 'Skill development, job creation, and livelihood support programmes.',
    color: '#d97706',
    bg: '#fffbeb',
  },
  {
    emoji: '🏠',
    name: 'Housing',
    desc: 'Affordable housing, home loans, and urban development schemes.',
    color: '#0ea5e9',
    bg: '#f0f9ff',
  },
  {
    emoji: '🏥',
    name: 'Healthcare',
    desc: 'Health insurance, medical assistance, and wellness programmes.',
    color: '#dc2626',
    bg: '#fef2f2',
  },
  {
    emoji: '👩',
    name: 'Women & Child',
    desc: 'Welfare programmes for women, mothers, and children.',
    color: '#9333ea',
    bg: '#faf5ff',
  },
  {
    emoji: '👴',
    name: 'Social Security',
    desc: 'Pension, disability support, and senior citizen benefits.',
    color: '#475569',
    bg: '#f8fafc',
  },
  {
    emoji: '🏢',
    name: 'Entrepreneurship',
    desc: 'MSME support, startup grants, and business development programmes.',
    color: '#4338ca',
    bg: '#eef2ff',
  },
];

export default function SchemeCategories() {
  const [ref, inView] = useInView();

  return (
    <section
      id="schemes"
      ref={ref}
      aria-labelledby="categories-heading"
      className={`section-fade ${inView ? 'visible' : ''}`}
      style={{ padding: '96px 1.5rem', background: 'white' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#2563eb', marginBottom: '0.75rem',
          }}>
            Browse by Category
          </p>
          <h2 id="categories-heading" style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em',
          }}>
            Explore Scheme Categories
          </h2>
        </div>

        {/* Categories grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
          gap: '1rem',
        }}>
          {categories.map((cat) => (
            <button
              key={cat.name}
              aria-label={`${cat.name} schemes — ${cat.desc}`}
              className={`category-card card-stagger section-fade ${inView ? 'visible' : ''}`}
              style={{ textAlign: 'left', cursor: 'pointer', display: 'block', width: '100%' }}
            >
              {/* Emoji icon */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px', height: '48px',
                borderRadius: '0.875rem',
                background: cat.bg,
                fontSize: '1.5rem',
                marginBottom: '1rem',
                border: `1px solid ${cat.color}20`,
              }}>
                {cat.emoji}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{
                    fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a',
                    marginBottom: '0.4rem',
                  }}>
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.6 }}>
                    {cat.desc}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  color={cat.color}
                  style={{ flexShrink: 0, marginLeft: '0.5rem', marginTop: '2px' }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
