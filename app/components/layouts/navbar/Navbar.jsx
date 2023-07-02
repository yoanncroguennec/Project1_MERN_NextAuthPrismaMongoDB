"use client";

import { linksNavbar } from "@/app/utils/data/DataLinksNavbar";
import { Box, Typography, styled, useTheme, useMediaQuery } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
// NEXT
import Link from "next/link";
import React from "react";
import NavbarImgProfile from "./NavbarImgProfile";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Navbar() {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
  };

  const stylesLink = {
    color: "#FFF",
    marginRight: "30px",
    textDecoration: "none",
  };

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
            <Typography variant={matches ? "" : "h6"}>{name}</Typography>
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
        {matches ? `` : <NavbarImgProfile session={session} stylesImg={stylesImg} />
        }

          <Typography variant={matches ? "" : "h6"}>{session?.user?.email}</Typography>
        </div>
      ) : (
        <Link href='/auth/login' style={stylesLink}>
          <Typography variant='h6'>Se connecter</Typography>
        </Link>
      )}
    </RootNavbar>
  );
}
