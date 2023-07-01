"use client";

import { useState, useEffect } from "react";
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
import { useRouter } from "next/navigation";
// NEXT-AUTH
import { signIn, useSession } from "next-auth/react";

////////////////////// EXPORT FUNCTION //////////////////////
export default function Login() {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const RootLogin = {
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

  const BoxLogin = {
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

  const stylesLink = {
    color: "#FFF",
    textDecoration: "none",
  };

  const BoxBtnsLoginSocialNetworks = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
  }));

  ////////////////////// JS //////////////////////
  const session = useSession();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Protected pages with Authentication
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/auth/dashboard");
    }
  });

  const loginUser = async (e) => {
    e.preventDefault();
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Connexion réussie !");
      }
    });
  };

  ////////////////////// RETURN //////////////////////
  return (
    <div style={RootLogin}>
      <TypoTitlePage variant={matches ? "h4" : "h2"}>Connexion</TypoTitlePage>

      <div style={BoxLogin}>
        <form onSubmit={loginUser} style={stylesForm}>
          <input
            id='email'
            name='email'
            placeholder='Entrer votre Email...'
            type='email'
            autoComplete='email'
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
            Se connecter
          </Button>
        </form>
        <Link href='/auth/register' style={stylesLink}>
          <Typography align='center' variant='h6'>
            Pas de compte ? S&apos;Inscrire
          </Typography>
        </Link>
        {/* <BoxBtnsLoginSocialNetworks>
          <Button onClick={() => signIn("github")} variant='contained'>
            Github
          </Button>
          <Button onClick={() => signIn("google")} variant='contained'>
            Google
          </Button>
        </BoxBtnsLoginSocialNetworks> */}
      </div>
    </div>
  );
}
