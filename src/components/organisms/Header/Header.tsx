import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Header.module.css';
import { Button } from '../../atoms/Button';
import { Avatar } from '../../atoms/Avatar';

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderProps {
  logo: React.ReactNode;
  navItems?: NavItem[];
  user?: {
    name: string;
    avatar?: string;
  };
  actions?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  navItems = [],
  user,
  actions,
  className,
}) => {
  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            {logo}
          </Link>
          {navItems.length > 0 && (
            <nav className={styles.nav}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(styles.navLink, item.active && styles.active)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
        <div className={styles.right}>
          {actions}
          {user && (
            <div className={styles.user}>
              <Avatar name={user.name} src={user.avatar} size="sm" />
              <span className={styles.userName}>{user.name}</span>
            </div>
          )}
          {!user && (
            <div className={styles.authButtons}>
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
              <Button variant="primary" size="sm">
                Sign up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
