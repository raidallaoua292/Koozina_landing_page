'use client'
import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [email, setEmail] = useState('')

  const handelEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  return (
   <section className='mt-20 px-8 md:px-20 lg:px-30'>
      <form className='bg-primary text-primary_bg px-6 sm:px-8 md:px-32 lg:px-40 py-10 rounded-3xl flex flex-col items-center gap-10 ' action="">
        <h2 className="text-4xl font-bold text-center" >انضم الى نشرتنا البريدية</h2>
        <h3 className='-mt-5 text-3xl'>للبقاء على اطلاع</h3>
        <div className='w-full bg-primary_bg h-20 rounded-full p-3 flex  items-center justify-between max-[470px]:flex-col'>
        <input className='p-4 pr-8 bg-transparent focus:outline-none text-text_pr placeholder:text-text-1 flex-1' placeholder="ادخل عنوان بريدك الالكتروني" type="email"  id="" 
        onChange={handelEmailChange} value={email}
        />
          <button className='rounded-full bg-primary h px-5 py-3 h-full max-[470px]:mt-6 max-[470px]:border-2' type='submit'>اشتراك</button>
        </div>
        <p className='text-center max-[470px]:mt-8'>خصوصيتك تهمنا. نحرص على حماية معلوماتك <br />
            لتجربة آمنة وسرية.    
        </p>
      </form>
   </section>
  )
}

export default Form