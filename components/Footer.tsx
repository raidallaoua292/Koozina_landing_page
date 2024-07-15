import { info } from 'console';
import Link from 'next/link'
import React from 'react'
import { FaFacebookF,  FaInstagram, FaTiktok  } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from 'react-icons/fa6';

const footerLinks = [
  {
    title: "معلوماتنا",
    links: [
      {title: "من نحن", href: "/about"},
      {title: "المدربين  لدينا", href: "/courses"},
      {title: "المدونة", href: "/blog"},
      {title: "الشهادات", href: "/pricing"},
    ]
  },
  {
    title: "الموقع",
    links: [
      {title: "معلومات الاتصال ", href: "/terms"},
      {title: "الحماية والامان", href: "/privacy"},
      {title: "البنود و الشروط", href: "/cookie"},
      {title: "سياسة الخصوصية", href: "/sitemap"},
    ]
  },
  {
    title: "المصادر",
    links: [
      {title: "الأسعار", href: "/pricing"},
      {title: "اعمل معنا", href: "/pricing"},
      {title: "دورات مجانية", href: "/pricing"},
      {title: "التسويق بالعمولة", href: "/pricing"},
      {title: "مركز المساعدة", href: "/pricing"},
      
    ]
  },
  {
    title: "Social",
    icon: [
      {icon: <FaFacebookF />, href: "https://www.facebook.com"},
      {icon: <FaInstagram />, href: "https://www.instagram.com"},
      {icon: <FaTiktok />, href: "https://www.tiktok.com"},
      {icon: <FaXTwitter />, href: "https://www.twitter.com"},
      {icon: <FaYoutube />, href: "https://www.youtube.com"},
    ]
  }
];

const Footer = () => {
  return (
    <footer className='mt-20 px-8 md:px-20 lg:px-30'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-b-2 pb-6
      '>
        <div>
          <h1 className=' text-3xl md:text-4xl font-bold text-primary'
          >
            <Link href={`/`}>
              كوزينة.
            </Link>
          </h1>
          <p className='mb-5 mt-2'>
            تعلم فنون الطبخ
          </p>
          <div className='flex items-center gap-1'>
            {footerLinks[3]?.icon?.map((item)=>(
              <div className='h-6 w-6 p-1 text-base bg-primary text-primary_bg flex items-center justify-center rounded-full'>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className='text-xl font-semibold'>معلوماتنا</h3>
          <ul className='mt-5'>
            {footerLinks[0]?.links?.map((link)=>(
              <li key={link.title} className='cursor-pointer hover:text-text_pr transition-colors duration-300 ease-in-out'>
                <Link href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-xl font-semibold'>الموقع</h3>
          <ul className='mt-5'>
            {footerLinks[1]?.links?.map((link)=>(
              <li key={link.title} className='cursor-pointer hover:text-text_pr transition-colors duration-300 ease-in-out'>
                <Link href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-xl font-semibold'>المصادر</h3>
          <ul className='mt-5'>
            {footerLinks[2]?.links?.map((link)=>(
              <li key={link.title} className='cursor-pointer hover:text-text_pr transition-colors duration-300 ease-in-out'>
                <Link href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className='text-center mt-5'>
        جميع الحقوق محفوظة &copy; 2023
      </p>
    </footer> 
  )
}

export default Footer