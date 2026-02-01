import React from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';
import styles from './Link.module.css';

export interface LinkProps {
  href: string;
  variant?: 'default' | 'subtle' | 'nav';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  href,
  variant = 'default',
  size = 'md',
  external = false,
  className,
  children,
}) => {
  const linkClass = clsx(styles.link, styles[variant], styles[size], className);

  if (external) {
    return (
      <a
        href={href}
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={linkClass}>
      {children}
    </NextLink>
  );
};

export default Link;
