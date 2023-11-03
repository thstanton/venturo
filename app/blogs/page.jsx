import BlogList from "@/components/BlogList/BlogList";
import { Typography } from "@mui/joy";
import Blog from "@/models/blogs";
import dbConnect from "@/config/database";

async function fetchBlogs() {
    try {
        await dbConnect()
        // Get 5 most recent blogs
        const blogs = await Blog.find()
        const data = JSON.parse(JSON.stringify(blogs))
        return data
    
      } catch (error) {
        console.error(error)
      }
}

export default async function AllBlogs() {
    const blogs = await fetchBlogs()

  return (
    <div>
        <div className="a-block">
            <Typography level="h1">All Blogs</Typography>
        </div>
        <div className="d-block">
            { blogs && <BlogList blogs={blogs} />}
        </div>
    </div>
  )
}
