import React from 'react'
import Image from 'next/image'

const TestMnueCard = () => {
  return (
    <div className='rounded-xl  bg-white p-3 flex flex-col items-center gap-3 text-center drop-shadow-xl'>
      <Image src='/teacher_8.jpg' alt='Testmonial' width={100} height={100} className='rounded-full w-30 h-30 border -mt-16'/>
      <h4 className='font-bold text-xl text-text_pr'> 
        احمد م
      </h4>
      <span className='text-text-1 text-sm -mt-2'>
        بركان ، المغرب
      </span>
      <p className='text-stone-500 text-base'>
        تجربة تعلم الطهي رائعة!
        لقد قمت بالتسجيل في دورة "Salad
        Symphony". وأنا مندهشة من مقدار ما
        تعلمته في بضع جلسات فقط. المدربون
        متحمسون وواسعو المعرفة .
      </p>
    </div>
  )
}

export default TestMnueCard