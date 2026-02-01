import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Switch.module.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, size = 'md', className, id, ...props }, ref) => {
    const inputId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={clsx(styles.wrapper, className)}>
        <div className={clsx(styles.switchWrapper, styles[size])}>
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className={styles.input}
            role="switch"
            {...props}
          />
          <span className={styles.track}>
            <span className={styles.thumb} />
          </span>
        </div>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;
