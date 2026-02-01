import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Footer.module.css';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  logo?: React.ReactNode;
  description?: string;
  sections?: FooterSection[];
  bottomLinks?: FooterLink[];
  copyright?: string;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  logo,
  description,
  sections = [],
  bottomLinks = [],
  copyright,
  className,
}) => {
  return (
    <footer className={clsx(styles.footer, className)}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            {logo && <div className={styles.logo}>{logo}</div>}
            {description && <p className={styles.description}>{description}</p>}
          </div>
          {sections.length > 0 && (
            <div className={styles.sections}>
              {sections.map((section) => (
                <div key={section.title} className={styles.section}>
                  <h4 className={styles.sectionTitle}>{section.title}</h4>
                  <ul className={styles.linkList}>
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className={styles.link}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.bottom}>
          {copyright && <p className={styles.copyright}>{copyright}</p>}
          {bottomLinks.length > 0 && (
            <div className={styles.bottomLinks}>
              {bottomLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.bottomLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
