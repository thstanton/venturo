import { Button } from '@mui/joy'
import './VideoBlock.css'

export default function VideoBlock() {

  return (
    <div className="VideoBlock">
        <video playsInline autoPlay muted loop poster="/waterfall.png">
            <source src="/camper.mp4" type="video/mp4" />
            Your browser does not support the video tag
        </video>
        <div className="header">
          <h2>Find your next adventure</h2>
          <Button variant="soft" color="neutral" component="a" href="/collections">Browse Collections</Button>
        </div>
    </div>
  )
}
