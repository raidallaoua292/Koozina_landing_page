import React from 'react'
import TestMnueCard from './_ui/TestMnueCard'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

const TestMnue = () => {
  
  return (
    <section className='mt-20 flex flex-col items-center gap-10 px-8 md:px-20 lg:px-30'>
      <h2 className='text-4xl text-center font-semibold text-text_pr'>ماذا يقول  <span className='text-primary '>طلابنا </span> <br />
      عن منصتنا
      </h2>
      <p className='text-base text-stone-500 text-center -mt-5'>
        اطلع على مدى إعجاب طلابنا المتميزين بتجربتهم في رحلة تعلم <br />
        فنون الطهي معنا وكيف أثرت على تطوير مهاراتهم

      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-20 mt-10'>
      <TestMnueCard/>
      <TestMnueCard/>
      <TestMnueCard/>
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

export default TestMnue