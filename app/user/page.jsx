"use client"
import CollectionList from "@/components/CollectionList/CollectionList";
import UserBlogs from "@/components/UserBlogs/UserBlogs";
import UserInfo from "@/components/UserInfo/UserInfo";
import { checkUserObject } from "@/utilities/utility";

import { Card, Typography, Divider } from "@mui/joy";
import { useState, useEffect } from "react";

export default function UserPage() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        async function loadUser() {
            const user = await checkUserObject();
            // console.log(`User Page ::::: ${JSON.stringify(user)}`);
            setUser(user);
        }

        loadUser();
    }, [])

    return (
        <>
            {user ? <Card>
                <Typography level="title-md">Personal info</Typography>
                <Divider />
                <UserInfo user={user} />
                <Divider />
                <UserBlogs user={user} />

                {(user) ?
                    <>
                        < Divider />
                        <CollectionList />
                    </> : null
                }
            </Card>
                : null}
        </>

    )
}