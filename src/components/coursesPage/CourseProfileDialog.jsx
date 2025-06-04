import React from 'react'
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
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'


const CourseProfileDialog = ({ isProfileDialogOpen, setIsProfileDialogOpen, rowCourseData }) => {
    const isLoading = !rowCourseData || !Object.keys(rowCourseData).length === 0;

    const renderData = (label, courseData) => {
        return (
            <div className="space-y-1">
                <p className="mx-1 text-sm text-teal-600 font-medium">{label}</p>
                <div className="bg-white border border-slate-300 rounded-3xl px-3 py-1.5 text-title shadow-sm ">
                    {isLoading
                        ? <Skeleton className="w-full h-5 rounded-md" />
                        : courseData || 'Not Available'
                    }
                </div>
            </div>
        )
    }
    return (
        <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
            <DialogContent className="  mx-auto pt-6 pb-4 shadow-xl rounded-3xl bg-background ">
                <DialogHeader className="flex items-center justify-between mb-5">
                    <DialogTitle className="text-2xl font-semibold text-primary">Course Details</DialogTitle>  
                </DialogHeader>
                <ScrollArea className="px-1 h-[65vh]">
                    <div className="grid grid-cols-1 gap-5 pr-3">
                        {renderData("Course ID", rowCourseData?.id)}
                        {renderData("Name", rowCourseData?.name)}
                        {renderData("Duration", rowCourseData?.duration)}
                        {renderData("Instructor", rowCourseData?.instructor)}
                        {renderData("Description", rowCourseData?.description)}
                        {renderData("Subject 1", rowCourseData?.subjects?.sub1)}
                        {renderData("Subject 2", rowCourseData?.subjects?.sub2)}
                        {renderData("Subject 3", rowCourseData?.subjects?.sub3)}
                        {renderData("Subject 4", rowCourseData?.subjects?.sub4)}
                        {renderData("Subject 5", rowCourseData?.subjects?.sub5)}
                    </div>
                </ScrollArea>
                <DialogFooter className="flex justify-end gap-4 mt-2">
                    <DialogClose asChild>
                        <Button className={'rounded-full px-6 text-white'}>Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}

export default CourseProfileDialog
