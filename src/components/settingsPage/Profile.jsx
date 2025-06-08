import React, { use, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UserRoundCog, Pen, Check, X } from 'lucide-react'
import { Input } from '../ui/input'
import { updateUserData } from '@/services/AllApi' // ✅ make sure this is correctly imported
import { Skeleton } from '../ui/skeleton'

const Profile = ({ isLoading, userData, setPageReload }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedData, setupdatedData] = useState({ ...userData })

  const handleDataUpdate = async (userId, updatedData) => {
    try {
      await updateUserData(isLoading, userId, updatedData) // ✅ correct PUT call
      setPageReload?.(prev => !prev)
      setIsEditing(false)

      alert("Name and Email updated successfully")
    } catch (error) {
      console.error('Updating name and email failed:', error)
    }
  }

  return (
    <div className='mx-2 mt-3 space-y-4'>
      <div className='flex gap-6 items-center justify-between w-[400px]'>
        <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <UserRoundCog className="size-5 text-primary" />
          User Profile
        </h2>
        {isEditing ? (
          <div className='flex gap-3'>
            <X className='text-red-500 cursor-pointer' onClick={() => setIsEditing(false)} />
            <Check className='text-primary cursor-pointer' onClick={() => handleDataUpdate(userData[0]?.id, updatedData)} />
          </div>
        ) : (
          <Pen className='size-4 text-primary cursor-pointer' onClick={() => setIsEditing(true)} />
        )}
      </div>

      <div className='flex gap-15'>
        <Avatar className='size-22 mt-4'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='space-y-2'>

          <div>
            <p className='text-sm text-primary'>Name</p>
            {isEditing ? (
              <Input
                defaultValue={userData[0]?.name}
                onChange={(e) => setupdatedData({ ...updatedData, name: e.target.value })}
                className="font-medium p-0 pl-2 my-1 text-md h-6 w-50"
              />
            ) : (
              <>
                {
                  isLoading
                    ? (<Skeleton className="h-5 w-60 my-1 rounded-3xl" />)
                    : (<p className='text-md font-medium'>{userData[0]?.name}</p>)
                }
              </>
            )}
          </div>

          <div>
            <p className='text-sm text-primary'>Email</p>
            {isEditing ? (
              <Input
                defaultValue={userData[0]?.email}
                onChange={(e) => setupdatedData({ ...updatedData, email: e.target.value })}
                className="font-medium p-0 pl-2 my-1 text-md h-6 w-50"
              />
            ) : (
              <>
                {
                  isLoading
                    ? (<Skeleton className="h-5 w-60 my-1 rounded-3xl" />)
                    : (<p className='text-md font-medium'>{userData[0]?.email}</p>)
                }
              </>
            )}
          </div>

          {/* Role */}
          <div>
            <p className='text-sm text-primary mb-1'>Role</p>
            {isEditing ? (
              <Input
                defaultValue={userData[0]?.role}
                onChange={(e) => setupdatedData({ ...updatedData, role: e.target.value })}
                className="font-medium p-0 pl-2 my-1 text-md h-6 w-30"
              />
            ) : (
              <p className='text-md font-semibold bg-teal-300 text-teal-900 inline-block px-3 rounded-2xl'>
                {userData[0]?.role}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
