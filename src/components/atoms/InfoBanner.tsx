import React from 'react';

interface InfoBannerProps {
  title: string;
  message: string;
  variant?: 'info' | 'warning' | 'success';
}

export function InfoBanner({ title, message, variant = 'info' }: InfoBannerProps) {
  const colors = {
    info: { bg: '#eff6ff', border: '#3b82f6', text: '#1e40af' },
    warning: { bg: '#fffbeb', border: '#f59e0b', text: '#92400e' },
    success: { bg: '#f0fdf4', border: '#22c55e', text: '#166534' },
  };
  const c = colors[variant];

  return (
    <div
      style={{
        backgroundColor: c.bg,
        borderLeft: `4px solid ${c.border}`,
        borderRadius: '8px',
        padding: '16px 20px',
        marginBottom: '24px',
      }}
    >
      <h4
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: c.text,
          marginBottom: '4px',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h4>
      <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>{message}</p>
    </div>
  );
}
