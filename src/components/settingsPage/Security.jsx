import { KeyRound } from 'lucide-react'
import React from 'react'

const Security = () => {
    return (
        <div className='mx-2 space-y-3 mt-4'>
            <h2 className="text-lg font-semibold text-slate-900  flex items-center gap-2 ">
                <KeyRound className="size-5 text-primary" />
                Security
            </h2>
            <div className='flex gap-8 mx-7'>
                <div className='space-y-0.5'>
                    <div className=''>
                        <p className='text-sm text-primary'>Password</p>
                        <p className='text-md font-medium'>************</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security
