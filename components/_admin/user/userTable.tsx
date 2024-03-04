"use client";

import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import dynamic from "next/dynamic";
import { IUser } from "@/type";
import { revalidateTag } from "next/cache";
import { deleteUser } from "./actions/userServerAction";

export default function UserTable(props: any) {
  const UpdateUserButton = dynamic(() => import("./updateUser.button"), {
    ssr: false,
  });
  const handleDeleteUser = (id: number) => {
    const deleteUserById = deleteUser(id)
    
  };

  return (
    <>
      <TableBody>
        {props.users.map((user: IUser) => (
          <TableRow
            key={user.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="user">
              {user.id}
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>{user.gender}</TableCell>
            <TableCell>{user.location}</TableCell>
            <TableCell>{user.role.name}</TableCell>
            <TableCell>{user.created_at}</TableCell>
            <TableCell>{user.updated_at}</TableCell>
            <TableCell className="flex">
              <UpdateUserButton id={user.id} />

              <Button
                className="m-0"
                onClick={() => {
                  handleDeleteUser(user.id);
                }}
              >
                <MdDeleteOutline color="red" size={20} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}
