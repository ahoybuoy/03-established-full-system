import React from 'react';
import clsx from 'clsx';
import styles from './Avatar.module.css';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
  className?: string;
}

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  status,
  className,
}) => {
  return (
    <div className={clsx(styles.wrapper, styles[size], className)}>
      {src ? (
        <img src={src} alt={alt || name || 'Avatar'} className={styles.image} />
      ) : (
        <span className={styles.fallback}>
          {name ? getInitials(name) : '?'}
        </span>
      )}
      {status && <span className={clsx(styles.status, styles[`status-${status}`])} />}
    </div>
  );
};

export default Avatar;
