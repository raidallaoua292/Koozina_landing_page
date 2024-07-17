import Image from 'next/image'
import React from 'react'

type CardPropes ={
  img: string;
  title: string;
  lessons: number;
  hours: number;
  students: number;
  date: string;
}
const title = " تذوق اليابان : عبر رحلة الطهي  "
const description = " انضم إلى الشيف الياباني الشهير ماساهارو موريموتو في رحلة طهي لا تنسى تتضمن العديد من الأطباق اليابانية الشهية والمفضلة لديه. اكتشف النكهات الفريدة والتقنيات الطهوية اليابانية التقليدية والحديثة. "
const date = " ١٥ يونيو ٢٠٢١ "

const BlogCard = () => {
  return (
    <div className='bg-white p-4 rounded-lg flex flex-col gap-4 drop-shadow-xl'>
      <Image src='/couresCard_7.jpg' alt='Courses Card' width={300} height={250} className='rounded-lg -full '/>
      <h3 className='text-2xl font-semibold text-text_pr'>{title} </h3>
      <p className='text-base text-stone-500 line-clamp-4'>{description}</p>
      <span className='text-primary'>{date}</span>
    </div>
  )
}

export default BlogCard