'use client'
import React from 'react';
import Image from "next/image";

const LoginForm = () => {
    return (
        <div className='xl:px-5 2xl:px-7 w-full sm:max-w-[500px] xl:max-w-full flex flex-col gap-8 md:gap-10 2xl:gap-14 items-center'>
            <div className='flex flex-col gap-4 md:gap-5 xl:gap-7 items-center'>
                <div>
                    <Image src="/Login-logo-icon.svg" alt="Image" width={44} height={50} className='w-[30px] xl:w-[44px]' />
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='font-semibold Medium-heading tracking-[-1px] text-[#10103E]'>
                        Welcome to CSN
                    </h2>
                    <p className='font-normal Medium-text text-[#7A8799]'> 
                        Quote, Book and Ship. All-in-one place.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                Form
            </div>
        </div>
    )
}

export default LoginForm