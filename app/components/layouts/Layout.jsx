import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Toaster />
      <div style={{ alignItems: "center", display: 'flex', marginTop: "10vh" }}>{children}</div>
    </div>
  );
}
