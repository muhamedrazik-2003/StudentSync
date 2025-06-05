import React from 'react'
import { Settings } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import UserGreeting from '@/components/common/UserGreeting'
import Profile from '@/components/settingsPage/Profile'


const SettingsPage = () => {
  return (
    <main className=' m-1 px-2 py-1.5 bg-background rounded-2xl border-2 border-border h-[calc(100vh-32px)]'>
      <section className='px-6 mt-5'>
        <UserGreeting />
      </section>
      <div className='flex justify-end items-center mt-6 px-7 pb-2'>
        <h2 className="text-[22px]  mr-auto font-semibold text-slate-900  flex items-center gap-2">
          <Settings className="size-5.5 text-primary" />
          Settings
        </h2>
      </div>
      <ScrollArea className={'h-[75%]'}>
        <section className="gap-3 px-6">
          <Profile/>
        </section>
      </ScrollArea>
    </main>
  )
}

export default SettingsPage
