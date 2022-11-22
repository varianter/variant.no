import Layout from 'src/layout';

import digitalTjenesteBlob from './images/indexBlobs/digitalTjeneste.svg';
import serviceBlob from './images/indexBlobs/strategi.svg';
import datadrevet from './images/indexBlobs/datadrevet.svg';
import kultur from './images/indexBlobs/kultur.svg';
import Entrance from './components/entrance/entrance';

const Tjenesteområder = () => {
  return (
    <Layout>
      <div>
        <h2 style={{ marginBottom: '2.125rem' }}>Våre tjenesteområder</h2>
        <p style={{ marginBottom: '2.125rem' }}>
          Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus
          volutpat nisi, volutpat diam tincidunt viverra. Sagittis, sapien porta
          non imperdiet aliquam, eu nec. Enim vel at diam massa tortor blandit
          et commodo risus. Faucibus lacus metus eget eu eget convallis
          pharetra.
        </p>
        <Entrance
          blobPath={digitalTjenesteBlob}
          ServiceName={'Digital tjeneste-og produktutvikling'}
          serviceText={
            'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
          }
          buttonColor={'#FFFFFF'}
          buttonBgColor={'#E61A6B'}
        />
        <Entrance
          blobPath={serviceBlob}
          ServiceName={'Strategiutvikling'}
          serviceText={
            'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
          }
          buttonColor={'#333333'}
          buttonBgColor={'#03DAC6'}
        />
        <Entrance
          blobPath={datadrevet}
          ServiceName={'Datadrevet produkt- og tjenesteutvikling'}
          serviceText={
            'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
          }
          buttonColor={'#FFFFFF'}
          buttonBgColor={'#423D89'}
        />
        <Entrance
          blobPath={kultur}
          ServiceName={'Culture first'}
          serviceText={
            'Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra.'
          }
          buttonColor={'#333333'}
          buttonBgColor={'#FFC4BC'}
        />
      </div>
    </Layout>
  );
};

export default Tjenesteområder;
