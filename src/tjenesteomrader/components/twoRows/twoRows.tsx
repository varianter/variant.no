import { Props } from 'next/script';
import style from './twoRows.module.css';
const TwoRows: React.FunctionComponent<Props> = (
  prop1: Props,
  prop2: Props,
) => {
  return (
    <div className={style.twoColumns}>
      {prop1.children}
      {prop2.children}
    </div>
  );
};

export default TwoRows;
