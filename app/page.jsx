import HomePageHeroBlock from '@/components/HomePageHeroBlock/HomePageHeroBlock'
import BlogList from '@/components/BlogList/BlogList'
import VideoBlock from '@/components/VideoBlock/VideoBlock'
import { Typography } from '@mui/joy'
import dbConnect from "@/config/database";
import Blog from "@/models/blogs";

async function populateLists() {
  try {
    await dbConnect()
    // Get 5 most recent blogs
    const blogs = await Blog.aggregate([
      { $sort: { createdAt: -1 } },
      { $limit: 5 }
    ])
    const data = JSON.parse(JSON.stringify(blogs))
    return data

  } catch (error) {
    console.error(error)
  }
}

export default async function Home() {
  const recent = await populateLists()

  return (
    <main>
      <HomePageHeroBlock />
      <div className='recent-blogs d-block'>
        <Typography level="h1">Recent Posts:</Typography>
        <BlogList blogs={recent} />
      </div>
      <VideoBlock />
    </main>
  )
}