"use client"
import UserBlogs from "@/components/UserBlogs/UserBlogs";
import UserInfo from "@/components/UserInfo/UserInfo";
import { Card, Typography, Divider} from "@mui/joy";
import { getSession } from "next-auth/react";

import { useState } from "react";

export default function UserPage() {
    const[user,setUser] = useState({
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