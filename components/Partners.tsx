import Link from 'next/link'
import React from 'react'
import { SiSkillshare, SiUdemy, SiEdx ,SiCoursera } from 'react-icons/si'

const PartnersList = [
  {name: 'Skillshare', icon: <SiSkillshare size={100} />, href: 'https://www.skillshare.com/'},
  {name: 'Udemy', icon: <SiUdemy size={100} />, href: 'https://www.udemy.com/'},
  {name: 'Edx', icon: <SiEdx size={100} />, href: 'https://www.edx.org/'},
  {name: 'Coursera', icon: <SiCoursera size={100} />, href: 'https://www.coursera.org/'},
] as {name: string, icon: JSX.Element, href: string}[]


const Partners = () => {
  return (
    <section className='flex flex-col items-center gap-10 bg-secondary_bg py-10 mt-10 px-8 md:px-20 lg:px-30'>
      <h2 className='text-4xl font-semibold text-primary'> شركاؤنا<span className='text-rose-950'> الموثوقين</span>
      </h2>
        <div className='flex gap-20 text-text-1 flex-row-reverse flex-wrap'>
          {
            PartnersList.map((partner)=>(
              <Link target='_blank' href={partner.href} key={partner.name}>
                {partner.icon}
              </Link>
            ))
          }
        </div>
    </section>
  )
}

export default Partners