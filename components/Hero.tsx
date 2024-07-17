import React from 'react'
import Image from 'next/image'
import Button from './_ui/Buttun'

const Hero = () => {
  return (
    <section className='flex items-center  gap-1 mt-20 px-8 md:px-20 lg:px-30'> 
    <div className='flex flex-col justify-center gap-4 md:gap-6 lg:gap-10 max-w-[430px]'>
      <h2 className='text-5xl/[70px] md:text-[48px]/[80px] font-semibold text-text_pr'>
      <span className='rounded-full py-2 px-4 bg-rose-200 text-rose-600 w-fit text-sm'>تستطيع</span><br />
        تعلم فنون الطبخ من أفضل الطباخين في العالم.
      </h2>
      <p className='text-text-1'>
        ارفع(ي) مستوى مهاراتك في الطهي من خلال الممارسة المنتظمةعلى منصتنا.
        أطلق (ي) العنان لمهارتك في الطبخ  عبر مغامرتنا اللذيذة.
      </p>
      <div className="flex gap-4">
        <Button customStyles='text-xl'> إنضم لنا</Button>
        <Button customStyles='text-xl !text-primary bg-primary_bg border-2 border-primary hover:text-white '> إكتشف</Button>
      </div>
    </div>
    <div className='hidden md:block  relative'>
      {/* <div className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 w-80 h-80 rounded-full bg-gradient-to-t from-primary to-primary_bg drop-shadow-3xl z-0 ">
      </div> */}
      
      <Image src='/hero.png'  alt='hero'  width={1000} height={1000}
        className='object-contain drop-shadow-3xl'/>
      
    </div>
    </section>
  )
}

export default Hero