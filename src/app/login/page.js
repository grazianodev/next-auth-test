'use client'

import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Login() {

   const { register, handleSubmit } = useForm();
   const router = useRouter()

   async function onSubmit( data ) {

      const response = await signIn( 'credentials', {
         email: data.email,
         password: data.password,
         callbackUrl: '/dashboard',
         redirect: false 
      })

      if ( response.error ) {
         // Handle error
      }

      router.push( response.url )

   };
 
   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="example@example.com" {...register("email")} />
            <input defaultValue="example" {...register("password")} />
            <input type="submit" />
         </form>
      </div>
   );

}