import React from 'react';
import clsx from 'clsx';
import styles from './FormField.module.css';

export interface FormFieldProps {
  label: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  error,
  hint,
  required = false,
  className,
  children,
}) => {
  return (
    <div className={clsx(styles.field, error && styles.hasError, className)}>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      {children}
      {error && (
        <span className={styles.error} role="alert">
          {error}
        </span>
      )}
      {hint && !error && <span className={styles.hint}>{hint}</span>}
    </div>
  );
};

export default FormField;
