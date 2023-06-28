'use client'

import Nav from './nav'
import { SessionProvider } from "next-auth/react"

export default function RootLayout({ children }) {

  return (
      <SessionProvider>
         <html lang="en">
            <body>
               <Nav />
               { children }
            </body>
         </html>
      </SessionProvider>
  )
}
