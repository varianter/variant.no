import style from './bliKjent.module.css';
import BackArrowIcon from '../components/common/backArrowIcon';
import { getToKnowResults } from './getToKnow';
import VariantPlusOne from './variantPlusOne';
import Footer from '../components/footer/footer';

export default function BliKjent() {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <a href='/varianttur/guildford23' className={style.backLink}>
          <BackArrowIcon />
          <span>Tilbake</span>
        </a>
        <div id='intro' className={style.headerContainer}>
          <h3>Bli kjent!</h3>
          <p className={style.introText}>Vi gir dere mulighet til å bli litt kjent før vi drar på tur sammen 🤝</p>
          <p className={style.introText}>Som dere vet, stilte vi noen spørsmål for å hjelpe dere litt på vei til å si noe om dere selv:</p>
          <div className={style.questions}>
            <p className={style.question}>Hva gjør du på en helt vanlig ukedag?</p>
            <p className={style.question}>Hvor mange postkasser har du hatt? Og hvilken farge hadde de?</p>
            <p className={style.question}>Fun facts om deg selv: Har du hobbyer? Samler du på noe? Hvilken type musikk liker du? Kan du partytriks? Du trenger ikke å svare på alt, men håper spørsmålene kan gi litt inspirasjon 🥳</p>
          </div>
        </div>
        {getToKnowResults.map((result, index) => <div key={index}><VariantPlusOne variant={result} variantIndex={index} /></div>)}
      </div>
      <Footer topHref='#intro' isPrimary={false} />
    </div>
  );
};