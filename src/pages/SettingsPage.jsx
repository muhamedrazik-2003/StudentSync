import React, { useState, useEffect } from 'react'
import { Settings } from 'lucide-react'
import Profile from '@/components/settingsPage/Profile'
import Security from '@/components/settingsPage/Security'
import Preference from '@/components/settingsPage/Preference'
import UserManagement from '@/components/settingsPage/UserManagement'
import { getAllusers } from '@/services/AllApi'
import { ScrollArea } from '@/components/ui/scroll-area'


const SettingsPage = () => {
  const [userData, setUserData] = useState([]);
  const [pageReload, setPageReload] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchUserData()
  }, [pageReload]);

  const fetchUserData = async () => {
    try {
      const response = await getAllusers();
      setUserData(response.data);
      setIsLoading(false)
    } catch (error) {
      console.log("Error Fetching User Data", error.message);
    }
  }
  return (
    <main className='m-1 px-2 py-1.5 bg-background rounded-2xl border-2 border-border h-[calc(100vh-32px)] flex flex-col overflow-y-auto'>
      <ScrollArea className={"overflow-y-auto"}>
        <section className='px-6 mt-5'>
          <div className='flex justify-end items-center '>
            <h2 className="text-[22px]  mr-auto font-semibold text-slate-900 flex items-center gap-2">
              <Settings className="size-5.5 text-primary" />
              Settings
            </h2>
          </div>
        </section>
        <div className="px-8">
          <Profile isLoading={isLoading} setPageReload={setPageReload} userData={userData} />
          <Security isLoading={isLoading} setPageReload={setPageReload} userData={userData} />
          <Preference />
          <UserManagement isLoading={isLoading} setPageReload={setPageReload} userData={userData} />
        </div>
      </ScrollArea>
    </main>
  )
}

export default SettingsPage
