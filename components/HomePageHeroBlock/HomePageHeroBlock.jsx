export default function HomePageHeroBlock() {

  return (
    <div className="video-wrapper">
        <video playsInline autoPlay muted loop>
            <source src="/waterfall_1.mp4" type="video/mp4" />
            Your browser does not support the video tag
        </video>
    </div>
  )
}
