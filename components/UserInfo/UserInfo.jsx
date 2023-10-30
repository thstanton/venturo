"use client"
import React, { useState } from "react"
import { signIn, signOut, useSession } from 'next-auth/react'
import { POST } from "@/app/api/auth/[...nextauth]/route";

export default function UserInfo() {

    const {data: session} = useSession();
    const [userSaved, setUserSaved] = useState(false);

    async function loginUser(user){
        console.log(`Start Login User : ${JSON.stringify(session.user)}`);
        try{
            const response = await fetch("http://localhost:3000/api/user",{
                method: POST,
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    name: user.name,
                    email: user.email,
                    avatar: user.image
                })
            });
            if(response.ok) setUserSaved(true)
        }catch(error){
            setUserSaved(true);
        }
    }

    if(session && session.user){
        loginUser(session.user)
        // console.log('Start Login User : ${JSON.stringify(session.user)}');
        if(userSaved)
        {
            return(
                <div className="flex gap-4 ml-auto">
                    <button onClick={() => signOut()} className='text-red-600'>
                        Logout
                    </button>
                    <div className="flex gap-4 ml-auto" onClick={()=>{}}>
                        <p className="text-sky-600">{ session?.user?.name }</p>
                        <img 
                        className="rounded-full" 
                        src={session?.user?.image} 
                        width={40} 
                        height={40}/> 
                    </div>
                </div>
            )
        }
    }
    return(
        <button onClick={() => signIn()} className='text-green-600 ml-auto'>
            Login
        </button> 
    )
}