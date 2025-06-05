import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UserRoundCog, Pen, PenOff, Check, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const Profile = ({ userData }) => {
    const [isEditing, setIsEditing] = useState(false)
    return (
        <div className='mx-2 mt-3 space-y-4'>
            <div className='flex gap-6 items-center justify-between w-[400px]'>
                <h2 className="text-lg font-semibold text-slate-900  flex items-center gap-2 ">
                    <UserRoundCog className="size-5 text-primary" />
                    User Profile
                </h2>
                {
                    isEditing
                        ?
                        <div className='flex gap-3'>
                            <X className='text-red-500' onClick={() => setIsEditing(false)} />
                            <Check className='text-primary' onClick={() => setIsEditing(false)} />
                        </div>
                        : <Pen className='size-4 text-primary' onClick={() => setIsEditing(prev => !prev)} />

                }
            </div>
            <div className='flex gap-15'>
                <Avatar className={'size-22 mt-4'}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='space-y-0.5'>
                    <div className=''>
                        <p className='text-sm text-primary'>Name</p>
                        {
                            isEditing
                                ? <Input
                                    id=""
                                    name="grade"
                                    onChange={(e) => { setUpdatedPassword(() => ({ ...userData[0], name: e.target.value })); }}
                                    defaultValue={`${userData[0]?.name}`}
                                    className="font-medium  p-0 pl-2 my-1 text-md h-6 w-50" />
                                : <p className='text-md font-medium'>{userData[0]?.name}</p>
                        }
                    </div>
                    <div>
                        <p className='text-sm text-primary'>Email</p>
                        {
                            isEditing
                                ? <Input
                                    id=""
                                    name="grade"
                                    onChange={(e) => { setUpdatedPassword(() => ({ ...userData[0], email: e.target.value })); }}
                                    defaultValue={`${userData[0]?.email}`}
                                    className="font-medium  p-0 pl-2 my-1 text-md h-6 w-50" />
                                : <p className='text-md font-medium'>{userData[0]?.email}</p>
                        }
                    </div>
                    <div className=''>
                        <p className='text-sm text-primary mb-1'>Role</p>
                        {
                            isEditing
                                ? <Input
                                    id=""
                                    name="grade"
                                    onChange={(e) => { setUpdatedPassword(() => ({ ...userData[0], role: e.target.value })); }}
                                    defaultValue={`${userData[0]?.role}`}
                                    className="font-medium  p-0 pl-2 my-1 text-md h-6 w-30" />
                                : <p className='text-md font-semibold bg-teal-300 text-teal-900 inline-block px-3 rounded-2xl'>{userData[0]?.role}</p>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
