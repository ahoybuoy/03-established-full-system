import React from 'react';

interface ChipProps {
  label: string;
  color?: 'blue' | 'green' | 'red' | 'gray';
  onRemove?: () => void;
}

export const Chip: React.FC<ChipProps> = ({ label, color = 'blue', onRemove }) => {
  const colorMap = {
    blue: { bg: '#eff6ff', text: '#2563eb', border: '#bfdbfe' },
    green: { bg: '#f0fdf4', text: '#16a34a', border: '#bbf7d0' },
    red: { bg: '#fef2f2', text: '#dc2626', border: '#fecaca' },
    gray: { bg: '#f9fafb', text: '#4b5563', border: '#e5e7eb' },
  };

  const c = colorMap[color];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        borderRadius: '999px',
        backgroundColor: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
        fontSize: '13px',
        fontWeight: 500,
      }}
    >
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          style={{ background: 'none', border: 'none', color: c.text, cursor: 'pointer', padding: 0, fontSize: '14px' }}
        >
          ×
        </button>
      )}
    </span>
  );
};

export default Chip;
