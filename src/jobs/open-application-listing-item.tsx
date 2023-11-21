import React from 'react';
import { ButtonNextLink } from 'src/components/button';
import { and } from 'src/utils/css';
import style from './index.module.css';

const emailSubject = "Åpen søknad - Oslo/Trondheim/Bergen";
const emailBody = 
`
Så hyggelig at du ønsker å jobbe hos oss!

Tips: Husk å oppdatere emnefeltet med hvilken by du ønsker å skrive til, så vet vi hvem som skal svare deg.
`;
const mailtoLink = `mailto:soknad@variant.no?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

export default function OpenApplicationListingItem() {  
  return (
    <section className={style.job__listing__container}>
      <div>
        <h3 className={and(style.job__title, 'fancy')}>Åpen Søknad</h3>
        <span>Finner du ikke en stilling som passer deg?</span>
      </div>
      <ButtonNextLink href={mailtoLink} aria-label="Send en åpen søknad">
        Send en åpen søknad
      </ButtonNextLink>
    </section>
  );
}