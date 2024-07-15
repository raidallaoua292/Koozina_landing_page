import React from 'react'
type BtnProps = {
  children: React.ReactNode,
  fontSize?: string
}

const Btn = ({children, fontSize}:BtnProps) => {
  return (
    <div className={`rounded-full bg-rose-200 text-rose-600 py-2 px-4 w-fit ${fontSize}`}>
      {children}
    </div>
  )
}

export default Btn