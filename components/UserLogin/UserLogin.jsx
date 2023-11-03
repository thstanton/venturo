"use client"
import React from "react"
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from "next/link";
import './UserLogin.css'

export default function UserLogin() {

    const {data: session} = useSession();
    // in case of the user is loggedin and has it's user data retrived from google-auth api
    if(session && session.user){
        console.log(`before callback:::::`)
        return(
            // <div className="flex gap-4 ml-auto">
            <div className="userContainer">
            <button className="logOutBtn" onClick={() => signOut()}>
                Logout
            </button>
            {/* got to User profile page when the user click on profile data */}
            <Link href="/user"> 
                <div className="userContainer">
                    <p className="text-sky-600">{ session?.user?.name }</p>
                    <img 
                        id="userIcon"
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
        <button onClick={() => signIn()} className='logInBtn'>
            Log in
        </button> 
    )
}