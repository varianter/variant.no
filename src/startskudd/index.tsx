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
const Startskudd = () => {
  return (
    <div className={style.startskudd}>
      <WhiteText>
        <div className={style.startskudd__content}>
          <div className={style.startskudd_right}>
            <Label>Velkommen</Label>
          </div>
          <p id="Velkommen" className={style.startskudd__content_ingress}>
            ❤️ Velkommen til
          </p>
          <h1 className={style.startskudd__h1}>Startskudd!!!</h1>
          <p>
            Vi gleder oss så masse at du er med på laget! Nedenfor finner du
            svar på nesten alt du kunne lure på , fra praktisk info til program
            og kontaktpersoner.
          </p>

          <Flexbox>
            <h2 id="Meny" className={style.startskudd__h2}>
              🍽 Meny
            </h2>
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

          <Flexbox>
            <h2 id="Praktisk info" className={style.startskudd__h2}>
              📌 Praktisk info
            </h2>
            <Label>Praktisk info</Label>
          </Flexbox>

          <AccordianButton title="Lunsj" text="Lunsj" />
          <AccordianButton title="start/sluttid" text="start/sluttid" />
          <AccordianButton title="Lønn" text="Lønn" />
          <AccordianButton title="Kunde" text="Kunde" />

          <Flexbox>
            <h2 id="Kontakt" className={style.startskudd__h2}>
              💬 Kontakt
            </h2>
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

          <Flexbox>
            <h2 id="Mandag" className={style.startskudd__h2}>
              🐳 Mandag 08.08.
            </h2>
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
          <TimeSchedule time={'17:00 - 18:00'} activity={'Vidsyn v/ Tonje'} />
          <TimeSchedule
            time={'18:00 - 21:00'}
            activity={'Felles middag & sosial happening'}
          />
        </div>
      </WhiteText>
    </div>
  );
};

export default Startskudd;
