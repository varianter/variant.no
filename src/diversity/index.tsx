import Head from 'next/head';
import SayHi from 'src/index/say-hi';
import Layout from 'src/layout';
import style from './diversity.module.css';

const Diversity = () => {
  return (
    <Layout crazy>
      <Head>
        <meta
          property="og:description"
          content="En variant av et konsulentselskap som er raust, åpent og læreglad. Vi bistår med utvikling, design, prosjektledelse, kursing og rådgiving."
        />
        <meta
          name="description"
          content="En variant av et konsulentselskap som er raust, åpent og læreglad. Vi bistår med utvikling, design, prosjektledelse, kursing og rådgiving."
        />
      </Head>
      <SayHi
        className={style.sayHi}
        href="https://twitter.com/intent/tweet?screen_name=variant_as"
        rel="noopener"
      />
      <header className={style.header}>
        <h2 className={style.header__title}>Mangfold</h2>
        <p>
          Vi synes at mangfold er viktig. Mangfold i teknologi betyr også
          kjønnsbalanse. Derfor samarbeider vi med de som jobber med dette. Det
          gir verdi og nytte for de, oss og deg.
        </p>
      </header>
      <nav>
        <a href="#ada">Ada</a>
        <a href="#tenk">TENK Tech Camp</a>
        <a href="#oda">ODA-Nettverket</a>
        <div>
          <p>Klikk for å hoppe</p>
          <div>*pil*</div>
        </div>
      </nav>
      <div className={style.primaryContainer}></div>
    </Layout>
  );
};

export default Diversity;
