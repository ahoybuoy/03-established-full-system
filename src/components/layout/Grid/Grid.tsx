import React from 'react';
import clsx from 'clsx';
import styles from './Grid.module.css';

export interface GridProps {
  columns?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  columns = 12,
  gap = 'md',
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.grid,
        styles[`cols-${columns}`],
        styles[`gap-${gap}`],
        className
      )}
    >
      {children}
    </div>
  );
};

export interface GridItemProps {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  start?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
  children: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({
  span,
  start,
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.item,
        span && styles[`span-${span}`],
        start && styles[`start-${start}`],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
