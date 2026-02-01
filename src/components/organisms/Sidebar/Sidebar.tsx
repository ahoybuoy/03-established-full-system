import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export interface SidebarItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string | number;
  active?: boolean;
  children?: SidebarItem[];
}

export interface SidebarProps {
  items: SidebarItem[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
  collapsed?: boolean;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  header,
  footer,
  collapsed = false,
  className,
}) => {
  return (
    <aside className={clsx(styles.sidebar, collapsed && styles.collapsed, className)}>
      {header && <div className={styles.header}>{header}</div>}
      <nav className={styles.nav}>
        {items.map((item) => (
          <SidebarItemComponent key={item.id} item={item} collapsed={collapsed} />
        ))}
      </nav>
      {footer && <div className={styles.footer}>{footer}</div>}
    </aside>
  );
};

interface SidebarItemComponentProps {
  item: SidebarItem;
  collapsed: boolean;
  depth?: number;
}

const SidebarItemComponent: React.FC<SidebarItemComponentProps> = ({
  item,
  collapsed,
  depth = 0,
}) => {
  return (
    <div className={styles.itemWrapper}>
      <Link
        href={item.href}
        className={clsx(styles.item, item.active && styles.active)}
        style={{ paddingLeft: `calc(var(--space-3) + ${depth * 12}px)` }}
      >
        {item.icon && <span className={styles.icon}>{item.icon}</span>}
        {!collapsed && (
          <>
            <span className={styles.label}>{item.label}</span>
            {item.badge && <span className={styles.badge}>{item.badge}</span>}
          </>
        )}
      </Link>
      {!collapsed && item.children && (
        <div className={styles.children}>
          {item.children.map((child) => (
            <SidebarItemComponent
              key={child.id}
              item={child}
              collapsed={collapsed}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
