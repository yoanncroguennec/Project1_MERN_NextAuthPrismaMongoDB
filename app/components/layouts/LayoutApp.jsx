"use client";

import React from "react";
// NEXT AUTH
import { useSession } from "next-auth/react";
// LAYOUTS
import Layout from "./Layout";

export default function LayoutApp({ children }) {
    const { data: session } = useSession();
  return session ? (
    <div>
      <Layout>{children}</Layout>
    </div>
  ) : (
    <>{children}</>
  );
}
