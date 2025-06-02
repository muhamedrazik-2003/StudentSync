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

const TableData = ({ HeadData, rowData }) => {
  const [clickedData, setClickedData] = useState({
    id: '',
    name: '',
    email: '',
    course: '',
    dob: '',
    enrolledDate: '',
    address: '',
    attendance: '',
    gender: '',
    phone: '',
    profilePic: '',
    semester: '',
    status: '',
    year: '',
    updatedAt: ''
  })

  const handleClick = (data) => {
    setClickedData(data)
  }

  return (
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
          <TableRow onClick={() => { handleClick(data) }}>
            <TableCell className="font-medium" key={data.id}>{data.id}</TableCell>
            <TableCell key={data.name}>{data.name}</TableCell>
            <TableCell key={data.email}>{data.email}</TableCell>
            <TableCell key={data.course}>{data.course}</TableCell>
            <TableCell key={data.status}>
              {data.status === 'Active' ? (
                <Badge variant={"success"}>Active</Badge>
              ) : (
                <Badge variant={"failed"}>Inactive</Badge>
              )}
            </TableCell>
            <TableCell className="text">

              <TableActionMenu  studentData={clickedData}/>

            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableData
