import Image from 'next/image'
import React from 'react'

type TeacherCardProps = {
  img: string;
  name: string;
  title: string;
}

const TeacherCard = ({ img, name, title }: TeacherCardProps) => {
  return (
    <div className='max-w-96 drop-shadow-xl'>
      <Image src={img} alt='Teacher' width={300} height={300} className='rounded-lg w-full object-contain  '/>
      <div className='w-full text-center mt-4'>
        <h3 className='text-2xl text-text_pr font-semibold'>{name} </h3>
        <p className='text-base text-primary'> {title} </p>
      </div>
    </div>
  )
}

export default TeacherCard