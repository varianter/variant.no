import { ColorSet } from '@variant/profile/lib/colors';
import Link from 'next/link';
import style from './entrance.module.css';

const Entrance = (props: {
  blobPath: string;
  serviceName: string;
  serviceText: string;
  colorPair: ColorSet;
  urlPath: string;
}) => {
  return (
    <div className={style.serviceArea}>
      <div className={style.serviceArea__top}>
        <img src={props.blobPath} alt="Digital tjeneste blob" />
        <h3>{props.serviceName}</h3>
      </div>
      {}
      <div className={style.serviceArea__bottom}>
        <p>{props.serviceText}</p>
        <Link href={`tjenesteomrader/omrader/${props.urlPath}`}>
          <a
            style={{
              backgroundColor: props.colorPair.default.bg,
              color: props.colorPair.default.text,
            }}
          >
            Les mer om {props.serviceName}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Entrance;
