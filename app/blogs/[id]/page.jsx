import BlogHeaderBlock from '@/components/BlogHeaderBlock/BlogHeaderBlock'
import BlogTitleBlock from '@/components/BlogTitleBlock/BlogTitleBlock'
import BlogImageGallery from '@/components/BlogImageGallery/BlogImageGallery'
import BlogLocationWidget from '@/components/BlogLocationWidget/BlogLocationWidget'
import { Grid, Typography } from '@mui/joy'
import './SinglePost.css'

async function getBlog(id) {
  try {
    const res = await fetch(`${process.env.API_URL}/blogs/${id}`)
    const data = await res.json()
    return data
  } catch (error) {
    return console.error(error)
  }
}

export default async function SinglePost({ params }) {
  const { blog, user } = await getBlog(params.id)
  const mainImage = await blog ?.photos.filter(photo => photo.isMain === true)

  return ( <>
    {blog ? <div className='SinglePost'>
      <BlogHeaderBlock photo={mainImage && mainImage[0].url} sx={{mb: 2}} />
      <Grid 
        container 
        spacing={2} 
        sx={{ flexGrow: 1 }}
      >
        <Grid xs={7}>
            <BlogTitleBlock 
              title={blog.title} 
              author={user} 
              intro={blog.introduction} 
              date={blog.createdAt} 
            />
        </Grid>
        <Grid xs={5}>
            <BlogLocationWidget locationData={blog.location} />
        </Grid>
        <Grid xs={12}>
          <BlogImageGallery photos={blog.photos} />
        </Grid>
        <Grid xs={8}>
          <Typography 
            level="body-md" 
            className="body"
          >
            { blog.body }
          </Typography>
        </Grid>
      </Grid>
    </div>
    : null
    }
    </>
  )
}