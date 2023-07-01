"use client";

import { linksNavbar } from "@/app/utils/data/DataLinksNavbar";
import { Box, Typography, styled } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Navbar() {
  //////////////////// STYLES FEATURED ////////////////////
  const RootNavbar = styled(Box)(({ theme }) => ({
    alignItems: "center",
    background: "rgb(0, 0, 0, 0.3)",
    color: "white",
    display: "flex",
    flexWrap: "nowrap",
    fontSize: "14px",
    height: "8vh",
    justifyContent: "space-between",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "999",
    [theme.breakpoints.down("sm")]: {},
  }));

  const stylesImg = {
    border: "4px solid #000",
    borderRadius: "999px",
    height: "80px",
    width: "80px",
  }
  //////////////////// JS ////////////////////
  const { data: session } = useSession();
  console.log(session);

  return (
    <RootNavbar>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {linksNavbar.map(({ pathname, query, name }) => (
          <Link
            href={{ pathname, query }}
            key={name}
            style={{
              border: "2px solid #000",
              borderRadius: "15px",
              color: "#FFF",
              textDecoration: "none",
              margin: "5px",
              padding: "5px",
            }}
          >
            <Typography variant='h6'>{name}</Typography>
          </Link>
        ))}
      </div>
      {session ? (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            marginRight: "25px",
          }}
        >
          {session?.user?.image !== null && (
            <Image
              alt=''
              height={200}
              src={session?.user?.image}
              style={stylesImg}
              width={200}
            />
          )}
          {session?.user?.image === null && <div>Pas de photo</div>}

          <Typography variant='h6'>{session?.user?.email}</Typography>
        </div>
      ) : (
        <Link href='/auth/login'>Se connecter</Link>
      )}
    </RootNavbar>
  );
}
