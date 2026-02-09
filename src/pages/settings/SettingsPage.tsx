import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from '../../components/molecules/Card';
import { Button } from '../../components/atoms/Button';
import styles from './SettingsPage.module.css';

interface SettingsSection {
  id: string;
  label: string;
  description: string;
}

const sections: SettingsSection[] = [
  { id: 'profile', label: 'Profile', description: 'Manage your account details' },
  { id: 'notifications', label: 'Notifications', description: 'Configure alert preferences' },
  { id: 'security', label: 'Security', description: 'Password and two-factor auth' },
];

export const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className={styles.layout}>
      <nav className={styles.sidebar}>
        {sections.map((section) => (
          <button
            key={section.id}
            className={styles.navItem}
            onClick={() => setActiveSection(section.id)}
            style={{
              backgroundColor: activeSection === section.id ? '#eef2ff' : 'transparent',
              color: activeSection === section.id ? '#4338ca' : '#6b7280',
            }}
          >
            <span className={styles.navLabel}>{section.label}</span>
            <span className={styles.navDesc}>{section.description}</span>
          </button>
        ))}
      </nav>
      <main className={styles.content}>
        <Card>
          <CardHeader>
            <h2 style={{ fontSize: '20px', marginBottom: '4px' }}>
              {sections.find((s) => s.id === activeSection)?.label}
            </h2>
          </CardHeader>
          <CardBody>
            <div className={styles.formGroup}>
              <label className={styles.label}>Display name</label>
              <input type="text" className={styles.input} placeholder="Enter your name" />
            </div>
            <div className={styles.actions}>
              <Button variant="primary">Save changes</Button>
            </div>
          </CardBody>
        </Card>
      </main>
    </div>
  );
};

export default SettingsPage;
