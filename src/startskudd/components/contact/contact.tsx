import React from 'react';
import style from './contact.module.css';

type ContactProps = {
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: string;
};

export const Contact = ({
  firstName,
  surname,
  email,
  phoneNumber,
}: ContactProps) => {
  return (
    <div className={style.contact}>
      <div className={style.contact_left}>
        <p>{firstName}</p>
        <p>{surname}</p>
      </div>
      <div className={style.contact_right}>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
};
