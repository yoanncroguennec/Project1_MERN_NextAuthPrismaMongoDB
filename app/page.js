import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from './api/auth/[...nextauth]/route'
import User from './components/user/User';

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div>
      page
      <pre>{JSON.stringify(session)}</pre>
      <User />
    </div>
  );
}
