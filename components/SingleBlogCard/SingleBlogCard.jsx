import { Card, Typography, CardContent, CardOverflow, CardCover, LocationOnRoundedIcon } from '@mui/joy';
import './SingleBlogCard.css'

export default function SingleBlogCard() {
  return (
    <Card 
    className="blogCard"
    size="lg"
    variant='outlined'
    orientation='vertical'
    >
     <CardCover>
        <img
          src='https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D'
          loading="lazy"
        />
      </CardCover>
   <CardContent className="cardContent">
    <Typography 
    level="title-lg"
    textColor="#fff"
    >Title
    </Typography>
    </CardContent>
    <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
          <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff">
          Location
        </Typography>
        <Typography
          // startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
          level='body-sm'
        >
          Collection
        </Typography>
      </CardContent>
    </Card>
  )
}