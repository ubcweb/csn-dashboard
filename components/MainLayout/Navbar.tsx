'use client'
import React from 'react';
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure } from "@heroui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="Fixed-navbar w-full lg:pl-[204] xl:pl-[225px] bg-[#F5F8FA]">
        <div className='w-full pt-3 pb-5 pl-6 pr-10 flex gap-5 items-center justify-between'>
          <div className='w-fit lg:hidden'>
            <button onClick={onOpen} className='w-fit text-[#10103E] hover:text-[#1739E5] Hover-effect cursor-pointer'>
              <IoIosMenu className='text-[22px]' />
            </button>
          </div>
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
          <div className='flex gap-7 items-center'>
            <button className='w-fit text-[#10103E] hover:text-[#1739E5] Hover-effect cursor-pointer'>
              <IoNotificationsOutline className='text-[22px]' />
            </button>
            <button className='w-fit text-[#10103E] hover:text-[#1739E5] Hover-effect cursor-pointer'>
              <IoSettingsOutline className='text-[22px]' />
            </button>
          </div>
        </div>
      </div>

      <Drawer isOpen={isOpen} isDismissable={true} onClose={onClose} placement="left" className="bg-white w-[250px]">
        <DrawerContent>
          <>
            <DrawerBody className="mt-5 py-0 pb-7 md:pb-8 xl:pb-10 px-2.5 md:px-5 xl:px-6">wdw</DrawerBody>
            {/* <DrawerFooter className="py-5 xl:py-6 px-2.5 md:px-5 xl:px-6 flex gap-3 items-center form-shadow">
              <Button
                variant="light" onPress={onClose}
                className="w-[120px] md:w-[170px] p-[14px] md:p-[22px] border-[1px] border-black font-medium text-[18px] md:text-[20px] leading-[22.38px] md:leading-[24.38px] text-[#1D2D39] rounded-[6px]"
              >
                Cancel
              </Button>
              wdw
            </DrawerFooter> */}
          </>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar