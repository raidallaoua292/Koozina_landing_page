import Image from 'next/image'
import React from 'react'

const TeacherCard = () => {
  return (
    <div className='max-w-96 drop-shadow-xl'>
      <Image src='/teacher3.jpeg' alt='Teacher' width={300} height={300} className='rounded-lg w-full object-contain  '/>
      <div className='w-full text-center mt-4'>
        <h3 className='text-2xl text-text_pr font-semibold'>ستيف ديلان</h3>
        <p className='text-base text-primary'>سوشي مايسترو</p>
      </div>
    </div>
  )
}

export default TeacherCard