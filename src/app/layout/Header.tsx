import React from 'react'
import { getServerSession } from 'next-auth'

export default async function Header() {
  const session = await getServerSession()
  if (session && session.user) {
    return (
      <>
        <p>Signed in as {session.user.email} </p>
        <a href="/api/auth/signout">Logout</a>
      </>
    )
  }
  return (
    <>
      <p>Not signed in</p>
      <a href="/api/auth/signin">Login</a>
    </>
  )
}
