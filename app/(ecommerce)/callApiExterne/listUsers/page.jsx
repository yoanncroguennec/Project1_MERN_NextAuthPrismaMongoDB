// API EXTERNE : "https://jsonplaceholder.typicode.com/"
"use client";

import getAllUsers from "@/app/utils/functions/callApiExternes/jsonplaceholderTypicode_com/getAllUsers";
import { Typography } from "@mui/material";
import Link from "next/link";

export default async function GetAllUsersCallApiExternePage() {
  const users = await getAllUsers();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {users.map(({ id, name }) => (
        <Link href={`/callApiExterne/users/${id}`}>
          <Typography key={id} variant=''>
            {name}
          </Typography>
        </Link>
      ))}
    </div>
  );
}
