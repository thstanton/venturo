import { Typography } from '@mui/joy'
import './VideoBlock.css'

export default function HomePageHeroBlock() {

  return (
    <div className="VideoBlock">
        <video playsInline autoPlay muted loop poster="/waterfall.png">
            <source src="/camper.mp4" type="video/mp4" />
            Your browser does not support the video tag
        </video>
        <div className="header">
          <h2>Find your next adventure</h2>
        </div>
    </div>
  )
}
