import { Typography } from '@mui/joy'
import './HomePageHeroBlock.css'

export default function HomePageHeroBlock() {

  return (
    <div className="HomePageHeroBlock">
        <video playsInline autoPlay muted loop poster="/waterfall.png">
            <source src="/waterfall_1.mp4" type="video/mp4" />
            Your browser does not support the video tag
        </video>
        <div className="header">
          <h1>Venturo</h1>
        </div>
    </div>
  )
}
