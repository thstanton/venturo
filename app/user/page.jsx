"use client"
import UserBlogs from "@/components/UserBlogs/UserBlogs";
import UserInfo from "@/components/UserInfo/UserInfo";
import { checkUserObject } from "@/utilities/utility";

import { Card, Typography, Divider} from "@mui/joy";

export default async function UserPage() {
    
    const user = await checkUserObject();
    console.log(`User Page ::::: ${JSON.stringify(user)}`);
   
    return(
        <>        
        {user ? <Card>
            <Typography level="title-md">Personal info</Typography>
            <Divider />
            <UserInfo user={user}/>
            <Divider />
            <UserBlogs user={user}/>
            </Card> 
            : null}
        </>

    )
}