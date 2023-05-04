import React from 'react'
import style from "./flexbox.module.css"

type FlexBoxProps = {
    children: React.ReactNode
  }

export const Flexbox = ({children}: FlexBoxProps) => {
  const childArray = React.Children.toArray(children)
  return (
    <div className={style.flexbox}>
      {childArray.map((child) => {
          return child
        })}
    </div>
  )
}
