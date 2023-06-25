import React from 'react'
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  );
}
