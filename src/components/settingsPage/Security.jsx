import { KeyRound, Pen, X, Check } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { updateUserData } from '@/services/AllApi'
import { Skeleton } from '../ui/skeleton'

const Security = ({ isLoading, setPageReload, userData }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [updatedPassword, setUpdatedPassword] = useState({ ...userData })

    const handlePasswordUpdate = async (userId, updatedPassword) => {
        try {
            await updateUserData(userId, updatedPassword)
            console.log(updatedPassword)
            setPageReload(prev => !prev)
            setIsEditing(false)
            alert("Password updated successfully")
        } catch (error) {
            console.error('updating Password Failed')
        }
    }
    return (
        <div className='mx-2 space-y-3 mt-4'>
            <h2 className="text-lg font-semibold text-slate-900  flex items-center gap-2 ">
                <KeyRound className="size-5 text-primary" />
                Security
            </h2>
            <div className='flex gap-8 mx-7'>
                <div className=' flex gap-6 items-center'>
                    <div className=''>
                        <p className='text-sm text-primary'>Password</p>
                        {isEditing
                            ? <Input
                                id=""
                                name="grade"
                                onChange={(e) => {
                                    setUpdatedPassword({ ...updatedPassword, password: e.target.value })
                                }}
                                defaultValue={userData[0]?.password}
                                className="font-medium  p-0 my-1 text-sm  text-center h-6 w-30" />
                            : <>
                                {
                                    isLoading
                                        ? (<Skeleton className="h-5 w-35 my-1 rounded-3xl" />)
                                        : (
                                            <p className='text-md font-medium'>{
                                                userData[0]?.password?.split('').map((char, index) => {
                                                    if (index > 2) return '*';
                                                    return char;
                                                }).join('')
                                            }</p>
                                        )
                                }
                            </>


                        }
                    </div>
                    {
                        isEditing
                            ? (
                                <div className='flex gap-3'>
                                    <X className='text-red-500' onClick={() => setIsEditing(false)} />
                                    <Check className='text-primary' onClick={() => { handlePasswordUpdate(userData[0].id, updatedPassword) }} />
                                </div>
                            )
                            : (
                                <Pen className='size-4 text-primary' onClick={() => setIsEditing(prev => !prev)} />

                            )


                    }
                </div>
            </div>
        </div>
    )
}

export default Security
