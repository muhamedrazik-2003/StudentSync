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
import { AddNewCourse } from '@/services/AllApi'

const AddCourse = ({ setPageReload }) => {
    const [newData, setNewData] = useState({})
    const handleDataAdd = async (AddedData) => {
        try {
            const response = await AddNewCourse(AddedData)
            setPageReload(prev => !prev)
            alert("Course Data added successfully")
        } catch (error) {
            alert("Error Adding Course Data", error.message);
            console.log("Error Adding Course Data", error.message);
        }
    }

    return (
        <Dialog >
            <DialogTrigger asChild >
                <Button className={'rounded-full  !px-6 text-white'}><Plus />Add Course</Button>
            </DialogTrigger>
            <form>
                <DialogContent className=" mx-auto pt-6 pb-4 shadow-xl rounded-3xl bg-background ">
                    <DialogHeader className="flex items-center justify-between mb-5">
                        <DialogTitle className="text-2xl font-semibold text-primary"> Add Course Details</DialogTitle>
                        <DialogDescription className={'text-slate-700'}>
                            Add new Course Details here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="px-1 h-[60vh]">
                        <div className="grid grid-cols-1 gap-5 pr-3">
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Course ID</Label>
                                <Input id="" name="name" onChange={(e) => setNewData({ ...newData, id: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Name</Label>
                                <Input id="" name="name" onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Duration</Label>
                                <Input id="" name="duration" onChange={(e) => setNewData({ ...newData, duration: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Instructor</Label>
                                <Input id="" name="instructor" onChange={(e) => setNewData({ ...newData, instructor: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Description</Label>
                                <Input id="" name="description" onChange={(e) => setNewData({ ...newData, description: e.target.value })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Subject 1</Label>
                                <Input id="" name="subject1" onChange={(e) => setNewData({ ...newData, subjects: { ...newData.subjects, sub1: e.target.value } })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Subject 2</Label>
                                <Input id="" name="subject2" onChange={(e) => setNewData({ ...newData, subjects: { ...newData.subjects, sub2: e.target.value } })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Subject 3</Label>
                                <Input id="" name="subject3" onChange={(e) => setNewData({ ...newData, subjects: { ...newData.subjects, sub3: e.target.value } })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Subject 4</Label>
                                <Input id="" name="subject4" onChange={(e) => setNewData({ ...newData, subjects: { ...newData.subjects, sub4: e.target.value } })} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Subject 4</Label>
                                <Input id="" name="subject5" onChange={(e) => setNewData({ ...newData, subjects: { ...newData.subjects, sub5: e.target.value } })} />
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

export default AddCourse
