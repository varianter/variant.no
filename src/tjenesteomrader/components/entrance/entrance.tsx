import { ColorSet } from '@variant/profile/lib/colors';
import Link from 'next/link';
import style from './entrance.module.css';

const Entrance = (props: {
  blobPath: string;
  ServiceName: string;
  serviceText: string;
  colorPair: ColorSet;
  urlPath: string;
  hideButton?: boolean;
}) => {
  return (
    <div className={style.serviceArea}>
      <div className={style.serviceArea__top}>
        <img src={props.blobPath} alt={props.ServiceName + ' blob'} />
        <h3>{props.ServiceName}</h3>
      </div>
      <div className={style.serviceArea__bottom}>
        <p>{props.serviceText}</p>
        {!props.hideButton ? (
          <Link href={`tjenesteomrade/${props.urlPath}`}>
            <a
              style={{
                backgroundColor: props.colorPair.default.bg,
                color: props.colorPair.default.text,
              }}
            >
              Les mer om {props.ServiceName}
            </a>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Entrance;
