import React from 'react';

// Stats card that bypasses the design token system
export function StatsCard({ label, value, trend }: {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
}) {
  const trendColor = trend === 'up' ? '#22c55e' : trend === 'down' ? '#ef4444' : '#6b7280';

  return (
    <div style={{
      padding: '20px 24px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e5e7eb',
      minWidth: '200px',
      transition: 'all 200ms ease',
    }}>
      <p style={{
        fontSize: '13px',
        fontWeight: 500,
        color: '#6b7280',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
        marginBottom: '8px',
      }}>
        {label}
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '8px',
      }}>
        <span style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#111827',
          lineHeight: 1,
        }}>
          {value}
        </span>

        <span style={{
          fontSize: '14px',
          fontWeight: 600,
          color: trendColor,
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
        }}>
          {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '—'}
        </span>
      </div>

      <div style={{
        marginTop: '16px',
        height: '4px',
        backgroundColor: '#f3f4f6',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: '65%',
          height: '100%',
          backgroundColor: '#3B82F6',
          borderRadius: '2px',
          transition: 'width 500ms ease',
        }} />
      </div>
    </div>
  );
}
// Updated: 2026-02-15T23:30:41Z
// Rescan: 2026-02-15T23:40:12Z
