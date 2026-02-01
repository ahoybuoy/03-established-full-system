import React from 'react';
import clsx from 'clsx';
import styles from './Container.module.css';

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  padding = true,
  centered = true,
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        styles[size],
        padding && styles.padding,
        centered && styles.centered,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
