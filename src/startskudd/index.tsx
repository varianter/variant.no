import React from 'react';
import AccordianButton from './components/buttons/accordianButton';
import { MenyButton } from './components/buttons/meny';
import { Contact } from './components/contact/contact';
import { Flexbox } from './components/flexBox/flexbox';
import { Label } from './components/label/label';
import Meny from './components/meny/meny';
import { WhiteText } from './components/whiteText';
import style from './startskudd.module.css';
import TimeSchedule from './components/timeSchedule/timeSchedule';
import LinkButton from './components/buttons/linkButton';
const Startskudd = () => {
  return (
    <div className={style.startskudd}>
      <WhiteText>
        <nav className={style.startskudd__backButton}>
          <LinkButton href="/">👈 til variant.no</LinkButton>
          <LinkButton href={''}>Scroll 👉</LinkButton>
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
                <MenyButton text="Mandag" emoji="🐳" />
                <MenyButton text="Tirsdag" emoji="🐥" />
                <MenyButton text="Onsdag" emoji="🐽" />
                <MenyButton text="Torsdag" emoji="🦧" />
                <MenyButton text="Fredag" emoji="🦦" />
              </Meny>
            </section>

            <section id="Praktisk info">
              <Flexbox>
                <h2 className={style.startskudd__h2}>📌 Praktisk info</h2>
                <Label>Praktisk info</Label>
              </Flexbox>
              <AccordianButton title="Lunsj" text="Lunsj" />
              <AccordianButton title="start/sluttid" text="start/sluttid" />
              <AccordianButton title="Lønn" text="Lønn" />
              <AccordianButton title="Kunde" text="Kunde" />
            </section>

            <section id="Kontakt">
              <Flexbox>
                <h2 className={style.startskudd__h2}>💬 Kontakt</h2>
                <Label>Kontakt</Label>
              </Flexbox>
              <Contact
                firstName="Max"
                surname="Mustermann"
                email="mm@variant.no"
                phoneNumber="+47 XXX XXX XX"
              />
              <Contact
                firstName="Max"
                surname="Mustermann"
                email="mm@variant.no"
                phoneNumber="+47 XXX XXX XX"
              />
              <Contact
                firstName="Max"
                surname="Mustermann"
                email="mm@variant.no"
                phoneNumber="+47 XXX XXX XX"
              />
            </section>

            <section id="Mandag">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🐳 Mandag 08.08.</h2>
                <Label>Mandag</Label>
              </Flexbox>
              <TimeSchedule time={'07:00 - 08:00'} activity={'Frokost'} />
              <TimeSchedule
                time={'08:00 - 09:00'}
                activity={
                  'Keynote v/ Even: Tverrfaglig arbeid/kommunikasjon/presentasjon'
                }
              />
              <TimeSchedule time={'09:00 - 11:30'} activity={'Casearbeid'} />
              <TimeSchedule time={'11:30 - 12:30'} activity={'Lunsj'} />
              <TimeSchedule time={'12:30 - 16:00'} activity={'Casearbeid'} />
              <TimeSchedule time={'16:00 - 17:00'} activity={'Pause'} />
              <TimeSchedule
                time={'17:00 - 18:00'}
                activity={'Vidsyn v/ Tonje'}
              />
              <TimeSchedule
                time={'18:00 - 21:00'}
                activity={'Felles middag & sosial happening'}
              />
            </section>

            <section id="Tirsdag">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🐥 Tirsdag 09.08.</h2>
                <Label>Tirsdag</Label>
              </Flexbox>
              <TimeSchedule time={'07:00 - 08:00'} activity={'Frokost'} />
              <TimeSchedule
                time={'08:00 - 09:00'}
                activity={
                  'Keynote v/ Even: Tverrfaglig arbeid/kommunikasjon/presentasjon'
                }
              />
              <TimeSchedule time={'09:00 - 11:30'} activity={'Casearbeid'} />
              <TimeSchedule time={'11:30 - 12:30'} activity={'Lunsj'} />
              <TimeSchedule time={'12:30 - 16:00'} activity={'Casearbeid'} />
              <TimeSchedule time={'16:00 - 17:00'} activity={'Pause'} />
              <TimeSchedule
                time={'17:00 - 18:00'}
                activity={'Vidsyn v/ Tonje'}
              />
              <TimeSchedule
                time={'18:00 - 21:00'}
                activity={'Felles middag & sosial happening'}
              />
            </section>

            <section id="Onsdag">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🐽 Onsdag 10.08.</h2>
                <Label>Onsdag</Label>
              </Flexbox>
              <TimeSchedule time={'07:00 - 08:00'} activity={'Frokost'} />
              <TimeSchedule
                time={'08:00 - 09:00'}
                activity={
                  'Keynote v/ Even: Tverrfaglig arbeid/kommunikasjon/presentasjon'
                }
              />
              <TimeSchedule time={'09:00 - 11:30'} activity={'Casearbeid'} />
              <TimeSchedule time={'11:30 - 12:30'} activity={'Lunsj'} />
              <TimeSchedule time={'12:30 - 16:00'} activity={'Casearbeid'} />
              <TimeSchedule time={'16:00 - 17:00'} activity={'Pause'} />
              <TimeSchedule
                time={'17:00 - 18:00'}
                activity={'Vidsyn v/ Tonje'}
              />
              <TimeSchedule
                time={'18:00 - 21:00'}
                activity={'Felles middag & sosial happening'}
              />
            </section>

            <section id="Torsdag">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🦧 Torsdag 11.08.</h2>
                <Label>Torsdag</Label>
              </Flexbox>
              <TimeSchedule time={'07:00 - 08:00'} activity={'Frokost'} />
              <TimeSchedule
                time={'08:00 - 09:00'}
                activity={
                  'Keynote v/ Even: Tverrfaglig arbeid/kommunikasjon/presentasjon'
                }
              />
              <TimeSchedule time={'09:00 - 11:30'} activity={'Casearbeid'} />
              <TimeSchedule time={'11:30 - 12:30'} activity={'Lunsj'} />
              <TimeSchedule time={'12:30 - 16:00'} activity={'Casearbeid'} />
              <TimeSchedule time={'16:00 - 17:00'} activity={'Pause'} />
              <TimeSchedule
                time={'17:00 - 18:00'}
                activity={'Vidsyn v/ Tonje'}
              />
              <TimeSchedule
                time={'18:00 - 21:00'}
                activity={'Felles middag & sosial happening'}
              />
            </section>

            <section id="Fredag">
              <Flexbox>
                <h2 className={style.startskudd__h2}>🦦 Fredag 12.08.</h2>
                <Label>Fredag</Label>
              </Flexbox>
              <TimeSchedule time={'07:00 - 08:00'} activity={'Frokost'} />
              <TimeSchedule
                time={'08:00 - 09:00'}
                activity={
                  'Keynote v/ Even: Tverrfaglig arbeid/kommunikasjon/presentasjon'
                }
              />
              <TimeSchedule time={'09:00 - 11:30'} activity={'Casearbeid'} />
              <TimeSchedule time={'11:30 - 12:30'} activity={'Lunsj'} />
              <TimeSchedule time={'12:30 - 16:00'} activity={'Casearbeid'} />
              <TimeSchedule time={'16:00 - 17:00'} activity={'Pause'} />
              <TimeSchedule
                time={'17:00 - 18:00'}
                activity={'Vidsyn v/ Tonje'}
              />
              <TimeSchedule
                time={'18:00 - 21:00'}
                activity={'Felles middag & sosial happening'}
              />
            </section>
          </div>
        </div>
      </WhiteText>
    </div>
  );
};

export default Startskudd;
