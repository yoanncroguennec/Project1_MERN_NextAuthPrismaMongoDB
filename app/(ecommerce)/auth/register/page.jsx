"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
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


////////////////////// EXPORT FUNCTION //////////////////////
export default function Register() {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const RootRegister = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100vw",
  };

  const TypoTitlePage = styled(Typography)(({ theme }) => ({
    fontFamily: "'Dancing Script', cursive",
    margin: "65px",
  }));

  const BoxRegister = {
    border: "4px solid #000",
    borderRadius: "20px",
    boxShadow: "rgba(, 0, 0, 0.4) 0px 30px 90px",
    background: "linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",
    height: "300px",
    width: "450px",
  };

  const stylesForm = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "30px",
    paddingBottom: "10px",
  };

  const stylesLink ={
    color: "#FFF",
    textDecoration: "none",
  }

  ////////////////////// JS //////////////////////
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/register", data)
      // .then(() => alert("L'utilisateur a été enregistré !"))
      .then(() => toast.success("L'utilisateur a été enregistré ! Connectez-vous"))
      // .catch(() => alert("Quelque chose n'a pas fonctionné !"));
      .catch(() => toast.error("Quelque chose n'a pas fonctionné !"));
  };

  return (
    <div style={RootRegister}>
      <TypoTitlePage variant={matches ? "h4" : "h2"}>
        S&apos;inscrire
      </TypoTitlePage>

      <div style={BoxRegister}>
        <form onSubmit={registerUser} style={stylesForm}>
          <input
            id='name'
            name='name'
            placeholder='Entrer votre Nom...'
            type='text'
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            placeholder='Entrer votre Email...'
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            placeholder='Entrer votre Mot de passe...'
            required
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <Button type='submit' variant='contained'>
            S'Inscrire
          </Button>
        </form>
        <Link href='/auth/login' style={stylesLink}>
          <Typography align='center' variant='h6'>
            Un compte ? Se connecter
          </Typography>
        </Link>
      </div>
    </div>
  );
}
