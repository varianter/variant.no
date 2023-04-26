import React from 'react'

type WhiteTextProps = {
    children: React.ReactNode
  }

export const WhiteText = ({children}: WhiteTextProps) => {
  return (
    <div style={{color: "white"}}>
      {children} 
    </div>
  )
}
