import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  customStyles?: string;
}

const Button = ({ children, customStyles }: ButtonProps) => {
  return (
    <button className={`${customStyles} bg-primary text-white px-8 py-2 rounded-xl `}>
      {children}
    </button>
  )
}

export default Button
