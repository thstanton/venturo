import HomePageHeroBlock from '@/components/HomePageHeroBlock/HomePageHeroBlock'
import BlogList from '@/components/BlogList/BlogList'
import LocationList from '@/components/LocationList/LocationList'
import VideoBlock from '@/components/VideoBlock/VideoBlock'
import { Typography } from '@mui/joy'

async function populateLists() {
  try {
    const res = await fetch(`${process.env.API_URL}/blogs/home`)
    
    if (res.ok) {
      const data = await res.json()
      return data
    }
    
    console.log('Something went wrong')

  } catch (error) {
    
    console.error(error)

  }
}

export default async function Home() {
  const { recent, locations } = await populateLists()

  return (
    <main>
      <HomePageHeroBlock />
      <div className='recent-blogs d-block'>
        <Typography level="h1">Recent Posts:</Typography>
        <BlogList blogs={ recent }/>
      </div>
      <VideoBlock />
      <div className='top-destinations b-block'>
        <Typography level="h1">Top Destinations:</Typography>
        <LocationList />
      </div>
    </main>
  )
}