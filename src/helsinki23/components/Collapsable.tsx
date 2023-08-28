import { ReactNode, useState } from 'react';

import styles from './Collapsable.module.css';
import collapseIcon from '../images/collapse.svg';

const Collapsable: React.FC<{ title: string, children: ReactNode }> = ({ title, children }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const split = title.indexOf(' ');

  return <div className={`${styles.collapsable} ${isOpen ? styles.open : styles.closed}`}>
    <div tabIndex={0} className={styles.header} role='button' onClick={() => setIsOpen((s) => !s)} onKeyDown={(e) => {
      if (e.key == "Enter") {
        setIsOpen((s) => !s)
      }
    }}>
      <span>{title.slice(0, split)} {split !== -1 && <span className={styles.hidden}>{title.slice(split + 1)}</span>}</span>
      <img src={collapseIcon} alt={isOpen ? "close" : "open"} />
    </div>
    <div className={styles.content}>
      {children}
    </div>
  </div>
}

export default Collapsable;
