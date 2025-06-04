import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import CourseActionMenu from './CourseActionMenu';
import CourseProfileDialog from './CourseProfileDialog';

const CourseTable = ({ setPageReload, HeadData, rowData }) => {
    const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false)
    const [rowCourseData, setRowCourseData] = useState({})

    const handleRowClick = (courseData) => {
        setIsProfileDialogOpen(true)
        setRowCourseData(courseData)
    }
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        {HeadData.map((header) => (
                            <TableHead className={`first:w-[100px] font-semibold`} key={header}>{header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rowData.map((data) => (
                        <TableRow key={data.id}>
                            <TableCell onClick={()=> {handleRowClick(data)}} className="font-medium" key={data.id}>{data.id}</TableCell>
                            <TableCell onClick={()=> {handleRowClick(data)}} key={data.name}>{data.name}</TableCell>
                            <TableCell onClick={()=> {handleRowClick(data)}} key={data.duration}>{data.duration}</TableCell>
                            <TableCell onClick={()=> {handleRowClick(data)}} key={data.instructor}>{data.instructor}</TableCell>
                            <TableCell onClick={()=> {handleRowClick(data)}} className={'whitespace-normal break-words max-w-[300px]'} key={data.description}>{data.description}</TableCell>
                            <TableCell className="text">
                                <CourseActionMenu setPageReload={setPageReload} courseData={data} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <CourseProfileDialog isProfileDialogOpen={isProfileDialogOpen} setIsProfileDialogOpen={setIsProfileDialogOpen} rowCourseData={rowCourseData} />
        </>
    )
}

export default CourseTable
