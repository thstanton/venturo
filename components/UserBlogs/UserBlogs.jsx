"use client"
import { Card, Stack, Button, Typography } from "@mui/joy"
import Link from "next/link"
import BlogList from "../BlogList/BlogList"
import { useEffect, useState } from "react"

export default function UserBlogs({ user }) {
    // console.log(user)
    const [userBlogs, setUserBlogs] = useState([])
    const [change, setChange] = useState(null)

    const loadBlogs = async () => {
        console.log(user)
        const URL = `${process.env.NEXT_PUBLIC_API_URL}/blogs/user/${user._id}`
        console.log(`URL ::: ${URL}`)
        const res = await fetch(URL)
        const data = await res.json()
        console.log(data)
        setUserBlogs(data.blogs)
    }

    useEffect(() => {
        loadBlogs();
    }, [user, change])

    /**
     * remove deleted blog from list nad update the list view
     * @param {*} blog 
     */
    function removeBlog(blog) {
        if (blog)
            setChange(blog)
            //setUserBlogs(userBlogs.splice(userBlogs.findIndex(b => b.title == blog.title), 1));

    }
    
    return (
        <Card>
            <Stack
                direction="column"
                spacing={2}
                sx={{ display: { xs: 'flex' }, my: 1 }}>

                <Stack direction="row" spacing={2}>
                    {/* display user avatar image */}
                    <Stack direction="column" spacing={1}>
                        {/* request to open BlogForm to add new blog, '-1' is the id of new blod */}
                        <Link href="/form/blogform/-1">
                            <Button variant="outlined" color="primary">Add Blog</Button>
                        </Link>
                        <div >
                            <Typography component="h1" variant="h5">Blogs</Typography>
                            {userBlogs && userBlogs.length > 0 ? <BlogList blogs={userBlogs} editMode={true} removeBlog={removeBlog} /> : null}
                        </div>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    )
}