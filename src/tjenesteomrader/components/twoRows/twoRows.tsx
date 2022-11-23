import { Props } from 'next/script';
import style from './twoRows.module.css';
const TwoRows: React.FunctionComponent<Props> = (
  prop1: Props,
  prop2: Props,
  prop3?: Props,
) => {
  return (
    <div className={style.twoRows}>
      {prop1.children}
      {prop2.children}
      {prop3?.children}
    </div>
  );
};

export default TwoRows;
