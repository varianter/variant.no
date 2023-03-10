import digitalTjenesteBlob from './images/indexBlobs/digitalTjeneste.svg';
import serviceBlob from './images/indexBlobs/strategi.svg';
import datadrevet from './images/indexBlobs/datadrevet.svg';
import kultur from './images/indexBlobs/kultur.svg';
import Entrance from './components/entrance/entrance';
import { colorPairs } from '@variant/profile/lib/colors';

import style from './tjenesteomrader.module.css';
import { Heading2 } from '@components/heading';

const Tjenesteomrader = () => {
  return (
    <section className={style.tjenesteomrader}>
      <Heading2 id="tjenesteomrader" className={style.title}>
        Våre tjenesteområder
      </Heading2>
      <p className={style.tjenesteomrader__ingress}>
        I Variant ønsker vi å bidra til størst mulig forandring til det bedre
        for kundene våre, for folk og for samfunnet. Derfor har vi rigget oss
        helhetlig for å kode, designe, lede og rådgi innenfor fire definerte
        kjerneområder som ofte spiller på lag. Sjekk ut hva vi legger i Digital
        tjeneste- og produktutvikling , Datadriv, Strategi og Kultur. 👇🏻
      </p>

      <div className={style.tjenesteomrader__content}>
        <Entrance
          blobPath={digitalTjenesteBlob}
          ServiceName={'Digital tjeneste- og produktutvikling'}
          serviceText={
            'Utvikling av digitale produkter og tjenester er kjernen i Variants leveranser. Med oss på laget får du tilgang til vår beste praksis og erfaringer rundt hvordan man lykkes med dette.'
          }
          colorPair={colorPairs.primary}
          urlPath={'digitalTjeneste'}
        />
        <Entrance
          blobPath={serviceBlob}
          ServiceName={'Strategi'}
          serviceText={
            'Små og store organisasjonelle veivalg krever tydelig målbilder og levende strategier. Les mer om hvordan Variant kan hjelpe din organisasjon med å gjøre disse valgene færre, enklere og mer bærekraftige'
          }
          colorPair={colorPairs.secondary1}
          urlPath={'strategi'}
        />
        <Entrance
          blobPath={datadrevet}
          ServiceName={'Datadriv'}
          serviceText={
            'Ved å bli en datadrevet virksomhet muliggjøres bedre virksomhetsstyring og nye måter å innovere på. Les mer om Variants tilnærming til det å bli en datadrevet organisasjon'
          }
          colorPair={colorPairs.secondary2}
          urlPath={'datadriv'}
        />
        <Entrance
          blobPath={kultur}
          ServiceName={'Kultur'}
          serviceText={
            'Etablering og forvaltning av egne team for digital tjenesteutvikling krever målrettet fokus og kunnskap innen kulturbygging. Våre konsulenter jobber for en bærekraftig og sunn utviklingskultur med utgangspunkt i fagene - fra team til topp'
          }
          colorPair={colorPairs.primary}
          colorVariation={{ series: colorPairs.primary.tint!, colorLevel: 2 }}
          urlPath={'kultur'}
        />
      </div>
    </section>
  );
};

export default Tjenesteomrader;
