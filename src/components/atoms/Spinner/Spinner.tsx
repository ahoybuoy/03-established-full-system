import React from 'react';
import clsx from 'clsx';
import styles from './Spinner.module.css';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className,
}) => {
  return (
    <span
      className={clsx(styles.spinner, styles[size], styles[color], className)}
      role="status"
      aria-label="Loading"
    >
      <span className={styles.visuallyHidden}>Loading...</span>
    </span>
  );
};

export default Spinner;
