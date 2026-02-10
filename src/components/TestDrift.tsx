import React from 'react';

/**
 * This component uses hardcoded values instead of the design tokens
 * defined in src/styles/tokens.css (e.g., --color-primary, --spacing-md).
 */
export function TestDrift() {
  return (
    <div
      style={{
        backgroundColor: '#1e40af',
        color: '#f8fafc',
        padding: '24px',
        borderRadius: '8px',
        border: '1px solid #3b82f6',
      }}
    >
      <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>
        Feature Highlight
      </h2>
      <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.5' }}>
        This card should be using var(--color-primary) and var(--spacing-md)
        from our token system, but it uses hardcoded hex values instead.
      </p>
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <button
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '6px',
            border: 'none',
            fontSize: '14px',
          }}
        >
          Primary Action
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#2563eb',
            padding: '8px 16px',
            borderRadius: '6px',
            border: '1px solid #2563eb',
            fontSize: '14px',
          }}
        >
          Secondary
        </button>
      </div>
    </div>
  );
}
