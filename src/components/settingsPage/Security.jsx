import { KeyRound, Pen, X, Check } from 'lucide-react'
import React, {useState} from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Skeleton } from '../ui/skeleton'

const Security = ({userData}) => {
    const [isEditing,setIsEditing] = useState(false)
    const [updatedPassword,setUpdatedPassword] = useState(userData[0])
    console.log(updatedPassword)
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
                                onChange={(e) => {setUpdatedPassword((prev) => ({...updatedPassword, password : e.target.value}));}}
                                defaultValue={`${userData[0].password}`}
                                className="font-medium  p-0 my-1 text-sm  text-center h-6 w-30" />
                        : <p className='text-md font-medium'>************</p>
                        

                        }
                    </div>
                    {
                        isEditing
                        ?  (
                            <div className='flex gap-3'>
                            <X className='text-red-500' onClick={() => setIsEditing(false)}/>
                            <Check className='text-primary' onClick={() => setIsEditing(false)}/>
                        </div>
                        ) 
                        :  (
                          <Pen className='size-4 text-primary' onClick={() => setIsEditing(prev => !prev)}/> 
                        
                        ) 
                        

                    }
                </div>
            </div>
        </div>
    )
}

export default Security
