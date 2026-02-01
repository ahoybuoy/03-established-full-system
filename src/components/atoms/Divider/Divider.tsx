import React from 'react';
import clsx from 'clsx';
import styles from './Divider.module.css';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  spacing = 'md',
  className,
}) => {
  return (
    <hr
      className={clsx(
        styles.divider,
        styles[orientation],
        styles[variant],
        styles[`spacing-${spacing}`],
        className
      )}
    />
  );
};

export default Divider;
