'use client'
import React from 'react';
import LoginForm from './LoginForm';
import Image from "next/image";

const AuthForm = () => {
  return (
    <div className='h-screen p-5 xl:p-6 bg-[#FFFFFF]'>
      <div className='h-full w-full grid grid-cols-9 gap-10'>
        <div className='hidden xl:block col-span-5 relative overflow-hidden z-0 rounded-[16px]'>
          <div className='absolute Login-background -z-10'></div>
          <div className='h-full pl-8 pt-[60px] flex flex-col gap-12 justify-between'>
            <div className='flex flex-col gap-8'>
              <h2 className='font-Rink flex flex-col font-normal Main-heading text-[#FFFFFF]'>
                <span>QUOTE FAST.</span> <span className='font-bold'>SHIP FASTER.</span>
              </h2>
              <p className='flex flex-col font-normal Small-heading text-[#CDE2F7]'>
                <span>Built by freight people,</span> <span className='font-medium'>for freight people.</span>
              </p>
            </div>
            <div className='flex gap-10 items-end justify-between'>
              <div className='mb-8'>
                <Image src="/Csn-logo.svg" alt="Logo" width={152} height={120} className='w-[100px]' />
              </div>
              <div className='flex justify-end'>
                <Image src="/Login-image.png" alt="Logo" width={871} height={548} className='w-[515px]' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-4 w-full h-full pt-6 xl:pt-0 flex items-start xl:items-center justify-center'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default AuthForm