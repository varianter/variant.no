import Layout from 'src/layout';
import style from './index.module.css';
import digitalTjenesteBlob from './images/indexBlobs/digitalTjeneste.svg';
import serviceBlob from './images/indexBlobs/strategi.svg';
import datadrevet from './images/indexBlobs/datadrevet.svg';
import kultur from './images/indexBlobs/kultur.svg';
import Entrance from './components/entrance/entrance';

const Tjenesteomrader = () => {
  return (
    <Layout>
      <div className={style.tjenesteomrader}>
        <h2>Våre tjenesteområder</h2>
        <p>
          Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus
          volutpat nisi, volutpat diam tincidunt viverra. Sagittis, sapien porta
          non imperdiet aliquam, eu nec. Enim vel at diam massa tortor blandit
          et commodo risus. Faucibus lacus metus eget eu eget convallis
          pharetra.
        </p>
        <Entrance
          blobPath={digitalTjenesteBlob}
          serviceName={'Digital tjeneste-og produktutvikling'}
          serviceText={
            'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
          }
          buttonColor={'#FFFFFF'}
          buttonBgColor={'#E61A6B'}
          urlPath={'digitalTjeneste'}
        />
        <Entrance
          blobPath={serviceBlob}
          serviceName={'Strategi'}
          serviceText={
            'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
          }
          buttonColor={'#333333'}
          buttonBgColor={'#03DAC6'}
          urlPath={'strategi'}
        />
        <Entrance
          blobPath={datadrevet}
          serviceName={'Datadrevet'}
          serviceText={
            'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
          }
          buttonColor={'#FFFFFF'}
          buttonBgColor={'#423D89'}
          urlPath={'datadrevet'}
        />
        <Entrance
          blobPath={kultur}
          serviceName={'Kultur'}
          serviceText={
            'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
          }
          buttonColor={'#333333'}
          buttonBgColor={'#FFC4BC'}
          urlPath={'kultur'}
        />
      </div>
    </Layout>
  );
};

export default Tjenesteomrader;
