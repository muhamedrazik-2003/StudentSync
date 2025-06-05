import React, { useState } from 'react'

const UserGreeting = () => {
  const [name, setName] = useState("Razik")
  return (
    <div>
      <h1 className='text-2xl md:text-4xl'>Welcome <span className='text-primary'>{name}</span></h1>
      <p className='text-xs md:text-[16px]'>Today is <span className='underline'>{` ${new Date().toDateString()}`}</span></p>

    </div>
  )
}

export default UserGreeting
