import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UserRoundCog } from 'lucide-react'

const Profile = () => {
    return (
        <div className='mx-2 space-y-4 mt-4'>
            <h2 className="text-lg font-semibold text-slate-900  flex items-center gap-2 ">
                <UserRoundCog className="size-5 text-primary" />
                User Profile
            </h2>
            <div className='flex gap-8'>
                <Avatar className={'size-22 mt-2'}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='space-y-0.5'>
                    <div className=''>
                        <p className='text-sm text-primary'>Name</p>
                        <p className='text-md font-medium'>Muhamed Razik</p>
                    </div>
                    <div>
                        <p className='text-sm text-primary'>Email</p>
                        <p className='text-md font-medium'>muhamedrazik192@hotmail.com</p>
                    </div>
                    <div className=''>
                        <p className='text-sm text-primary mb-1'>Role</p>
                        <p className='text-md font-semibold bg-teal-300 text-teal-900 inline-block px-3 rounded-2xl'>Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
