import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Tabs.module.css';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: 'line' | 'enclosed' | 'pills';
  size?: 'sm' | 'md' | 'lg';
  onChange?: (tabId: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  variant = 'line',
  size = 'md',
  onChange,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={clsx(styles.tabs, className)}>
      <div className={clsx(styles.tabList, styles[variant], styles[size])} role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            className={clsx(
              styles.tab,
              activeTab === tab.id && styles.active,
              tab.disabled && styles.disabled
            )}
            onClick={() => !tab.disabled && handleTabClick(tab.id)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        className={styles.panel}
      >
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;
