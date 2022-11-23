import Divider from 'src/tjenesteomrader/images/divider/divider';
import Footer from 'src/tjenesteomrader/images/footer/footer';
import style from '../../shared/bottomText.module.css';

const BottomText = (props: { footerColor: string }) => {
  return (
    <div className={style.bottomText}>
      <div className={style.bottomText__content_divider}>
        <Divider />
      </div>

      <div className={style.bottomText__content}>
        <p className={style.bottomText__content_bigText}>
          Som bidragsytere innenfor digital tjenesteutvikling ser vi ofte at
          virkeligheten ikke er slik. Mange står i svært komplekse og krevende
          transformasjons- og endringsprosesser hvor folk har nok med å få egen
          kalender, leveranser, forpliktelser og ressurser til å gå opp.
        </p>

        <div className={style.bottomText__content_wrapper}>
          <p>
            Med manglende kapasitet og evne til å se hvordan både interne og
            eksterne innsatsfaktorer samvirker på organisasjonsnivå, er risikoen
            stor for at det bygges barrierer der synergier kunne oppstått.
          </p>
        </div>

        <div className={style.bottomText__content_wrapper}>
          <p>
            <strong>Strategiutvikling</strong> tilbyr et sosialt og strukturelt
            rammeverk for helhetlige målbilder og valg som alle involverte
            parter forstår og evner å navigere etter. Strategiutvikling er
            kompetanse som integreres i den operasjonelle hverdagen til
            organisasjonen. Derfra utvikles retning og struktur på bakgrunn av
            eksisterende rammebetingelser, forutsetninger og kultur men også ut
            fra realistiske fremtidsscenarier og nye muligheter.
          </p>
        </div>

        <div className={style.bottomText__content_wrapper}>
          <p>
            Strategiutvikling hjelper til å sette fokus, kartlegge og behandle
            helheten i det komplekse systemet vi jobber innenfor. Da kan det
            forstås, optimaliseres og skape mer verdi for alle involverte
            aktører.
          </p>
        </div>

        <div className={style.bottomText__content_wrapper}>
          <p>
            I Variant har vi strategiagenter innenfor både prosjektledelse,
            design og utvikling som kan bidra på ulike nivå med rådgivning,
            analyse og metodikk som samler folk og gjør det enklere å foreta
            bærekraftige forretningsvalg.
          </p>
        </div>
      </div>
      <Footer color={props.footerColor} />
    </div>
  );
};

export default BottomText;
