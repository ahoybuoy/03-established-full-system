import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, description, className, id, ...props }, ref) => {
    const inputId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={clsx(styles.wrapper, className)}>
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            type="radio"
            id={inputId}
            className={styles.input}
            {...props}
          />
          <span className={styles.radiomark} />
        </div>
        {(label || description) && (
          <div className={styles.labelWrapper}>
            {label && (
              <label htmlFor={inputId} className={styles.label}>
                {label}
              </label>
            )}
            {description && (
              <span className={styles.description}>{description}</span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
