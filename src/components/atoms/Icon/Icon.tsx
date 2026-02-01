import React from 'react';
import clsx from 'clsx';
import styles from './Icon.module.css';

export interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'inherit',
  className,
}) => {
  return (
    <span
      className={clsx(
        styles.icon,
        styles[size],
        styles[`color-${color}`],
        className
      )}
      aria-hidden="true"
    >
      <svg className={styles.svg}>
        <use href={`/icons.svg#${name}`} />
      </svg>
    </span>
  );
};

export default Icon;
