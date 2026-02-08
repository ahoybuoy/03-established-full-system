import React from 'react';
import clsx from 'clsx';
import styles from './FeatureCard.module.css';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  highlighted = false,
  className,
}) => {
  return (
    <div className={clsx(styles.card, highlighted && styles.highlighted, className)}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeatureCard;
