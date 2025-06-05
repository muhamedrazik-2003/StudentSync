import React from 'react'
import logoMain from '../../assets/studentSync-logoFull.png';
import logo from '../../assets/studentsync-logo.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SidebarNavigation from './SidebarNavigation'
import { RouteAdd } from './SidebarNavigation';
import { LogOut } from 'lucide-react';


const Sidebar = () => {
  return (
    <main className='flex flex-col justify-around align-center h-[calc(100vh-28px)] sticky top-4 md:mr-4'>
      <div>
        <img src={logoMain} alt="logo" className='hidden md:block size-10 md:size-35  mx-auto' />
        <img src={logo} alt="logo" className='md:hidden size-10 md:size-35  mx-auto' />
      </div>
      <div>
        <SidebarNavigation/>
      </div>
      <div>
        <div className="space-y-1">
        <RouteAdd to="/" Icon={LogOut} title="Logout" />
      </div>
        <div className='flex pb-4 items-center mx-2  gap-2'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='hidden md:block'>
            <h5>Muhamed Razik</h5>
            <p className='text-xs'>muhamedRazik@mail.com</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Sidebar;
