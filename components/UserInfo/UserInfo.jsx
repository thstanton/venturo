"use client"
import React, { useState } from "react"
import { signIn, signOut, useSession } from 'next-auth/react'
// import { POST } from "@/app/api/auth/[...nextauth]/route";

export default function UserInfo() {

    const {data: session} = useSession();
    const [userSaved, setUserSaved] = useState(false);

    async function loginUser(user){
        try{
            const URL = "http://localhost:3000/api/user"
            await fetch(URL,{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                            name: user.name,
                            email: user.email,
                            avatar: user.image
                        })
            })
            .then(res => 
            {
                if(res.status === 200){
                    setUserSaved(true)
                    console.log(`Start Login User : ${res.created}`);
                    console.log('Saved Successfully');
                }
            }).catch (error => {
                console.log(`Saving error : ${error}`);
            })
            
        }catch(error){
            setUserSaved(false);
            console.log(`Saving error : ${error}`);
        }
    }

    if(session && session.user){
        console.log(`Start Login User : ${JSON.stringify(session.user)}`);
        loginUser(session.user)
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