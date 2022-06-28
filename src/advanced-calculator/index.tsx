import { ReactNode, useState } from 'react';
import InView from './Components/InView';
import RangeSlider from './Components/RangeSlider';
import { TextSplitter } from './Components/TextSplitter';
import { ONE_G } from './config';
import Counter from './Counter';
import BonusGraph from './Graphs/BonusGraph';
import SalaryGraph from './Graphs/SalaryGraph';
import {
  daysUntilSalaryRaise,
  firstDayOfTheYear,
} from './helpers/daysUntilNewSalary';
import { getAverageBonus, getHistoricBonus } from './helpers/getHistoricBonus';
import getPayscale from './helpers/getPayscale';
import { numberOfWorkingDaysInChristmas } from './helpers/paidHolidaysOff';
import { formatCurrencyFromNumber, getMaxYear } from './helpers/utils';
import Pension from './Pension';

import style from './calculator.module.css';

const CalculatorSection = ({ children }: { children: ReactNode }) => {
  return <div className={style['calculator__section']}>{children}</div>;
};

const CalculatorMain = ({ children }: { children: ReactNode }) => {
  return <div className={style['calculator__main']}>{children}</div>;
};

const maxYear = getMaxYear();

const DEGREE: { [key: string]: string } = {
  bachelor: 'Bachelor',
  master: 'Master',
};

