import style from './tips.module.css';
import LinkIcon from '../components/common/linkIcon';
import { TipModel } from './tips';

const Tip = ({tip, imageFirst} : {tip: TipModel, imageFirst: boolean}) => {
  return (
    <div className={imageFirst ? style.tipContainer : style.reverseTipContainer}>
      <img src={tip.imageUrl} alt={tip.title} />
      <div className={style.tipText}>
        <a href={tip.link} className={style.tipLink} target='_blank'>
          <h3>{tip.title}</h3>
          <LinkIcon />
        </a>
        <p>{tip.info}</p>
      </div>
    </div>
  );
};

export default Tip;