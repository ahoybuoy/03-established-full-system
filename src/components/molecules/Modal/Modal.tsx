import React, { useEffect, useCallback } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
  children,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        onClose();
      }
    },
    [closeOnEscape, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={closeOnOverlayClick ? onClose : undefined}>
      <div
        className={clsx(styles.modal, styles[size], className)}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
};

export interface ModalHeaderProps {
  onClose?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose, className, children }) => (
  <div className={clsx(styles.header, className)}>
    <div className={styles.headerContent}>{children}</div>
    {onClose && (
      <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    )}
  </div>
);

export interface ModalBodyProps {
  className?: string;
  children: React.ReactNode;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ className, children }) => (
  <div className={clsx(styles.body, className)}>{children}</div>
);

export interface ModalFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ className, children }) => (
  <div className={clsx(styles.footer, className)}>{children}</div>
);

export default Modal;
