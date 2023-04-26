import React from 'react'
import AccordianButton from './components/buttons/accordianButton';
import { MenyButton } from './components/buttons/meny';
import { Flexbox } from './components/flexBox/flexbox';
import { Label } from './components/label/label';
import Meny from './components/meny/meny';
import { WhiteText } from './components/whiteText'
import style from './startskudd.module.css'
const Startskudd = () => {
  return (
    <div className={style.startskudd}>
      <WhiteText>
        <div className={style.startskudd__content}>
          <div className={style.startskudd_right}>
            <Label>Velkommen</Label>
          </div>
          <p id="Velkommen" className={style.startskudd__content_ingress}>❤️  Velkommen til</p>
          <h1 className={style.startskudd__h1}>Startskudd!!!</h1>  
          <p>Vi gleder oss så masse at du er med på laget! Nedenfor finner du svar på nesten alt du kunne lure på             , fra praktisk info til program og kontaktpersoner.</p>
          <Flexbox>
            <h2 id="Meny" className={style.startskudd__h2}>🍽 Meny</h2>
            <Label>Meny</Label>
          </Flexbox> 
          <Meny>
            <MenyButton text="Praktisk info" emoji='📌'/>
            <MenyButton text="kontakt" emoji='💬'/>
            <MenyButton text="Mandag" emoji='🐳'/>
            <MenyButton text="Tirsdag" emoji='🐥'/>
            <MenyButton text="Onsdag" emoji='🐽'/>
            <MenyButton text="Torsdag" emoji='🦧'/>
            <MenyButton text="Fredag" emoji='🦦'/>
          </Meny>
          <Flexbox>
            <h2 id="Praktisk info" className={style.startskudd__h2}>📌 Praktisk info</h2>
            <Label>Praktisk info</Label>
          </Flexbox>
          <AccordianButton title="Lunsj" text="Lunsj"/>
        </div>
      </WhiteText>
    </div>
  );
}

export default Startskudd;
