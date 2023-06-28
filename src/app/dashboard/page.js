import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function Dashboard() {

   // COMMENT OUT THE MIDDLEWARE AND UNCOMMENT THE LINES BELOW 
   // TO TRY SECURING THE PAGE WITH GETSERVERSESSION INSTEAD! 

   // const session = await getServerSession( authOptions )

   // if( ! session ) {
   //    redirect( '/login?callbackUrl=/dashboard' )
   // }

   return <p>Dashboard</p>

}
