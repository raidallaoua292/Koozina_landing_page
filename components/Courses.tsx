import React from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import CoursesCard from './_ui/CoursesCard';
import Btn from './_ui/Btn';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const courseDetails = [
  {
    img: '/couresCard1.jpeg',
    title: 'أسرار المطبخ المغربي :دورة ممتعة',
    lessons: 40,
    hours: 20,
    students: 655,
    teacher: ['محمد']
  },
  {
    img: '/couresCard2.jpeg',
    title: 'السلطة: نكهات طازجة، أصناف لا نهاية لها',
    lessons: 30,
    hours: 12,
    students: 655,
    teacher: ['جميس كينغ']
  },
  {
    img: '/couresCard3.jpeg',
    title: 'تذوق العالم عبر الطعام: النكهات العالمية',
    lessons: 15,
    hours: 20,
    students: 655,
    teacher: ['سارة مزياني']
  },
  
]


const Courses = () => {



  return (
    <section id='courses' className='  mt-20 px-8 md:px-20 lg:px-30'>
      <div className='flex justify-between items-end'>
        
        <h2 className=' text-[48px]/[70px] font-semibold text-text_pr'>
        <Btn fontSize='text-lg'>دوراتنا الرائجة</Btn>
          اختر <span className='text-primary'> دورة </span> تناسبك <br />
          وابدء في تعلم فنون الطبخ
        </h2> 
        <div className='flex items-center gap-3 text-4xl'>
          <FaAngleRight className='border-2  border-stone-500 text-stone-500 rounded-full p-2 w-12 h-12 cursor-pointer' />
          <FaAngleLeft className='border rounded-full p-2 w-12 h-12 bg-primary text-white cursor-pointer' />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 '>
        {courseDetails.map((course, index) => (
          <CoursesCard key={index} img={course.img} title={course.title} lessons={course.lessons} hours={course.hours} students={course.students} teacher={course.teacher} />
        ))}
      </div>
    </section>
  )
}

export default Courses