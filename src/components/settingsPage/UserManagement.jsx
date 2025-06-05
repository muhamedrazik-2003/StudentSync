import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from '@/components/ui/badge';
import { UsersRound } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

const UserManagement = ({userData}) => {
    return (
        <>
            <div className='mx-2 space-y-1 mt-6'>
                <h2 className="text-lg font-semibold text-slate-900  flex items-center gap-2 ">
                    <UsersRound className="size-5 text-primary" />
                    User Management
                </h2>
                <div className='border-2 rounded-xl h-[130px]'>
                    <ScrollArea className="h-[130px] overflow-auto">

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className={`first:w-[100px] font-semibold`}>User ID</TableHead>
                                    <TableHead className={`font-semibold`}>Name</TableHead>
                                    <TableHead className={`font-semibold`}>Email</TableHead>
                                    <TableHead className={`font-semibold`}>Role</TableHead>
                                    <TableHead className={`font-semibold`}></TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {userData.map((data) => (
                                    <TableRow key={data.id}>
                                        <TableCell onClick={() => { handleRowClick(data) }} className="font-medium" key={data.id}>{data.id}</TableCell>
                                        <TableCell onClick={() => { handleRowClick(data) }} key={data.name}>{data.name}</TableCell>
                                        <TableCell onClick={() => { handleRowClick(data) }} key={data.email}>{data.email}</TableCell>
                                        <TableCell onClick={() => { handleRowClick(data) }} key={data.role}>
                                            {data.role === 'admin' ? (
                                                <Badge variant={"success"}>Admin</Badge>
                                            ) : (
                                                <Badge variant={"warning"}>Moderator</Badge>
                                            )}
                                        </TableCell>
                                        <TableCell className="text">
                                            {/* <StudentActionMenu setPageReload={setPageReload} studentData={data} /> */}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </ScrollArea>
                </div>
            </div>
        </>
    )
}

export default UserManagement
