import HomePageHeroBlock from '@/components/HomePageHeroBlock/HomePageHeroBlock'
import BlogList from '@/components/BlogList/BlogList'
import LocationList from '@/components/LocationList/LocationList'
import VideoBlock from '@/components/VideoBlock/VideoBlock'
import { Typography } from '@mui/joy'

export default function Home() {
  return (
    <main>
      <HomePageHeroBlock />
      <div className='recent-blogs d-block'>
        <Typography level="h1">Recent Posts:</Typography>
        <BlogList />
      </div>
      <VideoBlock />
      <div className='top-destinations b-block'>
        <Typography level="h1">Top Destinations:</Typography>
        <LocationList />
      </div>
    </main>
  )
}