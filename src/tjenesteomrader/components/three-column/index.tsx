import style from './three-column.module.css';

import { PropsWithChildren } from 'react';

export type ThreeColumnProps = PropsWithChildren<{}>;
export default function ThreeColumn({ children }: ThreeColumnProps) {
  return <div className={style.container}>{children}</div>;
}
