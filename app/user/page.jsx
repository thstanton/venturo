"use client"
import UserBlogs from "@/components/UserBlogs/UserBlogs";
import UserInfo from "@/components/UserInfo/UserInfo";
import { Card, Typography, Divider} from "@mui/joy";

import { useEffect, useState } from "react";
import { getSession } from "next-auth/react"

export default function UserPage() {
    
    const [user,setUser] = useState({
        _id: "65417970c1f3efbcf29d947b",
        name: "Heba Arafat",
        email: "heba.arafat159@gmail.com",
        avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ-hZOO8ktTqhN1i5QCmMSTd5L21m37olBzu4UPWcxuXsM=s96-c",
        location: 
            {
                place_id:"ieegdiegiuqiwywoe3e", 
                city:"London", 
                country:"UK",
                longitude: 0.1234, 
                Latitude: 9.765, 
                formatted_address: "London, UK"
            },
        createdAt: "2023-10-31T09:00:11.150Z",
        updatedAt: "2023-10-31T09:00:11.150Z",    
    })

    async function checkUserObject(){
        const session = await getSession()
        if(session && session.user)
        {
            console.log(`Load session user: ${JSON.stringify(session.user.email)}`);
            // TODO get user object from database
            try {
                const res = await fetch(`${process.env.API_URL}/user/${session.user.email}`)
                const data = await res.json()
                console.log(`User Retrived Object : ${JSON.stringify(data.data)}` )
                //return data.data
              } catch (error) {
                return console.error(error)
              }
        }
    }

    useEffect(()=>{
        console.log(`use Effect`);
        // checkUserObject()
    })

    return(
        <Card>
            
            <Typography level="title-md">Personal info</Typography>
            <Divider />
            <UserInfo user={user}/>
            <Divider />
            <UserBlogs user={user}/>
            
        </Card>
    )
}