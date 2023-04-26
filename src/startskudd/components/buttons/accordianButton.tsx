import React, { useState } from 'react';
import style from './buttons.module.css';

type AccordianButtonProps = {
  title: string;
  text: string;
};

const AccordianButton = ({ title, text }: AccordianButtonProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <button className={style.accordianButton} onClick={handleOpen}>
      <p>{title}</p>
      {open && <p className={style.accordianButton__text}>{text}</p>}
    </button>
  );
};

export default AccordianButton;