export const Calculator = () => {
  const [selectedYear, setSelectedYear] = useState(2015);
  const [degree, setDegree] = useState('bachelor');
  //const [sections, setSections] = useState({ bonus: false, pension: false });
  /* const [touchedInputs, setTouchedInput] = useState({ experience: false }); */
  const thisYear = new Date().getFullYear();
  const year = selectedYear + (degree === 'bachelor' ? 1 : 0);
  const payscale = getPayscale(year);

  const yearsOfExperience =
    firstDayOfTheYear(maxYear).getFullYear() - selectedYear;

  const totalExperience =
    yearsOfExperience === 0
      ? `Nyutdannet ${DEGREE[degree]}`
      : `${yearsOfExperience} år + ${DEGREE[degree]}`;

  function onDegreeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setDegree(value);
  }

  function onSelectedYearChange(value: number) {
    setSelectedYear(value);
  }

  /*  function onInputBlur(name: string) {
    const omg = {
      ...touchedInputs,
      [name]: true
    };
    setTouchedInput(omg);
    console.log(touchedInputs);
  } */

  return (
    <div className={style['calculator']}>
      <div className={style['calculator-intro']}>
        <h1 className={style['heading calculator__title']}>
          {/* <TextSplitter>
              Hei du! La oss snakke litt om lønn (og andre betingelser)
            </TextSplitter> */}

          <TextSplitter>
            Hei du! La oss snakke litt om lønn{' '}
            <span className={style['calculator__title--extra']}>
              (og andre betingelser)
            </span>
          </TextSplitter>
        </h1>
      </div>
      <div className={style['calculator-controls']}>
        <div className={style['form-row']}>
          <div className={style['form-label']}>Hva slags utdanning har du?</div>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              alignContent: 'center',
            }}
          >
            <div className={style['radio-button-wrapper']}>
              <input
                className={style.inputRadio}
                type="radio"
                id="Bachelor"
                name="education"
                value="bachelor"
                onChange={onDegreeChange}
                defaultChecked
              />
              <label htmlFor="Bachelor">Bachelor</label>
            </div>

            <div className={style['radio-button-wrapper']}>
              <input
                className={style.inputRadio}
                type="radio"
                id="Master"
                name="education"
                value="master"
                onChange={onDegreeChange}
              />
              <label htmlFor="Master">Master</label>
            </div>
          </div>
        </div>
        <label htmlFor="experience" className={style['form-row']}>
          <div className={style['form-label']}>
            Når ble eller blir du ferdig med studiene?
          </div>

          <RangeSlider
            name="År"
            id="experience"
            min={1990}
            max={maxYear}
            value={selectedYear}
            onChange={onSelectedYearChange}
          />
        </label>

        <div className={style['calculator-controls__summary']}>
          <div className={style['calculator-controls__row']}>
            <div className={style['calculator-controls__label']}>
              Vi baserer lønn på erfaring
            </div>
            <div className={style['calculator-controls__value']}>
              {totalExperience}
            </div>
          </div>

          <div className={style['calculator-controls__row']}>
            <div className={style['calculator-controls__label']}>
              Det vil gi en årslønn på
            </div>
            <div className={style['calculator-controls__value']}>
              <Counter
                num={payscale.current}
                formatter={formatCurrencyFromNumber}
              />
            </div>
          </div>

          <div className={style['calculator-controls__row']}>
            <div className={style['calculator-controls__label']}>
              Årslønn + gjenomsnittlig bonus
            </div>
            <div className={style['calculator-controls__value']}>
              <Counter
                num={payscale.current + getAverageBonus()}
                formatter={formatCurrencyFromNumber}
              />
            </div>
          </div>

          <div className={style['calculator-controls__row']}>
            <div className={style['calculator-controls__label']}>
              Årlig pensjon, 7%
            </div>
            <div className={style['calculator-controls__value']}>
              <Counter
                num={payscale.current * 0.07}
                formatter={formatCurrencyFromNumber}
              />
            </div>
          </div>
        </div>
      </div>

      <CalculatorSection>
        <CalculatorMain>
          <TextSplitter>
            <h2>Du får bonus, du får bonus! Alla får boooonuuuuus! 💰💰💰</h2>
          </TextSplitter>
          <InView>
            <div className={style['text-section']}>
              <p>
                Hvert kvartal utbetaler Variant bonus til alle ansatte. Bonusen
                beregnes som 30% av overskuddet dette kvartalet, delt{' '}
                <strong>likt</strong> på <strong>alle ansatte</strong>. Med
                andre ord spiller det ingen rolle om du er rett fra skolebenken
                eller daglig leder.
              </p>
            </div>
            <div>
              <strong>
                Vi kan jo ikke si noe om hvor mye det blir i fremtiden, men vi
                kan jo si hva vi hatt før.
              </strong>
            </div>
          </InView>
          <BonusGraph
            bonus={[...getHistoricBonus, ['Gjenomsnitt', getAverageBonus()]]}
          />
        </CalculatorMain>
      </CalculatorSection>

      <CalculatorSection>
        <CalculatorMain>
          <TextSplitter>
            <h2>Pensjon? Pensjon!</h2>
          </TextSplitter>
          <InView>
            <div className={style['text-section']}>
              <p>
                Vi føler oss jo slett ikke gamle her i Variant. Vi er likevel
                opptatt av en god pensjon. Vi har valgt en pensjonssparing som
                går laaangt utover det lovpålagte 2%.
              </p>
            </div>

            <Pension yearlySalary={payscale.current} />
          </InView>
        </CalculatorMain>
      </CalculatorSection>

      <CalculatorSection>
        <CalculatorMain>
          <TextSplitter>
            <h2>Hvordan det fungerar i</h2>
          </TextSplitter>
          <InView>
            <div className={style['text-section']}>
              <p>
                Grafen nedan visar historisk ökning av lön i Variant givet en
                erfarenhet av {totalExperience}.
              </p>
            </div>
          </InView>
          <SalaryGraph payscale={payscale} />
        </CalculatorMain>
      </CalculatorSection>

      <CalculatorSection>
        <CalculatorMain>
          <TextSplitter>
            <h2>
              Så, med det sagt så er det {daysUntilSalaryRaise(new Date())}{' '}
              dager til lønnsøkning.
            </h2>
          </TextSplitter>
          <InView>
            <div className={style['text-section']}>
              <p>
                Som du kanske notert så är det erfaring som bestemmer lønn i
                Variant. Det mener vi er likt og rettferdig. Og neste år har du
                jo blitt mer erfaren, ikke sant? Så vi justerar lønn rett etter
                starten av året basert på Teknas statstikk [noe om det]. Ingen
                mer vanskelige lønnsforhandlinger — ingen likte de jo!
              </p>
              <p>
                PS: Vi regner og foreldreperm som erfaring.{' '}
                <span aria-label="baby" role="img">
                  👶 🍼
                </span>
              </p>
            </div>
          </InView>
        </CalculatorMain>
      </CalculatorSection>

      <CalculatorSection>
        <CalculatorMain>
          <TextSplitter>
            <h2>
              Variant tar fri hele julen!{' '}
              <span aria-label="jul" role="img">
                🎅🏻
              </span>
            </h2>
          </TextSplitter>
          <InView>
            <div className={style['text-section']}>
              <p>
                {' '}
                Det vil si at du slipper bruke dine feriedager i jula. I{' '}
                {thisYear} er det {numberOfWorkingDaysInChristmas(thisYear)}{' '}
                dager du kan bruke på en lengre sommerferie, det!
              </p>
            </div>
          </InView>
        </CalculatorMain>
      </CalculatorSection>

      <CalculatorSection>
        <CalculatorMain>
          <TextSplitter>
            <h3>De små stora sakerna, eller de (andre betingelser) </h3>
          </TextSplitter>
          <InView>
            <ul>
              <li>Gadgetbudsjett på 10 000</li>
              <li>Dekt telefonabonnement</li>
              <li>Dekt bredbånd hjemme</li>
              <li>
                Treningsmedlemskap eller treningsutstyr{' '}
                <span aria-label="trening" role="img">
                  👟🏋️🎿
                </span>
              </li>
            </ul>
          </InView>
          <InView>
            <h5>Familie</h5>
            <ul>
              <li>
                Full lønn under permisjon. NAV dekker opp til{' '}
                <span>{formatCurrencyFromNumber(ONE_G * 6)}</span> (6G). Variant
                tar sig av resten.
              </li>
              <li>
                [Note to self: om man inte har arbetat upp 9 månader så betalat
                vi ändå permisjon?]
              </li>
              <li>Betalt 2 uker permisjon for partner etter fødsel.</li>
              <li>2 (betalte?) dager til barnehagetilvenning.</li>
              <li>
                Utvidede rettigheter til egenmelding og sykepenger. (Vad betyder
                detta egentligen?)
              </li>
              <li>
                Ansatte som er i foreldrepermisjon eller som er sykemeldte får
                full bonus
              </li>
              <li>
                Reiseforsikring for deg og din familie.
                <span aria-label="tog" role="img">
                  🚂{' '}
                </span>
              </li>
              <li>God behandlingsforsikring.</li>
            </ul>
          </InView>
          <InView>
            <p>
              Konferanser Faglig litteratur, Kurser, Årlig Varianttur (London,
              Øye, Kragerø, København) Detaljer finner du i Håndboken vår.
            </p>
          </InView>
        </CalculatorMain>

        {/* <CalculatorAside></CalculatorAside> */}
      </CalculatorSection>
    </div>
  );
};
