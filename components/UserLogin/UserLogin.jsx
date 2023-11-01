"use client"
import React from "react"
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from "next/link";

export default function UserInfo() {

    const {data: session} = useSession();
    // in case of the user is loggedin and has it's user data retrived from google-auth api
    if(session && session.user){
        console.log(`before callback:::::`)
        return(
            <div className="flex gap-4 ml-auto">
            <button onClick={() => signOut()} className='text-red-600'>
                Logout
            </button>
            {/* got to User profile page when the user click on profile data */}
            <Link href="/User"> 
                <div className="flex gap-4 ml-auto" onClick={()=>{}}>
                    <p className="text-sky-600">{ session?.user?.name }</p>
                    <img 
                        className="rounded-full" 
                        src={session?.user?.image} 
                        width={40} 
                        height={40}/>     
                </div>
            </Link>
               
            </div>
        )
    }
    // in case of the user hasn't login yet
    return(
        <button onClick={() => signIn()} className='text-green-600 ml-auto'>
            Login
        </button> 
    )
}