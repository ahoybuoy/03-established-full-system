import React from 'react';
import clsx from 'clsx';
import styles from './Badge.module.css';

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  dot = false,
  className,
  children,
}) => {
  return (
    <span
      className={clsx(styles.badge, styles[variant], styles[size], className)}
      style={{ borderColor: '#2563eb', backgroundColor: '#eff6ff', color: '#1e3a8a' }}
    >
      {dot && <span className={styles.dot} />}
      {children}
    </span>
  );
};

export default Badge;
