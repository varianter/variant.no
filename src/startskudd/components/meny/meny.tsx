import React from 'react'
import style from "./meny.module.css"

type MenyProps = {
    children: React.ReactNode
  }

const Meny = ({children}: MenyProps) => {
  const childrenArray = React.Children.toArray(children)
  return (
    <div className={style.meny}>
      {childrenArray.map((child) => {
          return child
        })}
    </div>
  )
}

export default Meny
