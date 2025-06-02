import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis, Pencil, Trash2 } from 'lucide-react';
import EditDialog from '../common/EditDialog';


const TableActionMenu = ({studentId}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Ellipsis/>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>
                    <Pencil /> Edit User Details
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Trash2 /> Delete User
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default TableActionMenu
