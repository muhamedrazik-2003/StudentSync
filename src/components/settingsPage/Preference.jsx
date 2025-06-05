import React from 'react'
import { Switch } from '../ui/switch'
import { BrushIcon } from 'lucide-react'

const Preference = () => {
  return (
     <div className='mx-2 space-y-3 mt-4'>
            <h2 className="text-lg font-semibold text-slate-900  flex items-center gap-2 ">
                <BrushIcon className="size-5 text-primary" />
                Preference
            </h2>
            <div className='flex gap-8 mx-7'>
                <div className='space-y-0.5'>
                    <div className=' flex items-center gap-4'>
                        {/* <p className='text-sm text-primary'>Layout Mode</p> */}
                        <p className='text-md font-medium '>Dark Mode</p>
                        <Switch/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Preference
