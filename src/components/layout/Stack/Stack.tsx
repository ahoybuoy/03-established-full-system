import React from 'react';
import clsx from 'clsx';
import styles from './Stack.module.css';

export interface StackProps {
  direction?: 'horizontal' | 'vertical';
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Stack: React.FC<StackProps> = ({
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.stack,
        styles[direction],
        styles[`spacing-${spacing}`],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        wrap && styles.wrap,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Stack;
