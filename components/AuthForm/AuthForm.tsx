'use client'
import React from 'react'
import LoginForm from './LoginForm'

const AuthForm = () => {
  return (
    <div className='h-screen p-5 xl:p-6 2xl:p-7 bg-[#FFFFFF]'>
      <div className='h-full w-full grid grid-cols-9 gap-10'>
        <div className='col-span-5 bg-yellow-100'></div>
        <div className='col-span-4 w-full h-full pt-6 xl:pt-0 flex items-start xl:items-center justify-center'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default AuthForm