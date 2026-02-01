import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

export interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  className,
  children,
}) => {
  return (
    <div className={clsx(styles.card, styles[variant], styles[`padding-${padding}`], className)}>
      {children}
    </div>
  );
};

export interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => (
  <div className={clsx(styles.header, className)}>{children}</div>
);

export interface CardBodyProps {
  className?: string;
  children: React.ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = ({ className, children }) => (
  <div className={clsx(styles.body, className)}>{children}</div>
);

export interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ className, children }) => (
  <div className={clsx(styles.footer, className)}>{children}</div>
);

export default Card;
