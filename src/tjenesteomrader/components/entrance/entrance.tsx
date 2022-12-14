import { ButtonNextLink } from '@components/button';
import { Heading3 } from '@components/heading';
import { ColorSet } from '@variant/profile/lib/colors';
import style from './entrance.module.css';

type EntranceProps = {
  blobPath: string;
  ServiceName: string;
  serviceText: string;
  colorPair: ColorSet;
  urlPath: string;
};

const Entrance = ({
  blobPath,
  ServiceName,
  serviceText,
  colorPair,
  urlPath,
}: EntranceProps) => {
  return (
    <article className={style.serviceArea}>
      <header className={style.serviceArea__top}>
        <img src={blobPath} alt={ServiceName + ' blob'} />
        <Heading3 styleLevel="4">{ServiceName}</Heading3>
      </header>
      <div className={style.serviceArea__bottom}>
        <p>{serviceText}</p>
        <ButtonNextLink
          colorPair={colorPair}
          href={`tjenesteomrader/${urlPath}`}
        >
          {ServiceName}
        </ButtonNextLink>
      </div>
    </article>
  );
};

export default Entrance;
