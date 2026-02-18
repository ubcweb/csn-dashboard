import React from 'react'
import SideNav from './SideNav'
import Navbar from './Navbar'

const MainLayout = ({ children }: any) => {
    return (
        <div className='relative z-0'>
            <div className="absolute w-full z-10">
                <Navbar />
            </div>
            <div className="flex h-screen">
                <div className='hidden lg:block w-fit z-20'>
                    <SideNav />
                </div>
                <main className="pt-[65px] w-full min-h-full overflow-hidden overflow-y-scroll Hide-scrollBar bg-[#F5F8FA]">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default MainLayout