import React from 'react'
import Btn from './_ui/Btn'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Button from './_ui/Buttun'
import BlogCard from './_ui/BlogCard'

const Blog = () => {
  return (
    <section id='blog' className='flex flex-col bg-rose-100 py-20 gap-10 mt-20 px-8 md:px-20 lg:px-30'>
      <div className='flex justify-between items-end flex-wrap gap-8'>
        <div>
          <h2 className=' text-[48px]/[70px] max-sm:text-3xl font-semibold text-text_pr'>
            <Btn fontSize='text-lg'>دوراتنا الرائجة</Btn>
            المصادر و الرؤى
          </h2>
          <p className='text-base text-stone-500'> 
            أطلق العنان لثروة من المعرفة الطهوية من خلال قسم الموارد والرؤى لدينا - مكانك <br />
            المفضل للحصول على نصائح الخبراء، ووصفات الطعام، وفنون الطبخ التي لا تقدر بثمن.
          </p>
        </div>
        <Button customStyles='text-xl !text-primary bg-rose-100 border-2 border-primary hover:!text-white '> إكتشف</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </section>
  )
}

export default Blog