'use client'

import Link from 'next/link'
import { signOut, useSession } from "next-auth/react"

export default function Nav() {

   const { data: user } = useSession()

  return (
      <nav>
         <Link href='/'>Home</Link>
         <Link href='/dashboard'>Dashboard</Link>
         { 
            user 
            ? <button onClick={ () => signOut() }>Logout</button>
            : <Link href='/login'>Login</Link>
         }
      </nav>
   )
}
