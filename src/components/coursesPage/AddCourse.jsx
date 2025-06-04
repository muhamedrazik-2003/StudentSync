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

const AddCourse = ({setPageReload}) => {
    const [newData, setNewData] = useState({})
        const handleDataAdd = async (AddedData) => {
                try {
                    const response = await AddNewCourse(AddedData)
                    setPageReload(prev => !prev)
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
                    <DialogContent className="md:!max-w-3xl  mx-auto pt-6 pb-4 shadow-xl rounded-3xl bg-background ">
                        <DialogHeader className="flex items-center justify-between mb-5">
                            <DialogTitle className="text-2xl font-semibold text-primary"> Edit Course Details</DialogTitle>
                            <DialogDescription className={'text-slate-700'}>
                                Make changes to your profile here. Click save when you&apos;re
                                done.
                            </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="px-1 h-[55vh]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pr-3">
                                <div className="mx-1 space-y-2">
                                    <Label htmlFor="">Name</Label>
                                    <Input id="" name="name" onChange={(e) => setNewData({ ...newData, name: e.target.value })}  />
                                </div>
                                <div className="mx-1 space-y-2">
                                    <Label htmlFor="">Duration</Label>
                                    <Input id="" name="duration" onChange={(e) => setNewData({ ...newData, duration: e.target.value })} />
                                </div>
                                <div className="mx-1 space-y-2">
                                    <Label htmlFor="">Instructor</Label>
                                    <Input id="" name="instructor" onChange={(e) => setNewData({ ...newData, instructor: e.target.value })}  />
                                </div>
                                <div className="mx-1 space-y-2">
                                    <Label htmlFor="">Description</Label>
                                    <Input id="" name="description" onChange={(e) => setNewData({ ...newData, description: e.target.value })} />
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
