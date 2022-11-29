import digitalTjenesteBlob from './images/indexBlobs/digitalTjeneste.svg';
import serviceBlob from './images/indexBlobs/strategi.svg';
import datadrevet from './images/indexBlobs/datadrevet.svg';
import kultur from './images/indexBlobs/kultur.svg';
import Entrance from './components/entrance/entrance';
import style from 'src/index/index.module.css';

const Tjenesteomrader = () => {
  return (
    <div>
      <h2 id="tjenesteomrader" className={style.join_title}>
        Våre tjenesteområder
      </h2>
      <p style={{ marginBottom: '2.125rem' }}>
        Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus
        volutpat nisi, volutpat diam tincidunt viverra. Sagittis, sapien porta
        non imperdiet aliquam, eu nec. Enim vel at diam massa tortor blandit et
        commodo risus. Faucibus lacus metus eget eu eget convallis pharetra.
      </p>
      <Entrance
        blobPath={digitalTjenesteBlob}
        ServiceName={'Digital tjeneste-og produktutvikling'}
        serviceText={
          'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
        }
        buttonColor={'#FFFFFF'}
        buttonBgColor={'#E61A6B'}
        urlPath={'digitalTjeneste'}
      />
      <Entrance
        blobPath={serviceBlob}
        ServiceName={'Strategi'}
        serviceText={
          'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
        }
        buttonColor={'#333333'}
        buttonBgColor={'#03DAC6'}
        urlPath={'strategi'}
      />
      <Entrance
        blobPath={datadrevet}
        ServiceName={'Datadrevet'}
        serviceText={
          'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
        }
        buttonColor={'#FFFFFF'}
        buttonBgColor={'#423D89'}
        urlPath={'datadrevet'}
      />
      <Entrance
        blobPath={kultur}
        ServiceName={'Kultur'}
        serviceText={
          'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
        }
        buttonColor={'#333333'}
        buttonBgColor={'#FFC4BC'}
        urlPath={'/kultur'}
      />
    </div>
  );
};

export default Tjenesteomrader;
