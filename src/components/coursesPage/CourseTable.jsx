import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import CourseActionMenu from './CourseActionMenu';
// import StudentProfileDialog from './StudentProfileDialog';

const CourseTable = ({ setPageReload, HeadData, rowData }) => {
    const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false)
    const [rowStudentData, setRowStudentData] = useState({})

    const handleRowClick = (studentData) => {
        setIsProfileDialogOpen(true)
        setRowStudentData(studentData)
    }
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        {HeadData.map((header) => (
                            <TableHead className={`first:w-[100px]`} key={header}>{header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rowData.map((data) => (
                        <TableRow key={data.id}>
                            <TableCell className="font-medium" key={data.id}>{data.id}</TableCell>
                            <TableCell key={data.name}>{data.name}</TableCell>
                            <TableCell key={data.duration}>{data.duration}</TableCell>
                            <TableCell key={data.instructor}>{data.instructor}</TableCell>
                            <TableCell key={data.description}>{data.description}</TableCell>
                            <TableCell className="text">
                                <CourseActionMenu setPageReload={setPageReload} courseData={data} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* <StudentProfileDialog isProfileDialogOpen={isProfileDialogOpen} setIsProfileDialogOpen={setIsProfileDialogOpen} rowStudentData={rowStudentData} /> */}
        </>
    )
}

export default CourseTable
