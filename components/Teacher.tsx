import React from 'react'
import TeacherCard from './_ui/TeacherCard'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

const teacherList = [
  {
    img: '/teacher_5.jpg',
    name: 'ستيف ديلان',
    title: 'سوشي مايسترو'
  },
  {
    img: '/teacher_6.jpg',
    name: 'جينيفر لوبيز',
    title: 'مدربة الحلويات'
  },
  {
    img: '/teacher_3.jpg',
    name: 'محمد علي',
    title: 'مدرب الطهي الصحي'
  }

]


const Teacher = () => {
  return (
    <section id='teacher' className='flex flex-col items-center gap-10 mt-20 px-8 md:px-20 lg:px-30'>
      <h2 className='text-[48px] font-semibold text-text_pr'>اكتشف <span className='text-primary'>المدربين </span>
      </h2>
      <p className='text-base text-stone-500 text-center -mt-5'>
        انطلق في رحلة اكتشاف الطهي مع فريقنا المتنوع من المدربين الماهرين. <br />
        كل واحد منهم يقدم خبرته الفريدة.
      </p>
      <div className='grid grid-cols-3 gap-8 '>
        {teacherList.map((teacher, index) => (
          <TeacherCard key={index} {...teacher} />
        ))}
      </div>
      <div className='flex items-center gap-3 text-4xl max-md:hidden'>
          <FaAngleRight className='border  border-stone-500 text-stone-500 rounded-full p-2 w-12 h-12 cursor-pointer' />
          <div className='h-0.5 w-96 bg-stone-500 rounded-full relative'>
              <div className='absolute right-0 top-[1px] -translate-y-1/2 rounded-full h-1 w-32 bg-primary z-10 '></div>
          </div>
          <FaAngleLeft className='border rounded-full p-2 w-12 h-12 bg-primary text-white cursor-pointer' />
      </div>
    </section>
  )
}

export default Teacher