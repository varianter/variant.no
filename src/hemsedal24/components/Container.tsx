import { ReactNode } from "react";
import styles from './Container.module.css'

export default function Container({ children, className, ...props }: { children: ReactNode } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div className={`${className ? className : ''} ${styles.container}`} {...props}>{children}</div>
}
