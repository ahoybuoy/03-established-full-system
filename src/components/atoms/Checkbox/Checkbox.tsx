import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, className, id, ...props }, ref) => {
    const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={clsx(styles.wrapper, className)}>
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className={styles.input}
            aria-invalid={!!error}
            {...props}
          />
          <span className={styles.checkmark} />
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
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
