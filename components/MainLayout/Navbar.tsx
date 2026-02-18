'use client'
import React from 'react';
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="Fixed-navbar w-full lg:pl-[204] xl:pl-[225px]">
        <div className='w-full pt-3 pb-5 pl-6 pr-10 flex gap-5 items-center justify-between'>
          {/* <div className='w-fit'>
            <button className='w-fit text-[#10103E] hover:text-[#1739E5] Hover-effect cursor-pointer'>
              <IoIosMenu className='text-[22px]' />
            </button>
          </div> */}
          <div className='hidden lg:block w-full max-w-[700px]'>
            <div className='w-full p-1.5 flex gap-2 items-center bg-[#E6EEF2] rounded-[8px]'>
              <input
                type='text'
                placeholder='Search Shipment IDs...'
                className='w-full px-3 font-normal Small-text text-[#606D80] placeholder:text-[#ADBAC0] outline-none'
              />
              <div className='w-fit py-1.5 px-3 bg-[#FFFFFF] rounded-[4px]'>
                <FiSearch className='shrink-0 text-[16px] text-[#2D4059]' />
              </div>
            </div>
          </div>
          <div className='flex gap-6 items-center'>
            <button className='w-fit text-[#10103E] hover:text-[#1739E5] Hover-effect cursor-pointer'>
              <IoNotificationsOutline className='text-[22px]' />
            </button>
            <button className='w-fit text-[#10103E] hover:text-[#1739E5] Hover-effect cursor-pointer'>
              <IoSettingsOutline className='text-[22px]' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar