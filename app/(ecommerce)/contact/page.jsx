"use client"

import {
  Box,
  Button,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// NEXT
import Link from "next/link";
import { useSearchParams } from 'next/navigation'

////////////////////// EXPORT FUNCTION //////////////////////
export default function Contact() {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const RootContact = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100vw",
  };

  const TypoTitlePage = styled(Typography)(({ theme }) => ({
    fontFamily: "'Dancing Script', cursive",
    fontWeight: "bold",
    textAlign: "center",
  }));

  const BoxContact = {
    alignItems: "center",
    border: "4px solid #000",
    borderRadius: "20px",
    boxShadow: "rgba(, 0, 0, 0.4) 0px 30px 90px",
    background: "linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",
    display: "flex",
    flexDirection: "column",
    height: "300px",
    justifyContent: "center",
    width: "450px",
  };

    const stylesLink = {
      color: "#FFF",
      textDecoration: "none",
    };

  ////////////////////// JS //////////////////////
  const searchParams = useSearchParams();
  const person = searchParams.get("person");
  // console.log(person);
  const res = JSON.parse(person);
  const { job, name, age, email } = res;

  return (
    <div style={RootContact}>
      <div style={BoxContact}>
        <TypoTitlePage variant='h3'>Contact</TypoTitlePage>
        <Typography variant='h5'>{job}</Typography>
        <Typography variant='h5'>
          {name}, {age} ans
        </Typography>
        <Link href='mailto:yoann.croguennec@gmail.com' style={stylesLink}>
          <Typography variant='h5'>{email}</Typography>
        </Link>
      </div>
    </div>
  );
}
