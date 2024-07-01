import React from 'react';
import { MenyButton } from './components/buttons/meny';
import { Contact } from './components/contact/contact';
import { Flexbox } from './components/flexBox/flexbox';
import { Label } from './components/label/label';
import Meny from './components/meny/meny';
import { WhiteText } from './components/whiteText';
import style from './startskudd.module.css';
import TimeSchedule from './components/timeSchedule/timeSchedule';
import LinkButton from './components/buttons/linkButton';
import Clock from './components/clock/clock';
import Carousel from './components/carousel/carousel';
import Head from 'next/head';
import favicon from '@variant/profile/lib/logo/favicon.png';
const Startskudd = () => {
  return (
    <div className={style.startskudd}>
      <Head>
        <title>Startskudd</title>
        <link rel="icon" href={favicon} />
      </Head>
      <WhiteText>
        <Clock />
        <nav className={style.startskudd__backButton}>
          <LinkButton href="/">👈 til variant.no</LinkButton>
          <p>Scroll 👉</p>
        </nav>
        <div className={style.startskudd__wrapper}>
          <div className={style.startskudd__content}>
            <section id="Velkommen" className={style.startskudd__section1}>
              <div className={style.startskudd_right}>
                <Label>Velkommen</Label>
              </div>
              <p className={style.startskudd__content_ingress}>
                ❤️ Velkommen til
              </p>
              <h1 className={style.startskudd__h1}>Startskudd!!!</h1>
              <p>
                Startskudd er vårt skreddersydde onboardingsløp for deg som er
                nyutdannet og eller ny i Variant. Målet er ganske enkelt å gi
                deg den aller beste starten på arbeidslivet!
              </p>
              <p>
                Gjennom en uke med faglig og sosialt opplegg skal vi sørge for å
                gi deg trygghet i rollen som konsulent, introduksjon til
                Variants fagdisipliner og verdier, og ikke minst en
                helhetsforståelse rundt prosjektarbeid. Så skal vi selvfølgelig
                også bygge relasjoner på tvers av byer og ansiennitet!
              </p>
            </section>

            <section id="Meny">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🍽 Meny</h2>
                <Label>Meny</Label>
              </Flexbox>
              <Meny>
                <MenyButton text="Praktisk info" emoji="📌" />
                <MenyButton text="Kontakt" emoji="💬" />
                <MenyButton text="Søndag" emoji="🐨" />
                <MenyButton text="Mandag" emoji="🐳" />
                <MenyButton text="Tirsdag" emoji="🐥" />
                <MenyButton text="Onsdag" emoji="🐽" />
                <MenyButton text="Torsdag" emoji="🦦" />
                <MenyButton text="Startskudd 22" emoji="🖼️" />
              </Meny>
            </section>

            <section id="Praktisk info">
              <Flexbox>
                <h2 className={style.startskudd__h2}>📌 Praktisk info</h2>
                <Label>Praktisk info</Label>
              </Flexbox>
              <div className={style.startskudd__info}>
                <div>
                  <p>Start:</p>
                  <p>Søndag, 4. august, 17:00</p>
                </div>
                <div>
                  <p>Sted:</p>
                  <p>Oppdal</p>
                </div>
                <div>
                  <p>Avreise:</p>
                  <p>Søndag, 4. august</p>
                </div>
                <div>
                  <p>Retur:</p>
                  <p>Torsdag, 8. august</p>
                </div>
              </div>
              <p className={style.startskudd__info_p}>
                Vi trenger også å vite noen ting om deg, ang matallergier osv!
                Vennligst fyll ut denne:
              </p>
              <LinkButton
                fullWidth={true}
                href={'https://forms.office.com/e/HQx7CiZd36'}
              >
                Spørreundersøkelse ➡️
              </LinkButton>
            </section>

            <section id="Kontakt">
              <Flexbox>
                <h2 className={style.startskudd__h2}>💬 Kontakt</h2>
                <Label>Kontakt</Label>
              </Flexbox>
              <Contact
                firstName="Malin"
                surname="Karlsen"
                email="mck@variant.no"
                phoneNumber="+47 958 03 427"
              />
              <Contact
                firstName="Stina Sofie"
                surname="Møller"
                email="ssm@variant.no"
                phoneNumber="+47 991 28 750"
              />
              <Contact
                firstName="Morten"
                surname="Nordseth"
                email="mn@variant.no"
                phoneNumber="+47 958 49 813"
              />
            </section>

            <section id="Søndag">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🐨 Søndag 04.08.</h2>
                <Label>Søndag</Label>
              </Flexbox>
              <TimeSchedule time={'17:00'} activity={'Innsjekk Bjerkeløkkja'} />
              <TimeSchedule
                time={'19:00'}
                activity={'Middag'}
                activityDescription="Dagens 3-retter på Bjerkeløkkja"
              />
            </section>

            <section id="Mandag">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🐳 Mandag 05.08.</h2>
                <Label>Mandag</Label>
              </Flexbox>
              <TimeSchedule time={'07:00'} activity={'Frokost'} />
              <TimeSchedule
                time={'08:00'}
                activity={'Introduksjon til caset'}
                activityDescription="Vi møter ukens kunde og får presentert caset som vi skal jobbe med hele uka"
              />
              <TimeSchedule time={'11:30'} activity={'Lunsj på Bjerkeløkkja'} />
              <TimeSchedule time={'12:30'} activity={'Casearbeid'} />
              <TimeSchedule
                time={'17:00'}
                activity={'Middag'}
                activityDescription="Selvhushold på mellomseterstuggu"
              />
            </section>

            <section id="Tirsdag">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🐥 Tirsdag 06.08.</h2>
                <Label>Tirsdag</Label>
              </Flexbox>
              <TimeSchedule time={'07:00'} activity={'Frokost'} />
              <TimeSchedule
                time={'08:00'}
                activity={'Hvordan være en Variant-konsulent v/Mikael'}
              />
              <TimeSchedule time={'09:00'} activity={'Casearbeid'} />
              <TimeSchedule
                time={'11:30'}
                activity={'Lunsj'}
                activityDescription="Selvhushold på mellomseterstuggu"
              />
              <TimeSchedule time={'12:30'} activity={'Casearbeid'} />
              <TimeSchedule
                time={'17:00'}
                activity={'Aktivitetsløype på Bjerkeløkkja'}
              />
              <TimeSchedule
                time={'19:00'}
                activity={'Middag'}
                activityDescription="Selvhushold på mellomseterstuggu"
              />
            </section>

            <section id="Onsdag">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🦧 Onsdag 07.08.</h2>
                <Label>Onsdag</Label>
              </Flexbox>
              <TimeSchedule time={'07:00'} activity={'Frokost'} />
              <TimeSchedule
                time={'08:00'}
                activity={'Intro til positiv psykologi v/Linn'}
                activityDescription="Hvorfor er det viktig med styrkebasert tilnærming og fokus på mental helse? Hvordan kan vi aktivt jobbe med egen mentale helse, og hvordan gjør vi det i Variant? Og hva er egentlig positiv psykologi, kun å tenke positivt?"
              />
              <TimeSchedule time={'09:00'} activity={'Casearbeid'} />
              <TimeSchedule
                time={'11:30'}
                activity={'Lunsj'}
                activityDescription="Selvhushold på mellomseterstuggu"
              />
              <TimeSchedule time={'12:30'} activity={'Casearbeid'} />
              <TimeSchedule time={'16:00'} activity={'Mellommåltid'} />
              <TimeSchedule time={'17:00'} activity={'Fjelltur ⛰️'} />
              <TimeSchedule
                time={'20:00'}
                activity={'Middag'}
                activityDescription="Vi griller hvis været tillater det 🍢"
              />
            </section>

            <section id="Torsdag">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🦦 Torsdag 08.08.</h2>
                <Label>Torsdag</Label>
              </Flexbox>
              <TimeSchedule time={'07:00'} activity={'Frokost og utsjekk'} />
              <TimeSchedule time={'08:00'} activity={'Casearbeid'} />
              <TimeSchedule
                time={'10:00'}
                activity={'Presentasjon av casearbeidet for kunde'}
              />
              <TimeSchedule time={'11:30'} activity={'Oppsummering av uka'} />
              <TimeSchedule
                time={'12:00'}
                activity={'Lunsj i sentrum og hjemreise'}
              />
            </section>

            <section id="Startskudd 22">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🖼️ Startskudd 22</h2>
                <Label>Startskudd 22</Label>
              </Flexbox>
              <p>Enda nysgjerrig? Les hvordan Startskudd var i 2022!</p>
              <LinkButton
                fullWidth={true}
                href={
                  'https://blog.variant.no/klar-ferdig-g%C3%A5-startskudd-2022-c2af1f8faad'
                }
              >
                Les bloggpost 👩‍💻
              </LinkButton>
              <Carousel />
            </section>
          </div>
        </div>
      </WhiteText>
    </div>
  );
};

export default Startskudd;
