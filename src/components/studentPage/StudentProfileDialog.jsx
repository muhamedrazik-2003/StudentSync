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



const StudentProfileDialog = ({isDialogOpen,setIsDialogOpen,rowStudentData}) => {
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="md:!max-w-3xl  mx-auto pt-6 pb-4 shadow-xl rounded-3xl bg-background ">
                <DialogHeader className="flex items-center justify-between mb-5">
                    <DialogTitle className="text-2xl font-semibold text-primary">Student Details</DialogTitle>
                    {/* <DialogDescription className={'text-slate-700'}>
                        Make changes to your profile here. Click save when you&apos;re
                        done.
                    </DialogDescription> */}
                </DialogHeader>
                <ScrollArea className="px-1 h-[55vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pr-3">
                        <h2>{rowStudentData.name}</h2>
                        {/* <div className="mx-1 space-y-2">
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
                        </div> */}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog >
    )
}

export default StudentProfileDialog
