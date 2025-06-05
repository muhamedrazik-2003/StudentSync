import React from 'react'
import { Home, UserRound, Book, GraduationCap, Settings, LogOut } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function SidebarNavigation() {
  return (
    <div className='flex flex-col justify-between min-h-[76vh] md:min-h-[62vh] md:px-5'>
      <div className="space-y-1 mt-15">
        <RouteAdd to="/dashboard" Icon={Home} title="Dashboard" />
        <RouteAdd to="/students" Icon={UserRound} title="Students" />
        <RouteAdd to="/courses" Icon={Book} title="Courses" />
        <RouteAdd to="/grades" Icon={GraduationCap} title="Grades" />
        <RouteAdd to="/settings" Icon={Settings} title="Settings" />
      </div>
    </div>
  )
}

export default SidebarNavigation

export const RouteAdd = ({ Icon, title, to }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col md:flex-row items-center gap-2 w-[80%] md:w-full rounded-3xl mx-1 py-1.5 sm:px-3 text-sm  transition ${
          isActive
            ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
            : "hover:bg-teal-200 text-slate-800"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon className={`size-4 md:size-5 xl:size-6 ${isActive ? "text-sidebar-primary-foreground" : ""}`} />
          <span className='hidden md:inline text-sm'>{title}</span>
        </>
      )}
    </NavLink>
  )
