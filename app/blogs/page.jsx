import BlogList from "@/components/BlogList/BlogList";
import { Typography } from "@mui/joy";

async function fetchBlogs() {
    try {
        const res = await fetch(`${process.env.API_URL}/blogs`)
        if (res.ok) {
            const data = await res.json()
            return data.data
        }
        console.log('Something went wrong')
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
