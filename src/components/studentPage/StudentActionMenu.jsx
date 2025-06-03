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
import { updateCurrentStudent, deleteStudent } from '@/services/AllApi';
import { ScrollArea } from "@/components/ui/scroll-area"


const StudentActionMenu = ({ setPageReload, studentData }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [updatedData, setUpdatedData] = useState({ ...studentData })

    const handleDataUpdate = async (studentId, updatedData) => {
        try {
            const response = await updateCurrentStudent(studentId, updatedData)
            setPageReload(prev => !prev)
        } catch (error) {
            alert("Error updating User Data", error.message);
            console.log("Error updating User Data", error.message);
        }
    }
    const handleDataDelete = async (studentId) => {
        try {
            const Response = await deleteStudent(studentId)
            setPageReload(prev => !prev)
        } catch (error) {
            alert("Error Deleting User Data", error.message);
            console.log("Error Deleting User Data", error.message);
        }
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open)
        }}>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Ellipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DialogTrigger asChild>
                        <DropdownMenuItem className={'pl-3 pr-6'} onClick={() => {
                            setIsDialogOpen(true)
                        }} >
                            <Pencil /> Edit User Details
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem className={'pl-3 pr-6'} onClick={() => {
                        handleDataDelete(studentData.id)
                    }}>
                        <Trash2 /> Delete User
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <form>
                <DialogContent className="md:!max-w-3xl  mx-auto pt-6 pb-4 shadow-xl rounded-3xl bg-background ">
                    <DialogHeader className="flex items-center justify-between mb-5">
                        <DialogTitle className="text-2xl font-semibold text-primary"> Edit Student Details</DialogTitle>
                        <DialogDescription className={'text-slate-700'}>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="px-1 h-[55vh]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pr-3">
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Name</Label>
                                <Input id="" name="name" onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })} defaultValue={studentData.name} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Email</Label>
                                <Input id="" name="email" onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })} defaultValue={studentData.email} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Date Of Birth</Label>
                                <Input id="" name="dob" onChange={(e) => setUpdatedData({ ...updatedData, dob: e.target.value })} defaultValue={studentData.dob} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Gender</Label>
                                <Input id="" name="gender" onChange={(e) => setUpdatedData({ ...updatedData, gender: e.target.value })} defaultValue={studentData.gender} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Phone</Label>
                                <Input id="" name="phone" onChange={(e) => setUpdatedData({ ...updatedData, phone: e.target.value })} defaultValue={studentData.phone} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Street</Label>
                                <Input id="" name="street" onChange={(e) => setUpdatedData({ ...updatedData, address: { ...updatedData.address, street: e.target.value } })} defaultValue={studentData.address.street} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">City</Label>
                                <Input id="" name="city" onChange={(e) => setUpdatedData({ ...updatedData, address: { ...updatedData.address, city: e.target.value } })} defaultValue={studentData.address.city} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">State</Label>
                                <Input id="" name="state" onChange={(e) => setUpdatedData({ ...updatedData, address: { ...updatedData.address, state: e.target.value } })} defaultValue={studentData.address.state} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">pincode</Label>
                                <Input id="" name="pincode" onChange={(e) => setUpdatedData({ ...updatedData, address: { ...updatedData.address, pincode: e.target.value } })} defaultValue={studentData.address.pincode} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Course</Label>
                                <Input id="" name="course" onChange={(e) => setUpdatedData({ ...updatedData, course: e.target.value })} defaultValue={studentData.course} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Year of Study</Label>
                                <Input id="" name="year" onChange={(e) => setUpdatedData({ ...updatedData, year: e.target.value })} defaultValue={studentData.year} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Semester No.</Label>
                                <Input id="" name="semester" onChange={(e) => setUpdatedData({ ...updatedData, semester: e.target.value })} defaultValue={studentData.semester} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Status</Label>
                                <Input id="" name="status" onChange={(e) => setUpdatedData({ ...updatedData, status: e.target.value })} defaultValue={studentData.status} />
                            </div>
                        </div>
                    </ScrollArea>
                    <DialogFooter className="flex justify-end gap-4 mt-5">
                        <DialogClose asChild>
                            <Button variant="outline" className={'rounded-full px-4'}>Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit" className={'rounded-full px-4 text-white'} onClick={() => { handleDataUpdate(studentData.id, updatedData) }}>Save changes</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default StudentActionMenu
