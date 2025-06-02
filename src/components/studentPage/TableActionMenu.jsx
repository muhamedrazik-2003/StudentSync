import React, { useState, useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis, Pencil, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getCurrentStudent } from '@/services/AllApi';


const TableActionMenu = ({ studentData }) => {
    const [isEditClicked, setIsEditClicked] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    // const [studentData,setStudentData] = useState(studentData || {
    //     id:'',
    //     name:'',
    //     email:'',
    //     course:'',
    //     dob:'',
    //     enrolledDate:'',
    //     address: '',
    //     attendance:'',
    //     gender:'',
    //     phone:'',
    //     profilePic:'',
    //     semester:'',
    //     status:'',
    //     year:'',
    //     updatedAt:''
    // })
    // console.log(studentData)

    useEffect(() => {
        // getStudentData()
    }, [])

    // const getStudentData = async() => {
    //     const response = await getCurrentStudent(studentId)
    //     // console.log(response.data)
    // }

    return (
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open)
            if (!open) {
                setIsEditClicked(false)
            }
        }}>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Ellipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DialogTrigger asChild>
                        <DropdownMenuItem className={'pl-3 pr-6'} onClick={() => {
                            setIsEditClicked(true)
                            setIsDialogOpen(true)
                        }} >
                            <Pencil /> Edit User Details
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem className={'pl-3 pr-6'}>
                        <Trash2 /> Delete User
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <form>
                <DialogContent className=" max-w-[85%] h-[80%] md:max-w-[75%]">
                    <DialogHeader>

                        {
                            isEditClicked
                                ? (<>
                                    <DialogTitle> Edit Student Details</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click save when you&apos;re
                                        done.
                                    </DialogDescription>
                                </>)
                                : (<DialogTitle>Student Details</DialogTitle>)
                        }

                    </DialogHeader>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 overflow-y-auto px-6">
                        <div className="space-y-3 mx-4 my-2 ">
                            <Label htmlFor="">Name</Label>
                            <Input id="" name="name" defaultValue={studentData.name} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">Email</Label>
                            <Input id="" name="email" defaultValue={studentData.email} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">Date Of Birth</Label>
                            <Input id="" name="dob" defaultValue={studentData.dob} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">Gender</Label>
                            <Input id="" name="gender" defaultValue={studentData.gender} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">Phone</Label>
                            <Input id="" name="phone" defaultValue={studentData.phone} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">Street</Label>
                            <Input id="" name="street" defaultValue={studentData.address.street} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">City</Label>
                            <Input id="" name="city" defaultValue={studentData.address.city} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">State</Label>
                            <Input id="" name="state" defaultValue={studentData.address.state} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">pincode</Label>
                            <Input id="" name="pincode" defaultValue={studentData.address.pincode} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">Course</Label>
                            <Input id="" name="course" defaultValue={studentData.course} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">Year of Study</Label>
                            <Input id="" name="year" defaultValue={studentData.year} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">Semester No.</Label>
                            <Input id="" name="semester" defaultValue={studentData.semester} />
                        </div>
                        <div className="space-y-3 mx-4 my-2">
                            <Label htmlFor="">Status</Label>
                            <Input id="" name="status" defaultValue={studentData.status} />
                        </div>

                        {/* <div className="md:col-span-2">
                            <h2 className='ml-4 py-2 mb-2'>Address</h2>
                            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>

                            </div>

                        </div> */}

                    </div>
                    {
                        isEditClicked &&
                        <DialogFooter className={'none'}>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    }
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default TableActionMenu
