import { ButtonNextLink } from '@components/button';
import { Heading3 } from '@components/heading';
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
    <article className={style.serviceArea}>
      <header className={style.serviceArea__top}>
        <img src={props.blobPath} alt={props.ServiceName + ' blob'} />
        <Heading3 styleLevel="4">{props.ServiceName}</Heading3>
      </header>
      <div className={style.serviceArea__bottom}>
        <p>{props.serviceText}</p>
        {!props.hideButton && (
          <ButtonNextLink
            colorPair={props.colorPair}
            href={`tjenesteomrade/${props.urlPath}`}
          >
            {props.ServiceName}
          </ButtonNextLink>
        )}
      </div>
    </article>
  );
};

export default Entrance;
