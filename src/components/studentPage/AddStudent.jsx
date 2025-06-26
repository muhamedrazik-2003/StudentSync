import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
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
import { ScrollArea } from "@/components/ui/scroll-area"
import { AddNewStudent } from '@/services/AllApi'

const AddStudent = ({ setPageReload }) => {
    const [newData, setNewData] = useState({})
    const handleDataAdd = async (addedData) => {
        try {
            const dataToAdd = {
                ...addedData,
                profilePic: "https://placeimg.com/1015/772/any",
                attendance: {
                    totalClasses: 108,
                    attended: 108
                },
                enrolledDate: `${new Date().toLocaleDateString().split('/').reverse().join('-')}`,
                updatedAt: new Date().toISOString()
            };

            const response = await AddNewStudent(dataToAdd);
            setPageReload(prev => !prev);
        } catch (error) {
            alert(`Error Adding Student Data: ${error.message}`);
            console.log("Error Adding Student Data", error.message);
        }
    };
    return (
        <Dialog>
            <DialogTrigger asChild >
                <Button className={'rounded-full  md:!px-6 text-white'}><Plus /><span className='hidden sm:block'>Add Student</span></Button>
            </DialogTrigger>
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
                                <Input id="" name="name" onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Email</Label>
                                <Input id="" name="email" onChange={(e) => setNewData({ ...newData, email: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Date Of Birth</Label>
                                <Input id="" name="dob" onChange={(e) => setNewData({ ...newData, dob: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Gender</Label>
                                <Input id="" name="gender" onChange={(e) => setNewData({ ...newData, gender: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Phone</Label>
                                <Input id="" name="phone" onChange={(e) => setNewData({ ...newData, phone: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Street</Label>
                                <Input id="" name="street" onChange={(e) => setNewData({ ...newData, address: { ...newData.address, street: e.target.value } })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">City</Label>
                                <Input id="" name="city" onChange={(e) => setNewData({ ...newData, address: { ...newData.address, city: e.target.value } })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">State</Label>
                                <Input id="" name="state" onChange={(e) => setNewData({ ...newData, address: { ...newData.address, state: e.target.value } })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">pincode</Label>
                                <Input id="" name="pincode" onChange={(e) => setNewData({ ...newData, address: { ...newData.address, pincode: e.target.value } })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Course</Label>
                                <Input id="" name="course" onChange={(e) => setNewData({ ...newData, course: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Year of Study</Label>
                                <Input id="" name="year" onChange={(e) => setNewData({ ...newData, year: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Semester No.</Label>
                                <Input id="" name="semester" onChange={(e) => setNewData({ ...newData, semester: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Status</Label>
                                <Input id="" name="status" onChange={(e) => setNewData({ ...newData, status: e.target.value })} />
                            </div>
                        </div>
                    </ScrollArea>
                    <DialogFooter className="flex justify-end gap-4 mt-5">
                        <DialogClose asChild>
                            <Button variant="outline" className={'rounded-full px-4'}>Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit" className={'rounded-full px-4 text-white'} onClick={() => { handleDataAdd(newData) }}>Save changes</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default AddStudent
