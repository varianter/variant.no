import Layout from 'src/layout';
import style from './index.module.css';
import digitalTjenesteBlob from './images/indexBlobs/digitalTjeneste.svg';
import serviceBlob from './images/indexBlobs/strategi.svg';
import datadrevet from './images/indexBlobs/datadrevet.svg';
import kultur from './images/indexBlobs/kultur.svg';
import Entrance from './components/entrance/entrance';

import { colorPairs } from '@variant/profile/lib/colors';
import { Heading2 } from '@components/heading';

const Tjenesteomrader = () => {
  return (
    <Layout>
      <div className={style.tjenesteomrader}>
        <Heading2>Våre tjenesteområder</Heading2>
        <p>
          Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus
          volutpat nisi, volutpat diam tincidunt viverra. Sagittis, sapien porta
          non imperdiet aliquam, eu nec. Enim vel at diam massa tortor blandit
          et commodo risus. Faucibus lacus metus eget eu eget convallis
          pharetra.
        </p>
        <Entrance
          blobPath={digitalTjenesteBlob}
          serviceName="Digital tjeneste-og produktutvikling"
          serviceText="Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra."
          buttonColor={colorPairs.primary.default.text}
          buttonBgColor={colorPairs.primary.default.bg}
          urlPath="digitalTjeneste"
        />
        <Entrance
          blobPath={serviceBlob}
          serviceName="Strategi"
          serviceText="Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra."
          buttonColor={colorPairs.secondary2.default.text}
          buttonBgColor={colorPairs.secondary2.default.bg}
          urlPath="strategi"
        />
        <Entrance
          blobPath={datadrevet}
          serviceName="Datadrevet"
          serviceText="Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra."
          buttonColor={colorPairs.secondary1.default.text}
          buttonBgColor={colorPairs.secondary1.default.bg}
          urlPath="datadrevet"
        />
        <Entrance
          blobPath={kultur}
          serviceName="Kultur"
          serviceText="Risus, nulla dolor consequat ut ultrices. Egestas eget vitae, tellus volutpat nisi, volutpat diam tincidunt viverra."
          buttonColor={colorPairs.secondary3.default.text}
          buttonBgColor={colorPairs.secondary3.default.bg}
          urlPath="kultur"
        />
      </div>
    </Layout>
  );
};

export default Tjenesteomrader;
