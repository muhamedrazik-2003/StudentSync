import React from 'react'
import { Settings } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import UserGreeting from '@/components/Dashboard/UserGreeting'

const SettingsPage = () => {
  return (
    <main className=' m-1 px-2 py-1.5 bg-background rounded-2xl border-2 border-border h-[calc(100vh-32px)]'>
       <section className='px-6 mt-8'>
        <UserGreeting />
      </section>
      <div className='flex justify-end items-center mt-6 px-7 pb-1'>
        <h2 className="text-xl mr-auto font-semibold text-slate-900  flex items-center gap-2 ">
          <Settings className="w-5 h-5 text-primary" />
          Settings
        </h2>
      </div>
      <ScrollArea className={'h-[75%]'}>
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-3 px-6">
          
        </div>
      </ScrollArea>
    </main>
  )
}

export default SettingsPage
