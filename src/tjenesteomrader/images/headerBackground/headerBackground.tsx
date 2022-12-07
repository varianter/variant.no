import { Heading1 } from '@components/heading';
import PageHeader from '@components/page-header';
import style from './headerBackground.module.css';

type HeaderBackgroundProps = {
  headerColor: string;
  headerText: string;
  onVisibleChange?(visible: boolean): void;
};

const HeaderBackground = ({
  headerColor,
  headerText,
  onVisibleChange,
}: HeaderBackgroundProps) => {
  const SVG = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1024"
      height="484"
      viewBox="0 0 1024 484"
      fill="none"
    >
      <path
        d="M341.333 472.232C204.707 495.623 127.382 472.232 0 484V0H1024V436.93C907.891 445.373 852.097 451.245 682.667 436.93C513.237 422.614 477.96 448.842 341.333 472.232Z"
        fill="${headerColor}"
      />
    </svg>`;
  const encodedString = Buffer.from(SVG).toString('base64');

  return (
    <div className={style.header}>
      <div
        className={style.header__menu}
        style={{ backgroundColor: headerColor }}
      >
        <PageHeader whiteMode onVisibleChange={onVisibleChange} />
      </div>

      <div
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,${encodedString}")`,
        }}
        className={style.header__text}
      >
        <a href="/#tjenesteomrader">Tjenesteområder /</a>
        <Heading1 styleLevel="2" className={style.header__heading}>
          {headerText}
        </Heading1>
      </div>
    </div>
  );
};

export default HeaderBackground;
