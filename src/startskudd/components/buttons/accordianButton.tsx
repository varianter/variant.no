import React, { useState } from 'react'
import style from "./buttons.module.css"

type AccordianButtonProps = {
    title: string;
    text: string;
  }

const AccordianButton = ({title, text}: AccordianButtonProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
      setOpen(!open)
    }
  return (
    <div className={style.accordianButton} onClick={handleOpen}>
     <p>{title}</p>
     {open && <p>{text}</p>}
    </div>
  )
}

export default AccordianButton
