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
          De fleste leverandører av produkter og tjenester er alltid på jakt
          etter nye muligheter i form av differensierende funksjonalitet eller
          nye produkter. Eller kanskje man stadig skulle ønske man hadde bedre
          grunnlag for å ta virksomhetskritiske beslutninger eller strategiske
          valg?
        </p>

        <div className={style.bottomText__content_wrapper}>
          <p>
            Mesteparten av det som eksisterer av data i dagens organisasjoner
            kan kalles biprodukter av våre produkt- og tjenesteleveranser. Hva
            om dette kunne forvandles til verdifulle råvarer? Data som legger
            grunnlaget for nye produkter og tjenester eller nyttig input til
            strategisk viktige beslutninger?
          </p>
        </div>

        <div className={style.bottomText__content_wrapper}>
          <p>
            I Variant kaller vi denne prosessen for
            <strong>[Dataproduktutvikling]</strong>
          </p>
        </div>

        <div className={style.bottomText__content_wrapper}>
          <p>
            For å lykkes med dette finnes det en rekke mer eller mindre krevende
            prosesser, vurderinger og valg – ting som de fleste organisasjoner
            ikke gjør ofte – man må gjennom.
          </p>
        </div>

        <div className={style.bottomText__content_wrapper}>
          <p>
            Som bidragsytere innenfor digital produkt- og tjenesteutvikling har
            vi erfaring og kunnskap som er nyttig når en organisasjon skal
            gjennom denne forvandlingen; fra å forstå og modne organisasjon,
            kartlegge nåsituasjon, legge til rette og fasilitere for valg av
            teknologi som muliggjør tilgjengeliggjøring av data til å lede
            innovasjonsprosesser der vi utforsker og kartlegger muligheter og
            bygger nye produkter eller forløser ny kunnskap med utgangspunkt i
            de nye data-råvarene.
          </p>
        </div>
      </div>
      <Footer color={props.footerColor} />
    </div>
  );
};

export default BottomText;
