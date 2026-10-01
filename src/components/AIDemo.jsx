import { useState, useEffect } from 'react';
import { Upload, CheckCircle, FileText, ArrowDown, Cpu, Search, AlignLeft, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const PIPELINE_STEPS = [
  { id: 'upload', icon: <Upload size={15} />, label: 'Document Detection', color: '#2563eb' },
  { id: 'ocr', icon: <AlignLeft size={15} />, label: 'OCR Processing', color: '#4338ca' },
  { id: 'extract', icon: <Search size={15} />, label: 'Information Extraction', color: '#6366f1' },
  { id: 'match', icon: <Sparkles size={15} />, label: 'Scheme Matching', color: '#7c3aed' },
];

const EXTRACTED_FIELDS = [
  { label: 'Document Type', value: 'Income Certificate' },
  { label: 'Annual Income', value: '₹1,80,000' },
  { label: 'Location', value: 'Andhra Pradesh' },
  { label: 'Status', value: 'Information Extracted ✓', isSuccess: true },
];

function ProcessingPipeline({ activeStep }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {PIPELINE_STEPS.map((step, i) => {
        const done = i < activeStep;
        const active = i === activeStep;
        return (
          <div key={step.id}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.625rem 0.875rem',
              borderRadius: '0.625rem',
              background: done ? '#f0fdf4' : active ? '#eff6ff' : '#f8fafc',
              border: `1px solid ${done ? '#bbf7d0' : active ? '#bfdbfe' : '#e2e8f0'}`,
              transition: 'all 0.4s ease',
            }}>
              <div style={{
                width: '28px', height: '28px',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: done ? '#16a34a' : active ? step.color : '#e2e8f0',
                color: done || active ? 'white' : '#94a3b8',
                flexShrink: 0,
                transition: 'background 0.4s ease',
              }}>
                {done ? <CheckCircle size={14} /> : step.icon}
              </div>
              <span style={{
                fontSize: '0.82rem',
                fontWeight: done || active ? 600 : 400,
                color: done ? '#15803d' : active ? step.color : '#94a3b8',
                transition: 'color 0.4s ease',
              }}>
                {step.label}
              </span>
              {active && (
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '3px', alignItems: 'center' }}>
                  {[0, 1, 2].map(j => (
                    <span key={j} style={{
                      width: '4px', height: '4px', borderRadius: '50%',
                      background: step.color, display: 'inline-block',
                      animation: `dot-bounce 1.4s infinite ${j * 200}ms`,
                    }} />
                  ))}
                </div>
              )}
            </div>
            {i < PIPELINE_STEPS.length - 1 && (
              <div style={{
                display: 'flex', justifyContent: 'center', padding: '2px 0',
              }}>
                <ArrowDown size={12} color={done ? '#16a34a' : '#e2e8f0'} style={{ transition: 'color 0.4s' }} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function AIDemo() {
  const [ref, inView] = useInView();
  const [activeStep, setActiveStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (inView && !isRunning && activeStep === -1) {
      startDemo();
    }
  }, [inView]);

  const startDemo = () => {
    setActiveStep(0);
    setIsRunning(true);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step > PIPELINE_STEPS.length) {
        clearInterval(interval);
        setIsRunning(false);
        return;
      }
      setActiveStep(step);
    }, 1400);
  };

  const resetDemo = () => {
    setActiveStep(-1);
    setIsRunning(false);
    setTimeout(startDemo, 200);
  };

  const complete = activeStep >= PIPELINE_STEPS.length;

  return (
    <section
      ref={ref}
      aria-labelledby="demo-heading"
      className={`section-fade ${inView ? 'visible' : ''}`}
      style={{ padding: '96px 1.5rem', background: '#f8fafc' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#2563eb', marginBottom: '0.75rem',
          }}>
            Interactive Demo
          </p>
          <h2 id="demo-heading" style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em',
            marginBottom: '1rem',
          }}>
            See How AI Understands Your Documents
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#64748b', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            A frontend demonstration of the document processing pipeline.
            All data shown is sample demo data only.
          </p>
          <div style={{
            display: 'inline-flex', marginTop: '0.75rem',
            background: '#fef3c7', border: '1px solid #fde68a',
            borderRadius: '999px', padding: '0.25rem 0.875rem',
            fontSize: '0.75rem', fontWeight: 600, color: '#92400e',
          }}>
            ⚠ Demo Data — Not real scheme information
          </div>
        </div>

        {/* Two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}>
          {/* Left — Document upload + pipeline */}
          <div>
            {/* File mockup */}
            <div style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '1rem',
              padding: '1.5rem',
              marginBottom: '1.25rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.875rem',
                padding: '0.875rem 1rem',
                background: '#f8fafc',
                border: '2px dashed #cbd5e1',
                borderRadius: '0.75rem',
                marginBottom: '1rem',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '0.625rem',
                  background: 'linear-gradient(135deg, #eff6ff, #e0e7ff)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <FileText size={20} color="#2563eb" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
                    Income_Certificate.jpg
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    fontSize: '0.75rem', fontWeight: 600,
                    color: activeStep === -1 ? '#64748b' : complete ? '#16a34a' : '#2563eb',
                    marginTop: '0.25rem',
                  }}>
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: activeStep === -1 ? '#94a3b8' : complete ? '#22c55e' : '#3b82f6',
                      display: 'inline-block',
                      animation: !complete && activeStep >= 0 ? 'pulse-slow 1.5s ease-in-out infinite' : 'none',
                    }} />
                    {activeStep === -1 ? 'Ready' : complete ? 'Analysis Complete ✓' : 'Analyzing...'}
                  </div>
                </div>
              </div>
              <ProcessingPipeline activeStep={Math.min(activeStep, PIPELINE_STEPS.length - 1)} />
            </div>

            <button
              onClick={resetDemo}
              disabled={isRunning}
              style={{
                width: '100%', padding: '0.75rem',
                borderRadius: '0.625rem',
                border: '1.5px solid #bfdbfe',
                background: isRunning ? '#f8fafc' : 'white',
                color: isRunning ? '#94a3b8' : '#1d4ed8',
                fontSize: '0.875rem', fontWeight: 600,
                cursor: isRunning ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                transition: 'all 0.2s',
              }}
            >
              <Cpu size={15} />
              {isRunning ? 'Processing...' : 'Run Demo Again'}
            </button>
          </div>

          {/* Right — Extracted data */}
          <div>
            <div style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}>
              <div style={{
                padding: '1rem 1.5rem',
                background: 'linear-gradient(135deg, #f0f7ff, #eef2ff)',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <Search size={16} color="#2563eb" />
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1e3a8a' }}>
                  Extracted Information
                </span>
              </div>

              <div style={{ padding: '1.5rem' }}>
                {EXTRACTED_FIELDS.map((field, i) => (
                  <div
                    key={field.label}
                    style={{
                      padding: '0.875rem 0',
                      borderBottom: i < EXTRACTED_FIELDS.length - 1 ? '1px solid #f1f5f9' : 'none',
                      opacity: complete ? 1 : i === 0 ? 0.4 : 0.2,
                      transition: `opacity 0.4s ease ${i * 0.15}s`,
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                      {field.label}
                    </div>
                    <div style={{
                      fontSize: '0.9375rem', fontWeight: 600,
                      color: field.isSuccess ? '#16a34a' : '#0f172a',
                    }}>
                      {field.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Match result */}
            <div style={{
              marginTop: '1.25rem',
              background: complete
                ? 'linear-gradient(135deg, #f0fdf4, #dcfce7)'
                : '#f8fafc',
              border: `1px solid ${complete ? '#bbf7d0' : '#e2e8f0'}`,
              borderRadius: '1rem',
              padding: '1.25rem 1.5rem',
              transition: 'all 0.5s ease',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: '2rem', fontWeight: 900,
                color: complete ? '#15803d' : '#94a3b8',
                transition: 'color 0.5s ease',
              }}>
                {complete ? '12' : '--'}
              </div>
              <div style={{
                fontSize: '0.875rem', fontWeight: 600,
                color: complete ? '#16a34a' : '#94a3b8',
                marginBottom: '0.25rem',
              }}>
                Potentially Relevant Schemes
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                Based on demo profile data
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
