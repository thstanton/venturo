import { Button } from '@mui/joy'
import './VideoBlock.css'

export default function VideoBlock() {

  return (
    <div className="VideoBlock">
        <video playsInline autoPlay muted loop poster="/waterfall.png">
            <source src="/waves.mp4" type="video/mp4" />
            Your browser does not support the video tag
        </video>
        <div className="header">
          <h1>Collections</h1>
        </div>
    </div>
  )
}
