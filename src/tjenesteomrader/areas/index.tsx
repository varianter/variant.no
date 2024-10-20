import style from 'src/tjenesteomrader/shared/bottomText.module.css';
import Divider from '../images/divider/divider';
import Footer from '../images/footer/footer';
import DigitalTjeneste from './DigitalTjeneste';
import Strategi, { StrategyExtras } from './strategi';
import Datadriv from './datadriv';
import Kultur from './kultur';
import {
  tjenesteomradePath,
  TjenesteomradeProps,
} from '../utils/tjenesteomradeTypes';
import { and } from 'src/utils/css';
import { EmployeeTile } from 'src/employees';

const Areas = (prop: TjenesteomradeProps) => {
  return (
    <div>
      <SubPage page={prop.name} />
      <div className={style.bottomText__content_divider}>
        <Divider />
      </div>
      <div className={style.bottomText}>
        <div
          className={style.bottomText__content}
          dangerouslySetInnerHTML={{ __html: prop.fileContents }}
        />

        {prop.contact && (
          <div
            className={and(
              style.bottomText__content,
              style['bottomText__content--marginTOp'],
            )}
          >
            <EmployeeTile employee={prop.contact} alwaysEmail />
          </div>
        )}

        {prop.name == 'strategi' && (
          <div
            className={and(
              style.bottomText__content,
              style['bottomText__content--large'],
            )}
          >
            <StrategyExtras />
          </div>
        )}
      </div>
      <Footer color={`#${prop.color}`} />
    </div>
  );
};

export default Areas;

type SubPageProps = (typeof tjenesteomradePath)[number];

const SubPage = (props: { page: SubPageProps }) => {
  const page = props.page;
  if (page === 'strategi') return <Strategi />;
  if (page === 'datadriv') return <Datadriv />;
  if (page === 'digitalTjeneste') return <DigitalTjeneste />;
  if (page === 'kultur') return <Kultur />;
  return null;
};
