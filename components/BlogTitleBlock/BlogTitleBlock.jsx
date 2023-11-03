import { Avatar, Grid, Typography } from '@mui/joy'
import './BlogTitleBlock.css'

export default function BlogTitleBlock({ title, intro, author, date }) {
  const formattedDate = new Date(date).toLocaleString('en-GB', {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (
    <div className='BlogTitleBlock'>
        <Typography level="h1">{ title }</Typography>
        <Grid container>
          <Grid xs={2}>
            <Avatar size="md" src={author.avatar} />
          </Grid>
          <Grid xs={5}>
            <Typography level="title-md">{ author.name }</Typography>
          </Grid>
          <Grid xs={5}>
            <Typography level="title-md">
              { formattedDate }
            </Typography>
          </Grid>
        </Grid>
        <Typography level="h4">{ intro }</Typography>
    </div>
  )
}
