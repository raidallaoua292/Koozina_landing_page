import React from 'react'
import Image from 'next/image'
import { MdOutlineTimer } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";

const cardList = [

]

type CardPropes ={
  img: string;
  title: string;
  lessons: number;
  hours: number;
  students: number;
  teacher: string[];
}


const CoursesCard = ({img, title, lessons, hours, students,teacher}:CardPropes) => {

  const techers = () => {
    if(teacher.length === 1){
      return teacher[0]
    } else if(teacher.length > 1){
      return `عدة مدربين`
  }
}

  return (
    <div className='bg-white p-4 h-96 max-sm:max-w-xs rounded-lg flex flex-col justify-between gap-2 drop-shadow-xl '>
      <Image src={img} alt='Courses Card' width={300} height={250} className='rounded-lg w-full h-48'/>
      <h3 className=' text-xl lg:text-2xl font-semibold '>{title}</h3>
      <div className='flex justify-between border-b-2 text-xs lg:text-sm pb-2 text-center'>
        <p className='flex gap-2 items-center'>
          <RiPlayList2Fill className='text-primary '/>
          {lessons} درس
        </p>
        <p className='flex gap-2 items-center'>
          <MdOutlineTimer className='text-primary '/>
          {hours} ساعة
        </p>
        <p className='flex gap-2 items-center'>
        <FaRegUser className='text-primary '/>
        {students} طالب
        </p>
      </div>
      <div className={`flex items-center relative gap-3`}>
        <div className='rounded-full h-10 w-10 border-2 border-primary overflow-hidden '>
          <Image src='/teacher_1.jpg' alt='Teacher' width={200} height={100} className='h-full '/>
          {teacher.length > 1 && <div className='bg-primary text-white text-xs lg:text-sm font-semibold p-1 absolute h-10 w-10 flex items-center justify-center -translate-y-1/2 top-1/2 right-5 border-2 z-50 rounded-full'>{teacher.length - 1}+</div>}
        </div>
        {
          teacher.length > 1 ?
          <p className='text-xs lg:text-sm font-semibold mr-4'>{techers()}</p>
          :
          <p className='text-xs lg:text-sm font-semibold'>{teacher[0]}</p>
        }
      </div>
    </div>
  )
}

export default CoursesCard