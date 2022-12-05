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
      <p>
        I Variant ønsker vi å bidra til størst mulig forandring til det bedre –
        for kundene våre, for folk og for samfunnet. Derfor har vi rigget oss
        helhetlig for å kode, designe, lede og rådgi innenfor fire definerte
        kjerneområder som ofte spiller på lag. Sjekk ut hva vi legger i Digitale
        tjenester, Datadriv, Strategi og Kultur. 👇🏻
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
          'Små og store organisasjonelle veivalg krever tydelig målbilder og levende strategier. Les mer om hvordan Variant kan hjelpe din organisasjon med å gjøre disse valgene færre, enklere og mer bærekraftige'
        }
        buttonColor={'#333333'}
        buttonBgColor={'#03DAC6'}
        urlPath={'strategi'}
      />
      <Entrance
        blobPath={datadrevet}
        ServiceName={'Datadrevet'}
        serviceText={
          'Ved å bli en datadrevet virksomhet muliggjøres bedre virksomhetsstyring og nye måter å innovere på. Les mer om Variants tilnærming til det å bli en datadrevet organisasjon'
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
