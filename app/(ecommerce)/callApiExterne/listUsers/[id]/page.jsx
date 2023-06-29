// API EXTERNE : "https://jsonplaceholder.typicode.com/"
// "use client";

import UserID_Posts from "@/app/components/common/callApiExterne/users/UserID_Posts";
import getUserByID from "@/app/utils/functions/callApiExternes/jsonplaceholderTypicode_com/getUserByID";
import getUserPostsByID from "@/app/utils/functions/callApiExternes/jsonplaceholderTypicode_com/getUserPostsByID";
import { Typography } from "@mui/material";
import React, { Suspense } from "react";

export async function generateMetadata({ params: { id } }) {
  const userID_Data = await getUserByID(id);
const { name, email } = userID_Data;

  return {
    title: name,
    description: email,
  };
}


export default async function UserPage({ params: { id } }) {
  const userID_Data = await getUserByID(id);
  const userID_Posts = await getUserPostsByID(id);
  const { name, email } = userID_Data
  return (
    <div>
      <h4 variant=''>{name}</h4>
      <h4 variant=''>{email}</h4>
      {/* <Typography variant=''>{name}</Typography>
      <Typography variant=''>{email}</Typography> */}
      <Suspense fallback={<div>Chargement...</div>}>
        <UserID_Posts promise={userID_Posts} />
      </Suspense>
    </div>
  );
}
