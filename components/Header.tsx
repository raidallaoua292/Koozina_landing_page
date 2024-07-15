"use client";

import Link from 'next/link'
import { useState } from 'react'
import Button from './_ui/Buttun'

const Links= [
  {name: 'الدورات', href: '#courses'},
  {name: 'الأسعار', href: '#pricing'},
  {name: 'المدونة', href: '#blog'},
  {name: 'الدخول', href: '#login'},

]

const Header = () => {

  const [activeLink, setActiveLink] = useState('')

  return (
    <header className='flex justify-between items-center px-8 md:px-20 lg:px-30 '>
      <h1 className=' text-3xl md:text-4xl font-bold text-primary'
        onClick={()=>setActiveLink('')}
      >
        <Link href={`/`}>
          كوزينة.
        </Link>
      </h1>
      <nav className='flex items-center gap-10'>
        <ul className='hidden md:flex items-center gap-6 lg-gap-8 text-text-1 text-lg lg:text-xl'>
          {
            Links.map((link)=>(
              <li className={`cursor-pointer hover:text-text_pr transition-colors duration-300 ease-in-out ${link.name === activeLink ? 'text-text_pr' : ''}`}
              onClick={()=> setActiveLink(link.name)}
                  key={link.name}>
                <Link href={link.href}>
                    {link.name}
                </Link>
              </li>
            ))
          }
          
        </ul>
        <Button customStyles='text-lg lg:text-xl'>
            ابدأ الأن
          </Button>
      </nav>
    </header>
  )
}

export default Header