
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "./components/user/User";
import { useSession, signIn, signOut } from "next-auth/react";
import Home from "./components/common/home/Home";
import Login from "./(ecommerce)/auth/login/page";

export default async function HomeApp() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Login />
    </div>
  );
}
