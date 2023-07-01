"use client";

import {
  Box,
  Button,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// NEXT
import { redirect } from "next/navigation";
// NEXT-AUTH
import { useSession, signOut } from "next-auth/react";

////////////////////// EXPORT FUNCTION //////////////////////
export default function Dashboard() {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const RootDashboard = {
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

  const BoxDashboard = {
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

  ////////////////////// JS //////////////////////
  const { data: session } = useSession();

    if (!session) {
      redirect("/auth/login");
    }

  ////////////////////// RETURN //////////////////////
  return (
    <div style={RootDashboard}>
      <div style={BoxDashboard}>
        <TypoTitlePage variant="h3">
          Mon Profil
        </TypoTitlePage>
        <Typography variant="h6">Email : {session?.user?.email}</Typography>
        <Button onClick={() => signOut()} variant="contained">Se déconnecter</Button>
      </div>
    </div>
  );
}
