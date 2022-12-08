import Layout from 'src/layout';
import Tjenesteomrader from 'src/tjenesteomrader';
import style from 'src/tjenesteomrader/tjenesteomrader.module.css';

const Tjenesteomrade = () => {
  return (
    <Layout>
      <div className={style.wrapper}>
        <Tjenesteomrader />
      </div>
    </Layout>
  );
};

export default Tjenesteomrade;
