"use server";

import { revalidateTag } from "next/cache";
import { IAllUser, IUpdateUser } from "@/type";

export async function fetchCreateUser(data: any) {
  const res = await fetch(`${process.env.API}/user/create`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("users");
  const newUser: IAllUser = await res.json();
  return newUser.data;
}

export async function fetchUpdateUser(data: any, id: any) {

  const res = await fetch(`${process.env.API}/user/update/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify(data),
  });

  revalidateTag("users");


  const newUser: IUpdateUser = await res.json();
  return newUser.data;
}

export const deleteUser = async (id: number) => {
  await fetch(`http://localhost:3001/api/user/delete/${id}`, {
    method: "DELETE",
  });

  revalidateTag('users')
};

export const fetchUserById = async (id: number) => {
  const data = await fetch(`http://localhost:3001/api/user/read/${id}`, {
    method: "GET",
  });
  const user = await data.json()
  
  return user.data
};
