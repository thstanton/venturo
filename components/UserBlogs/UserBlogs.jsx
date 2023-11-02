import { Card, Stack, Button, Typography} from "@mui/joy"
import Link from "next/link"
import BlogList from "../BlogList/BlogList"

async function getUserBlogs(user) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/user/${user._id}`)
        const data = await res.json()
        return data.blogs
      
        console.log('Get User Blogs ::: Something went wrong')
  
    } catch (error) {
      
      console.error(error)
  
    }
}

export default async function UserBlogs({user}) {
    
    const blogs = await getUserBlogs(user);

    return(
        <Card> 
            <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex' }, my: 1 }}>
            
            <Stack direction="row" spacing={2}>
                {/* display user avatar image */}
                <Stack direction="column" spacing={1}>
                    {/* request to open BlogForm to add new blog, '-1' is the id of new blod */}
                    <Link href="/form/blogform">
                        <Button variant="outlined" color="primary">Add Blog</Button>
                    </Link>
                    <div className='recent-blogs d-block'>
                        <Typography level="h1">Posts:</Typography>
                        <BlogList blogs={ blogs } editMode={true}/>
                    </div>
                </Stack>
            </Stack>
            </Stack>
        </Card>
    )
}