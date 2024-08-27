// components/Popover.tsx
import React, { useEffect, useRef } from 'react';
import styles from './Popover.module.css'; // Ensure you import your styles

interface PopoverProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ onClose, children }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div className={styles.backdrop} onClick={onClose}>   </div>  
      <div ref={popoverRef} className={styles.popover_content}>
        {children}
      </div>
    </>
  );
};

export default Popover;
