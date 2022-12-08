import Divider from 'src/tjenesteomrader/images/divider/divider';
import Footer from 'src/tjenesteomrader/images/footer/footer';
import style from 'src/tjenesteomrader/shared/bottomText.module.css';

const BottomText = (props: { footerColor: string }) => {
  return (
    <div className={style.bottomText}>
      <div className={style.bottomText__content_divider}>
        <Divider />
      </div>

      <div className={style.bottomText__content}>
        <p className={style.bottomText__content_bigText}>
          Som virksomme fagfolk i et mangfold av bransjer, ser vi at
          virkeligheten ofte ikke er slik. Mange står i komplekse og krevende
          transformasjons- og endringsprosesser, hvor det er krevende nok å
          ivareta egne folk, forpliktelser og leveranser. I mangel på kapasitet
          eller evne til å se hvordan interne og eksterne innsatsfaktorer
          samvirker, blir risikoen stor for at hindringer skapes der muligheter
          kunne oppstått.
        </p>

        <div className={style.bottomText__content_wrapper}>
          <p>
            Strategiutvikling tilbyr et strukturert rammeverk for helhetlige
            målbilder og valg som alle forstår og evner å navigere etter.
            Strategiutvikling er en prosess hvor flinke folk med en rett miks av
            faglig, kulturelt og strategisk fokus integreres i hverdagen til
            organisasjonen. Derfra utvikles retning, enhet og struktur: Ut fra
            eksisterende rammebetingelser og kultur på den ene siden, og
            realistiske fremtidsscenarier på den andre.
          </p>
        </div>

        <div className={style.bottomText__content_wrapper}>
          <p>
            <strong>Strategiutvikling</strong> hjelper til med å sette fokus og
            behandle helheten i det komplekse systemet vi jobber i og med . Når
            virksomheten forstås som et system, kan den optimaliseres gjennom
            strategier som ikke forblir liggende på styrerommet, men som blir
            levendegjort og etterlevd i kulturen.
          </p>
        </div>

        <div className={style.bottomText__content_wrapper}>
          <p>
            I Variant har vi “strategiagenter” innenfor prosjektledelse, design
            og utvikling. Vi kan bidra på ulike nivå med rådgivning, analyse og
            metodikk som samler folk og gjør det enklere å foreta bærekraftige
            veivalg for produkter, tjenester og forretning.
          </p>
        </div>
      </div>
      <Footer color={props.footerColor} />
    </div>
  );
};

export default BottomText;
