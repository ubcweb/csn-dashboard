'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { BiSolidDashboard } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { PiShippingContainer } from "react-icons/pi";

const sideBarItems = [
  { href: "/dashboard", icon: <BiSolidDashboard />, name: "Dashboard" },
  { href: "/new-quote", icon: <CgNotes />, name: "New Quote/Booking" },
  { href: "/shipments", icon: <PiShippingContainer />, name: "Shipments" },
];

const SideNav = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='h-screen w-[225px] overflow-hidden overflow-y-scroll Hide-scrollBar bg-white transition-all duration-300 ease-in-out'>
      <div className='min-h-full pt-5 pb-8 px-3 flex flex-col justify-between'>
        <div className='flex flex-col gap-8'>
          <div className='shrink-0'>
            <Image src="/SideNav-logo.svg" alt="Image" width={112} height={40} className='w-[75px]' />
          </div>
          <div className='flex flex-col gap-2'>
            {sideBarItems.map((item, index) =>
              <Link key={index} href={item.href} onClick={() => setSelectedIndex(index)} className='cursor-pointer'>
                <p className={`group px-2.5 py-3 flex gap-2 items-center rounded-[8px] transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === index ? 'bg-[#10103E] text-[#FFFFFF]' : 'text-[#10103E] hover:text-[#FFFFFF] hover:bg-[#10103E]'}`}>
                  <span className="text-[14px] xl:text-[16px]">{item.icon}</span>
                  <span className={`font-Rink Little-text tracking-[1px] uppercase whitespace-nowrap ${selectedIndex === index ? 'font-semibold' : 'font-normal group-hover:font-semibold'}`}>
                    {item.name}
                  </span>
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav