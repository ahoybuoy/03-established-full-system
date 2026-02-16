import React from 'react';
import './TokenMixCard.css';

interface TokenMixCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function TokenMixCard({ title, subtitle, children }: TokenMixCardProps) {
  return (
    <div className="token-mix-card">
      <div className="token-mix-card__header">
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '13px', color: '#64748b' }}>{subtitle}</p>
      </div>
      <div className="token-mix-card__body" style={{ padding: '20px', borderTop: '1px solid #e2e8f0' }}>
        {children}
      </div>
      <div className="token-mix-card__footer" style={{
        padding: '12px 20px',
        backgroundColor: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        borderRadius: '0 0 12px 12px',
      }}>
        <button style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#6366f1',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px 0',
        }}>
          View Details →
        </button>
      </div>
    </div>
  );
}
