"use client";

import { Typography } from "@mui/material";
// NEXT
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      {" "}
      <Image
        alt='image'
        height={200}
        src='https://blog.hubspot.com/hs-fs/hubfs/parts-url-hero.jpg?width=595&height=400&name=parts-url-hero.jpg'
        width={200}
      />
      <Typography variant='h6'>
        Binvenue, sur une application que j'ai créé. Elle est basé sur
        l'Authentification & Prisma & MongoDB. Je fais également appelle à deux
        API externe dans cette application.
      </Typography>
      <Link href="/auth/login">
        <Typography variant='h6'>
          Veuillez vous connectez pour accéder à l'application et bonne visite.
        </Typography>
      </Link>
    </div>
  );
}
