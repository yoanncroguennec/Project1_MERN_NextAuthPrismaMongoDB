// API EXTERNE : "https://jsonplaceholder.typicode.com/"
"use client";

import { Typography } from '@mui/material';

export default async function UserID_Posts({ promise }) {
const posts = await promise

  return (
    <div>
      <ul>
        {posts.map(({ id, title, body }) => (
          <li key={id}>
            <Typography variant='h3'>Titre : {title}</Typography>
            <Typography variant=''>{body}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}
