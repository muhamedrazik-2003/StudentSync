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
import { updateCurrentCourse, deleteCourse } from '@/services/AllApi';
import { ScrollArea } from "@/components/ui/scroll-area"

const CourseActionMenu = ({ setPageReload, courseData }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [updatedData, setUpdatedData] = useState({ ...courseData })

    const handleDataUpdate = async (courseId, updatedData) => {
        try {
            const response = await updateCurrentCourse(courseId, updatedData)
            setPageReload(prev => !prev)
        } catch (error) {
            alert("Error updating Course Data", error.message);
            console.log("Error updating Course Data", error.message);
        }
    }
    const handleDataDelete = async (courseId) => {
        try {
            const Response = await deleteCourse(courseId)
            setPageReload(prev => !prev)
        } catch (error) {
            alert("Error Deleting course Data", error.message);
            console.log("Error Deleting course Data", error.message);
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
                            <Pencil /> Edit Course Details
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem className={'pl-3 pr-6'} onClick={() => {
                        handleDataDelete(courseData.id)
                    }}>
                        <Trash2 /> Delete Course
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <form>
                <DialogContent className=" mx-auto pt-6 pb-4 shadow-xl rounded-3xl bg-background ">
                    <DialogHeader className="flex items-center justify-between mb-5">
                        <DialogTitle className="text-2xl font-semibold text-primary"> Edit Course Details</DialogTitle>
                        <DialogDescription className={'text-slate-700'}>
                            Make changes to your Course here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="px-1 h-[48vh]">
                        <div className="grid grid-cols-1 gap-5 pr-3">
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Name</Label>
                                <Input id="" name="name" onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })} defaultValue={courseData.name} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Duration</Label>
                                <Input id="" name="duration" onChange={(e) => setUpdatedData({ ...updatedData, duration: e.target.value })} defaultValue={courseData.duration} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Instructor</Label>
                                <Input id="" name="instructor" onChange={(e) => setUpdatedData({ ...updatedData, instructor: e.target.value })} defaultValue={courseData.instructor} />
                            </div>
                            <div className="mx-1 space-y-2">
                                <Label htmlFor="">Description</Label>
                                <Input id="" name="description" onChange={(e) => setUpdatedData({ ...updatedData, description: e.target.value })} defaultValue={courseData.description} />
                            </div>
                        </div>
                    </ScrollArea>
                    <DialogFooter className="flex justify-end gap-4 mt-5">
                        <DialogClose asChild>
                            <Button variant="outline" className={'rounded-full px-4'}>Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit" className={'rounded-full px-4 text-white'} onClick={() => { handleDataUpdate(courseData.id, updatedData) }}>Save changes</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default CourseActionMenu
