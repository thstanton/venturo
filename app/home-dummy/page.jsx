import HomePageHeroBlock from '@/components/HomePageHeroBlock/HomePageHeroBlock'
import LocationList from '@/components/LocationList/LocationList'
import VideoBlock from '@/components/VideoBlock/VideoBlock'
import { Typography } from '@mui/joy'
import SingleBlogCard from '@/components/SingleBlogCard/SingleBlogCard'
import './HomeDummy.css'

export default function page() {
  return (
    <main>
    <HomePageHeroBlock />
    <div className='recent-blogs d-block'>
      <Typography level="h1">Recent Posts:</Typography>
      <div className="scrollContainer">
        <div className="blogCardContainer">
          <SingleBlogCard />
          <SingleBlogCard />
          <SingleBlogCard />
          <SingleBlogCard />
          <SingleBlogCard />
          <SingleBlogCard />
          <SingleBlogCard />
          <SingleBlogCard />
        </div>
      </div>
    </div>
    <VideoBlock />
    <div className='top-destinations b-block'>
      <Typography level="h1">Top Destinations:</Typography>
      <LocationList />
    </div>
  </main>
  )
}
