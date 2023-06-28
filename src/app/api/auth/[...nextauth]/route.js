import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
   pages: {
      signIn: '/login',
   },
   seceret: process.env.NEXTAUTH_SECRET,
   providers: [
      CredentialsProvider({
         id: "credentials",
         name: "Credentials",
         type: "credentials",
         credentials: {},
         async authorize( { email, password } ) {
            
            if ( 'example@example.com' === email && 'example' === password ) {
               return {
                  name: 'Bob',
                  email: 'example@example.com',
               }
            }

            return null

         }
      })
   ]
}

const handler = NextAuth( authOptions )

export { handler as GET, handler as POST }