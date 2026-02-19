'use client'
import Link from 'next/link';
import React from 'react';
import { RxArrowRight } from "react-icons/rx";

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-7'>
      <h2 className='font-normal Small-heading text-[#10103E]'>
        Welcome back, <span className='font-semibold'>GroupAir South Africa</span>
      </h2>
      <div className='flex flex-col gap-5'>
        <div className='grid grid-cols-2 gap-5'>
          <Link href="/new-quote" className='group h-[250px] w-full relative overflow-hidden rounded-[16px] z-0 cursor-pointer'>
            <div className='absolute Dashboard-cardOne-background group-hover:scale-105 transform transition-all duration-500 -z-10'></div>
            <div className='p-5 w-full flex gap-5 items-center justify-between'>
              <p className='font-Rink font-semibold Large-text text-[#FFFFFF]'>GET A QUOTE</p>
              <div className='text-[24px] text-[#FFFFFF]'><RxArrowRight /></div>
            </div>
          </Link>
          <Link href="/shipments" className='group h-[250px] w-full relative overflow-hidden rounded-[16px] z-0 cursor-pointer'>
            <div className='absolute Dashboard-cardTwo-background group-hover:scale-105 transform transition-all duration-500 -z-10'></div>
            <div className='p-5 w-full flex gap-5 items-center justify-between'>
              <p className='font-Rink font-semibold Large-text text-[#FFFFFF]'>SHIPMENTS</p>
              <div className='text-[24px] text-[#FFFFFF]'><RxArrowRight /></div>
            </div>
          </Link>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div className='grid grid-cols-2 gap-3'>
            <Link href="/shipments" className='group h-[130px] bg-[#CDE2F7] rounded-[16px] cursor-pointer'>
              <div className='w-full h-full pl-5 pr-3 py-5 flex flex-col justify-between'>
                <p className='font-normal Medium-text text-[#2D4059]'>
                  Spot Rate Request
                </p>
                <div className='flex gap-5 items-end justify-between'>
                  <p className='font-Rink font-semibold Sub-heading text-[#10103E]'>0</p>
                  <div className='text-[24px] text-[#2D4059] pr-2 group-hover:pr-0 transform transition-all duration-300'><RxArrowRight /></div>
                </div>
              </div>
            </Link>
            <Link href="/shipments" className='group h-[130px] bg-[#CDE2F7] rounded-[16px] cursor-pointer'>
              <div className='w-full h-full pl-5 pr-3 py-5 flex flex-col justify-between'>
                <p className='font-normal Medium-text text-[#2D4059]'>
                  Spot Rate Review
                </p>
                <div className='flex gap-5 items-end justify-between'>
                  <p className='font-Rink font-semibold Sub-heading text-[#10103E]'>0</p>
                  <div className='text-[24px] text-[#2D4059] pr-2 group-hover:pr-0 transform transition-all duration-300'><RxArrowRight /></div>
                </div>
              </div>
            </Link>
            <Link href="/shipments" className='group h-[130px] bg-[#CDE2F7] rounded-[16px] cursor-pointer'>
              <div className='w-full h-full pl-5 pr-3 py-5 flex flex-col justify-between'>
                <p className='font-normal Medium-text text-[#2D4059]'>
                  Booking Request
                </p>
                <div className='flex gap-5 items-end justify-between'>
                  <p className='font-Rink font-semibold Sub-heading text-[#10103E]'>3</p>
                  <div className='text-[24px] text-[#2D4059] pr-2 group-hover:pr-0 transform transition-all duration-300'><RxArrowRight /></div>
                </div>
              </div>
            </Link>
            <Link href="/shipments" className='group h-[130px] bg-[#CDE2F7] rounded-[16px] cursor-pointer'>
              <div className='w-full h-full pl-5 pr-3 py-5 flex flex-col justify-between'>
                <p className='font-normal Medium-text text-[#2D4059]'>
                  Active Bookings
                </p>
                <div className='flex gap-5 items-end justify-between'>
                  <p className='font-Rink font-semibold Sub-heading text-[#10103E]'>10</p>
                  <div className='text-[24px] text-[#2D4059] pr-2 group-hover:pr-0 transform transition-all duration-300'><RxArrowRight /></div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            dswd
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard