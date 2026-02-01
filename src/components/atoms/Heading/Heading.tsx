import React from 'react';
import clsx from 'clsx';
import styles from './Heading.module.css';

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'base';
  weight?: 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary';
  align?: 'left' | 'center' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size = '2xl',
  weight = 'bold',
  color = 'primary',
  align = 'left',
  className,
  children,
}) => {
  return (
    <Component
      className={clsx(
        styles.heading,
        styles[`size-${size}`],
        styles[`weight-${weight}`],
        styles[`color-${color}`],
        styles[`align-${align}`],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Heading;
