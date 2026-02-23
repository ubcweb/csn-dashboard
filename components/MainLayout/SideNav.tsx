'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const sideBarItems = [
  {
    href: "/dashboard",
    name: "Dashboard",
    icon: "/Sidenav-dashboard-iamge.svg",
    selectedIcon: "/Sidenav-dashboard-selected-iamge.svg",
  },
  {
    href: "/new-quote",
    name: "New Quote/Booking",
    icon: "/Sidenav-quote-iamge.svg",
    selectedIcon: "/Sidenav-quote-selected-iamge.svg",
  },
  {
    href: "/shipments",
    name: "Shipments",
    icon: "/Sidenav-shipment-iamge.svg",
    selectedIcon: "/Sidenav-shipment-selected-iamge.svg",
  },
];

const SideNav = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className='h-screen w-[225px] overflow-hidden overflow-y-scroll Hide-scrollBar bg-white transition-all duration-300 ease-in-out'>
      <div className='min-h-full pt-5 pb-8 px-3 flex flex-col justify-between'>
        <div className='flex flex-col gap-8'>
          <div className='shrink-0'>
            <Image src="/SideNav-logo.svg" alt="Image" width={112} height={40} className='w-[75px]' />
          </div>
          <div className='flex flex-col gap-2'>
            {sideBarItems.map((item, index) =>
              <Link key={index} href={item.href} onClick={() => setSelectedIndex(index)} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className='cursor-pointer'>
                <div className={`group px-2.5 py-3 flex gap-2 items-center rounded-[8px] transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === index ? 'bg-[#10103E] text-[#FFFFFF]' : 'text-[#10103E] hover:text-[#FFFFFF] hover:bg-[#10103E]'}`}>
                  <div className='shrink-0'>
                    <Image src={(selectedIndex === index || hoveredIndex === index) ? item.selectedIcon : item.icon} alt="Icon" width={32} height={32} className='w-[18px]' />
                  </div>
                  <p className={`font-Rink Little-text tracking-[1px] uppercase whitespace-nowrap ${selectedIndex === index ? 'font-semibold' : 'font-normal group-hover:font-semibold'}`}>
                    {item.name}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav