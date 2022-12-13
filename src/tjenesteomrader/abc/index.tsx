import markdownit from 'markdown-it/lib';
import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/tjenesteomrader/[omrade]';
import Strategi from '../areas/strategi';
import style from 'src/tjenesteomrader/shared/bottomText.module.css';
import Divider from '../images/divider/divider';
import Footer from '../images/footer/footer';
import Datadriv from '../areas/datadriv';
import DigitalTjeneste from '../areas/DigitalTjeneste';
import Kultur from '../areas/kultur';

const TEST = ({ prop }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const md = markdownit({ linkify: true, html: true, typographer: true });
  const html = md.render(prop.fileContents);
  return (
    <div>
      {whichPage(prop.name)}
      <div className={style.bottomText__content_divider}>
        <Divider />
      </div>
      <div
        className={style.bottomText__content}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Footer color={`#${prop.color}`} />
    </div>
  );
};

export default TEST;

function whichPage(page: string) {
  if (page === 'strategi') return <Strategi />;
  if (page === 'datadriv') return <Datadriv />;
  if (page === 'digitalTjeneste') return <DigitalTjeneste />;
  if (page === 'kultur') return <Kultur />;
  return <></>;
}
