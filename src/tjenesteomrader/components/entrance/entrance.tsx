import { ButtonNextLink } from '@components/button';
import { ColorSet } from '@variant/profile/lib/colors';
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
          <ButtonNextLink
            className={style.serviceArea__bottom__button}
            colorPair={props.colorPair}
            href={`tjenesteomrader/${props.urlPath}`}
          >
            Les mer om {props.ServiceName}
          </ButtonNextLink>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Entrance;
