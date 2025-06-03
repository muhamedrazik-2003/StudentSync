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
import TableActionMenu from './TableActionMenu';
import StudentProfileDialog from './StudentProfileDialog';

const TableData = ({ setPageReload, HeadData, rowData }) => {
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false)
  const [rowStudentData,setRowStudentData] =useState({})

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
            <TableCell onClick={()=> {handleRowClick(data)}} className="font-medium" key={data.id}>{data.id}</TableCell>
            <TableCell onClick={()=> {handleRowClick(data)}} key={data.name}>{data.name}</TableCell>
            <TableCell onClick={()=> {handleRowClick(data)}} key={data.email}>{data.email}</TableCell>
            <TableCell onClick={()=> {handleRowClick(data)}} key={data.course}>{data.course}</TableCell>
            <TableCell key={data.status}>
              {data.status === 'Active' ? (
                <Badge variant={"success"}>Active</Badge>
              ) : (
                <Badge variant={"failed"}>Inactive</Badge>
              )}
            </TableCell>
            <TableCell className="text">
              <TableActionMenu setPageReload={setPageReload} studentData={data} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <StudentProfileDialog isProfileDialogOpen={isProfileDialogOpen} setIsProfileDialogOpen={setIsProfileDialogOpen} rowStudentData={rowStudentData} />
    </>
  )
}

export default TableData
