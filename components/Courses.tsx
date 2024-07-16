'use client'
import { useState, useEffect } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import CoursesCard from './_ui/CoursesCard';
import Btn from './_ui/Btn';

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
  {
    img: '/couresCard1.jpeg',
    title: 'فن الحلويات: أشهى الوصفات',
    lessons: 25,
    hours: 18,
    students: 450,
    teacher: ['علي حسن']
  },
  {
    img: '/couresCard2.jpeg',
    title: 'الطهي الصحي: نصائح ووصفات',
    lessons: 20,
    hours: 15,
    students: 350,
    teacher: ['ندى سعيد']
  }
]

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(3)


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % courseDetails.length);
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + courseDetails.length) % courseDetails.length);
  }

  const getVisibleCourses = () => {
    let visibleCourses = [];
    
    for (let i = 0; i < cardsPerPage; i++) {
      const index = (currentIndex + i) % courseDetails.length;
      visibleCourses.push(courseDetails[index]);
    }
    return visibleCourses;
  }

  return (
    <section id='courses' className='mt-20 px-8 md:px-20 lg:px-30'>
      <div className='flex justify-between items-end'>
        <h2 className='text-[48px]/[70px] font-semibold text-text_pr'>
          <Btn fontSize='text-lg'>دوراتنا الرائجة</Btn>
          اختر <span className='text-primary'>دورة</span> تناسبك <br />
          وابدء في تعلم فنون الطبخ
        </h2>
        <div className='flex items-center gap-3 text-4xl'>
          <FaAngleRight className='border-2 border-stone-500 text-stone-500 rounded-full p-2 w-12 h-12 cursor-pointer' onClick={prevSlide} />
          <FaAngleLeft className='border rounded-full p-2 w-12 h-12 bg-primary text-white cursor-pointer' onClick={nextSlide} />
        </div>
      </div>
    <div className={` grid sm:grid-cols-2 md:grid-cols-3 place-content-center gap-8  p-5 mt-10`} >
        {getVisibleCourses().map((course, index) => (
          <CoursesCard key={index} {...course} />
        ))}               
      </div>
      

    </section>
  )
}

export default Courses;
