import Image from 'next/image'
import React from 'react'
import { FaUsers, FaBookOpenReader,   } from "react-icons/fa6";
import { RiCake3Line } from "react-icons/ri";
import Button from './_ui/Buttun';



const Featruse = () => {
  return (
    <section className='flex items-center gap-10 mt-20 px-8 md:px-20 lg:px-30  '>
      <div className='max-md:hidden'>
        <Image src='/Features.png' alt='Features imag' width={600} height={600} className='object-contain' />
      </div>
      <div className='flex flex-col justify-center gap-10 '>
        <h2 className='text-[48px] font-semibold text-rose-950'> مميزات<span className='text-primary'> لذيذة</span>
        </h2>
        <p>
          إكتشف الميزات الاستثنائية لمنصتنا مصممة من أجل إتاحة التعلم السلس و التجارب التفاعلية من أجل إتقان فن الطهي
        </p>
        <ul className='flex flex-col gap-4'>
          <li className='flex gap-8 items-center relative'>
            <div className='absolute !h-14 !w-14 border-2 border-primary text-primary rounded-lg flex items-center p-2 justify-center  rotate-45  '>
            <FaBookOpenReader size={40} className='-rotate-45'/>
            </div>
            <div className='mr-20'>
              <h4 className='text-xl font-semibold text-text-1'>التعلم المتكامل</h4>
              <p className='text-stone-500 text-lg'>
                أتقن فن الطبخ من خلال منهجنا الشامل. المناسب لجميع مستويات المهارة
              </p>
            </div>
          </li>
          <li className='flex gap-8 items-center relative'>
            <div className='absolute !h-14 !w-14 border-2 border-primary text-primary rounded-lg flex items-center p-2 justify-center  rotate-45  '>
            <FaUsers size={40} className='-rotate-45'/>
            </div>
            <div className='mr-20'>
              <h4 className='text-xl font-semibold text-text-1'> ممارسة الطبخ الافتراضي </h4>
              <p className='text-stone-500 text-lg'>
                انغمس غي الطهي العملي من خلال مطبخنا الافتراضي التفاعلي. حيث يمكنك ممارسة الوصفات والتفاعل مع مجتمع داعم.
              </p>
            </div>
          </li>
          <li className='flex gap-8 items-center relative'>
            <div className='absolute !h-14 !w-14 border-2 border-primary text-primary rounded-lg flex items-center p-2 justify-center  rotate-45  '>
            <RiCake3Line size={40} className='-rotate-45'/>
            </div>
            <div className='mr-20'>
              <h4 className='text-xl font-semibold text-text-1'>دورات متقدمة بقيادة الخبراء
              </h4>
              <p className='text-stone-500 text-lg'>
                ارفع مهاراتك من خلال دروس متقدمة حصرية في الوقت الفعلي
                يقودها خبراء الصناعة، وابق على اطلاع بأحدث اتجاهات الطهي
              </p>
            </div>
          </li>
        </ul>
        <div className='flex gap-3'>
          <Button customStyles='text-xl w-fit rounded-2xl'> إنضم لنا</Button>
          <div>
            <h4 className='text-lg font-semibold text-text-1'>تواصل مع</h4>
            <p className='text-base text-stone-500'>
              الاحترافي من أفضل الطباخين في العالم.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Featruse