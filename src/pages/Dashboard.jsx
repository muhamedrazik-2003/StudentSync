import React from 'react'
import UserGreeting from '@/components/Dashboard/UserGreeting'
import { SectionCards } from '@/components/Dashboard/SectionCards'

const Dashboard = () => {
  return (
     <main className=' m-1 px-2 py-1.5 bg-background rounded-2xl border-2 border-border'>
      <section className='px-6 mt-8'>
      <UserGreeting/>
      </section>
      <section className='my-6'>
        <SectionCards/>
      </section>
    </main>
  )
}

export default Dashboard
