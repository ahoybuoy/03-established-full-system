import React from 'react';
import clsx from 'clsx';
import styles from './DataList.module.css';

export interface DataListItem {
  label: string;
  value: React.ReactNode;
}

export interface DataListProps {
  items: DataListItem[];
  variant?: 'vertical' | 'horizontal';
  striped?: boolean;
  className?: string;
}

export const DataList: React.FC<DataListProps> = ({
  items,
  variant = 'vertical',
  striped = false,
  className,
}) => {
  return (
    <dl className={clsx(styles.list, styles[variant], striped && styles.striped, className)}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <dt className={styles.label}>{item.label}</dt>
          <dd className={styles.value}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default DataList;
