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

const StudentProfileDialog = ({ isProfileDialogOpen, setIsProfileDialogOpen, rowStudentData }) => {
    const isLoading = !rowStudentData || !Object.keys(rowStudentData).length === 0;

    const renderData = (label, studentData) => {
        return (
            <div className="space-y-1">
                <p className="mx-1 text-sm text-teal-600 font-medium">{label}</p>
                <div className="bg-white  border border-slate-300 rounded-full px-3 py-1.5 text-title shadow-sm ">
                    {isLoading 
                        ? <Skeleton className="w-full h-5 rounded-md"/> 
                        : studentData || 'Not Available'
                    }
                </div>
            </div>
        )
    }
    return (
        <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
            <DialogContent className="md:!max-w-3xl  mx-auto pt-6 pb-4 shadow-xl rounded-3xl bg-background ">
                <DialogHeader className="flex items-center justify-between mb-5">
                    <DialogTitle className="text-2xl font-semibold text-primary">Student Details</DialogTitle>
                    <DialogDescription className={'text-slate-700 text-center w-[80%]'}>
                        {!isLoading ? (
                            `${rowStudentData.name} is a ${rowStudentData.gender?.toLowerCase()} student enrolled in ${rowStudentData.course}. Currently in semester ${rowStudentData.semester} of year ${rowStudentData.year}, living in ${rowStudentData.address?.city}, ${rowStudentData.address?.state}.`
                        ) : (
                            <span><Skeleton className="w-full h-5 rounded-md"/></span>
                        )}

                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="px-1 h-[55vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pr-3">
                        {renderData("Name", rowStudentData?.name)}
                        {renderData("Email", rowStudentData?.email)}
                        {renderData("Date Of Birth", rowStudentData?.dob)}
                        {renderData("Gender", rowStudentData?.gender)}
                        {renderData("Phone", rowStudentData?.phone)}
                        {renderData("Street", rowStudentData?.address?.street)}
                        {renderData("City", rowStudentData?.address?.city)}
                        {renderData("State", rowStudentData?.address?.state)}
                        {renderData("Pincode", rowStudentData?.address?.pincode)}
                        {renderData("Course", rowStudentData?.course)}
                        {renderData("Year of Study", rowStudentData?.year)}
                        {renderData("Semester No.", rowStudentData?.semester)}
                        {renderData("Status", rowStudentData?.status)}
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

export default StudentProfileDialog
