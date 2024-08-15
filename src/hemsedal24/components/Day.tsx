import { ReactNode } from "react";

import styles from './Day.module.css';
import Container from "./Container";

export default function Day({ title, children, background = false }: { title: string, children: ReactNode, background?: boolean }) {
  return <section>
    <div className={`${styles.day} ${background && styles.with_background}`}>
      <h2>
        {title}
      </h2>
      <div>
        {children}
      </div>
    </div>
  </section>;
}
